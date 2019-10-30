// rig
module.exports = {
	core: {
		files: {
			'<%= settings.dist %>/<%= settings.scriptsDir %>/main.js': [
				'<%= settings.src %>/js/main.js'
			]
		}
	},
	src: {
		files: {
			'<%= settings.dist %>/<%= settings.scriptsDir %>/src.js': [
				'<%= settings.src %>/js/src.js'
			]
		}
	},
	plugins: {
		files: {
			'<%= settings.dist %>/<%= settings.scriptsDir %>/plugins.js': [
				'<%= settings.src %>/js/plugins.js'
			]
		}
	},
	webby: {
		files: {
			'<%= settings.dist %>/<%= settings.scriptsDir %>/webby-modal.js': [
				'<%= settings.src %>/js/webby-modal.js'
			]
		}
	}
};
