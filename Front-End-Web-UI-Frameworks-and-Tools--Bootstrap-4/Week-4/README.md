# Week Four:
At the end of the week four, We have learned:
- Understand how to use JQuery, JavaScript and Bootstrap's JS components methods to control the behavior of the components.
- Write JavaScript code taking advantage of the Bootstrap's JS component methods and JQuery methods for controlling Bootstrap JS components.
- Write Less and Sass code to define your CSS classes.
- Compile the Less and Sass code into the corresponding CSS classes.
- Configure NPM scripts and automate your web development.
- Prepare your project for being hosted on a web server.
- Usage of Parallelshell for run multiples commands.
- Usage of imagemin-cli.
- Compressing and minify images.
- How to use usemin-cli, cssmin, uglify-js, htmlmin.
- Creation of a Distribution folder with our project ready for deployment.
- Configure Grunt tasks and automate your web development using Grunt.
- Define Gulp tasks in code to automate the web development using Gulp.

# Desktop web page version
![](Desktop-web-version.png)
# Mobile web page version
![](Mobile-web-version.png)

### If you want to see the page working in your computer just do this:
- Install Node JS
- Open a terminal inside of the folder ***/conFusion/***
- Type the following commands
- npm install
- npm start

## Extra information
> ### Some NPM Modules that were installed globally and locally with their instructions:
> 
> **LESS Compiler**
> - npm install -g less
>     -  lessc styles.less styles.css
> 
> **SASS Compiler**
> - npm install --save-dev node-sass
>     - node-sass -o css/ css/
>
> **Onchange && parallelshel@3.0.1**
> - npm install --save-dev onchange parallelshell@3.0.1
>     - onchange 'css/*.scss' -- npm run scss
>     - parallelshell 'npm run watch:scss' 'npm run lite'
> 
> **Dist: for upload and deploy the project**
> - npm install --save-dev rimraf
> - npm install -g copyfiles
> - npm install -g imagemin-cli
> - npm install --save-dev usemin-cli cssmin uglify-js htmlmin
>
> **Task runner Grunt**
> - npm install -g grunt-cli
> - npm install --save-dev grunt
> - npm install --save-dev grunt-sass
> - npm install --save-dev time-grunt
> - npm install --save-dev jit-grunt
> - npm install --save-dev grunt-contrib-watch
> - npm install --save-dev grunt-browser-sync
> - npm install --save-dev grunt-contrib-copy
> - npm install --save-dev grunt-contrib-clean
> - npm install --save-dev grunt-contrib-imagemin
> - npm install --save-dev grunt-contrib-concat
> - npm install --save-dev grunt-contrib-cssmin
> - npm install --save-dev grunt-contrib-htmlmin
> - npm install --save-dev grunt-contrib-uglify
> - npm install --save-dev grunt-filerev
> - npm install --save-dev grunt-usemin
> ### Finally type this following instruction and everything should be working. 
> - grunt