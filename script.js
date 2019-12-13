function execute()
{
	var user = document.getElementById("searchUser").value;
	var data=[];
	var key="?client_id=6ce56aa9220d97a25db6&client_secret=3135ef1b21ce53e81e9b5f450df007873cae6669";
	var table = document.getElementById('table');
	var table1 = document.getElementById('table1');
	var table2 = document.getElementById('table2');
	var table3 = document.getElementById('table3');
	var table4 = document.getElementById('table4');
	var tablefl = document.getElementById('tablefl');
	var tablerp = document.getElementById('tablerepo');
	document.getElementById("table2").innerHTML = "";
	document.getElementById("table3").innerHTML = "";
	document.getElementById("tablefl").innerHTML = "";
	document.getElementById("table1").innerHTML = "";
	document.getElementById("table4").innerHTML = "";
	document.getElementById("tablerepo").innerHTML = "";
	var xhr = new XMLHttpRequest();
	xhr.open("GET","https://api.github.com/users/"+user+key,true);
	xhr.onload = function() {
		var d = xhr.responseText;
		console.log(d);
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
	xhr1.open("GET","https://api.github.com/users/"+user+"/followers?per_page=50"+key,true);
	xhr1.onload = function() {
		var d = xhr1.responseText;
		//console.log(d);
		data = JSON.parse(d);
		//console.log(data);
		
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
		
		var a=document.createElement('a');
		a.setAttribute("href",list.html_url);
		a.setAttribute("target","_blank");
		a.innerHTML = list.html_url;
		td4.appendChild(a);
		
		tr1.appendChild(td4);
		table1.appendChild(tr);
		table1.appendChild(tr1);

	}

	//following
											var xhr2 = new XMLHttpRequest();
											xhr2.open("GET","https://api.github.com/users/"+user+"/following?per_page=50"+key,true);
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
													
													var a=document.createElement('a');
												a.setAttribute("href",list.html_url);
												a.setAttribute("target","_blank");
												a.innerHTML = list.html_url;
												td4.appendChild(a);
													tr1.appendChild(td4);

													tablefl.appendChild(tr1);

												}
	

	function addingtoDom(obj) {
		
		//title
		var title=document.getElementById('title');
		title.innerHTML =obj.name;
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
		
		tr1.appendChild(td4);

		table.appendChild(tr1);

	}


					// followers modal
		
								var modal = document.getElementById("myModal");

								// Get the button that opens the modal
								var btn = document.getElementById("myBtn");
								
								// Get the <span> element that closes the modal
								var span = document.getElementsByClassName("close1")[0];
								
								// When the user clicks the button, open the modal 
							btn.onclick = function() 
							{
								modal.style.display = "block";


								var xhr1 = new XMLHttpRequest();
								xhr1.open("GET","https://api.github.com/users/"+user+"/followers?per_page=50"+key,true);
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
										
										var a=document.createElement('a');
												a.setAttribute("href",list.html_url);
												a.setAttribute("target","_blank");
												a.innerHTML = list.html_url;
												td4.appendChild(a);
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
											xhr1.open("GET","https://api.github.com/users/"+user+"/following?per_page=100"+key,true);
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
													
													var a=document.createElement('a');
													a.setAttribute("href",list.html_url);
													a.setAttribute("target","_blank");
													a.innerHTML = list.html_url;
													td4.appendChild(a);
													tr1.appendChild(td4);

													var td4=document.createElement('td');
													var button = document.createElement('input');

														// SET INPUT ATTRIBUTE 'type' AND 'value'.
													button.setAttribute('type', 'button');
													button.setAttribute('onclick',onclickm(td1.innerHTML));

													var j=document.querySelector

													button.setAttribute("class","button button1");
													// var span=document.getElementById("more");
					
													td4.appendChild(button);
													tr1.appendChild(button);
													// console.log(td4);

													table3.appendChild(tr1);	
													// tr1.addEventListener("dblclick",onclickm(td1.innerHTML));
													
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
									xhr3.open("GET","https://api.github.com/users/"+user+"/repos"+key,true);
									xhr3.onload = function() {
										var d = xhr3.responseText;
										// console.log(d);
										data = JSON.parse(d);
										console.log(data);
										for(i in data)
										{
											//console.log(data[i]);

											reposlist(data[i]);
											
										}
										//addingtoDom(data);
								}
									xhr3.send();

									function reposlist(list)
									{  


										var rn=document.getElementById('rname');
										rn.innerHTML =list.name;
										console.log(list.name);
										
										var forks=document.getElementById('forks');
										forks.innerHTML ="Forks: "+list.forks_count;
										
										var stars=document.getElementById('stars');
										stars.innerHTML ="Stars: "+list.stargazers_count;

										var rlink=document.getElementById('repolink');
										rlink.setAttribute("href",list.html_url);
										

									}
									
										// pr modal

										var modal2= document.getElementById("myModal2");

										// Get the button that opens the modal
										var btn = document.getElementById("myBtn2");
										
										// Get the <span> element that closes the modal
										var span = document.getElementsByClassName("close2")[0];
										
										// When the user clicks the button, open the modal 
									btn.onclick = function() 
									{
										modal2.style.display = "block";


										var xhr1 = new XMLHttpRequest();
										xhr1.open("GET","https://api.github.com/users/"+user+"/repos"+key,true);
										xhr1.onload = function() {
											var d = xhr1.responseText;
											// console.log(d);
											data = JSON.parse(d);
											
											for(i in data)
											{
												repolist(data[i]);
											}
											//addingtoDom(data);
											}
										xhr1.send();

											function repolist(list)
											{
												var tr1 = document.createElement('tr');

												// var td0 = document.createElement('img');
												// td0.setAttribute("src",list.avatar_url);
												// td0.setAttribute("style","width:50px; height=50px");
												// tr1.appendChild(td0);

												var td1 = document.createElement('td');
												td1.setAttribute("style","font-size:30px;")
												td1.innerHTML = list.name;
												tr1.appendChild(td1);

												var td2 = document.createElement('td');
												td2.innerHTML = list.stargazers_count;
												tr1.appendChild(td2);

												var td3 = document.createElement('td');
												td3.innerHTML = list.forks_count;
												tr1.appendChild(td3);

												var td4 = document.createElement('td');
												var a=document.createElement('a');
												a.setAttribute("href",list.html_url);
												a.setAttribute("target","_blank");
												a.innerHTML = list.html_url;
												td4.appendChild(a);
												tr1.appendChild(td4);

												table4.appendChild(tr1);

											}

										}



								// When the user clicks on <span> (x), close the modal
								span.onclick = function() {
								modal2.style.display = "none";
								}
								window.onclick = function(event) {
									if (event.target == modal1) {
									modal2.style.display = "none";
									}
								}
					
	
	

}

function onclickm(x)
{
	
	console.log('onclickm',x);

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



