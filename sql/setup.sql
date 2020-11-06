DROP TABLE IF EXISTS candidates;

CREATE TABLE candidates (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  party TEXT NOT NULL,
  birth_year YEAR NOT NULL,
  winning BOOLEAN NOT NULL
);
