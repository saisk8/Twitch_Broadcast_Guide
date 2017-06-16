var channel_list = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getinfo() {
    channel_list.forEach(function() {
        $.getJSON(url, function(data) {
            console.log(dat);
        });
    });
}
