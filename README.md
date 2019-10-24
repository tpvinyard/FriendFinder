# FriendFinder

* Website: https://quiet-earth-04044.herokuapp.com/
* Languages/Frameworks: JavaScript, Express.js, Node.js, AJAX, Bootstrap

## Directions
1. Click the Take Survey Button
2. Fill out the survey
3. Submit your answers and see who your friend should be!

## Behind The Curtain
* Routing is set up through Express.js
* Site is served via Heroku
* Logic and API are handled by Node.js and AJAX
* Users survey answers are stored in a JSON object, sent via a POST request to the apiRoutes.js file, then logic checks against the data in friends.js, and responds with the closest friend match
