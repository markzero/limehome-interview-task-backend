#### For interviewers:

Steps to run:
There needs to be two env vars:
  * `export PLACES_API=https://maps.googleapis.com/maps/api/place/nearbysearch/json`
  * `export PLACES_KEY=AIzaSyDCiVqNpuriSLeyVsUW9PjuxuniaSVPCWw` (this is my Google Places API key)

And then:
  1. `yarn`
  2. `yarn start`

It's a NodeJS app using simple sqlite database. Data is kept in a file called `db.sqlite` in `./src` dir.
Sequelize is used for playing with database (like ORM).

Migrations and seeds:
  1. `npx sequelize db:migrate` (`npx sequelize db:migrate:undo:all` (flush db))
  2. `npx sequelize db:seed:all` (only inserts user with id=1, and it must be present)

I use https://httpie.org/ for playing with requests. You can test endpoints:
  * `http localhost:3333/places lat==48.0826573 long==11.5140524` reads from Google Places API all lodging places
  * `http localhost:3333/users/1/bookings` lists bookings from user (there is only one user with id=1)
  * `http localhost:3333/bookings` lists ALL bookings
  * `http localhost:3333/bookings propertyId='dev' propertyName='dev' city='Munich' UserId=1` makes POST request and makes a new booking
  
