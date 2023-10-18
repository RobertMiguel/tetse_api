import express from 'express';
import 'dotenv/config';

import { AppDataSource } from './data-source';
import { server } from './server/Server';

const startServer = () => {
	server.listen(process.env.PORT, () => {
		console.log(`Server is running on port ${process.env.PORT}`);
	});
};

AppDataSource.initialize()
	.then(() => {
		startServer();
	})
	.catch((err) => {
		console.log('Error during Data Source initialzation ', err);
	});
