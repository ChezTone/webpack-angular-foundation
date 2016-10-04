# Webpack-Angular-Foundation [![Build Status](https://travis-ci.org/ChezTone/webpack-angular-foundation.svg?branch=master)](https://travis-ci.org/ChezTone/webpack-angular-foundation)

A starter project that allows to use Angular2 and Foundation6 with webpack. This is a new version to use in place of the deprecated [angular2-foundation](https://github.com/Tony-Proum/angular2-foundation) project.
Using WebStater, we are allowed to reduce the size of packaged application from 2.5Mo to 1.3Mo. Also, created this new project has be done using less configuration and effort than the first one.

# Prerequisites

[NodeJs](https://nodejs.org/en/), [Typescript](https://www.typescriptlang.org/) and [Webpack](https://webpack.github.io/docs/) should be installed on your machine
Then just run `npm install` at the root of the project

# Usage

Run on local server

This command will allow you to start a local server @ http://localhost:8080 WebPack configuration for dev purposes (hot reload etc)

* `npm start`



Run tests

* `npm test`

Create the dist folder and package application with js minification and css purification

* `npm build`

# Docker

This project contains a Dockerfile which allow you to build a container on top of nginx. This container is already configure to compress
all resources requested by the client.

At this point this gzip configuration allow us to decrease file size from 1.3Mo to 350Ko

To build your own docker just run the following command in a terminal

`docker build -t myUser/myRepository .`

If you wanna use a build of the current master branch it is available using the docker command

`docker run cheztone/cheztone-front`