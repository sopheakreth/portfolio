import CheckoutDetailPage from "../CheckoutDetailPage/CheckoutDetailPage";
import { useTranslation } from "react-i18next";
import CheckoutData from "../../entities/Checkout";
interface Props {
  checkout: CheckoutData | undefined;
}
const ExpiredPage = ({ checkout }: Props) => {
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
                src="./images/logo/expired_new_icon.png"
                height={"132.5"}
                width={"132.5"}
                alt=""
              />

              <p className="text-center" style={{ color: "#D4221F", fontSize: "18px", fontWeight: 'bolder' }}>
                {t("expiredPage.firstTitle")}{" "}
              </p>
              <p className="text-center" style={{ fontSize: "18px" }}>
                {t("expiredPage.secondTitle")}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpiredPage;
