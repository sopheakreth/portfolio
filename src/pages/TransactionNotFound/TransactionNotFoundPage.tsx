import { useTranslation } from "react-i18next";

const TransactionNotFoundPage = () => {
    const { t } = useTranslation();
  return (
    <div>
      <div className="col-md-12 text-center">
        <h1 className="display-1 fw-bold">{t("tnxNotFoundPage.t505")}</h1>
        <p className="fs-3">
          {" "}
          <span className="text-danger">{t("tnxNotFoundPage.opps")}</span> {t("tnxNotFoundPage.txnNotFound")}
        </p>
        <p className="lead">{t("tnxNotFoundPage.desc")}</p>
      </div>
    </div>
  )
}

export default TransactionNotFoundPage