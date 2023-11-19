### npx webpack

    - This will generate binary build main.js as successfull build.

### Configuration File

    - This is much more efficient than having to manually type in a lot of commands in the terminal
    - npx webpack --config webpack.config.js (Build using config file)

### Loading CSS

    - npm install --save-dev style-loader css-loader (loaders required for identify css)
    -  any file that ends with {.css} will be served to the style-loader and the css-loader

### Loading Images

    - using the built-in Asset Modules we can easily incorporate those in our system as well

### Loading Fonts

    - The Asset Modules will take any file you load through them and output it to your build directory

### Loading Data

    - Another useful asset that can be loaded is data, like JSON files, CSVs, TSVs, and XML. Support for JSON is actually built-in, similar to NodeJS
    -  import Data from './data.json' will work by default.
    - To import CSVs, TSVs, and XML you could use the csv-loader and xml-loader
    - npm install --save-dev csv-loader xml-loader

### HtmlWebpackPlugin

    - npm install --save-dev html-webpack-plugin
    - This will create Its own index.html file

### Using webpack-dev-server

    - The webpack-dev-server provides you with a rudimentary web server and the ability to use live reloading.
    - npm install --save-dev webpack-dev-server
    - This is the Main Thing to start server
    - "start": "webpack serve --open", (npm scripts)

### webpack-merge 
    - This used to merge dev and prod webpack scripts with common config.
    - npm install --save-dev webpack-merge

### Typescript Integration
    - npm install --save-dev typescript ts-loader
    