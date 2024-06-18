import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="col-md-12 text-center">
        <h1 className="display-1 fw-bold">{t("errorPage.t404")}</h1>
        <p className="fs-3">
          {" "}
          <span className="text-danger">{t("errorPage.opps")}</span> {t("errorPage.pnf")}
        </p>
        <p className="lead">{t("errorPage.desc")}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
