import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./language.scss";

import englishFlag from "../../img/flags/united-states.png";
import spanishFlag from "../../img/flags/spain.png";
import italianFlag from "../../img/flags/italy.png";

function Language() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const languages = [
    { code: "en", name: "en", flag: englishFlag },
    { code: "sp", name: "sp", flag: spanishFlag },
    { code: "it", name: "it", flag: italianFlag },
  ];

  const handleLanguageChange = (code) => {
    setCurrentLanguage(code);
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Jost:wght@300&family=Nunito:wght@200&display=swap');
      </style>
      <div className="language-dropdown-container">
        <div
          className={`language-dropdown-header ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={
              languages.find((language) => language.code === currentLanguage)
                .flag
            }
            alt="flag"
          />
          <span>
            {
              languages.find((language) => language.code === currentLanguage)
                .name
            }
          </span>
          <i className={`fas fa-chevron-down ${isOpen ? "open" : ""}`}></i>
        </div>
        <ul className={`language-dropdown ${isOpen ? "open" : ""}`}>
          {languages.map((language) => (
            <h6
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
            >
              <img src={language.flag} alt="flag" width="20px" />
              <span>{language.name}</span>
            </h6>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Language;
