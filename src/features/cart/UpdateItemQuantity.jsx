/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"

function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  
  function handleDecreaseQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  function handleIncreaseQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={handleDecreaseQuantity}>
        -
      </Button>
      <span>{quantity}</span>
      <Button type="round" onClick={handleIncreaseQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity
