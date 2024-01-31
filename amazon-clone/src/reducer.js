export const initialState = {
  basket: [],
  user: null,
};

// Selector function to calculate the total value of items in the basket
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//fancy for loop

const reducer = (state, action) => {
  switch (action.type) {
    case "EMPTY_BASKET":
      return { ...state, basket: [] };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1); // array.splice(index, howmany, item1, ....., itemX)
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;

/**
 * Here, you dispatch the "ADD_TO_BASKET" action with the item's details, and your reducer (defined in reducer.js) handles the state update logic by appending the item to the basket.
 */

/**
 * https://medium.com/yavar/how-to-use-the-reduce-in-javascript-and-react-4bc8b5f8fa4b
 * about built-in reduce() function of javascript
 */

/**
 * Takes State as an Argument: Selector functions typically take the entire application state as an argument. This allows them to access and extract specific data from the state.
 */
