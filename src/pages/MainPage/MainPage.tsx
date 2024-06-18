import { useLocation, useParams } from "react-router-dom";
import useCheckout from "../../hooks/useCheckout";
import CheckoutDetailPage from "../CheckoutDetailPage/CheckoutDetailPage";
import CheckoutQrPage from "../CheckoutQRPage/CheckoutQrPage";
import ExpiredPage from "../ExpiredPage/ExpiredPage";
import InProgressPage from "../InprogressPage/InprogressPage";
import FailedPage from "../FailedPage/FailedPage";
import SuccessfulPage from "../SuccessfulPage/SuccessfulPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import { useEffect, useState } from "react";
import CheckoutData from "../../entities/Checkout";
import useQr from "../../hooks/useQr";
import TransactionNotFoundPage from "../TransactionNotFound/TransactionNotFoundPage";

const MainPage = () => {
  const { transactionId } = useParams();
  const queryParams = new URLSearchParams(useLocation().search);
  const payload = queryParams.get("pl");
  const [desiredResultReceived, setDesiredResultReceived] = useState(false);
  const [checkoutData, setCheckoutData] = useState<CheckoutData>();
  const [xPayload, setXPayload] = useState("");

  useEffect(() => {
    if (payload) {
      window.history.replaceState(null, "", "/" + transactionId);
      try {
        // Clear existing item with the same key
        localStorage.removeItem("x-payload");
        // Set new item
        localStorage.setItem("x-payload", JSON.stringify(payload));
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
      // Disable back navigation
      window.history.pushState(null, "", window.location.pathname);
      window.onpopstate = () => {
        window.history.pushState(null, "", window.location.pathname);
      };
    } else {
      try {
        const storedValue = localStorage.getItem("x-payload");
        setXPayload(storedValue ? JSON.parse(storedValue) : "");
      } catch (error) {
        console.error("Error reading from localStorage:", error);
      }
    }
  }, []);

  //Fetch QR only time per refresh
  const qr = useQr(transactionId!, payload ? payload : xPayload);

  //Inquiry Value
  const { data, isLoading } = useCheckout(
    transactionId!,
    payload ? payload : xPayload,
    desiredResultReceived
  );

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (data?.code == "00") {
    if (checkoutData == undefined) {
      setCheckoutData(data?.data);
    }

    if (data?.data.paymentStatus == "Pending") {
      return (
        <>
          <CheckoutDetailPage checkoutDetail={data?.data} />
          <CheckoutQrPage
            checkout={data?.data}
            qrContentBase64={qr.data?.data}
          />
        </>
      );
    }
    if (data?.data.paymentStatus == "InProgress") {
      return <InProgressPage checkout={data.data} />;
    }
    if (data?.data.paymentStatus == "Expired") {
      if (!desiredResultReceived) {
        setDesiredResultReceived(true);
      }
      return <ExpiredPage checkout={data.data} />;
    }
    if (data?.data.paymentStatus == "Failed") {
      if (!desiredResultReceived) {
        setDesiredResultReceived(true);
      }
      return (
        <FailedPage
          checkout={data.data}
          statusCode={data.code == "00" ? "000" : data.code}
        />
      );
    }
    if (
      data?.data.paymentStatus == "Success" ||
      data?.data.paymentStatus == "Completed"
    ) {
      if (!desiredResultReceived) {
        setDesiredResultReceived(true);
      }
      return (
        <SuccessfulPage
          checkout={data.data}
          statusCode={data.code == "00" ? "000" : data.code}
        />
      );
    }
  } else {
    if (data.errors[0].code == "505") {
      if (!desiredResultReceived) {
        setDesiredResultReceived(true);
      }
      return <TransactionNotFoundPage />;
    } else if (data.errors[0].code == "100") {
      if (!desiredResultReceived) {
        setDesiredResultReceived(true);
      }
      if (checkoutData) {
        return <ExpiredPage checkout={checkoutData} />;
      }
      return <ErrorPage />;
    } else {
      return <ErrorPage />;
    }
  }
};

export default MainPage;
