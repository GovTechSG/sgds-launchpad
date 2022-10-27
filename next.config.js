/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

const withTM = require('next-transpile-modules')(['@govtechsg/sgds-masthead-react']);

const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig;
module.exports = withPlugins([
    withMDX,
    withTM,
  ],
  {
    // Append the default value with md extensions
    ...nextConfig,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  }
);
