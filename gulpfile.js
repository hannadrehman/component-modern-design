//all dependencies go here.
var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	stylishJS = require('jshint-stylish'),
	sass   = require('gulp-sass'),
	makeDir = require('mkdirp'),
	file = require('fs'),
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	browserify=require('browserify'),
	gutil=require('gulp-util'),
	sourceMaps = require('gulp-sourcemaps'),
	source     = require('vinyl-source-stream'),
	buffer     = require('vinyl-buffer'),
	sourceMaps = require('gulp-sourcemaps'),
	uglify=require('gulp-uglify'),
	rename=require('gulp-rename'),
	glob=require('glob'),
	templateCache = require('gulp-angular-templatecache'),
	minifyHtml = require('gulp-minify-html'),
	flatten = require('gulp-flatten'),
	imagemin = require('gulp-imagemin');

var sourcePath='Development/Components/**/*',
	destinationPath='Production/',
	vendorJSPath='Development/Assets/Js/vendor.js',
	vendorCssPath='Development/Assets/Css/**/*',
	indexPageSrc='Development/index.html',
	indexPageDest='Production/';

var commentsForFiles={
	appModule:'// this is the node syntax of including js module. the Main js module is in applicationComponent \n',
	route:'//routing of component done here. change url and state if you want custome routes/parameters etc\n'
}


//default task is run by gulp by default.
gulp.task('default',['jshint','build-css','build-component-js','build-vendor-js','build-vendor-css','build-template-cache','index-page','image','watch']);
gulp.task('watch',['browserSync'],function(){
	try{
		//all watchers go here
		gulp.watch(sourcePath+'*.js',['jshint']);
		gulp.watch(sourcePath+'*.scss', ['build-css']);
		gulp.watch(vendorJSPath,['build-vendor-js']);
		gulp.watch(sourcePath+'*.js',['build-component-js']);
		gulp.watch(vendorCssPath+'*.css',['build-vendor-css']);
		gulp.watch(sourcePath+'*.html',['build-template-cache']);
		gulp.watch(indexPageSrc,['index-page']);
		gulp.watch(['Development/Assets/Images/*.jpg','Development/Assets/Images/*.jpeg','Development/Assets/Images/*.png'],['image']);


	}
	catch(e){
		console.log('exception found \n');
		console.log(e);
	}


	});

//all taskts go here

gulp.task('jshint', function() {
	//this task shows errors and warnings made in jacascript in all the components. (only components).
	// later added beep sound on any error or warning
  return gulp.src(sourcePath+'*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylishJS,{beep:true}));
    // shows errors in javascript
	});

gulp.task('build-css', function() {
	//build sass, minify it
  return gulp.src(sourcePath+'*.scss')
    .pipe(sass())
    .on('error', function(e){
    	gutil.beep()
    	gutil.log('error compiling sass')
    	gutil.log(e)
    })
    .pipe(sourceMaps.init())
    .pipe(minifyCSS())
    .on('error', function(e){
		gutil.beep()
    	gutil.log('error minifyCSS')
    	gutil.log(e)
    })
    .pipe(concat('bundle.css'))
    .on('error', function(e){
    	gutil.beep()
    	gutil.log('error bundle css')
    	gutil.log(e)
    })
    // .pipe(sourceMaps.write()) //uncomment if you want sourceMaps
    // .on('error', function(e){
    //  	gutil.beep()
    // 	gutil.log('error write css sourceMaps')
    // 	gutil.log(e)})
    .pipe(gulp.dest(destinationPath+'Css'))
    .on('error', function(e){
     	gutil.beep()
    	gutil.log('error copying css to Production')
    	gutil.log(e)})
    .pipe(browserSync.reload({
    	stream:true
    }));
     //compiles sass
	});

gulp.task('browserSync', function() {
	//browser auto refresh at every save
  browserSync.init({
    server: {
      baseDir: 'Production'
    },
  })
	});

gulp.task('build-component-js',function(){
	//build component js
	try{
		glob(sourcePath+'*.js',function(err,files){
		if(err){
			console.log(err);
		}
		else{
			browserify({
				entries:files
			})
	       .bundle()
	        .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error bundle component Production')
		    	gutil.log(e)})
	       .pipe(source('bundle.js'))
	        .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error bundle component Production to bundle.js')
		    	gutil.log(e)})
	       .pipe(buffer())
	       	 .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error converting component js to buffer')
		    	gutil.log(e)})
	       .pipe(rename('bundle.js'))
	        .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error bundle component rename  to bundle.js')
		    	gutil.log(e)})
	       .pipe(sourceMaps.init({ loadMaps : true }))
	      //  .pipe(uglify())  // uncomment when in Production
				//  .on('error', function(e){
				//  gutil.beep()
				//  gutil.log('error uglifying component js ')
				//  gutil.log(e)})
	      //  .pipe(sourceMaps.write()) // comment when code is taken to production
	      //   .on('error', function(e){
		    //  	gutil.beep()
		    // 	gutil.log('error writing componentjs sourceMaps ')
		    // 	gutil.log(e)})
	       .pipe(gulp.dest('Production/Js'))
	        .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error copying component js to  Production ')
		    	gutil.log(e)})
	       .pipe(browserSync.reload({
	    		stream:true
	    	}));

			}

		});
	}
	catch(e){
		console.log('exception found in building component \n');
		console.log(e);
	}

	});

