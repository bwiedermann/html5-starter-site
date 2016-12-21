// Load Grunt
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Tasks
        sass: { // Begin Sass Plugin
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/sass',
                    src: ['**/*.scss'],
                    dest: 'src/css',
                    ext: '.css'
                }]
            }
        },

        watch: { // Compile everything into one task with Watch Plugin
            css: {
                files: 'src/**/*.scss',
                tasks: ['sass']
            }
        }
    });
    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register Grunt tasks
    grunt.registerTask('default', ['watch']);
};