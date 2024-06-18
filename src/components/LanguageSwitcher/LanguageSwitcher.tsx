import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getLanguageConts } from "../../constants/languageConstants";
import { getLocalLanguage, setLocalLanguage } from '../../utils/language';

interface Option {
  value: string;
  label: string;
  imageSrc: string; // Add image property to Option interface
}
const boxLangStyle = {
  backgroundColor: '#BAD7E9',
  border: 'none',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  color:'white'
};

const langOptions = getLanguageConts();
const LanguageSwitcher = () => {
  
  const { t, i18n } = useTranslation();

  const initLang = getLocalLanguage() ?? 'en';

  const findByKey = (key: keyof Option, value: any): Option | null => {
    return langOptions.find((option) => option[key] === value) || null;
  };
  const newOptionState = findByKey("value", initLang);

  const [selectedOption, setSelectedOption] = useState<Option | null>(newOptionState);

  const handleSelect = (option: Option) => {
    setLocalLanguage(option.value != null ? option.value : "en");
    i18n.changeLanguage(option.value != null ? option.value : "en");
    setSelectedOption(option);
  };

  return (
    <>
      <div className=" visually-hidden dropdown">
        <button
          style={boxLangStyle}
          className="btn rounded-3"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedOption ? (
            <div className="d-flex align-items-center">
              <img
                src={selectedOption.imageSrc}
                alt={t(selectedOption.label)}
                className="me-2"
                style={{ maxWidth: "20px", maxHeight: "20px" ,borderRadius: "50%"}}
              />
              {t(selectedOption.label)}
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <img
                src={langOptions[1].imageSrc}
                alt={t(langOptions[1].label)}
                className="me-2"
                style={{ maxWidth: "20px", maxHeight: "20px" ,borderRadius: "50%"}}
              />
              {t(langOptions[1].label)}
            </div>
          )}
        </button>
        <ul className="dropdown-menu">
          {langOptions.map((option) => (
            <li key={option.value}>
              <button
                className="dropdown-item d-flex align-items-center"
                type="button"
                onClick={() => handleSelect(option)}
              >
                <img
                  src={option.imageSrc}
                  alt={t(option.label)}
                  className="me-2"
                  style={{ maxWidth: "20px", maxHeight: "20px" ,borderRadius: "50%"}}
                />
                {t(option.label)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LanguageSwitcher;
