/*global module:false, console:false, process:false */

module.exports = function(grunt) {
	
	'use strict';
	
	grunt.initConfig({
		
		/*----------------------------------( PACKAGE )----------------------------------*/
		
		/**
		 * The `package.json` file belongs in the root directory of your project,
		 * next to the `Gruntfile`, and should be committed with your project
		 * source. Running `npm install` in the same folder as a `package.json`
		 * file will install the correct version of each dependency listed therein.
		 *
		 * Install project dependencies with `npm install` (or `npm update`).
		 *
		 * @see http://gruntjs.com/getting-started#package.json
		 * @see https://npmjs.org/doc/json.html
		 * @see http://package.json.nodejitsu.com/
		 * @see http://stackoverflow.com/a/10065754/922323
		 */
		
		pkg : grunt.file.readJSON('package.json'),
		
		/*----------------------------------( BANNER )----------------------------------*/
		
		/**
		 * Short and long banners.
		 *
		 * @see http://gruntjs.com/getting-started#an-example-gruntfile
		 */
		
		banner : {
			
			short : '/*! ' +
			        '<%= pkg.title || pkg.name %>' +
			        '<%= pkg.version ? " v" + pkg.version : "" %>' +
			        '<%= pkg.licenses ? " | " + _.pluck(pkg.licenses, "type").join(", ") : "" %>' +
			        '<%= pkg.homepage ? " | " + pkg.homepage : "" %>' +
			        ' */',
			
			long : '/**\n' +
			       ' * <%= pkg.title || pkg.name %>\n' +
			       '<%= pkg.description ? " * " + pkg.description + "\\n" : "" %>' +
			       ' *\n' +
			       '<%= pkg.author.name ? " * @author " + pkg.author.name + "\\n" : "" %>' +
			       '<%= pkg.author.url ? " * @link " + pkg.author.url + "\\n" : "" %>' +
			       '<%= pkg.homepage ? " * @docs " + pkg.homepage + "\\n" : "" %>' +
			       ' * @copyright Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>.\n' +
			       '<%= pkg.licenses ? " * @license Released under the " + _.pluck(pkg.licenses, "type").join(", ") + ".\\n" : "" %>' +
			       '<%= pkg.version ? " * @version " + pkg.version + "\\n" : "" %>' +
			       ' * @date <%= grunt.template.today("yyyy/mm/dd") %>\n' +
			       ' */\n\n',
			
		},
		
		/*----------------------------------( BOWER )----------------------------------*/
		
		/**
		 * Install Bower packages. Smartly.
		 *
		 * Use this task to update dependencies defined in `bower.json`.
		 *
		 * @see https://github.com/yatskevich/grunt-bower-task
		 * @see http://bower.io/
		 */
		
		bower : {
			
			install : {
				
				options : {
					
					targetDir : './files/plugins', // A directory where you want to keep your Bower packages.
					cleanup: true, // Will clean target and bower directories.
					verbose: true, // Debug output.
					
				},
				
			},
			
		},
		
		/*----------------------------------( WATCH )----------------------------------*/
		
		/**
		 * Run predefined tasks whenever watched file patterns are added, changed
		 * or deleted.
		 *
		 * $ grunt watch
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-watch
		 */
		
		watch : {
			
			files : [
				
				'<%= jshint.init %>',
				'./files/styles/*.scss',
				'./files/templates/*.html',
				
			],
			
			tasks : ['default'],
			
		},
		
		/*----------------------------------( JSHINT )----------------------------------*/
		
		/**
		 * Validate files with JSHint.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-jshint
		 * @see http://www.jshint.com/docs/
		 */
		
		jshint : {
			
			options : {
				
				jshintrc : '.jshintrc',
				
			},
			
			init : [
				
				'./Gruntfile.js',
				
			],
			
		},
		
		/*----------------------------------( ENV )----------------------------------*/
		
		/**
		 * Grunt task to automate environment configuration for future tasks.
		 *
		 * @see https://github.com/onehealth/grunt-env
		 */
		
		env : {
			
			/*
			options : {
				
				globalOption : 'foo',
				
			},
			*/
			
			dev : {
				
				NODE_ENV : 'DEVELOPMENT',
				
			},
			
			prod : {
				
				NODE_ENV : 'PRODUCTION',
				
			},
			
		},
		
		/*----------------------------------( CLEAN )----------------------------------*/
		
		/**
		 * Clean files and folders.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-clean
		 */
		
		clean : {
			
			options : {
				
				force : true, // Sketchy!
				
			},
			
			start : {
				
				src : [
					
					'../demo/**/*',
					
				],
				
			},
			
			finish : {
				
				src : [
					
					'./temp',
					
				],
				
			},
			
		},
		
		/*----------------------------------( PREPROCESS )----------------------------------*/
		
		/**
		 * Grunt task around preprocess npm module.
		 *
		 * @see https://github.com/onehealth/grunt-preprocess
		 * @see https://github.com/onehealth/preprocess
		 */
		
		preprocess : {
			
			options : {
				
				context : {
					
					title : '<%= pkg.title %>',
					description : '<%= pkg.description %>',
					name : '<%= pkg.name %>',
					ns : '<%= pkg.ns %>',
					version : '<%= pkg.version %>',
					homepage : '<%= pkg.homepage %>',
					
				},
				
			},
			
			dev : {
				
				src : './files/templates/index.html',
				dest : '../demo/index.html',
				
			},
			
			prod : {
				
				src : './files/templates/index.html',
				dest : './temp/index.html',
				
			},
			
		},
		
		/*----------------------------------( HTMLMIN )----------------------------------*/
		
		/**
		 * Minify HTML.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-htmlmin
		 * @see http://perfectionkills.com/experimenting-with-html-minifier/#options
		 */
		
		htmlmin : {
			
			options : {
				
				removeComments : true,
				collapseWhitespace : true,
				collapseBooleanAttributes : true,
				removeRedundantAttributes : true,
				useShortDoctype : true,
				removeEmptyAttributes : true,
				
			},
			
			prod : {
				
				files : {
					
					'../demo/index.min.html' : './temp/index.html',
					
				},
				
			},
			
		},
		
		/*----------------------------------( COPY )----------------------------------*/
		
		/**
		 * Copy files and folders.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-copy
		 * @see http://gruntjs.com/configuring-tasks#globbing-patterns
		 */
		
		copy : {
			
			all : {
				
				expand : true,
				cwd : './files/images/',
				src : '**',
				dest : '../demo/',
				
			},
			
		},
		
		/*----------------------------------( SASS )----------------------------------*/
		
		/**
		 * Compile Sass to CSS.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-sass
		 * @see http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#output_style
		 */
		
		sass : {
			
			options : {
				
				precision : 14,
				noCache: true,
				trace: true,
				
			},
			
			dev : {
				
				options : {
					
					style : 'expanded',
					
				},
				
				files : {
					
					'./temp/<%= pkg.name %>.css' : './files/styles/development.scss',
					
				},
				
			},
			
			prod : {
				
				options : {
					
					style : 'compressed',
					
				},
				
				files : {
					
					'./temp/<%= pkg.name %>.min.css' : './files/styles/production.scss',
					
				},
				
			},
			
		},
		
		/*----------------------------------( CONCAT )----------------------------------*/
		
		/**
		 * Concatenate files.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-concat
		 * @see https://github.com/gruntjs/grunt-contrib-concat/pull/25
		 */
		
		concat : {
			
			options : {
				
				process : function(src) {
					
					// Removes "@charset "UTF-8"" inserted by SCSS:
					return src.replace(/(^|\n)[ \t]*(@charset "UTF-8");?\s*/g, '$1');
					
				},
				
			},
			
			dev : {
				
				options : {
					
					banner : '<%= banner.long %>',
					
				},
				
				src : ['./temp/<%= pkg.name %>.css',],
				dest : '../demo/<%= pkg.name %>.css',
				
			},
			
			prod : {
				
				options : {
					
					banner : '<%= banner.short %>',
					
				},
				
				src : ['./temp/<%= pkg.name %>.min.css',],
				dest : '../demo/<%= pkg.name %>.min.css',
				
			}
			
		},
		
		/*----------------------------------( SYMLINK )----------------------------------*/
		
		/**
		 * Create symbolic links.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-symlink
		 */
		
		symlink: {
			
			dev: {
				
				src: '<%= bower.install.options.targetDir %>/normalize-css/normalize.css',
				dest: '../demo/normalize.css',
				
			},
			
		},
		
	});
	
	/*----------------------------------( TASKS )----------------------------------*/
	
	grunt.loadNpmTasks('grunt-bower-task');
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.loadNpmTasks('grunt-env');
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.loadNpmTasks('grunt-preprocess');
	
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.loadNpmTasks('grunt-contrib-symlink');
	
	//----------------------------------
	
	/**
	 * @see https://github.com/onehealth/grunt-preprocess/issues/7
	 * @see https://github.com/onehealth/grunt-env/issues/4
	 */
	
	grunt.registerTask('printenv', function () { console.log(process.env); });
	
	//----------------------------------
	
	grunt.registerTask('init', ['jshint', 'clean:start',]);
	
	grunt.registerTask('dev', ['env:dev', 'preprocess:dev', 'sass:dev', 'concat:dev', 'symlink:dev',]);
	
	grunt.registerTask('prod', ['env:prod', 'preprocess:prod', 'htmlmin:prod', 'sass:prod', 'concat:prod',]);
	
	grunt.registerTask('default', ['init', 'dev', 'prod', 'copy', 'clean:finish',]);
	
};
