(function (Prism) {

    var langsync = Prism.languages.langsync = {
        'command': {
            pattern: /^langsync [\w\d_-]+/,
            inside: {
                'keyword': /langsync/,
            },
        },
        // You can define more rules for options, filenames, etc.
    };
}(Prism));