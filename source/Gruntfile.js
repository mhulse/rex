/*global module:false, console:false, process:false */

module.exports = function(grunt) {
	
	'use strict';
	
	grunt.initConfig({
		
		pkg : grunt.file.readJSON('package.json'),
		
		/*----------------------------------( BANNER )----------------------------------*/
		
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
				'./files/styles/*.less',
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
		
		/*----------------------------------( LESS )----------------------------------*/
		
		/**
		 * Compile LESS files to CSS.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-less
		 */
		
		less : {
			
			options : {
				
				compress : true,
				
			},
			
			dev : {
				
				files : {
					
					'./temp/<%= pkg.name %>.css' : [
						'./files/plugins/normalize-css/normalize.css', // Bower package.
						'./files/styles/<%= pkg.name %>.less',
						'./files/styles/develop.less',
					],
					
				},
				
			},
			
			prod : {
				
				options : {
					
					yuicompress : true,
					
				},
				
				files : {
					
					'./temp/<%= pkg.name %>.min.css' : './files/styles/<%= pkg.name %>.less',
					
				},
				
			},
			
		},
		
		/*----------------------------------( CONCAT )----------------------------------*/
		
		concat : {
			
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
	
	grunt.loadNpmTasks('grunt-contrib-less');
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	//----------------------------------
	
	/**
	 * @see https://github.com/onehealth/grunt-preprocess/issues/7
	 * @see https://github.com/onehealth/grunt-env/issues/4
	 */
	
	grunt.registerTask('printenv', function () { console.log(process.env); });
	
	//----------------------------------
	
	grunt.registerTask('init', ['jshint', 'clean:start',]);
	
	grunt.registerTask('dev', ['env:dev', 'preprocess:dev', 'less:dev', 'concat:dev',]);
	
	grunt.registerTask('prod', ['env:prod', 'preprocess:prod', 'htmlmin:prod', 'less:prod', 'concat:prod',]);
	
	grunt.registerTask('default', ['init', 'dev', 'prod', 'copy', 'clean:finish',]);
	
};
