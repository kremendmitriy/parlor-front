/** @type {import('next').NextConfig} */
const nextConfig = {
   compiler: {
      styledComponents: true,
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'tattoo-parlor.s3.amazonaws.com',
            port: '',
            pathname: '/**',
         },
      ],
   },
};

export default nextConfig;
