// webp-compress
module.exports = {

	//binpath: 'C:/Work/libwebp-0.5.2-windows-x64/bin/',
	dynamic: {
		files: [{
			expand: true,
			cwd: '<%= settings.src %>/img/',
			src: '**/*.{png,jpg}',
			dest: '<%= settings.dist %>/<%= settings.imagesDir %>/'
		}],
		options: {
	    	quality: 100,
	    	lossless: false,
	    	alphaQuality: 100,
	    	compressionMethod: 6,
        	segments: 4
	    }
	}

};