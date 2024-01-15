import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <button onClick={() => alert(t('buttonText'))}>{t('buttonText')}</button>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('id')}>Indonesian</button>
      </div>
    </div>
  );
}

export default App;