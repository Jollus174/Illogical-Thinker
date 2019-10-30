// copy
module.exports = {
	fonts: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= settings.src %>/fonts',
				dest: '<%= settings.dist %>/fonts/',
				src: [
					'**/*' // copy all font types within font directory
				]
			}
		]
	},
	images: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= settings.src %>/img',
				dest: '<%= settings.dist %>/img',
				src: [
					'{,**/}*.*', // copy all image types within img directory and sub dirs
					'!<%= settings.svgRawDir %>/**/*' /*,
                '!<%= settings.svgDir %>/*.svg'*/
				]
			}
		]
	},
	videos: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= settings.src %>/video',
				dest: '<%= settings.dist %>/video',
				src: ['{,**/}*.*']
			}
		]
	},
	libs: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= settings.src %>/js/libs/',
				dest: '<%= settings.dist %>/<%= settings.scriptsDir %>/libs/',
				src: '*.min.js' // ONLY copy minified file.
			}
		]
	},
	matterScripts: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= settings.src %>/js/matter/',
				dest: '<%= settings.dist %>/<%= settings.scriptsDir %>/matter/',
				src: '*.js'
			}
		]
	},
	webbyScripts: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= settings.src %>/js/webby/',
				dest: '<%= settings.dist %>/<%= settings.scriptsDir %>/webby/',
				src: '*.js'
			}
		]
	},
	html: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= settings.dist %>/templates',
				dest: '<%= settings.dist %>',
				src: '**/*.html',
				flatten: true
			}
		]
	}
};
