DROP TABLES IF EXISTS saboteurs;

CREATE TABLE saboteurs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(30),
    meetingID TEXT NOT NULL,
    expertise TEXT NOT NULL,
    complete BOOLEAN,
    recordingURL TEXT,


);