gulp.task('build-vendor-js',function(){
 	 try{
 		//gulp.src('Development/Assets/Js/vendor.js')
 		//build vendor js.
 		// all js files like angular,route,sanitize must be downloaded from npm.
 		// if manually downloaded than edit vendorjs file in deve/assets
 	 	browserify('Development/Assets/Js/vendor.js')
       .bundle()
        .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error bundle vendor js')
		    	gutil.log(e)})
       .pipe(source('Development/Assets/Js/vendor.js'))
       .pipe(buffer())
        .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error converting to buffer vendorjs')
		    	gutil.log(e)})
       .pipe(rename('vendor.js'))
        .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error renaming to vendorjs')
		    	gutil.log(e)})
       //.pipe(sourceMaps.init({ loadMaps : true }))
       .pipe(uglify())  // Strip inline source maps
       //.pipe(sourceMaps.write())
        .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error uglify vendorjs')
		    	gutil.log(e)})
       .pipe(gulp.dest('Production/Js'))
        .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error copying vendor js to Production ')
		    	gutil.log(e)})        // Save 'bundle' to build/
       .pipe(browserSync.reload({
	    		stream:true
	    	}))
 	 }
 	 catch(e){
 	 	console.log('exception found in building vendor css \n');
 	 	console.log(e);

 	 }

		});

gulp.task('build-vendor-css',function(){
	//build vendor css.
	// all vendor css are manually downloaded unminified.
	// css files should not be minified.
	 return gulp.src(vendorCssPath+'*.css')
	    .pipe(minifyCSS())
	     .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error minify vendor css')
		    	gutil.log(e)})
	    .pipe(concat('vendor.css'))
	     .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error bundle vendor css')
		    	gutil.log(e)})
	    .pipe(gulp.dest(destinationPath+'Css'))
	     .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error copying vendor css to Production')
		    	gutil.log(e)})
	    .pipe(browserSync.reload({
	    		stream:true
	    	}));
		});

