import React from 'react';
import { FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { getLocalizedArticleContent } from '../data/articles';

function Article({ article }) {
  const { i18n, t } = useTranslation();
  
  if (!article) {
    return <div>{t('No articles available')}</div>;
  }

  const localizedContent = getLocalizedArticleContent(article, i18n.language);

  return (
    <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <img
          src={article.image}
          alt={localizedContent.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Article Content */}
      <div className="px-6 py-8 md:px-10">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 rounded-full text-sm font-medium">
              {t(article.category)}
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              {article.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            {localizedContent.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <img
                src={article.authorImage || 'https://via.placeholder.com/40'}
                alt={article.author}
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="font-medium text-gray-900 dark:text-white">
                {t('By')} {article.author}
              </span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {localizedContent.content.map((section, index) => (
            <div key={index} className="mb-8">
              {section.type === 'paragraph' && (
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              )}
              {section.type === 'subheading' && (
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mt-8 mb-4">
                  {section.content}
                </h2>
              )}
              {section.type === 'image' && (
                <figure className="my-8">
                  <img
                    src={section.url}
                    alt={section.caption}
                    className="w-full rounded-lg shadow-lg"
                  />
                  {section.caption && (
                    <figcaption className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                      {section.caption}
                    </figcaption>
                  )}
                </figure>
              )}
              {section.type === 'quote' && (
                <blockquote className="border-l-4 border-red-900 dark:border-red-600 pl-4 italic my-6">
                  {section.content}
                  {section.author && (
                    <footer className="text-gray-600 dark:text-gray-400 mt-2">
                      — {section.author}
                    </footer>
                  )}
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* Article Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-900 dark:hover:text-red-400">
                <FiHeart className="w-5 h-5" />
                <span>{article.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-900 dark:hover:text-red-400">
                <FiMessageCircle className="w-5 h-5" />
                <span>{article.comments}</span>
              </button>
            </div>
            <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-900 dark:hover:text-red-400">
              <FiShare2 className="w-5 h-5" />
              <span>{t('Share')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Subscribe Box */}
      <div className="bg-red-50 dark:bg-red-900/20 px-6 py-8 md:px-10">
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
    </article>
  );
}

export default Article; 