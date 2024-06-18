import CountDownRedirect from "../../components/CoundownRedirect/CountDownRedirect";
import CheckoutData from "../../entities/Checkout";
import CheckoutDetailPage from "../CheckoutDetailPage/CheckoutDetailPage";
import { useTranslation } from "react-i18next";
interface Props {
  checkout: CheckoutData | undefined;
  statusCode: string;
}
const SuccessfulPage = ({ checkout, statusCode }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <CheckoutDetailPage checkoutDetail={checkout} />
      <div className="col-md-6 text-center">
        <div className="row">
          <div className="card mb-0 border-0 col-md-12">
            <div className="card-body p-0">
              <img
                className="mb-5"
                src="./images/logo/ibank.png"
                height={"24"}
                width={"81.87"}
                alt=""
              />

              <br />
              <img
                className="text-center mb-4"
                src="./images/logo/success_new_icon.png"
                height={"180"}
                // width={"370"}
                alt=""
              />

              <p
                className="text-center"
                style={{
                  color: "#0D0F2E",
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                {t("successPage.firstTitle")}{" "}
              </p>
              <p className="text-center" style={{ fontSize: "18px" }}>
                {t("successPage.secondTitle")}{" "}
                <CountDownRedirect
                  to={
                    checkout?.returnUrl! +
                    "?status_code=" +
                    statusCode +
                    "&transaction_id=" +
                    checkout?.edcTransactionId
                  }
                  seconds={5}
                />{" "}
                <span>{t("successPage.thirdTitle")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessfulPage;
