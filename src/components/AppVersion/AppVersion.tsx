import { useTranslation } from "react-i18next";
import { getVersion } from "../../utils/versionData";

const AppVersion = () => {
  const { t } = useTranslation();
  return (
    <div className="visually-hidden">
      <p>{t('appVersion.vers')} {getVersion()}</p>
    </div>
  );
};
export default AppVersion;
