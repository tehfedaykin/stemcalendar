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


--
-- Name: cube; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS cube WITH SCHEMA public;


--
-- Name: EXTENSION cube; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION cube IS 'data type for multidimensional cubes';


--
-- Name: earthdistance; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS earthdistance WITH SCHEMA public;


--
-- Name: EXTENSION earthdistance; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION earthdistance IS 'calculate great-circle distances on the surface of the Earth';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: events; Type: TABLE; Schema: public; Owner: stem_user; Tablespace: 
--

CREATE TABLE events (
    id integer NOT NULL,
    name character varying(255),
    startdate timestamp with time zone,
    enddate timestamp with time zone,
    geolocation point,
    venue character varying(255),
    description character varying(255),
    organizer character varying(255),
    tags character varying(255)
);


ALTER TABLE events OWNER TO stem_user;

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: stem_user
--

CREATE SEQUENCE events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE events_id_seq OWNER TO stem_user;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stem_user
--

ALTER SEQUENCE events_id_seq OWNED BY events.id;


--
-- Name: organizers; Type: TABLE; Schema: public; Owner: stem_user; Tablespace: 
--

CREATE TABLE organizers (
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE organizers OWNER TO stem_user;

--
-- Name: organizers_id_seq; Type: SEQUENCE; Schema: public; Owner: stem_user
--

CREATE SEQUENCE organizers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE organizers_id_seq OWNER TO stem_user;

--
-- Name: organizers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stem_user
--

ALTER SEQUENCE organizers_id_seq OWNED BY organizers.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: stem_user; Tablespace: 
--

CREATE TABLE tags (
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE tags OWNER TO stem_user;

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: stem_user
--

CREATE SEQUENCE tags_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tags_id_seq OWNER TO stem_user;

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stem_user
--

ALTER SEQUENCE tags_id_seq OWNED BY tags.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: stem_user
--

ALTER TABLE ONLY events ALTER COLUMN id SET DEFAULT nextval('events_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: stem_user
--

ALTER TABLE ONLY organizers ALTER COLUMN id SET DEFAULT nextval('organizers_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: stem_user
--

ALTER TABLE ONLY tags ALTER COLUMN id SET DEFAULT nextval('tags_id_seq'::regclass);


--
-- Name: events_pkey; Type: CONSTRAINT; Schema: public; Owner: stem_user; Tablespace: 
--

ALTER TABLE ONLY events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: organizers_pkey; Type: CONSTRAINT; Schema: public; Owner: stem_user; Tablespace: 
--

ALTER TABLE ONLY organizers
    ADD CONSTRAINT organizers_pkey PRIMARY KEY (id);


--
-- Name: tags_pkey; Type: CONSTRAINT; Schema: public; Owner: stem_user; Tablespace: 
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

