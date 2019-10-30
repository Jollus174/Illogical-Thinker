// autoprefixr
module.exports = {
	responsive_images: {
	    dev: {
	      files: [{
	        expand: true,
	        src: ['**/*.{png,jpg,gif}'],
	        cwd: '<%= settings.src %>/img/',
	        dest: '<%= settings.dist %>/<%= settings.imagesDir %>/'
	      }]
	    }
	}
}