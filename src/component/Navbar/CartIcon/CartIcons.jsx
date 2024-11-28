import { useDispatch, useSelector } from 'react-redux';

import { FaShoppingCart } from 'react-icons/fa';

import { CartBadge, LinksContainer } from '../NavbarStyles';
import { toggleCartVisibility } from '@/redux/features/cart/cartSlice';

const CartIcons = () => {
  const total = useSelector((state) => state.cart.itemsInCart).reduce(
    (acc, item) => {
      return (acc += item.quantity);
    },
    0
  );
  const dispatch = useDispatch();

  return (
    <LinksContainer onClick={() => dispatch(toggleCartVisibility())}>
      <FaShoppingCart />
      <CartBadge>{total}</CartBadge>
    </LinksContainer>
  );
};

export default CartIcons;
