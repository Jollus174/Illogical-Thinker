// assemble
module.exports = function(grunt) {
	return {
		options: {
			production: grunt.cli.tasks.length === 0 || grunt.cli.tasks[0] === 'build',
			partials: ['<%= settings.root %>/templates/partials/*.hbs', '<%= settings.root %>/modules/**/*.hbs'],
			data: ['<%= settings.root %>/templates/data/*.json'],
			helpers: ['<%= settings.root %>/templates/helpers/*.js'],
			flatten: true
		},
		pages: {
			options: {
				layout: ['<%= settings.root %>/templates/layouts/layout.hbs']
			},
			src: ['<%= settings.root %>/templates/pages/*.hbs'],
			dest: '<%= settings.dist %>'
		}
	};
};
