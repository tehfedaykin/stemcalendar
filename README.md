# STEM Calendar


## Usage

```shell
$ git clone https://github.com/tehfedaykin/stemcalendar.git
$ cd stemcalendar
$ npm install
$ npm watch
```

Navigate to http://localhost:3000 to see the app working.

## Tests

To run the tests, do:

```shell
$ npm run test
```

## Deploy

For deployment:

```shell
$ npm run build
```


## Database Setup

* Install postgres sql
* Open shell

Create DB:  
`cd stemcalendar && psql -d stem_events -a -f ./src/server/scripts/create_database.sql`

Insert data:  
`psql -a -f ./src/server/scripts/insert_data.sql`
