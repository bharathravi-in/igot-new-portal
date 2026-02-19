/**
 * Module Federation requires asynchronous bootstrap to allow
 * shared dependencies to be resolved before the application starts.
 *
 * This is the standard MF bootstrap pattern:
 * main.ts → (async import) → bootstrap.ts → platformBrowserDynamic
 */
import('./bootstrap').catch((err) => console.error(err));
