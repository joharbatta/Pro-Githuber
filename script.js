function execute()
{
	var user = document.getElementById("searchUser").value;
	var data=[];
	var table = document.getElementById('table');
	var table1 = document.getElementById('table1');
	var table2 = document.getElementById('table2');
	var table3 = document.getElementById('table3');
	var tablefl = document.getElementById('tablefl');
	var tablerp = document.getElementById('tablerepo');
	document.getElementById("table2").innerHTML = "";
	document.getElementById("table3").innerHTML = "";
	document.getElementById("tablefl").innerHTML = "";
	document.getElementById("table1").innerHTML = "";
	document.getElementById("tablerepo").innerHTML = "";
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


	//followers 
	var xhr1 = new XMLHttpRequest();
	xhr1.open("GET","https://api.github.com/users/"+user+"/followers?per_page=50",true);
	xhr1.onload = function() {
		var d = xhr1.responseText;
		// console.log(d);
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
		var tr = document.createElement('tr');
		var tr1 = document.createElement('tr');
		var th=document.createElement('th');
		th.innerHTML="PHOTO";
		tr.appendChild(th);
		var td0 = document.createElement('img');
		td0.setAttribute("src",list.avatar_url);
		td0.setAttribute("style","width:50px; height=50px");
		td0.setAttribute("href",list.html_url); 
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
		table1.appendChild(tr);
		table1.appendChild(tr1);

	}

	//following
											var xhr2 = new XMLHttpRequest();
											xhr2.open("GET","https://api.github.com/users/"+user+"/following?per_page=50",true);
											xhr2.onload = function() {
												var d = xhr2.responseText;
												// console.log(d);
												data = JSON.parse(d);
												
												for(i in data)
												{
													
													followinglist(data[i]);
												}
												//addingtoDom(data);
												}
											xhr2.send();

												function followinglist(list)
												{
													var tr1 = document.createElement('tr');

													var td0 = document.createElement('img');
													td0.setAttribute("src",list.avatar_url);
													td0.setAttribute("style","width:50px; height=50px");
													td0.setAttribute("href",list.html_url);
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

													tablefl.appendChild(tr1);

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
		following.innerHTML ="Following: "+obj.following;
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


					// followers modal
		
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
								xhr1.open("GET","https://api.github.com/users/"+user+"/followers?per_page=50",true);
								xhr1.onload = function() {
									var d = xhr1.responseText;
									// console.log(d);
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



							// following modal

											var modal1= document.getElementById("myModal1");

											// Get the button that opens the modal
											var btn = document.getElementById("myBtn1");
											
											// Get the <span> element that closes the modal
											var span = document.getElementsByClassName("close")[0];
											
											// When the user clicks the button, open the modal 
										btn.onclick = function() 
										{
											modal1.style.display = "block";


											var xhr1 = new XMLHttpRequest();
											xhr1.open("GET","https://api.github.com/users/"+user+"/following?per_page=50",true);
											xhr1.onload = function() {
												var d = xhr1.responseText;
												// console.log(d);
												data = JSON.parse(d);
												
												for(i in data)
												{
													followinglist(data[i]);
												}
												//addingtoDom(data);
												}
											xhr1.send();

												function followinglist(list)
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

													table3.appendChild(tr1);

												}

											}



									// When the user clicks on <span> (x), close the modal
									span.onclick = function() {
									modal1.style.display = "none";
									}
									window.onclick = function(event) {
										if (event.target == modal1) {
										modal1.style.display = "none";
										}
									}
						



								

									// respositeries




									var xhr3 = new XMLHttpRequest();
									xhr3.open("GET","https://api.github.com/users/"+user+"/repos",true);
									xhr3.onload = function() {
										var d = xhr3.responseText;
										// console.log(d);
										data = JSON.parse(d);
										console.log(data);
										for(i in data)
										{
											// console.log(data[i]);

											reposlist(data[i]);
											
										}
										//addingtoDom(data);
								}
									xhr3.send();

									function reposlist(list)
									{


										var rn=document.getElementById('rname');
										rn.innerHTML =list.name;
										
										var forks=document.getElementById('forks');
										forks.innerHTML ="Forks: "+list.forks_count;
										
										var stars=document.getElementById('stars');
										stars.innerHTML ="Stars: "+list.stargazers_count;

										var rlink=document.getElementById('repolink');
										rlink.setAttribute("href",list.html_url);


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



