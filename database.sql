
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!



DROP TABLE "user";

DROP TABLE "toys";


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "phone" VARCHAR (10485760) NOT NULL,
    "admin" BOOLEAN DEFAULT FALSE
);

-- a join to prevent duplication, one to many user has many toys



CREATE TABLE "toys" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "ages" VARCHAR (80) NOT NULL,
    "phone" VARCHAR (10485760) NOT NULL,
    "user_id" INT REFERENCES "user",
    "available" BOOLEAN DEFAULT TRUE,
    "image" VARCHAR (10485760)
);

CREATE TABLE "user_toys" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user" NOT NULL,
  "toy_id" INT REFERENCES "toys" NOT NULL
);



INSERT INTO "user" ("username", "password", "phone", "admin")
VALUES ('admin', 'admin', '428-590-1313', 'true');
	   
	   

INSERT INTO "toys" ("name", "ages", "phone", "user_id", "available", "image")
VALUES ('soccer ball', '0-3', '7631296648', '1', 'true');


SELECT * FROM "toys"
WHERE "user_id" = 3;
