// Watch
module.exports = {

	// Reload watch task itself if config files are updated
    configFiles: {
        files: [ 'Gruntfile.js', 'grunt/*.js', 'grunt/*.json' ],
        options: {
            reload: true
        }
    },

    styles: {
        files: [
            '<%= settings.src %>/css/**/*.scss',
            '<%= settings.root %>/modules/**/*.scss'
        ],
        tasks: ['styles'],
        options: {
            spawn: false
        }
    },
    scripts: {
        files: [
            '<%= settings.src %>/js/**/*.js',
            '<%= settings.root %>/modules/**/*.js'
        ],
        tasks: ['scripts'],
        options: {
            spawn: false
        }
    },
    images: {
        files: [
            '<%= settings.src %>/img/**/*.{png,jpg,gif}'
        ],
        tasks: ['copy:images'],
        options: {
            spawn: false
        }
    },
    icons: {
        files: [
            '<%= settings.src %>/img/<%= settings.svgRawDir %>/*.svg'
        ],
        tasks: ['images'],
        options: {
            spawn: false
        }
    },
    html: {
        files: [
            '<%= settings.root %>/templates/**/*.hbs',
            '<%= settings.root %>/modules/**/*.hbs'
        ],
        tasks: ['html'],
        options: {
            spawn: false
        }
    }

};