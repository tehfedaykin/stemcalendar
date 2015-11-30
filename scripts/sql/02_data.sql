-- Party time? No, Data time.
INSERT INTO events 
(
  name,
  startdate, 
  enddate, 
  geolocation,
  venue, 
  description, 
  organizer, 
  tags
)
VALUES 
(
  'Spark Hackathon',
  '12/06/2015 17:00', 
  '12/07/2015', 
  point(-94.62746, 39.11405),
  'Waterford',
  'We gunn hack some stuff', 
  'Jennifer', 
  'Awesome JavaScript Fun times'
);

