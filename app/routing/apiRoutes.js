let friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {

        let personAnswers = req.body.scores;
        let matchTotal = 50;
        let matchedPerson = '';

        for (let friend of friendsData) {
            // console.log(friend)
            let thisTotal = 0;
;            for (let i = 0; i < friend.scores.length; i++) {
                thisTotal += Math.abs(friend.scores[i] - personAnswers[i]);
                // console.log(thisTotal);
            }
            if (thisTotal < matchTotal) {
                matchTotal = thisTotal;
                matchedPerson = friend.name;
                // console.log(matchTotal);
                // console.log(matchedPerson);
            }
        }

        res.json(true);
    })
}

function checkCompatibility(answerArray) {

}