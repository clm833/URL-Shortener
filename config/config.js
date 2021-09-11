module.exports = {
  port: process.env.PORT || 3000,
  baseUrl: process.env.BASE_URL,
  host: process.env.HOST,

  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  db_database: process.env.DB_DATABASE,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  db_table: process.env.DB_TABLE,
};
