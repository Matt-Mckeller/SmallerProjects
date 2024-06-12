var agentScheduleCalendarSelector = "#agent-schedule-calendar";

$(document).ready(function() {
    //Schedule Left
    retrieveAgentsForLocation();
});

function update() {
    retrieveAgentsForLocation();
}

//Retrieve all of the available agents for the provided location
function retrieveAgentsForLocation() {
    var agentSelector = "#agent";
    var locationID = $("#location").val();
    if(!locationID) {
        return false;
    }
    //Make AJAX call to retrieve agents based on the selected location
    $.ajax({
        type: 'GET',
        data: {
            'location': locationID,
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/api/agents',
        success: function success(agentsJSON) {
            var agents = $.parseJSON(agentsJSON);
            var sortedAgents = agents['agents'].sort(sortByName);
            $(agentSelector).html("");
            //Append each agent onto the schedules agent select tag
            $.each(sortedAgents, function (index, agent) {
                $(agentSelector).append("<option id=\"" + agent.id + "\">" + agent.first_name + " " + agent.last_name + "</option>");
            });
        }
    });
}

//Show the number of working agents in the calendar
function updateWorkingAgentsCount(){
    var working_location_id = $('#number-location').val();
    $.ajax({
        type: 'GET',
        headers:{
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            'working_location_id': working_location_id
        },
        url: '/api/agentSchedules/' + working_location_id,
        success: function success(agentNumbers) {
            //Clear out any previous agent working numbers and repopulate from the retrieved information
            var cleanAgentNumbers = repopulateAgentNumbers(agentNumbers);

            //Remove the previous agent number display
            $(agentScheduleCalendarSelector).fullCalendar('removeEventSources');
            //Create new event source for the calendar with new agents working numbers
            $(agentScheduleCalendarSelector).fullCalendar('addEventSource', cleanAgentNumbers );
            //Refresh the calendar with the new information
            $(agentScheduleCalendarSelector).fullCalendar('rerenderEvents');
        }
    });
}

function repopulateAgentNumbers(arrayName)
{
    var newArray = [];
    for(var i = 0; i < arrayName.length; i++ )
    {
        if(arrayName[i]['count'] === 0 || arrayName[i]['start'] === null || arrayName[i]['end'] === null){
            continue;
        }
        newArray.push(arrayName[i]);
    }
    return newArray;
}

function sortByName(a, b) {
    var aName = a.first_name.toLowerCase();
    var bName = b.first_name.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}