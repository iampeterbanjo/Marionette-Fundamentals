var express = require('express')
		, app = express();

app.use(express.static('user-admin'));

app.get('/', express.static('./index.html'));

app.listen(4000, function() {
	console.log('listening on 4000');
});
