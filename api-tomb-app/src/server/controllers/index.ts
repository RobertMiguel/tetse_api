import * as create from './products/Create';
import * as getAll from './products/GetAll';
import * as getById from './products/GetById';
import * as DeleteById from './products/DeleteById';

export const ProductsController = {
	...create,
	...getAll,
	...getById,
	...DeleteById
};