gulp.task('view-component',function(){
	//this task creates a new folder structure and files for the component
	// and injects required text into the files.
	//in js files the module definition will be injected,dummy html,route,import sass etc.

	try{
		var args=process.argv;
			var componentName=args[args.length-1];
			console.log('Please Wait. '+componentName+' Component is Being Created');
			if(componentName!=undefined || componentName!=''){
				var directoryToComponent='Development/Components/Views/'+componentName;
				makeDir(directoryToComponent,function(err){
				if(err){
					console.log(err);
				}
				else{
					    //to make our files pascal cased
						var cName=componentName; // we have made folder as 'F'older and files as 'f'iles. this is for Folder name
						componentName=componentName.split('');
						componentName[0]=componentName[0].toLowerCase();
						componentName=componentName.join('');

						//now we have pascal case string component name . which means it needs to be splited by a '-' for
						// angular format. eg homeComponent = <home-component></home-component>
						//since we are using template as component in routing, so it is important
						var index=[];
						for (var i = 0; i < componentName.length-1; i++) {
							if(componentName[i]===componentName[i].toUpperCase()){
								index.push(i);
							}
						}
						//we have indexes where to split the string now.
						//this fucntion only splits into 3 words. then it will fail.
						var htmlTag=componentName;
						htmlTag=htmlTag.split('');
						var count=0;
						for(var i = 0;i<index.length;i++){
							if(count==0){
								htmlTag[index[i]]=htmlTag[index[i]].toLowerCase();
								htmlTag.splice(index[i],0,'-');
								count++;
							}else{
								htmlTag[index[i]+1]=htmlTag[index[i]+1].toLowerCase();
								htmlTag.splice(index[i]+1,0,'-');
								count++;
							}
						}
						htmlTag=htmlTag.join('');
						//below is the code that will be injected automatically into the files.
						//the code includes module definotion,dependency load etc.

 					//this is the angular app module that will be injected in the new files created
 					//later added comments also.
					var appModule=commentsForFiles.appModule+'var app=require("../../../../Development/Assets/Js/appConfig");';
					var controller='var componentController=require("./'+componentName+'.controller");';

					// creates component with its route and component definition aling with the controller.
					var componentRoute=commentsForFiles.route+`app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('`+componentName.toLowerCase()+`',{
			url:'/`+componentName.toLowerCase()+`',
		template:'<`+htmlTag+'></'+htmlTag+`>'
		//please be carefull about this. this is the route template and should match component definition
	});
}]);

app.component('`+componentName+`',{
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	controller:componentController,

	//we are using angular template cache service to cache all our templates/partials.
	//this syntax should not be touched because gulp will covert partials in this service data.

	template:['$templateCache',function($templateCache){
		return $templateCache.get('Views/`+cName+'/'+componentName+`.html');
	}]
});`
					//controller file for the componenet
					var componentController=`
//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
//`+componentName+`Ctr.$inject=[];
function `+componentName+`Ctr(){
	console.log('`+componentName+` component is up and working');
}
 module.exports=`+componentName+`Ctr;`;
					//injects  service with app module created into new component service created.
					var componentService=`app.factory('`+componentName+`Service',`+componentName+`Factory);
//dependency injection goes here. all the services that are needed by this factory
`+componentName+`Factory.$inject=['$http'];
function `+componentName+`Factory($http){
	//a factory function returns a singleton object.
	return new factoryMethods($http);
}
//this function contains all the factory methods,or service call methods here.
//web service call functions should be declared here with this.functionname(){} foramt.
function factoryMethods(http){
	this.functionName='hello this is a factory function';
}
					`
					//this is the basic html template for the new component
					var  componentDummyHtml='<h1>hello you have successfully created &nbsp;'+componentName+ '&nbsp; component</h1>';
					//this includes imports in the saas file . imports are from application component. as the root
					var componentSass='@import "../../Application/colors.scss"; \n @import "../../Application/variables.scss";'


					//creating new files and injecting the required data into them/
					file.writeFileSync(directoryToComponent+'/'+componentName+'.js','//Author : Hannad Rehman ' + new Date() +'\n' +appModule+'\n'+controller +'\n' +componentRoute);
					file.writeFileSync(directoryToComponent+'/'+componentName+'.service'+'.js','//Author : Hannad Rehman ' + new Date() +'\n'+appModule+'\n' +componentService);
					file.writeFileSync(directoryToComponent+'/'+componentName+'.controller'+'.js','//Author : Hannad Rehman ' + new Date() +'\n' + componentController);
					file.writeFileSync(directoryToComponent+'/'+componentName+'.html','<!-- Author : Hannad Rehman ' + new Date() +'-->' +'\n' +componentDummyHtml);
					file.writeFileSync(directoryToComponent+'/'+componentName+'.scss','/* Author : Hannad Rehman ' + new Date() +'*/ \n' +componentSass +'\n' + cssMediaQueries);
					console.log('successfully created component ',componentName);

				}
			});
			}
	}
	catch(e){
		console.log('exception found in creating a new view component \n');
		console.log(e);
	}


	});
