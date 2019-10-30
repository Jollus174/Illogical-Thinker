// Sass
module.exports = {

	dist: {
		options: {
			sourceMap: true
		},
		files: {
			'<%= settings.dist %>/<%= settings.stylesDir %>/style.css': '<%= settings.src %>/css/style.scss'
		}
	}
};