/**
 * Module Federation configuration for igot-learner-portal (Remote).
 *
 * IMPORTANT: We resolve ModuleFederationPlugin from Angular's bundled
 * webpack (inside @angular-devkit/build-angular) to avoid the dual-webpack
 * Compilation class mismatch with the top-level webpack package.
 *
 * CROSS-VERSION STRATEGY:
 * This remote (Angular 20) is consumed by an Angular 16 host.
 * Angular packages are NOT shared — each side bundles its own.
 * Features are exposed as Web Component bootstrap functions
 * (via @angular/elements) so the host renders them as custom
 * elements with full framework isolation.
 */

// Use Angular's internal webpack to avoid Compilation mismatch
let ModuleFederationPlugin;
try {
  const angularWebpack = require('@angular-devkit/build-angular/node_modules/webpack');
  ModuleFederationPlugin = angularWebpack.container.ModuleFederationPlugin;
} catch {
  // Fallback if Angular doesn't bundle webpack separately
  ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
}

const path = require('path');

module.exports = (config, options) => {
  // Merge into the existing Angular-generated config
  config.output = {
    ...config.output,
    uniqueName: 'igotLearnerPortal',
    publicPath: 'http://localhost:4200/',
  };

  config.optimization = {
    ...config.optimization,
    runtimeChunk: false,
  };

  config.plugins = [
    ...(config.plugins || []),
    new ModuleFederationPlugin({
      name: 'igotLearnerPortal',
      filename: 'remoteEntry.js',

      exposes: {
        // ── Full-app modules (legacy) ──────────────────────────
        './AppModule':           './src/app/app.module.ts',
        './BootstrapComponent':  './src/app/app.component.ts',

        // ── Full-app web component (entire new portal as one element) ──
        './AppFeature':          './src/app/features/app/entry.ts',

        // ── Feature Web Component entries ──────────────────────
        './HomeFeature':         './src/app/features/home/entry.ts',
        './SearchFeature':       './src/app/features/search/entry.ts',
        './ProfileFeature':      './src/app/features/profile/entry.ts',
        './MyLearningFeature':   './src/app/features/my-learning/entry.ts',
        './TocFeature':          './src/app/features/toc/entry.ts',
      },

      // No shared deps — Angular 20 bundles independently of Angular 16 host.
      // Each exposed feature bootstraps its own mini-application via
      // createApplication() + @angular/elements (zoneless).
      shared: {},
    }),
  ];

  return config;
};