gulp.task('common-component',function(){
	try{
		var args=process.argv;
			var componentName=args[args.length-1];


			if(componentName!=undefined || componentName!=''){
				var directoryToComponent='Development/Components/Common/'+componentName;
				makeDir(directoryToComponent,function(err){
				if(err){
					console.log(err);
				}
				else{




		//get component name and convert its first character to lowecase.. make the string cammel case.
						var cName=componentName; // we have made folder as 'F'older and files as 'f'iles. this is for folder name
						componentName=componentName.split('');
						componentName[0]=componentName[0].toLowerCase();
						componentName=componentName.join('');


					//this is the angular app module that will be injected in the new files created
					var appModule=commentsForFiles.appModule+"var app=require('../../../../Development/Assets/Js/appConfig');";
					var controller='var componentController=require("./'+componentName+'.controller");'

					// creates component with its route and component definition aling with the controller.
					var componentDef=`
app.component('`+componentName+`',{
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	controller:componentController,
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/`+cName+'/'+componentName+`.html');
	}]
});`


					//uncomment the below lines if you want to inject module details into common component service.

					//injects  service with app module created into new component service created.

var componentService=`app.factory('`+componentName+`Service',`+componentName+`Factory);
//dependency injection goes here. all the services that are needed by this factory
`+componentName+`Factory.$inject=['$http'];
function `+componentName+`Factory($http){
	//a factory function returns a singleton object.
	return new factoryMethods($http);
}
//this function contains all the factory methods,or service call methods here.
//web service call functions should be declared here with this.functionname(){} foramt.
function factoryMethods(http){
	this.functionName='hello this is a factory function';
}
`
				//controller file for the componenet
					var componentController=`
//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
//`+componentName+`Ctr.$inject=[];
function `+componentName+`Ctr(){
	console.log('`+componentName+` component is up and working');
}
 module.exports=`+componentName+`Ctr;`;

		//this is the basic html template for the new component
					var  componentDummyHtml='<h1>hello you have successfully created '+componentName+ ' component</h1>';
					//this includes imports in the saas file . imports are from application component. as the root
					var componentSass='@import "../../Application/colors.scss"; \n @import "../../Application/variables.scss";'

					file.writeFileSync(directoryToComponent+'/'+componentName+'.js','//Author : Hannad Rehman ' + new Date() +'\n' + appModule+'\n' +controller +'\n' +componentDef);

					//uncomment this line if you want service in common components.
					file.writeFileSync(directoryToComponent+'/'+componentName+'.service'+'.js','//Author : Hannad Rehman ' + new Date() +'\n'+appModule+'\n' +componentService);

					file.writeFileSync(directoryToComponent+'/'+componentName+'.controller'+'.js','//Author : Hannad Rehman ' + new Date() +'\n' + componentController);
					file.writeFileSync(directoryToComponent+'/'+componentName+'.html','<!-- Author : Hannad Rehman ' + new Date() +'-->' +'\n' +componentDummyHtml);
					file.writeFileSync(directoryToComponent+'/'+componentName+'.scss','/* Author : Hannad Rehman ' + new Date() +'*/' +'\n'+componentSass +'\n'+ cssMediaQueries);

					console.log('successfully created component ',componentName);
				}
			});
			}
	}
	catch(e){
		console.log('exception found in craeting a new common component \n');
		console.log()
	}



	});
