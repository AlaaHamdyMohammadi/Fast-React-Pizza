/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import {formatCurrency} from '../../utils/helpers'
import { deleteItem, getTotalCartQuantity } from './cartSlice';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  // const cartQuantity = useSelector(getTotalCartQuantity);
  // const cartName = useSelector((state) => state.cart.cart.name);
  const dispatch = useDispatch();
  function handleDeleteItem(){
    dispatch(deleteItem(pizzaId))
  }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={handleDeleteItem}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
