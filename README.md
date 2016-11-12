# Hangular-moderndesign

##Synopsis

Hangular-Modern Design is a web component based Framework for front end development built with node and angularjs 1.5.
The application logic has shifted from server side to client side. We write all the application logic in javascript and html.It is very important to build a pattern of development that would help the developer write and develop neat and reusable code.Modern web development has introduced the concept of web components , react and angular are two major javascript libraries that provide a good way of defining and writing components. Major problem with this approach is that there is alot of javascript to be included in our html pages. structuring the project is even more difficult and problamatic. so here i have developed a framework that takes care of all these modern web development problems. this framework is built with Nodejs,Gulpjs and angularJs. this framework bundles and minifies all the javascript,html,css and provides a neat and tidy code for production.

##Motivation

I have been a strugling Ux/UI engineer for a while . and to create a folder structure for my project was the most challanging task ever. organisation of the code is very important when working with the team. if you are the project creator, it is fairly easy for you to dive into the code structure but for others it is difficult. so it is important to make a structure that makes development as well as organisation of code easy.So i wanted to make a project that would make organizing independent modules easy, which is why i started with this this project.

##Features
1.Javascript code hint and beep sound on error.

2.Error notifications in Cmd/terminal.

3.Automatic bundling and minification

4.Html Bundling into angular templateCache service.

5.Component Design Architecture.

6.Automatic Build and bundling on save.

7.Browser auto refresh on save.

8.Automatic Sass Compilation and css minification.

9.Automatic Js Build and Uglify.

10.html templates compressed in angular $templateCache service.

11.Image optimization.

12.All dependencies downloaded from npm.

13.automatic file transfer to production Folder.

14.Seperation of concern.

15.Easy Commands to add new components.

16.Easy installation.

##Installation

You need to install NodeJs for this project to run successfully. 
this project uses NODEJS,GULPJS as  build tools or task runners.if you dont have node installed please intall node first.

WINDOWS:
https://nodejs.org/en/download/

LINUX:
```
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 68576280
sudo apt-add-repository "deb https://deb.nodesource.com/node_5.x $(lsb_release -sc) main"
sudo apt-get update
sudo apt-get install nodejs
```

once the node and npm is installed you need to install gulp globally.

here is how you can download and install gulp : 
open cmd/terimnal and type the following commands.
```
npm install gulp
npm install gulp -g
npm install --global gulp-cli

```  
for WINDOWS:
You need to make sure that node,gulp path environment variable are set.to test type node or gulp in the command line and hit enter. if you do not see any error then your path is set. otherwise you need to explicitly set the path variables.

if you are getting an error like "gulp is not recognized" then follow the below link for solution http://stackoverflow.com/questions/24027551/gulp-command-not-found-error-after-installing-gulp


I have included all the node packages used in this project and still if you want to download them manually please install node npm on your system and open package.json file to look for all the project dependencies required. you can use npm to download them for your system.

##UNDERSTANDING THE PROJECT STRUCTURE
Before starting this project. it is important to know that this project is using gulpjs as a build tool and a task runnner. to know more about gulpjs here is a reference given  https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js. Here we are following a definite folder structure and it is advised to follow the same otherwise the build tool might fail.

The folder structure of this project is very simple. We have 3 basic folders in our root directory with a gulpfile.js, package.json and readme.md

1.Development Folder : This folder contains all the files and sub folders where you will actually code.(html,sass/css,js,).

2.Production Folder : This folder will be automatically populated with the files from the dev folder. Gulp does that task and all code for that is written in gulpfile.js. so you dont have to write or edit any file in this folder.

