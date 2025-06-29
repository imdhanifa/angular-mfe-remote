const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'angular-mfe-remote',

  exposes: {
    './Routes': './src/app/app.component.ts'
  },

  library: { type: 'module' }, 
  
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
  }
});
