import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { validationProducts } from '../../middlewares/Validations';
import { productRepository } from '../../repositories/ProductsRepository';

export const create = async (req: Request, res: Response) => {
	const productData = await req.body;

	const validationErros = await validationProducts(productData);

	if (validationErros) {
		return res.status(StatusCodes.BAD_REQUEST).json({ erros: validationErros });
	}

	try {
		const existingProduct = await productRepository.findOne({
			where: { tombo: productData.tombo },
		});

		if (existingProduct) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({ message: 'Produto já existente' });
		}

		const newProduct = await productRepository.save(productData);

		productRepository.create(newProduct);
	} catch (error) {
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: 'Internal Server Error' });
	}

	return res.status(StatusCodes.CREATED).json(productData);
};