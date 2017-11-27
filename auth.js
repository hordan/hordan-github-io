function start() {
        // Initializes the client with the API key and the Translate API.
        gapi.client.init({
        'apiKey': 'AIzaSyAJE9qNXeKfInyCVeBDWLdrfsRNcivlegI',
          'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
        }).then(function() {
          // Executes an API request, and returns a Promise.
          // The method name `language.translations.list` comes from the API discovery.
		
          gapi.client.load('youtube', 'v3', function() {
			  
    		handleAPILoaded();
  			});
        });
  };
gapi.load('client', start);
	 