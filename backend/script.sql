CREATE TABLE "auth_user" (
  "id" SERIAL PRIMARY KEY,
  "password" varchar(128) NOT NULL,
  "last_login" TIMESTAMP NULL,
  "is_superuser" bool NOT NULL,
  "username" varchar(150) NOT NULL UNIQUE,
  "last_name" varchar(150) NOT NULL,
  "email" varchar(254) NOT NULL,
  "is_staff" bool NOT NULL,
  "is_active" bool NOT NULL,
  "date_joined" TIMESTAMP NOT NULL,
  "first_name" varchar(150) NOT NULL
)


CREATE TABLE "follow" (
  "id" SERIAL PRIMARY KEY,  -- Usando SERIAL para auto incremento
  "follower_id" varchar(150) NOT NULL REFERENCES "auth_user" ("username") DEFERRABLE INITIALLY DEFERRED,
  "following_id" varchar(150) NOT NULL REFERENCES "auth_user" ("username") DEFERRABLE INITIALLY DEFERRED
);


CREATE TABLE "post" (
  "id" SERIAL PRIMARY KEY,  -- Usando SERIAL para auto incremento
  "content" text NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "author_id" varchar(150) NOT NULL REFERENCES "auth_user" ("username") DEFERRABLE INITIALLY DEFERRED
);