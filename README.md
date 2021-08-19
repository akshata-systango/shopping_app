# Shopping_app Front End

## Installation

### Clone repo

``` bash
# clone the repo
$ git clone  https://github.com/akshata-systango/shopping_app
# go into app's directory
$ cd shopping_app

# install app's dependencies
$ npm install
```


### Basic usage

``` bash



# dev server with hot reload at http://localhost:8000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
prooffly_frontend
├── public/                 # static files
│   |── index.html          # html template
|   |__ manifest.json      # this is a menifest.json file
│
├── assets/                 # assets
|    |__ images               # app images
|
├── scss/                   # app scss/css source
|
├── src/                    # project root
|   |
|   |
│   ├── components/         # views source
|   |-- CartCheckout        # folder for customer/order detail form
|   |-- Headers             # folder for handling the header
|   |-- Product             # folder for handling products 
|   |-- UI                  # folder for providing UI modals
|   |
|   ├── Routes              # app routes
|   |
|   ├── shared              # shared component of app
|   |
|   ├── store               # folder for handling the context
|   |
|   ├── utils               # folder providing the halper function and constant array   
│   ├── index.js            # Entry point of app
│   └── App.js              # template  
│
├── utils/                  # helper functions
│
└── package.json
```
