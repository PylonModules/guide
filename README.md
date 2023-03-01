![guide](https://socialify.git.ci/pylonmodules/guide/image?description=1&descriptionEditable=How%20to%20install%20Pylon%20Modules&font=Raleway&language=1&name=1&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Dark)

Welcome to the Pylon Modules guide! This guide will show you how to install our various modules, along with how to configure them to your liking.

All our modules are stored in seperate repositories, and in the `modules` folder in this repository.

## All modules
> * [Autorole](https://github.com/pylonmodules/autorole)

## Initial installation
All modules are stored in their own files in the `modules` folder.

*There will be instructions on how to install specific modules in their own repository.*

Create a file called `config.ts` in your Pylon Editor. This is the main configuration file that you will add to and edit based on what modules you are installing, and what you need to configure.

Put this code into the `config.ts` file:
```ts
// Pylon Modules Configuration File
//
// For information on how to use this file,
// please visit our guide repository
// https://github.com/pylonmodules/guide
//

// Global configuration
const global = {
  prefix: '!',
  servername: 'your server name here',
  embedcolor: 0x3963e2,
};
export { global };

// Module configuration
```

This is the initial global configuration, the config that some modules will use. You can fill it in now if you want to.

> `prefix` is the prefix that you want any commands to use
>
>`servername` is, well, your server name
> 
> `embedcolor` is the color you want any embeds to use
