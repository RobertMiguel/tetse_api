import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getRepository } from 'typeorm';

import { productRepository } from '../repositories/ProductsRepository';
import { validationProducts } from '../middlewares/Validations';
import { Product } from '../entities/Products';

export class CreateProductServe {
	async create(req: Request, res: Response): Promise<Response> {
		const productData = await req.body;
		const repo = getRepository(Product);

		const validationErrors = await validationProducts(productData);

		if (validationErrors) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({ errors: validationErrors });
		}

		const { tombo } = productData;
		const existingProduct = await repo.findOne({ where: { tombo: tombo } });

		if (existingProduct) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({ errors: 'Product already exists' });
		}

		try {
			const newProduct = await productRepository.save(productData);

			productRepository.create(newProduct);

			return res.status(StatusCodes.CREATED).json(newProduct);
		} catch (error) {
			console.error(error);
			return res
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.json({ message: 'Internal Server Error' });
		}
	}
}
