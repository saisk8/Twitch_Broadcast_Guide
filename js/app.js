var channel_list = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getinfo() {
    channel_list.forEach(function(c) {
        var url = "https://wind-bow.gomix.me/twitch-api/streams/" + c + "/?callback=?";
        console.log(url);
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
        temp = c + "-status";
        document.getElementById(temp)
            .title = "Offline";
    }
}

function updateInfo(data, c) {
    var temp = c + "-text";
    document
        .getElementById(temp)
        .textContent = data.stream.channel.game + "; " + data.stream.channel.status;
    temp = "#" + c + "-status";
    $(temp)
        .addClass("green");
    $(temp)
        .removeClass("red");
    temp = c + "-status";
    document
        .getElementById(temp)
        .title = "Online";
    document.getElementById(temp)
        .href = data.stream.channel.url;
    temp = c + "-img";
    document.getElementById(temp)
        .src = data.stream.channel.logo;
}

$(document)
    .ready(getinfo);
