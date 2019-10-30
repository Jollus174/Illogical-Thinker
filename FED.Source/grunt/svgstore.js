// Sass
module.exports = {

	options: {
		prefix: '', // This will prefix each <g> ID
		includedemo: true,
		// cleanup: true
		// cleanup: ['style', 'fill']
		// svg: {
			// style: 'display: none',
			// xmlns: 'http://www.w3.org/2000/svg',
			// 'xmlns:xlink': 'http://www.w3.org/1999/xlink'
		// }
	},
	default: {
		files: {
			'<%= settings.dist %>/<%= settings.imagesDir %>/<%= settings.svgDir %>/sprite/svg-defs.svg': ['<%= settings.dist %>/<%= settings.imagesDir %>/<%= settings.svgDir %>/icons/*.svg'],
		}
	// },
	// nofill: {
	// 	options: {
	// 		prefix: 'nofill-', // This will prefix each <g> ID
	// 		cleanup: ['style', 'fill']
	// 	},
	// 	files: {
	// 		'<%= settings.dist %>/<%= settings.imagesDir %>/<%= settings.svgDir %>/sprite/svg-defs-nofill.svg': ['<%= settings.dist %>/<%= settings.imagesDir %>/<%= settings.svgDir %>/icons/*.svg'],
	// 	}
	}
};