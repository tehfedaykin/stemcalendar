-- DROP DATABASE IF EXISTS stem_events;
-- COMMIT;
DROP ROLE stem_user;
-- DROP TABLE events;

CREATE DATABASE stem_events;
-- createuser stem_events;
CREATE ROLE stem_user;

--turn on the magic
CREATE EXTENSION IF NOT EXISTS cube;
CREATE EXTENSION IF NOT EXISTS earthdistance;

\connect stem_events;

CREATE TABLE events (
  ID SERIAL PRIMARY KEY, 
  startdate timestamptz, 
  enddate timestamptz, 
  geolocation point, 
  venue varchar(255), 
  description varchar(255), 
  organizer varchar(255), 
  tags varchar(255)
);

CREATE TABLE organizers (
  ID SERIAL PRIMARY KEY,
  name varchar(255)
);

CREATE TABLE tags (
  ID SERIAL PRIMARY KEY,
  name varchar(255)
);

-- create tables organizer, tags
-- \i './insert_data.sql';
