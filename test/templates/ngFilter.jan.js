module.exports = function(model) {
    return div([
        img({'data-ng-src': 'foo | langFilter:bar | cdnFilter'}),
        span({'eval-title': "'words' | cdnFilter"})
    ]);
};