-- CREATE ROLE stem_user;
GRANT ALL PRIVILEGES ON DATABASE stem_events to stem_user;

--turn on the magic
CREATE EXTENSION IF NOT EXISTS cube;
CREATE EXTENSION IF NOT EXISTS earthdistance;


CREATE TABLE events (
  ID SERIAL PRIMARY KEY, 
  name varchar(255),
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
