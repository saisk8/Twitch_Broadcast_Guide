var channel_list = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getinfo() {
    channel_list.forEach(function(c) {
        var url = "https://wind-bow.gomix.me/twitch-api/streams/" + c + "/?callback=?";
        $.getJSON(url, function(data) {
            console.log(data);
        });
    });
}

$(document)
    .ready(getinfo);
