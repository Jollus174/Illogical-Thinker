// imagemin
module.exports = {

    dynamic: {
        options: {
            optimizationLevel: 7,
            progressive: true
        },
        files: [{
            expand: true,
            cwd: '<%= settings.src %>/img/',
            src: [
                '**/*.{png,jpg,gif}'
            ],
            dest: '<%= settings.dist %>/<%= settings.imagesDir %>/'
        }]
    },

    svg: {
        options: {
            svgoPlugins: [
                { removeXMLProcInst: false }, // prevent the XML header from being stripped
                { removeViewBox: false },
                { removeUselessDefs: true },
                { removeUselessStrokeAndFill: true },
                { convertStyleToAttrs: false },
                { cleanupIDs: true } //if set to true could cause issues
            ]
        },
        files: [{
            expand: true,
            cwd: '<%= settings.src %>/img/<%= settings.svgRawDir %>/',
            src: [
                '**/*.svg'
            ],
            dest: '<%= settings.src %>/img/<%= settings.svgDir %>/'
        }]
    }

};