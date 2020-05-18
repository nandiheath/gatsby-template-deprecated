const config = require('./gatsby-config');

exports.onCreatePage = async ({ page, actions: { createPage, deletePage } }) => {
  const originalPath = page.path;

  // Delete the original page (since we are gonna create localized versions of it)
  await deletePage(page);

  
  // create the alias for '/' using zh-hk
  await createPage({
    ...page,
    path: originalPath,
    context: {
      ...page.context,
      originalPath,
      lang: 'zh-hk',
    },
  });

  
  await Promise.all(
    config.siteMetadata.supportedLanguages.map(async ({ locale }) => {
      const localizedPath = `/${locale}${page.path}`;
      await createPage({
        ...page,
        path: localizedPath,
        context: {
          ...page.context,
          originalPath,
          lang: locale,
        },
      });
    })
  );
};

