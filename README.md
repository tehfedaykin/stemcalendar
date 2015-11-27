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

### Create DB

`npm run db`

### Insert data

`npm run db:data`

### Ensure it worked:

`psql -d stem_events -U stem_user -c 'select * from events;'`

### Dump database schema & data

`pg_dump --schema-only -d stem_events`

