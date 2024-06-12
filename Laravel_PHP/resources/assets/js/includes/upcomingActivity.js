$(document).ready(function() {
    var now = moment().format('YYYY-MM-DD HH:mm:ss');

    $.ajax({
        type: 'GET',
        url: '/api/appointments',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            'start': now,
            'sort' : 'start',
            'direction' : 'asc',
            'limit' : 10,
            'confirmed' : true,
            'scheduled' : true,
            'with_agent' : false,
            'with_customer' : true
        },
        success: function (resultJSON) {
            var tbodyHTML;
            var results = $.parseJSON(resultJSON);
            results['appointments'].forEach(function (element) {
                var formattedStartDate = formatDateForDisplay(element.start);

                tbodyHTML += '<tr class="clickable-row" onclick="window.document.location='+'\'/appointments/'+element.id+'\';">';
                tbodyHTML += '<td>' + formattedStartDate +'</td>';

                tbodyHTML += '<td>';
                element.customers.forEach(function (customer) {
                    tbodyHTML += customer.first_name + ' ' + customer.last_name + '<br />';
                });

                tbodyHTML += '</td>';
                tbodyHTML += '</tr>';
            });
            $('#tbody-upcoming').append(tbodyHTML);
        },
        error: function (data) {
            console.log("Ajax Error");
            console.log(data);
        }
    });
});

function formatDateForDisplay(dateString) {
    var date = new Date(dateString);
    var time = new Date(dateString).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
    return(date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + time);
}