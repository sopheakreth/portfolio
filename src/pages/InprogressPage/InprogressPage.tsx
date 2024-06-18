import { useTranslation } from "react-i18next";
import CheckoutData from "../../entities/Checkout";
import TimerCoolDown from "../../components/Timer/TimerCoolDown";
import CheckoutDetailPage from "../CheckoutDetailPage/CheckoutDetailPage";
import config from "../../utils/config";
interface Props {
  checkout: CheckoutData | undefined;
}

const InprogressPage = ({ checkout }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <CheckoutDetailPage checkoutDetail={checkout} />
      <div className="col-md-6 text-center">
        <div className="row">
          <div className="card mb-0 border-0 col-md-12">
            <div className="card-body p-0">
              <img
                className="mb-2"
                src="./images/logo/ibank.png"
                height={"24"}
                width={"81.87"}
                alt=""
              />

              <p className="text-center mb-2" style={{ fontSize: "18px" }}>
                {t("inProgressPage.firstTitle")}
              </p>
              <img
                className="text-center mb-2"
                src="./images/logo/blur_qr_icon.png"
                height={"213.55"}
                width={"213.55"}
                alt=""
              />

              <TimerCoolDown
                initialNumber={checkout?.transactionExpiredInSecond!}
              />
              <p className="text-center" style={{ fontSize: "18px" }}>
                {t("inProgressPage.secondTitle")}{" "}
              </p>
              <p className="text-center" style={{ fontSize: "18px" }}>
                {t("inProgressPage.thirdTitle")}{" "}
                <span>
                  {" "}
                  <a href={config.VITE_DOWNLOAD_LINK}>{t("inProgressPage.fourthTitle")}</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InprogressPage;
