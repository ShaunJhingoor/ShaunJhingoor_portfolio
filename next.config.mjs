/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
      // Add a rule to handle PDF files
      config.module.rules.push({
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/assets/pdfs',
            publicPath: '/_next/static/assets/pdfs',
          },
        },
      });
      return config;
    },
  };
  
  export default nextConfig;
  
