import mysql from "mysql2";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "90@password",
  database: "emwork-test",
  port: 3380,
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to the database", err);
    return;
  }
  console.log("Connected to the MySql Database");
});

export default connection;
