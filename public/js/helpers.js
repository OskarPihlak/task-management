const Handlebars = require('handlebars');

module.exports.handlebars = () => {
    Handlebars.registerHelper('json', function (context) {
        return JSON.stringify(context);
    });

    Handlebars.registerHelper("inc", function (value, options) {
        return parseInt(value) + 1;
    });
};