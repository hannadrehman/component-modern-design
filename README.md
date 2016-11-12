# Hangular-moderndesign

##Synopsis

Hangular-Modern Design is component Framework for front end development based on angularjs 1.5.
the application logic has shifted from server side to client side. so new we write all the application logic in javascript and html.it is very important to build a pattern of development that would help the developer write and develop neat and reusable code.modern web development has introduced the concept of web components , react and angular are to major javascript libraries that provide a good way of defining and writting components. the major problem with this approach is that there is alot of javascript to be included in our html pages. and to structure the project is even more difficult and problamatic. so here i have developed a Framework that takes care of all these moderen web development problems. this framework is build with Nodej,Gulpjs and angularJs. this framework bundles all the javascript,html,css and provides a neat and tidy code for production.

##Motivation

i have been a strugling Ux/UI engineer for a while now. and to create a folder structure for my project is the most challanging task ever. organisation of the code is very important when working with the team. if you are the project creater it is faily easy for you to dive into the code structure but for others it is difficult. so it is important to make a structure that makes development as well as organisation of code easy. i wanted to make a project which would make organising independent modules easy. thats is why i started on this project.

##Installation

You need to install NodeJs for this project to run successfully. 
this project uses. NODEJS,GULPJS as the build tools or task runner.if you dont have node installed please intall node first.

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
open cmd/terimnal and type in following commands.
```
npm install gulp
npm install gulp -g
npm install --global gulp-cli

```  
for WINDOWS:
You need to make sure that node,gulp path environment variable is set to call them from any directory.to test it type node or gulp in command line and hit enter. if there is no error then path is set. if not. then you need to explicitly set the path variables.

if you are getting error like gulp is not recognized then follow this link for the sollution http://stackoverflow.com/questions/24027551/gulp-command-not-found-error-after-installing-gulp


I have included all the node packages used in this project even then if you want to download them manually please install node npm on your system and open package.json file to look for all the project dependencies required. you can use npm to download them for your system.

##UNDERSTANDING THE PROJECT STRUCTURE
Before starting this project. it is important to know that this project is using gulpjs as a build tool.and a task runnner. to know more about gulpjs here is a reference  https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js. here we are following a definite folder structure and its advised to follow it otherwise the build tool might fail.

The folder structure of this project is very simple.we have 3 basic folders in our root directory with a gulpfile.js, package.json and readme.md

1.Development Folder : this folder contains all the files and and sub folders where you will actually code.(html,sass/css,js,).

2.Production Folder : this folder will be automatically populated with the files from the dev folder. Gulp does that task and all code for that is written in gulpfile.js. so you dont have to write or edit any file in this folder.

3.node modules Folder : this contains all the node modules required for the project. refer to packages.json to check all the dependencies required.
```
Hangular-moderndesign
|----Development
|       |----Assets
|       |      |----Css
|       |      |    |----bootstrap.css //all your vendor/css libraries go here.
|       |      | 
|       |      |----Js
|       |      |    |----appConfig.js // angular module definition is done here.
|       |      |    |----vendor.js //all external Js libraries and dependencies for angular module like uiRouter are required here. 
|       |      |---Images
|       |           |--- // all images for dev are kept here.
|       |
|       |----Components
|       |      |----Application // the basic component of this Framework . the entry point.
|       |      |     |----application.html.
|       |      |     |----application.scss.
|       |      |     |----applicationController.js.
|       |      |     |----applicationService.js.
|       |      |     |----_colors.scss.
|       |      |     |----_variables.scss.
|       |      |     |----_components.scss.
|       |      |
|       |      |----Common
|       |      |     |----Navigation // reusable components like drop down list,nav,tables pictures,etc).
|       |      |     |        |----navigation.html
|       |      |     |        |----navigation.js
|       |      |     |        |----navigationController.js
|       |      |     |        |----navigation.scss
|       |      |     |----YourModule
|       |      |              |----yourModule.html
|       |      |              |----yourModule.js
|       |      |              |----yourModule.scss
|       |      |              |----yourModuleController.js
|       |      |-----View
|       |      |     |----Photos //all components that are used a Views/ pages/partials.
|       |            |        |----photos.html
|       |            |        |----photos.js
|       |            |        |----photosController.js
|       |            |        |----photosService.Scss
|       |            |        |----photos.scss
|       |            |----Posts
|       |                     |----posts.html
|       |                     |----post.js
|       |                     |----postController.js
|       |                     |----postService.js
|       |                     |----post.scss
|       |----index.html 
|
|----Production
|       |----Css
|       |     |----bundle.css //all our custom css
|       |     |----vendor.css // all css libraries are bundled and minified here.
|       |----Js
|       |     |----bundle.js // all our custom js (anglar modules and components).
|       |     |----vendor.js // all js libraries and dependencies for angularjs
|       |     |----templateCache.js // angularApp that has templatecache service with all html files in it,
|       |----Images
|       |     |--- logi.png // all images are transfered here,
|       |
|       |----index.html
|       |
|----Node Modules
|       |---- // all required modules.
|        
|----gulpfile.js // build tasks are written here.
|----packages.json // all dependencies for project are here.
``` 
##The Framework

The prerequisite of this project are : AngularJs 1.5, NodeJs and Sass for styling.
the sass file are compiled into css files by gulp js.
node syntax in components is also converted into Js files by gulp browserify.

Whats interesting about this project is that it is using Angular Componetns extensively. 
so what exacly are components ?
Components are reusable piece of codes that can be used anywhere in the application by just using the component tag ```<some-component></some-component>``` for reference of angular components here is an article https://toddmotto.com/exploring-the-angular-1-5-component-method/

There are 2 types of components in this framework

1. Views (partials) : these are the pages/views that change on routing,ex home page,profile page ,about page etc. all these pages/views/partials are identified as components. they have their own Html,scss/css,definition,routing,controller and Services. with this these pages become completely independent. and if working in team different members can be working on different components. they will not interfare in other team members working. all the webservice calls will be made in the service of these components and to show the data the data will be passed into the Common component. ```<my-post post-data="$ctrl.posts"></my-posts>```

2. Common : these are the components who will only show the data. these are reusable components that will be used to display data. they take in the data and represent that in the view.these components have their own html,css,definition,service,controllers.


#The Entry Point.
the entry point of this application is the Application Component.this is the root of the application and is inlucded in your development/index.html . this is basically a entry point component and inside this components template we start our webapplication. all other components will inherit from this component as being parent of all.
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


##License
Free For All
