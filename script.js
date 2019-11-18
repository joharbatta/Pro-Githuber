function execute()
{
	var user = document.getElementById("searchUser").value;
	var data=[];
	var table = document.getElementById('table');
	var table1 = document.getElementById('table1');
	var table2 = document.getElementById('table2');
	var xhr = new XMLHttpRequest();
	xhr.open("GET","https://api.github.com/users/"+user,true);
	xhr.onload = function() {
		var d = xhr.responseText;
		//console.log(d);
		data = JSON.parse(d);
		
		// for(i in data)
		// {
		// 	addingtoDom(data[i]);
		// }
		addingtoDom(data);
 }
	xhr.send();

	var xhr1 = new XMLHttpRequest();
	xhr1.open("GET","https://api.github.com/users/"+user+"/followers",true);
	xhr1.onload = function() {
		var d = xhr1.responseText;
		console.log(d);
		data = JSON.parse(d);
		
		for(i in data)
		{
			followerslist(data[i]);
		}
		//addingtoDom(data);
 }
	xhr1.send();

	function followerslist(list)
	{
		var tr1 = document.createElement('tr');

		var td0 = document.createElement('img');
		td0.setAttribute("src",list.avatar_url);
		td0.setAttribute("style","width:50px; height=50px");
		tr1.appendChild(td0);

		var td1 = document.createElement('td');
		td1.innerHTML = list.login;
		tr1.appendChild(td1);

		var td2 = document.createElement('td');
		td2.innerHTML = list.id;
		tr1.appendChild(td2);

		var td3 = document.createElement('td');
		td3.innerHTML = list.type;
		tr1.appendChild(td3);

		var td4 = document.createElement('td');
		td4.innerHTML = list.html_url;
		tr1.appendChild(td4);

		table1.appendChild(tr1);

	}
	function addingtoDom(obj) {
		
		//title
		var title=document.getElementById('title');
		title.innerHTML =obj.login;
		//dp
		var dp=document.getElementById('dp');
		dp.setAttribute("src",obj.avatar_url);
		//url button
		var pbutton=document.getElementById('pbutton');
		pbutton.setAttribute("href",obj.html_url);
		//repos count
		var pr=document.getElementById('pr');
		pr.innerHTML ="Public Repos: "+obj.public_repos;
		//followers
		var followers=document.getElementById('followers');
		followers.innerHTML ="Followers: "+obj.followers;
		//following
		var following=document.getElementById('following');
		following.innerHTML ="Followers: "+obj.following;
		//bio
		var bio=document.getElementById('bio');
		bio.innerHTML =obj.bio;

		var company=document.getElementById('company');
		company.innerHTML =obj.company;

		var location=document.getElementById('location');
		location.innerHTML =obj.location;





		var tr1 = document.createElement('tr');

		var td0 = document.createElement('img');
		td0.setAttribute("src",obj.avatar_url);
		td0.setAttribute("style","width:50px; height=50px");
		tr1.appendChild(td0);

		var td1 = document.createElement('td');
		td1.innerHTML = obj.login;
		tr1.appendChild(td1);

		var td2 = document.createElement('td');
		td2.innerHTML = obj.id;
		tr1.appendChild(td2);

		var td3 = document.createElement('td');
		td3.innerHTML = obj.type;
		tr1.appendChild(td3);

		var td4 = document.createElement('td');
		td4.innerHTML = obj.html_url;
		tr1.appendChild(td4);

		table.appendChild(tr1);

	}

					// MOdal code
		
								var modal = document.getElementById("myModal");

								// Get the button that opens the modal
								var btn = document.getElementById("myBtn");
								
								// Get the <span> element that closes the modal
								var span = document.getElementsByClassName("close")[0];
								
								// When the user clicks the button, open the modal 
							btn.onclick = function() 
							{
								modal.style.display = "block";


								var xhr1 = new XMLHttpRequest();
								xhr1.open("GET","https://api.github.com/users/"+user+"/followers",true);
								xhr1.onload = function() {
									var d = xhr1.responseText;
									console.log(d);
									data = JSON.parse(d);
									
									for(i in data)
									{
										followerslist(data[i]);
									}
									//addingtoDom(data);
									}
								xhr1.send();

									function followerslist(list)
									{
										var tr1 = document.createElement('tr');

										var td0 = document.createElement('img');
										td0.setAttribute("src",list.avatar_url);
										td0.setAttribute("style","width:50px; height=50px");
										tr1.appendChild(td0);

										var td1 = document.createElement('td');
										td1.innerHTML = list.login;
										tr1.appendChild(td1);

										var td2 = document.createElement('td');
										td2.innerHTML = list.id;
										tr1.appendChild(td2);

										var td3 = document.createElement('td');
										td3.innerHTML = list.type;
										tr1.appendChild(td3);

										var td4 = document.createElement('td');
										td4.innerHTML = list.html_url;
										tr1.appendChild(td4);

										table2.appendChild(tr1);

									}

								}
	
	
	
						// When the user clicks on <span> (x), close the modal
						span.onclick = function() {
						modal.style.display = "none";
						}
						window.onclick = function(event) {
							if (event.target == modal) {
							modal.style.display = "none";
							}
						}
	
	
	
	





		





}













// function execute1()
// {
// 	var user ="joharbatta";
// 	var data=[];
// 	var table2 = document.getElementById('table2');

// 	var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// var xhr1 = new XMLHttpRequest();
// 	xhr1.open("GET","https://api.github.com/users/"+user+"/followers",true);
// 	xhr1.onload = function() {
// 		var d = xhr1.responseText;
// 		console.log(d);
// 		data = JSON.parse(d);
		
// 		for(i in data)
// 		{
// 			followerslist(data[i]);
// 		}
// 		//addingtoDom(data);
//  }
// 	xhr1.send();

// 	function followerslist(list)
// 	{
// 		var tr1 = document.createElement('tr');

// 		var td0 = document.createElement('img');
// 		td0.setAttribute("src",list.avatar_url);
// 		td0.setAttribute("style","width:50px; height=50px");
// 		tr1.appendChild(td0);

// 		var td1 = document.createElement('td');
// 		td1.innerHTML = list.login;
// 		tr1.appendChild(td1);

// 		var td2 = document.createElement('td');
// 		td2.innerHTML = list.id;
// 		tr1.appendChild(td2);

// 		var td3 = document.createElement('td');
// 		td3.innerHTML = list.type;
// 		tr1.appendChild(td3);

// 		var td4 = document.createElement('td');
// 		td4.innerHTML = list.html_url;
// 		tr1.appendChild(td4);

// 		table2.appendChild(tr1);

// 	}

// }



