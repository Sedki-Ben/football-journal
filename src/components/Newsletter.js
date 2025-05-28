import React from 'react';
import { useTranslation } from 'react-i18next';

function Newsletter() {
  const { t } = useTranslation();

  return (
    <div className="bg-red-50 dark:bg-red-900/20 px-6 py-8 md:px-10 rounded-xl">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
          {t('Stay Updated')}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {t('Subscribe to our newsletter to receive the latest updates and exclusive content')}
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder={t('Enter your email')}
            className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 flex-grow max-w-md"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors duration-300"
          >
            {t('Subscribe')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter; 