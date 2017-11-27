 function handle(e){
		var qw = document.getElementById("query").value;
        if(e.keyCode === 13){
            e.preventDefault(); // Ensure it is only this code that rusn
			 search();
        }
    }
// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
	//document.getElementById('search-button').setAttribute('disabled', "false");
	document.getElementById('search').disabled=false;
  //$('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
	
	var q = document.getElementById('query').value;
    var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
	'maxResults': '8'
  });
  request.execute(function(response){
	 var arra = [];
	 response.result.items.forEach(item => {
		  arra.push({
			  image: item.snippet.thumbnails.medium.url,
			  title: "&#9757  " + item.snippet.title,
			  channelTitle: "&#x270d  "+item.snippet.channelTitle,
			  publishedAt:  "&#x231a    "+item.snippet.publishedAt.substr(0,10),
			  description:  item.snippet.description.substr(0,80)+" ...",
			  videoId: "https://www.youtube.com/watch?v=" + item.id.videoId
		  })
	  })
	  var main = document.getElementById('main');
	  var elem = document.createElement('cart');
	  document.getElementById("main").innerHTML = "";
	  for(var item = 0;item < 4 ; item++){
		  elem = document.createElement('cart');
		  elem.innerHTML = `
				<image src="${arra[item].image}" class="my-class">
				<h2>${arra[item].title}</h2>
				<h2>${arra[item].channelTitle}</h2>
				<h2>${arra[item].publishedAt}</h2>
				<h2>${arra[item].description}</h2>
				<a href="${arra[item].videoId}" onclick = "${arra[item].videoId}" target="_parent"> ${arra[item].videoId}</a>
`;
		 main.appendChild(elem);
	  }
	  
	  var main = document.getElementById('main2');
	  var elem = document.createElement('cart');
	  document.getElementById("main2").innerHTML = "";
	  for(var item = 4;item < 8 ; item++){
		  elem = document.createElement('cart');
		  elem.innerHTML = `
				<image src="${arra[item].image}" class="my-class">
				<h2>${arra[item].title}</h2>
				<h2>${arra[item].channelTitle}</h2>
				<h2>${arra[item].publishedAt}</h2>
				<h2>${arra[item].description}</h2>
				<a href="${arra[item].videoId}" onclick = "${arra[item].videoId}" target="_parent"> ${arra[item].videoId}</a>
`;
		 main2.appendChild(elem);
	  }
	  var object = document.getElementById("cartnav");
	object.style.display = "flex";
 });
}


