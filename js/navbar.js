const user = {
	logged_in: "true", 
	name: "Teik Jun"
};

function newNavbarItem(text, url) {
	// create an <a> element with text inside it, linking to url, and return the element
	// also need to add the bootstrap classes "nav-item" and "nav-link"
	const navItem = document.createElement('a');
	navItem.className = "nav-item nav-link";
	navItem.innerHTML = text;
	navItem.href = url;

	return navItem;
}

function renderNavbar(user) {
  const navbarDiv = document.getElementById('nav-item-container');

  navbarDiv.appendChild(newNavbarItem("Browse", "browse.html"));
  navbarDiv.appendChild(newNavbarItem("Profile", "profile.html"));
  navbarDiv.appendChild(newNavbarItem("Resources", "resources.html"));
}

function renderHomeNavbar(user) { 
	const navbarDiv = document.getElementById('nav-item-container');
	
	navbarDiv.appendChild(newNavbarItem("Login with Google", "browse.html"));
}

