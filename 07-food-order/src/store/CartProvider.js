import CartContext from "./cart-context";
import { useReducer } from "react";

const cartReducer = (state, action) => {
  let updatedItem;
  let updatedItems;
  
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      // cartItem에 이미 있는 항목 추가하는 경우
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // cartItem에 새 항목 추가하는 경우
      updatedItem = { ...action.item };
      updatedItems = [...state.items.concat(updatedItem)];
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    if(existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      updatedItem = {...existingCartItem, amount: existingCartItem.amount-1}; 
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      // updatedItems = [...state.items];
      // updatedItems[existingCartItemIndex].amount--;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
