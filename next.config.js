const withPWA = require('next-pwa')({
  dest: 'public'
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': {page: "/"},
      '/404': {page: "/404"}
    }
  },
  images: {
    loader: "custom"
  }
})
