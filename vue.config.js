const path = require('path')
// const defaultSettings = require('./src/settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {

    devServer: {
        open: true,
        host: 'localhost',
        port: 80,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'business.1-dian.cn',
                ws: true,
                changOrigin: true
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: "name",
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
}
