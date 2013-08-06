/*global module:false, console:false, process:false*/

module.exports = function(grunt) {
	
	'use strict';
	
	grunt.initConfig({
		
		pkg : grunt.file.readJSON('package.json'),
		
		/**
		 * Build date and version.
		 *
		 * @see http://tanepiper.com/blog/2012/11/25/building-and-testing-javascript-with-gruntjs/
		 * @see http://blog.stevenlevithan.com/archives/date-time-format
		 */
		
		now : grunt.template.today('yyyymmdd'), // Alternative: yyyymmddhhMMss
		
		ver : 1, // Increment if more than one build is needed in a single day.
		
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
			
			tmpl : {
				
				files : [
					
					'./files/css/less/*.less',
					'./files/html/*.html',
					'./files/js/*.js'
					
				],
				
				tasks : ['dev']
				
			}
			
		},
		
		/*----------------------------------( PREFLIGHT )----------------------------------*/
		
		/**
		 * Validate files with JSHint.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-jshint
		 * @see http://www.jshint.com/docs/
		 */
		
		jshint : {
			
			options : {
				
				jshintrc : '.jshintrc'
				
			},
			
			init : [
				
				'./Gruntfile.js',
				'./files/js/<%= pkg.name %>.*.js'
				
			]
			
		},
		
		/*----------------------------------( ENVIRONMENT )----------------------------------*/
		
		/**
		 * Grunt task to automate environment configuration for future tasks.
		 *
		 * @see https://github.com/onehealth/grunt-env
		 */
		
		env : {
			
			/*
			options : {
				
				globalOption : 'foo'
				
			},
			*/
			
			dev : {
				
				NODE_ENV : 'DEVELOPMENT'
				
			},
			
			prod : {
				
				NODE_ENV : 'PRODUCTION'
				
			}
			
		},
		
		/*----------------------------------( 01 )----------------------------------*/
		
		/**
		 * Clean files and folders.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-clean
		 */
		
		clean : {
			
			options : {
				
				force : true // Sketchy!
				
			},
			
			dev : {
				
				src : [
					
					'./files/index.html',
					'./files/css/<%= pkg.name %>.css'
					
				]
				
			},
			
			prod : {
				
				src : [
					
					'../dist/<%= pkg.version %>/<%= now %>/<%= ver %>/**/*'
					
				]
				
			}
			
		},
		
		/*----------------------------------( 02 )----------------------------------*/
		
		/**
		 * Minify files with UglifyJS.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-uglify
		 * @see http://lisperator.net/uglifyjs/
		 */
		
		uglify : {
			
			prod : {
				
				files : {
					
					'../dist/<%= pkg.version %>/<%= now %>/<%= ver %>/js/preflight.min.js' : [
						'./files/js/preflight.js'
					],
					
					'../dist/<%= pkg.version %>/<%= now %>/<%= ver %>/js/<%= pkg.name %>.min.js' : [
						'./files/js/matchMedia.js',
						'./files/js/matchMedia.addListener.js',
						'./files/js/jquery.*.js',
						'./files/js/<%= pkg.name %>.js',
						'./files/js/<%= pkg.name %>.mod.*.js',
						'./files/js/<%= pkg.name %>.init.js'
					],
					
				}
				
			}
			
		},
		
		/*----------------------------------( 04 )----------------------------------*/
		
		/**
		 * Compile LESS files to CSS.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-less
		 */
		
		less : {
			
			options : {
				
				compress : true
				
			},
			
			dev : {
				
				files : {
					
					'./files/css/<%= pkg.name %>.css' : [
						'./files/css/less/<%= pkg.name %>.less',
						'./files/css/less/dev.less'
					]
					
				}
				
			},
			
			prod : {
				
				options : {
					
					yuicompress : true
					
				},
				
				files : {
					
					'../dist/<%= pkg.version %>/<%= now %>/<%= ver %>/css/<%= pkg.name %>.min.css' : './files/css/less/<%= pkg.name %>.less'
					
				}
				
			}
			
		},
		
		/*----------------------------------( 05 )----------------------------------*/
		
		/**
		 * Copy files and folders.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-copy
		 * @see http://gruntjs.com/configuring-tasks#globbing-patterns
		 */
		
		copy : {
			
			prod : {
				
				files : [
					
					{
						
						expand : true,
						cwd : './files/',
						src : [
							'font/**',
							'img/**',
							'!img/junk/**'
						],
						dest : '../dist/<%= pkg.version %>/<%= now %>/<%= ver %>/'
						
					}
					
				]
				
			}
			
		},
		
		/*----------------------------------( 06 )----------------------------------*/
		
		/**
		 * Grunt task around preprocess npm module.
		 *
		 * @see https://github.com/onehealth/grunt-preprocess
		 * @see https://github.com/onehealth/preprocess
		 */
		
		preprocess : {
			
			options : {
				
				context : {
					
					name : '<%= pkg.name %>',
					version : '<%= pkg.version %>',
					now : '<%= now %>',
					ver : '<%= ver %>',
					path : '/<%= pkg.name %>/dist/<%= pkg.version %>/<%= now %>/<%= ver %>'
					
				}
				
			},
			
			dev : {
				
				src : './files/html/index.html',
				dest : './files/index.html'
				
			},
			
			prod : {
				
				files : {
					
					'../dist/<%= pkg.version %>/<%= now %>/<%= ver %>/index.html' : './files/html/index.html',
					'../dist/index.html' : './files/html/latest.html'
					
				},
				
			}
			
		}
		
	});
	
	/*----------------------------------( TASKS )----------------------------------*/
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	grunt.loadNpmTasks('grunt-contrib-less');
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.loadNpmTasks('grunt-preprocess');
	
	grunt.loadNpmTasks('grunt-env');
	
	//----------------------------------
	
	/**
	 * @see https://github.com/onehealth/grunt-preprocess/issues/7
	 * @see https://github.com/onehealth/grunt-env/issues/4
	 */
	
	grunt.registerTask('printenv', function () { console.log(process.env); });
	
	//grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'copy']);
	
	grunt.registerTask('default', ['jshint']);
	
	grunt.registerTask('dev', ['jshint', 'env:dev', 'clean:dev', 'less:dev', 'preprocess:dev']);
	
	grunt.registerTask('prod', ['jshint', 'env:prod', 'clean:prod', 'uglify:prod', 'less:prod', 'copy:prod', 'preprocess:prod']);
	
};
