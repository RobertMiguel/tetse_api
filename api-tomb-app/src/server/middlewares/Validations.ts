import * as yup from 'yup';

type ProductData = {
  nome: string;
  marca: string;
  empresa: string;
  setor: string;
  tombo: number;
};

const productSchema = yup.object().shape({
	nome: yup.string().required(),
	marca: yup.string().required(),
	empresa: yup.string().required(),
	setor: yup.string().required(),
	tombo: yup.number().required(),
});

export const validationProducts = async (data: ProductData): Promise<string[] | null> => {
	try {
		await productSchema.validate(data, { abortEarly: false });
		return null;
	} catch (error) {
		if (error instanceof yup.ValidationError) {
			const validationErrors = error.inner.map((e) => e.message);
			return validationErrors;
		}
		throw error;
	}
};
