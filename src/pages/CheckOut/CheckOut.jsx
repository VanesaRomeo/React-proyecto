
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { CheckoutContainer, ErrorText, StyledField, SubmitButton, TextContainer, Title } from './CheckOutStyles';



// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .required('El nombre es obligatorio'),
  address: Yup.string()
    .min(5, 'La dirección debe tener al menos 5 caracteres')
    .required('La dirección es obligatoria'),
  phone: Yup.string()
    .matches(
      /^[0-9]{10,15}$/,
      'El teléfono debe tener entre 10 y 15 dígitos y solo números'
    )
    .required('El teléfono es obligatorio'),
});

const Checkout = () => {
  const handleSubmit = (values, { resetForm }) => {
    Swal.fire({
      title: '¡Pedido enviado con éxito!',
      text: 'Gracias por tu compra. Pronto recibirás una confirmación.',
      icon: 'success',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#4caf50',
    });
    console.log('Datos del pedido:', values);

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', address: '', phone: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <TextContainer>
          <h1>Formulario de pedido</h1>
          <CheckoutContainer>
            <Title>Completa tus Datos para Finalizar</Title>

            <Form>
              <StyledField
                type="text"
                name="name"
                placeholder="Nombre y Apellido"
              />
              <ErrorMessage name="name" component={ErrorText} />

              <StyledField type="text" name="address" placeholder="direccion" />
              <ErrorMessage name="address" component={ErrorText} />

              <StyledField type="tel" name="phone" placeholder="telefono" />
              <ErrorMessage name="phone" component={ErrorText} />

              <SubmitButton type="submit">Enviar Pedido</SubmitButton>
            </Form>
          </CheckoutContainer>
        </TextContainer>
      )}
    </Formik>
  );
};

export default Checkout;
