import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-connector";
import Checkout from "../entities/Checkout";
import apiConstants from "../constants/apiConstants";

const apiClient = new APIClient<Checkout>(apiConstants.API_TRANSACTION_INQUIRY);

const useCheckout = (
  transactionId: string,
  payload: string,
  desiredResultReceived: boolean
) => {
  return useQuery({
    queryKey: ["checkout", transactionId, payload],
    // queryFn: async({ queryKey }) => await apiClient.get({ transactionId: queryKey[1], payload: queryKey[2] }),
    queryFn: async () => await apiClient.get({ transactionId: transactionId }, payload),
    refetchInterval: desiredResultReceived ? 0 : 3000, 
    enabled: !desiredResultReceived,
    // refetchOnMount:false,
    // refetchOnReconnect:false,
    // refetchOnWindowFocus:false,
  });
};

export default useCheckout;
