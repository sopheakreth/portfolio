import CheckoutDetailPage from "../CheckoutDetailPage/CheckoutDetailPage";
import { useTranslation } from "react-i18next";
import CheckoutData from "../../entities/Checkout";
import CountDownRedirect from "../../components/CoundownRedirect/CountDownRedirect";
interface Props {
  checkout: CheckoutData | undefined;
  statusCode: string;
}

const FailedPage = ({ checkout, statusCode }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <CheckoutDetailPage checkoutDetail={checkout} />
      <div className="col-md-6 text-center">
        <div className="row">
          <div className="card mb-0 border-0 col-md-12">
            <div className="card-body p-0">
              <img
                className="mb-3"
                src="./images/logo/ibank.png"
                height={"24"}
                width={"81.87"}
                alt=""
              />

              <p className="text-center mb-3" style={{ fontSize: "18px" }}>
                {t("failedPage.firstTitle")}
              </p>
              <img
                className="text-center mb-4"
                src="./images/logo/blur_qr_icon.png"
                height={"213.55"}
                width={"213.55"}
                alt=""
              />

              <p
                className="mb-4"
                style={{ fontSize: "17px", color: "#D4221F" }}
              >
                {t("failedPage.secondTitle")}{" "}
              </p>
              {/* <span style={{color: '#1721C9'}}>{t("failedPage.thirdTitle")}</span> */}
              {/* <p className="text-center" style={{ fontSize: "18px" }}>
              {t("failedPage.fourthTitle")}{" "}
              <span>
                {" "}
                <a style={{color : '#1721C9'}} href="">{t("failedPage.fifthTitle")}</a>
              </span>
            </p> */}
              <p className="text-center" style={{ fontSize: "18px" }}>
                {t("failedPage.sixthTitle")}{" "}
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
                <span>{t("failedPage.seventhTitle")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FailedPage;
