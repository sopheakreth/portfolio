import { create } from "zustand";

/*** TODO : We don't use for now */
interface CheckoutQuery {
  transactionId?: string;
  payload?: string;
}

interface CheckoutQueryStore {
  checkoutQuery: CheckoutQuery;
  setTransactionId: (transactionId: string) => void;
  setPayload: (payload: string) => void;
}

const useCheckoutQueryStore = create<CheckoutQueryStore>((set) => ({
  checkoutQuery: {},
  setTransactionId: (transactionId) =>
    set(() => ({ checkoutQuery: { transactionId } })),
  setPayload: (payload) =>
    set(() => ({checkoutQuery: { payload }})),
}));
export default useCheckoutQueryStore;