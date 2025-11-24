// 2. Dynamic Import
// Dynamic imports allow you to load modules only when needed — useful for lazy loading and code splitting.

import('./module.js')
  .then(module => {
    module.functionName();
  });
async function loadModule() {
  const module = await import('./utils.js');
  module.sayHello();
}
