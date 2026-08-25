import { createContext, useContext, useReducer, useCallback, useState } from "react";
import { FREE_SHIP_THRESHOLD } from "../data/mockProducts";

const CartContext = createContext(null);

const lineKey = (id, color, size) => `${id}::${color}::${size}`;

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, color, size, qty } = action;
      const key = lineKey(product.id, color, size);
      const existing = state.lines[key];
      const nextQty = (existing?.qty || 0) + qty;
      return {
        ...state,
        lines: {
          ...state.lines,
          [key]: {
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.media[0],
            color,
            size,
            qty: nextQty,
          },
        },
      };
    }
    case "SET_QTY": {
      const line = state.lines[action.key];
      if (!line) return state;
      if (action.qty <= 0) {
        const { [action.key]: _removed, ...rest } = state.lines;
        return { ...state, lines: rest };
      }
      return {
        ...state,
        lines: { ...state.lines, [action.key]: { ...line, qty: action.qty } },
      };
    }
    case "REMOVE": {
      const { [action.key]: _removed, ...rest } = state.lines;
      return { ...state, lines: rest };
    }
    case "CLEAR":
      return { ...state, lines: {} };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { lines: {} });
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product, color, size, qty = 1) => {
    dispatch({ type: "ADD", product, color, size, qty });
    setIsOpen(true);
  }, []);

  const setQty = useCallback((key, qty) => dispatch({ type: "SET_QTY", key, qty }), []);
  const removeItem = useCallback((key) => dispatch({ type: "REMOVE", key }), []);
  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const items = Object.values(state.lines);
  const count = items.reduce((n, l) => n + l.qty, 0);
  const subtotal = items.reduce((s, l) => s + l.price * l.qty, 0);
  const freeShipRemaining = Math.max(0, FREE_SHIP_THRESHOLD - subtotal);
  const freeShipProgress = Math.min(100, (subtotal / FREE_SHIP_THRESHOLD) * 100);

  const value = {
    items,
    count,
    subtotal,
    freeShipRemaining,
    freeShipProgress,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    setQty,
    removeItem,
    clear,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};