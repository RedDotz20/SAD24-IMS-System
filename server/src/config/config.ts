import dotenv from "dotenv";
dotenv.config();

const MYSQL = {
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
};

const SERVER = {
	hostname: process.env.SERVER_HOSTNAME,
	port: process.env.SERVER_PORT || 4000,
	token: {
		secret: process.env.SECRET_TOKEN || "superencryptedsecret",
		expireTime: process.env.SERVER_PORT || 3600,
		issuer: process.env.ISSUER || "defaultIssuer",
	},
};

const config = {
	mysql: MYSQL,
	server: SERVER,
};

export default config;
