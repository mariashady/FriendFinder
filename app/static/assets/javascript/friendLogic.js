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
                $("#match-name").text(data.name);
                $("#match-img").attr("src", data.photo);
                $("#results-modal").modal("toggle");
            });
    });

})