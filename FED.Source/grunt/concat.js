// concat
module.exports = {
	
	options: {
        separator: ';'
    },
    dist: {
        src: [
            '<%= settings.dist %>/<%= settings.scriptsDir %>/plugins.js',
            '<%= settings.dist %>/<%= settings.scriptsDir %>/src.js',
            '<%= settings.dist %>/<%= settings.scriptsDir %>/main.js'
        ],
        dest: '<%= settings.dist %>/<%= settings.scriptsDir %>/scripts.js'
    }
            
};