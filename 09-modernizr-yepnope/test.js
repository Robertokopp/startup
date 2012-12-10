

yepnope({
	test: Modernizr.mq('only all'),
	nope: 'polyfill/css3-mediaqueries.js',

});


yepnope({
	test: !!window.FileReader,
	nope: 'polyfill/jquery.FileReader.js',
	callback: function (url, result, key) {
    	console.log('Loaded: ' + url);
  	}
});