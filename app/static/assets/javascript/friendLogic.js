$(document).ready(function () {
    console.log("Joey wants to know how YOU doin?")

    $("#submit").on("click", function (event) {
        let user = {
            name: $("#userName").val(),
            photo: "",
            scores: []

        };
        $(".user-select").each(function (index, userInput) {
            user.scores.push($(userInput).val());

        })
        console.log(user)

        $.post("/api/friends", user)
            .done(function (data) {
                console.log(data);
                // use jquery to open modal
                // use jquery to set img tag href 
                // use jquery to set p tag
            });
    });

})