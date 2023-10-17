import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { StatusCodes } from 'http-status-codes';

import { productRepository } from '../../repositories/ProductsRepository';

export const DeleteById = async (req: Request, res: Response) => {

	const productId = parseInt(req.params.id, 10);

	if (isNaN(productId)) {
		return res.status(StatusCodes.BAD_REQUEST).json({ message: 'ID do produto inválido' });
	}

	try {
		const tombo = await productRepository.findOne({ where: { tombo: productId } });

		if (!tombo) {
			return res.status(StatusCodes.NOT_FOUND).json({ message: 'Produto não encontrado' });
		}

		await productRepository.remove(tombo);

		return res.status(StatusCodes.NO_CONTENT).send();
	} catch (error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
	}
};
