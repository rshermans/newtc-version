import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export const Header = () => {
  const { t } = useTranslation();
  
  return (
    <header className="max-w-4xl mx-auto px-4 mb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">{t('app.title')}</h1>
          <p className="text-gray-600">{t('app.subtitle')}</p>
        </div>
        
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
