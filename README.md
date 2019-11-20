# messageWall
An anonymous message board for posting your thoughts to strangers of the internet. 
Built with express and Node.js, messages stored with postgres database and managed with Sequelize

User Stories:
As a user, I want to see a message board of other's posts
As a user, I want to be able to add my own posts to the wall
As a user, I want to be able to edit posts if I messed up


Using the app is simple, just hit the Take me to the Wall button to head over to the message board. There, you can see the posted messages and edit any messages you aren't pleased with. At the bottom, there's a form for creating and posting a new message, which will then display with the others!

Follow-up
-For this project, I spent about an hour on an approach that didn't work to meet the assignment before switching over to this node app that I knew would at least work. For this reason, I had to take more of a behavior-driven development approach as there was not time to write test coverage with Jasmine. With more time, I would obviously have written tests from the start (but I had already wasted over an hour, and knew it would take 2 more to start from scratch). I made sure to keep files organized which also took a lot of time, but it makes for a scalable app which could easily have more features added, as opposed to a spaghetti-code version that barely meets the requirements. There are some quirks and I ran out of time before I could implement a poster-name feature, if I had time I would just put this functionality into an entire user model, which would allow me to also prevent people from editing the posts of others, among other useful options the User model would grant.