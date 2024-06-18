import { useTranslation } from "react-i18next";
import CheckoutData from "../../entities/Checkout";
import TimerCoolDown from "../../components/Timer/TimerCoolDown";
import ContentQr from "../../entities/QuickResponseCode";
import config from "../../utils/config";

interface Props {
  checkout: CheckoutData | undefined;
  qrContentBase64: ContentQr | undefined;
}

const CheckoutQrPage = ({ checkout, qrContentBase64 }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="col-md-6 text-center">
      <div className="row">
        <div className="card mb-0 border-0 col-md-12">
          <div className="card-body p-0">
            <img
              className="mb-4"
              src="./images/logo/ibank.png"
              height={"24"}
              width={"81.87"}
              alt=""
            />

            <p className="text-center mb-3" style={{ fontSize: "18px" }}>
              {t("pendingPage.firstTitle")}
            </p>
            <img
              className="text-center mb-4"
              src={'data:image/png;base64,'+ qrContentBase64}
              height={"213.55"}
              width={"213.55"}
              alt=""
            />

            <TimerCoolDown
              initialNumber={checkout?.transactionExpiredInSecond!}
            />
            <p className="text-center" style={{ fontSize: "18px" }}>
              {t("pendingPage.secondTitle")}{" "}
              <span>
                {" "}
                <a style={{color : '#1721C9'}} href={config.VITE_DOWNLOAD_LINK}>{t("pendingPage.thirdTitle")}</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutQrPage;