3.node modules Folder : This contains all the node modules required for the project. refer to packages.json to check all the dependencies required.
```
Hangular-moderndesign
|----Development
|     |----Assets
|     |     |----Css
|     |     |    |----bootstrap.css //all your vendor/css libraries go here.
|     |     | 
|     |     |----Js
|     |     |    |----appConfig.js // angular module definition is done here.
      |     |    |----vendor.js //all external Js libraries and dependencies for angular module like uiRouter are required here. 
|     |     |---Images
|     |          |--- // all images for dev are kept here.
|     |
|     |----Components
|     |     |----Application // the basic component of this Framework . the entry point.
|     |     |     |----application.html.
|     |     |     |----application.scss.
|     |     |     |----applicationController.js.
|     |     |     |----applicationService.js.
|     |     |     |----_colors.scss.
|     |     |     |----_variables.scss.
|     |     |     |----_components.scss.
|     |     |
|     |     |----Common
|     |     |     |----Navigation // reusable components like drop down list,nav,tables pictures,etc).
|     |     |     |       |----navigation.html
|     |     |     |       |----navigation.js
|     |     |     |       |----navigationController.js
|     |     |     |       |----navigation.scss
|     |     |     |----YourModule
|     |     |             |----yourModule.html
|     |     |             |----yourModule.js
|     |     |             |----yourModule.scss
|     |     |             |----yourModuleController.js
|     |     |-----View
|     |     |      |----Photos //all components that are used a Views/ pages/partials.
|     |            |       |----photos.html
|     |            |       |----photos.js
|     |            |       |----photosController.js
|     |            |       |----photosService.Scss
|     |            |       |----photos.scss
|     |            |----Posts
|     |                    |----posts.html
|     |                    |----post.js
|     |                    |----postController.js
|     |                    |----postService.js
|     |                    |----post.scss
|     |----index.html 
|
|----Production
|     |----Css
|     |     |----bundle.css //all our custom css
|     |     |----vendor.css // all css libraries are bundled and minified here.
|     |----Js
|     |     |----bundle.js // all our custom js (anglar modules and components).
|     |     |----vendor.js // all js libraries and dependencies for angularjs
|     |     |----templateCache.js // angularApp that has templatecache service with all html files in it,
|     |----Images
|     |     |--- logi.png // all images are transfered here,
|     |
|     |----index.html
|     |
|----Node Modules
|     |---- // all required modules.
|       
|----gulpfile.js // build tasks are written here.
|----packages.json // all dependencies for project are here.
``` 
##The Framework

The pre-requisites for this project are : AngularJs 1.5, NodeJs and Sass for styling.
the sass files are compiled into css files by gulp js.
Node syntax in components is also converted into Js  by gulp js.

What's interesting about this project is that it is using Angular Components extensively. 
so what exactly are components ?
Components are reusable piece of codes that can be used anywhere in the application by just using the component tag ```<some-component></some-component>``` here is an article given for reference of angular components by todd motto https://toddmotto.com/exploring-the-angular-1-5-component-method/

There are 2 types of components in this framework:

1. Views (partials) : these are the pages/views that change on routing,ex home page,profile page ,about page etc. all these pages/views/partials are identified as components. they have their own Html,scss/css,definition,routing,controller and Services. with this, these pages/components becomes completely independent. and if working in a team,  different members can be working on different components. they will not interfere in other team members work. all the webservice calls for the component will be made in the component service.js file and to display the data it will be passed into the "Common component". ```<my-post post-data="$ctrl.posts"></my-posts>```
to Create a new view Component there is a simple command written. open Terminal/cmd in the root folder and type this command
```
gulp view-component --options ComponentName
```

2. Common : these components are reusable which will only display data. the data will be passed into them from the parent component.these components have their own html,css,definition,service and controllers. 
to Create a new Common Component there is a simple command written. open Terminal/cmd in the root folder and type this command
```
gulp common-component --options ComponentName
```
ANGULAR TEMPLATE CACHE SERVICE:
to bundle up the html partials we will be taking advantage of angular js $templateCacheService.
so using gulp we will automaticaly transfer and convert all html partials of the components into the angular template cache.
```
app.component('albumPhotos',{
	controller:['$stateParams','albumPhotosService',require('./albumPhotosController.js')],
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Views/AlbumPhotos/albumPhotos.html');
	}]
});
```
to read about template cache here is a good reference : https://thinkster.io/templatecache-tutorial

#The Entry Point.
The entry point of this application is the "Application Component".this is the root of the application and is included in your development/index.html . this is basically an entry point component and inside this component template we start our web application. all other components will inherit from this component as being parent of all.
``` 
<!-- index.html !-->
<html>
<head></head>
<body>
<!-- this is the entry point of the application !-->
<application></application>

</body>
</html>
```
Application component contains :

1.application.js :contains module defintion and route .

2.application.html : contains template for this module

3.applicationService.js : all webservice calls should be written in factory inside it.

4.applicationController: the controller for this application

5.application.scss : site scss file. which sets the layout for the app.

6._colors.scss : a seperate sass partials only for colors

7._components.scss : sass partials for css components like buttons,table , accordion etc

8._variable.scss : all sass varables should be written here.


##How to Start.
Once all the dependencies have been installed you can start the project by simply typing this command in CMD/terminal in the root folder.
```
gulp
```
this will automatically start a node server and will serve files from the production folder.



while adding new images to asset folder in development run this command in the root directory to transfer files to the production folder.
```
gulp image
```

##Gulpfile.js
all the automation and task building work is done in gulpfile.js
there are specific gulp taks defined in this file that takes care of the automation and build process. some of the features are commented out and some need to be commented when finally taking the code to production.these are :


1.the task build-component-js has uglify() feature commented. uncomment it while finally taking code to production and build it.

2.the taks build-component-js has sourcemaps.write() is uncommented. comment it and build the code before taking to production because size of the file bundle.js gets increase due to source maps.

