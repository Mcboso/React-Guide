import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-f1077-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("fetch failed");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData(); // DB에서 가져온 data
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity})); // redux 저장소에 대입
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed.",
        })
      );
    };
  };
};

export const sendCartData = (cart) => {
  // action 생성자로 사용 (꼭 type이 있는 객체 아니어도 됨, 함수 return하는 함수도 가능)
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Seding...",
        message: "Sending cart data...",
      })
    );

    const sendRequest = async (request) => {
      const response = await fetch(
        "https://react-http-f1077-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed.",
        })
      );
    }
  };
};
