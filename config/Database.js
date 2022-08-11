import { Sequelize } from "sequelize";

const db = new Sequelize ('belajarnode_auth','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;