module.exports = {
    configureWebpack: {
	devServer: {
	    watchOptions: {
		ignored: ["/node_modules/", "/public/", "**/.#*"]
	    }
	}
    },
    pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
