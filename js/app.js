var channel_list = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getinfo() {
    channel_list.forEach(function(c) {
        var url = "https://wind-bow.gomix.me/twitch-api/streams/" + c + "/?callback=?";
        $.getJSON(url, function(data) {
            console.log(data);
            setStreamStatus(data, c);
        });
    });
}

function setStreamStatus(data, c) {
    if (data.stream !== null) {
        updateInfo(data, c);
    } else if (data.stream === null) {
        var temp = c + "-text";
        document
            .getElementById(temp)
            .textContent = "The channel is not streaming currently";
    }
}

function updateInfo(data, c) {
    var temp = c + "-text";
    document
        .getElementById(temp)
        .textContent = data.stream.game;
    temp = c + "-status";
    $(temp)
        .addClass("green");
    $(temp)
        .removeClass("red");
}

$(document)
    .ready(getinfo);
