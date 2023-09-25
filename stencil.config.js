const { reactOutputTarget } = require('@stencil/react-output-target');

exports.config = {
  namespace: 'qr-code',
  outputTargets: [
    {
      type: 'dist',
    },
    reactOutputTarget({
      componentCorePackage: 'qr-code',
      proxiesFile: './dist/react/index.ts',
    }),
    {
      type: 'www',
      serviceWorker: false,
    },
  ],
};
