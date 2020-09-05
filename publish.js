var ghpages = require('gh-pages');
ghpages.publish('build', function(err){throw new Error("Передача не удалась " +err)}, function(){console.log("Передача успешна publish.js")});