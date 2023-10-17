import { Router } from 'express';

import { ProductsController } from '../controllers';

const router = Router();

router.get('/', (_, res) => {
	return res.json('Fala, DEV!');
});

router.post('/produtos', ProductsController.create);

router.get('/produtos', ProductsController.getAll);

router.get('/produtos/:id', ProductsController.getById);

router.put('/produtos/:id', (_, res) => {
	return res.send('Router Put Products');
});

router.delete('/produtos/:id', ProductsController.DeleteById);

export { router };
