## Install PostgreSQL and run it

On MacOS run:

```bash
$ brew install postgresql
```

Start a PostgreSQL server:

```bash
$ brew services start postgresql
```

Run the postgres CLI:

```bash
$ psql postgres
```

Create a role name "admin" with this command:

```bash
CREATE ROLE admin WITH LOGIN PASSWORD 'password';
```

Exit this session:

```bash
\q
```

Connect with the admin role:

```bash
psql -d postgres -U admin
```

Create a database:

```bash
CREATE DATABASE api;
```

Connect to the new api database:

```bash
\c api
```

Create a table called users:

```bash
CREATE TABLE users (
        ID SERIAL PRIMARY KEY,
        name VARCHAR(30),
        performance NUMERIC,
        date TIMESTAMP
    );
```

Last Step, Let's add our dummy data:

```bash
    INSERT INTO users (ID, name, performance, date)
        VALUES (1, 'John', 58, '2022-12-11 10:10:10-07'),
        (2, 'Daniel', 87, '2022-11-15 10:10:10-07'),
        (3, 'Sally', 34, '2022-06-15 10:10:10-07'),
        (4, 'Tiffany', 99, '2022-02-22 10:10:10-07');
```

## Install dependencies

Install dependencies for the front-end

```bash
$ npm i
```

Install dependencies for the backend

```bash
$ cd backend && npm i
```

## Start the server

Start the back-end server, it will run on port 5500

```bash
$ cd backend && node server.js
```

Start the dev server for our front-end

```bash
$ npm run dev
```

Visit
[http://localhost:5173/](http://localhost:5173/)
