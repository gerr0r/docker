module.exports = {
    USER: process.env.DB_USER,
    PASS: process.env.DB_PASS,
    HOST: process.env.DB_HOST || 'db',
    PORT: process.env.DB_PORT || 27017,
    NAME: process.env.DB_NAME || 'mydb'
}