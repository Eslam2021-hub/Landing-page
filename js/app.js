// set counter with value initial value 0 to use it later
let counter = 0;
// set a counting function which create list item for every section exist in the page and update counting
function counting() {
	counter = 0;
	const nav = document.querySelector("header nav ul");
	const sections = document.querySelectorAll("main section h2");
	const section = document.querySelectorAll("main section");
	for (let i = 0 ; i < sections.length ; i++)
		{
  			const list = document.createElement('li');
  			list.textContent = sections[i].textContent;
  			list.id =(counter+1);
  			nav.appendChild(list);
  			counter = counter + 1;
		}
}
// invoke function one time to create list for sections exist on the page onload
counting();
// storing button (which will be used for adding sections) in a memory to use later 
const button = document.getElementById("addSection");
// usint button event listner to create sections , h2  , paragraph and add contains  inside 
button.addEventListener('click', function() {
	const navBar = document.getElementById("navbar__list");
	navBar.innerHTML = "";
	const sec = document.createElement('section');
	const head = document.createElement('h2');
	const paragraph1 = document.createElement('p');
	const paragraph2 = document.createElement('p');
	const dev = document.createElement('div');
	paragraph1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
	paragraph2.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
	// giving id for section to use it later
	sec.id = "section" + (counter+1);
	dev.appendChild(head);
	dev.appendChild(paragraph1);
	dev.appendChild(paragraph2);
	dev.className = "landing__container";
	sec.appendChild(dev);
	head.textContent = "Section " + (counter + 1);
	document.querySelector('main').appendChild(sec);
	// re-invoke counting function to update list state
	counting();
});
// using list items to scroll to sections to smothly
// a could do it by css also
const hello = document.querySelector("header nav ul");
hello.addEventListener('click', function() {
	const location = event.target;
	const id = location.id;
	const targ = document.getElementById("section" + id);
	targ.scrollIntoView({behavior: "smooth"});

});
/*
// changing format of section on view port by adding and removing a class
another way
document.onscroll = function() {
	let req = document.querySelectorAll("section");
	req.forEach(function(active, index, array) {
		let nav = document
	if(array[index].getBoundingClientRect().top >= 0 && array[index].getBoundingClientRect().top <= 1)
			{array[index].classList.add("your-active-class");} 
		else
			 {array[index].classList.remove("your-active-class");}
	});
}
*/
// changing format of section  on view port by adding and removing a class
// also chanfing related li  by adding and removing a class
document.addEventListener('scroll', function() {
	let req = document.querySelectorAll("section");
	let list = document.querySelectorAll("header nav ul li");
	req.forEach(function(active, index, array) {
	if(array[index].getBoundingClientRect().top >= -50 && array[index].getBoundingClientRect().top <= 400)
			{
				array[index].classList.add("your-active-class");
				list[index].classList.add("active-link");
			}

		else
			 {
			 	array[index].classList.remove("your-active-class");
			 	list[index].classList.remove("active-link");
			 }
	});
})



