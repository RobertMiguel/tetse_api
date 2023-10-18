import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import { StatusCodes } from 'http-status-codes';
import { productRepository } from '../../repositories/ProductsRepository';

export const getAll = async (req: Request, res: Response) => {

	try {
		const products = await productRepository.find();

		return res.status(StatusCodes.OK).json(products);

	} catch (error) {
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: 'Internal Server Error' });
	}


};
