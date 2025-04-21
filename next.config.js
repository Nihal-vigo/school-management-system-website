
// module.exports =  {
//     "env": {
//         "URL": "https://wallet.daikicoin.org",
//       }
//   }

module.exports = {
  compress: false,
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({

  
  // enabled: process.env.ANALYZE === 'true',
  enabled: false,
  openAnalyzer: false,
})
module.exports = withBundleAnalyzer({})
