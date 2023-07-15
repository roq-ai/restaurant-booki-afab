import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date: yup.date().required(),
  table_number: yup.number().integer().required(),
  status: yup.string().required(),
  customer_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});
