--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: events; Type: TABLE; Schema: public; Owner: JoshBavari; Tablespace: 
--

CREATE TABLE events (
    id integer NOT NULL,
    startdate timestamp with time zone,
    enddate timestamp with time zone,
    geolocation point,
    venue character varying(255),
    description character varying(255),
    organizer character varying(255),
    tags character varying(255)
);


ALTER TABLE events OWNER TO "JoshBavari";

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: JoshBavari
--

CREATE SEQUENCE events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE events_id_seq OWNER TO "JoshBavari";

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: JoshBavari
--

ALTER SEQUENCE events_id_seq OWNED BY events.id;


--
-- Name: organizers; Type: TABLE; Schema: public; Owner: JoshBavari; Tablespace: 
--

CREATE TABLE organizers (
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE organizers OWNER TO "JoshBavari";

--
-- Name: organizers_id_seq; Type: SEQUENCE; Schema: public; Owner: JoshBavari
--

CREATE SEQUENCE organizers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE organizers_id_seq OWNER TO "JoshBavari";

--
-- Name: organizers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: JoshBavari
--

ALTER SEQUENCE organizers_id_seq OWNED BY organizers.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: JoshBavari; Tablespace: 
--

CREATE TABLE tags (
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE tags OWNER TO "JoshBavari";

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: JoshBavari
--

CREATE SEQUENCE tags_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tags_id_seq OWNER TO "JoshBavari";

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: JoshBavari
--

ALTER SEQUENCE tags_id_seq OWNED BY tags.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: JoshBavari
--

ALTER TABLE ONLY events ALTER COLUMN id SET DEFAULT nextval('events_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: JoshBavari
--

ALTER TABLE ONLY organizers ALTER COLUMN id SET DEFAULT nextval('organizers_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: JoshBavari
--

ALTER TABLE ONLY tags ALTER COLUMN id SET DEFAULT nextval('tags_id_seq'::regclass);


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: JoshBavari
--

COPY events (id, startdate, enddate, geolocation, venue, description, organizer, tags) FROM stdin;
\.


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: JoshBavari
--

SELECT pg_catalog.setval('events_id_seq', 1, false);


--
-- Data for Name: organizers; Type: TABLE DATA; Schema: public; Owner: JoshBavari
--

COPY organizers (id, name) FROM stdin;
\.


--
-- Name: organizers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: JoshBavari
--

SELECT pg_catalog.setval('organizers_id_seq', 1, false);


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: JoshBavari
--

COPY tags (id, name) FROM stdin;
\.


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: JoshBavari
--

SELECT pg_catalog.setval('tags_id_seq', 1, false);


--
-- Name: events_pkey; Type: CONSTRAINT; Schema: public; Owner: JoshBavari; Tablespace: 
--

ALTER TABLE ONLY events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: organizers_pkey; Type: CONSTRAINT; Schema: public; Owner: JoshBavari; Tablespace: 
--

ALTER TABLE ONLY organizers
    ADD CONSTRAINT organizers_pkey PRIMARY KEY (id);


--
-- Name: tags_pkey; Type: CONSTRAINT; Schema: public; Owner: JoshBavari; Tablespace: 
--

ALTER TABLE ONLY tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: public; Type: ACL; Schema: -; Owner: JoshBavari
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM "JoshBavari";
GRANT ALL ON SCHEMA public TO "JoshBavari";
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

