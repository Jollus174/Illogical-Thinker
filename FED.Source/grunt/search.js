// search
module.exports = function (grunt) {

    return {

        evenSizedRetinaSprites: {
            files: {
                src: ['<%= settings.src %>/css/_<%= settings.retinaSpriteFolder %>.scss']
            },
            options: {
                searchString: /^(.(?!total-(width|height)))*-(?:width|height): \d*[13579]px;/g,
                logFormat: 'console',
                failOnMatch: false,
                onComplete: function (matches) {
                    if (matches.numMatches > 0) {
                        grunt.log.error("One or more of your retina sprites doesn't have even dimensions. Make sure your retina sprite dimensions are exactly twice those of your regular sprites.");
                        grunt.fail.fatal('Retina sprites are odd dimensions', 1);
                    }
                }
            }
        }

    };

};