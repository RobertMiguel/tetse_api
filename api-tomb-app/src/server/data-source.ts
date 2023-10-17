import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';

const PORT = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE
});
