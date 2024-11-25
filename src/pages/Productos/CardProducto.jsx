import { ProductCard, ProductGrid } from './ProductosStyles';
import Button from './../../component/UI/Button/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Redux/features/Cart/CartSlice';
import { toast, Toaster } from 'sonner';
// import { addProductToCart } from "../../Redux/features/Cart/cartSeconds";
// import { useNavigate } from "react-router-dom";

export const CardProducto = ({
  imagen,
  titulo,
  descripcion,
  precio,
  category,
  id,
}) => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.user);
  // const navigate = useNavigate();

  return (
    <ProductGrid>
      <Toaster theme="dark" />
      <ProductCard>
        <img src={imagen} alt={titulo} />
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <h3>{category}</h3>
        <Button
          onClick={() =>
            dispatch(
              addItem({ imagen, titulo, descripcion, precio, category, id }),
              toast.success('Producto agregado')
            )
          }
        >
          Agregar
        </Button>
      </ProductCard>
    </ProductGrid>
  );
};

CardProducto.propTypes = {
  titulo: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardProducto;
