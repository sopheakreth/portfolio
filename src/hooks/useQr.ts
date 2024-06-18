import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-connector";
import QuickResponseCode from "../entities/QuickResponseCode";
import apiConstants from "../constants/apiConstants";

const apiClient = new APIClient<QuickResponseCode>(apiConstants.API_TRANSACTION_GENERATE_QR);

const useQr = (
  transactionId: string,
  payload: string,
) => {
  return useQuery({
    queryKey: ["qrContent", transactionId, payload],
    queryFn: async () => await apiClient.get({ transactionId: transactionId }, payload),
    staleTime: Infinity,
    refetchOnMount:false,
    refetchOnReconnect:false,
    refetchOnWindowFocus:false,
  });
};

export default useQr;
