// Load Data
const friendData = require("../data/friends");

// Routing
module.exports = (app) => {
    // API GET Requests
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    // API POST Requests
    app.post("/api/friends", (req, res) => {
        let userScore = req.body.scores;
        console.log(req.body);
        let bestFriendScore = Infinity;
        let bestFriend = {};

        for (var i = 0; i < friendData.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < userScore.length; j++) {
                scoreDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userScore[j])))
            }
            if (scoreDiff < bestFriendScore) {
                bestFriend = friendData[i]
                bestFriendScore = scoreDiff
            }


        }

        console.log(bestFriend)
        friendData.push(req.body)
        res.json(bestFriend)

    });

    app.post("/api/clear", (req, res) => {
        // Empty out arrays of data
        friendData.length = [];
        res.json({
            ok: true
        });
    });
};
