var calendarSelector = "#calendar";
var property_colors = ['maroon', 'darkgreen', '#5bc0de','darkorange','#0275d8', 'rebeccapurple']; //red,green,blue,orange,darkblue
var status_colors = ['#2BBBAD', '#4285F4', '#aa66cc', '#f48fb1'];
var color_words = ['background-red', 'background-green', 'background-blue', 'background-orange', 'background-dark-blue', 'background-purple'];
//Filter Selections
var reportRangeSelector = "#report-range";
var dateRangeSelector = ".ranges";

$(document).ready(function() {
    //Date range filter
    var start = moment();
    var end = moment();

    loadFilterLocations();


    $(reportRangeSelector).daterangepicker({
        startDate: start,
        endDate: end
    });

    $(dateRangeSelector).click(function(){
        $.ajax({
            type: 'GET',
            url: '/api/appointments',
            data: {'start': currentStart, 'end': currentEnd, 'sort' : 'start', 'direction' : 'asc', 'with_agent' : true, 'with_customer' : true},
            success: function (appointmentsJSON) {
                //Returned appointments
                var appointmentsReturned = $.parseJSON(appointmentsJSON);
                //Events to render to full calendar
                var events = [];
                $.each(appointmentsReturned.appointments, function(appointmentIndex, appointment) {
                    var customerName = '';
                    if(appointment['customers'][0]) {
                        customerName = appointment['customers'][0]['first_name'] + ' ' + appointment['customers'][0]['last_name'];
                    }
                    events.push({
                        'title': customerName,
                        'color': property_colors[(appointment.working_location_id - 1)],
                        'start': appointment['start'],
                        'end': appointment['end']
                    });
                });
                $(calendarSelector).fullCalendar('removeEventSources');
                $(calendarSelector).fullCalendar('gotoDate', currentStart);
                $(calendarSelector).fullCalendar('addEventSource', events);
                $(calendarSelector).fullCalendar('rerenderEvents');
            }
        });
    });

    //Retrieve appointments from AJAX any time an input has been changed
    // $('input').change(function() {
    // $('input').on("change", "", function (e) {
    $("#calendar-filters-container").on("change", "input", function() {
        var appointmentsFilters = {};

        //Current date range selectors
        var dateRange = $(reportRangeSelector + ' span').text().split('-');//get current date range from span
        var currentStart = moment(dateRange[0],'MMMM D, YYYY').format("YYYY-MM-DD");
        var currentEnd = moment(dateRange[1], 'MMMM D, YYYY').add(1, 'days').format("YYYY-MM-DD");
        appointmentsFilters['dateRange'] = {
            'start': currentStart,
            'end': currentEnd
        };

        //Clear any existing filters and until filtered appointments are returned
        $(calendarSelector).fullCalendar('removeEventSources');

        //Get all currently selected appointment status checkboxes
        var appointmentStatusCheckboxes  = $(':checkbox[name=status-checkbox]:checked').map(function() {
            return this.value;
        }).get();
        //If any appointment status filters have been provided, add to filter object
        if(appointmentStatusCheckboxes.length > 0) {
            appointmentsFilters['status'] = appointmentStatusCheckboxes;
        }
        //Get all currently selected location checkboxes
        var locationsCheckboxes  = $(':checkbox[name=property-checkbox]:checked').map(function() {
            return this.value;
        }).get();

        //If any locations filters have been provided, add to filter object
        if(locationsCheckboxes.length > 0) {
            appointmentsFilters['working_locations'] = locationsCheckboxes;
        }

        retrieveFilteredAppointments(appointmentsFilters);
    });
});

function loadFilterLocations() {
    $.ajax({
        type: 'GET',
        url: '/api/locations',
        success: function (locations) {
            var propertyID = "#property-checkbox-container";
            $.each(locations, function (index, location) {
                $(propertyID).append($("<label><input class='property-input' type='checkbox' name='property-checkbox' value='" + location['id'] + "'>" + location['short_name'].toUpperCase() + "<span class='span " + color_words[location['id'] - 1] + "'></span></label>"));
            })
        }
    });
}

function retrieveFilteredAppointments(appointmentsFilters) {
    $.ajax({
        type: 'GET',
        url: '/api/appointments',
        data: {
            'filters': appointmentsFilters,
        },
        success: function (appointmentsJSON) {
            //Returned appointments
            var appointmentsReturned = $.parseJSON(appointmentsJSON);
            //Events to render to full calendar
            var events = [];
            $.each(appointmentsReturned.appointments, function(appointmentIndex, appointment) {
                var customerName = '';
                if(appointment['customers'][0]) {
                    customerName = appointment['customers'][0]['first_name'] + ' ' + appointment['customers'][0]['last_name'];
                }
                events.push({
                    'title': customerName,
                    'color': property_colors[(appointment.working_location_id - 1)],
                    'start': appointment['start'],
                    'end': appointment['end'],
                    'id': appointment.id,
                    'user_account_information_id': appointment.user_account_information_id,
                    'working_location_id': appointment.working_location_id,
                    'customers' : appointment.customers,
                    'message' : appointment.message,
                    'agent' : appointment.user_account_information,
                    'working_location' : appointment.working_location,
                    'status': appointment.status
                });
            });
            $(calendarSelector).fullCalendar('addEventSource', events);
            $(calendarSelector).fullCalendar('rerenderEvents');
        }
    });
}