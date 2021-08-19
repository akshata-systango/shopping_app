# Prooffly Front End

## Installation

### Clone repo

``` bash
# clone the repo
$ git clone  https://gitlab.com/tasinreza/prooffly-frontend.git

# go into app's directory
$ cd prooffly_frontend

# install app's dependencies
$ npm install
```


### Basic usage

``` bash



# dev server with hot reload at http://localhost:8000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:8000). The app will automatically reload if you change any of the source files.

### Build

Run `publish` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run publish
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
prooffly_frontend
├── public/                 # static files
│   |── index.html          # html template
|   |__ prooffly_v2.7       # stable core prooffly version wise template
│
├── assets/                 # assets
|    |__ imgs               # app images
|
├── scss/                   # app scss/css source
|
├── src/                    # project root
|   |-- action/             # folder for handling module action   
|   ├── containers/         # views source 
|   |     |__ App/         
|   |         |__ index.js  # app routes
|   |
│   ├── components/         # views source
|   |-- reducers/           # folder for handle dispatch payload
│   ├── index.js
│   └── store.js            # template state example 
│
├── utils/                  # helper functions
│
└── package.json
```