gulp.task('build-template-cache',function(){

	return gulp.src(sourcePath+'.html')
    .pipe(templateCache('templateCache.js', { module:'templateCache', standalone:true }))
    .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error creating template cache')
		    	gutil.log(e)})
    .pipe(gulp.dest(destinationPath+'Js'))
    .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error copying templateCache to Production')
		    	gutil.log(e)})
    .pipe(browserSync.reload({
	    		stream:true
	    	}));

		});

gulp.task('index-page',function(){
	 return gulp.src(indexPageSrc)
	 .pipe(flatten())
	 .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error flattig index page')
		    	gutil.log(e)})
	 .pipe(gulp.dest(indexPageDest))
	 .on('error', function(e){
		     	gutil.beep()
		    	gutil.log('error copying index page')
		    	gutil.log(e)})
	 .pipe(browserSync.reload({
	    		stream:true
	    	}));
		});


gulp.task('image',function(){
	return gulp.src(['Development/Assets/Images/*.jpg','Development/Assets/Images/*.jpeg','Development/Assets/Images/*.png'])
	.pipe(imagemin({progressive:true}))
	.pipe(gulp.dest('Production/Images'));
	});
	var cssMediaQueries =`
	/* Desktops and laptops ----------- */
	@media only screen  and (min-width : 1224px) {
	/* Styles */
	}

	/* Large screens ----------- */
	@media only screen  and (min-width : 1824px) {
	/* Styles */
	}

	/* Smartphones (portrait and landscape) ----------- */
	@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	/* Styles */
	}

	/* Smartphones (landscape) ----------- */
	@media only screen and (min-width : 321px) {
	/* Styles */
	}

	/* Smartphones (portrait) ----------- */
	@media only screen and (max-width : 320px) {
	/* Styles */
	}

	/* iPads (portrait and landscape) ----------- */
	@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
	/* Styles */
	}

	/* iPads (landscape) ----------- */
	@media only screen and (min-device-width : 768px) and (max-device-width : 1024px)
	and (orientation : landscape) {
	/* Styles */
	}

	/* iPads (portrait) ----------- */
	@media only screen and (min-device-width : 768px) and (max-device-width : 1024px)
	and (orientation : portrait) {
	/* Styles */
	}
	/**********
	iPad 3
	**********/
	@media only screen and (min-device-width : 768px) and (max-device-width : 1024px)
	and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
	/* Styles */
	}

	@media only screen and (min-device-width : 768px) and (max-device-width : 1024px)
	and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
	/* Styles */
	}


	/* iPhone 4 ----------- */
	@media only screen and (min-device-width : 320px) and (max-device-width : 480px)
	and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
	/* Styles */
	}

	@media only screen and (min-device-width : 320px) and (max-device-width : 480px)
	and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
	/* Styles */
	}

	/* iPhone 5 ----------- */
	@media only screen and (min-device-width: 320px) and (max-device-height: 568px)
	and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
	/* Styles */
	}

	@media only screen and (min-device-width: 320px) and (max-device-height: 568px)
	and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
	/* Styles */
	}

	/* iPhone 6 ----------- */
	@media only screen and (min-device-width: 375px) and (max-device-height: 667px)
	and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
	/* Styles */
	}

	@media only screen and (min-device-width: 375px) and (max-device-height: 667px)
	and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
	/* Styles */
	}

	/* iPhone 6+ ----------- */
	@media only screen and (min-device-width: 414px) and (max-device-height: 736px)
	and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
	/* Styles */
	}

	@media only screen and (min-device-width: 414px) and (max-device-height: 736px)
	and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
	/* Styles */
	}

	/* Samsung Galaxy S4 ----------- */
	@media only screen and (min-device-width: 320px) and (max-device-height: 640px)
	and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
	/* Styles */
	}

	@media only screen and (min-device-width: 320px) and (max-device-height: 640px)
	and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
	/* Styles */
	}

	/* Samsung Galaxy S5 ----------- */
	@media only screen and (min-device-width: 360px) and (max-device-height: 640px)
	and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
	/* Styles */
	}

	@media only screen and (min-device-width: 360px) and (max-device-height: 640px)
	and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
	/* Styles */
	}


	`
