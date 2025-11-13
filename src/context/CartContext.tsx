import { createContext, useContext, useEffect, useMemo, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  priceUSD: number;
  quantity: number;
  image?: string;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  count: number;
  totalUSD: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "cart";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem: CartContextValue["addItem"] = (item) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + (item.quantity ?? 1) } : p,
        );
      }
      return [...prev, { ...item, quantity: item.quantity ?? 1 }];
    });
  };

  const removeItem: CartContextValue["removeItem"] = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQuantity: CartContextValue["updateQuantity"] = (id, quantity) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, quantity } : p)));
  };

  const clear: CartContextValue["clear"] = () => setItems([]);

  const count = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);
  const totalUSD = useMemo(
    () => items.reduce((sum, i) => sum + i.priceUSD * i.quantity, 0),
    [items],
  );

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clear,
    count,
    totalUSD,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};