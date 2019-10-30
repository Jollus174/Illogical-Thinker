// BrowserSync
var port = 3012;

module.exports = {
	standard: {
		bsFiles: {
			src: [
				'<%= settings.dist %>/<%= settings.stylesDir %>/*.css',
				'<%= settings.dist %>/<%= settings.scriptsDir %>/*.js',
				'<%= settings.dist %>/*.html',
				'<%= settings.dist %>/*.cshtml'
			]
		},
		options: {
			watchTask: true,
			debugInfo: true,
			host: '0.0.0.0',
			server: {
				baseDir: '<%= settings.dist %>'
			},
			open: false,
			// notify: false

			// Set different port if running multiple projects at once
			port: port, // default: 3000
			ui: {
				port: port + 1 // default: 3001
			}
		}
	},
	iis: {
		bsFiles: {
			src: [
				'<%= settings.dist %>/<%= settings.stylesDir %>/*.css',
				'<%= settings.dist %>/<%= settings.scriptsDir %>/*.js',
				'<%= settings.dist %>/*.html'
				// '<%= settings.dist %>/*.cshtml'
			]
		},
		options: {
			proxy: '<%= settings.iisHostname %>',
			watchTask: true,
			debugInfo: true,
			host: '0.0.0.0',
			open: false,

			// Set different port if running multiple projects at once
			port: port, // default: 3000
			ui: {
				port: port + 1 // default: 3001
			}
		}
	}
};
