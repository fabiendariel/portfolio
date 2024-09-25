import React, {useState, useContext} from "react";
import { useTranslation } from "react-i18next";
import StyleContext from "../../contexts/StyleContext";
import "./LanguageSwitch.scss";

const LanguageSwitcher = () => {
  const {isFr} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isFr);
  const styleContext = useContext(StyleContext);
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    console.log(isFr);
    const newLang = e.target.value==='true'?'fr':'en';
    i18n.changeLanguage(newLang);
    styleContext.changeLang();
    setChecked(!isChecked);
  };

  return (
    <div className="toggle-button-cover">
      <div className="button-cover">
        <div className="button b2" id="button-10">
          <input type="checkbox" value={isFr} className="checkbox" onChange={handleLanguageChange} />
          <div className="knobs">
            <span>FR</span>
          </div>
          <div className="layer"></div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 