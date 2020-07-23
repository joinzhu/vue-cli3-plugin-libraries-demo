module.exports = {
    configureWebpack: config => {
        config.externals = {
            BannerAd: 'BannerAd'
        }
        config.output.libraryExport = 'default'
    },
}