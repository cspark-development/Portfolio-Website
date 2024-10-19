/* Optional JS just to handle light and dark mode switching */

const documentStyle = getComputedStyle(document.body);
const darkmodeToggleParent = document.getElementById("darkmode-toggle");
const darkmodeToggleButton = darkmodeToggleParent.firstElementChild;
const darkmodeToggleCheckbox = darkmodeToggleParent.getElementsByTagName("input")[0];
/* 
Any variables that you want to have a dark and light theme can be added here 
JS will automatically check the CSS for a corresponding --item-light and --item-dark if you have an --item CSS variable listed.
*/
const themedCSSVariables = [
	["--background-color"],
	["--text-color"],
	["--bio-card-background-color"],
	["--project-card-background-color"]
]

function setCSSVariables(variables) {
	for (const variable of variables) {
		document.documentElement.style.setProperty(variable[0], variable[1]);
	};
}

function setCSSDark(variables) {
	for (const variable of variables) {
		const dark = documentStyle.getPropertyValue(variable + "-dark");
		document.documentElement.style.setProperty(variable, dark);
	};
}

function setCSSLight(variables) {
	for (const variable of variables) {
		const light = documentStyle.getPropertyValue(variable + "-light");
		document.documentElement.style.setProperty(variable, light);
	};
}

darkmodeToggleParent.addEventListener("click", function() {
	const toggleState = darkmodeToggleCheckbox.checked;
	if (toggleState) {
		darkmodeToggleParent.classList.add("navbar-toggle-button-checked");
		setCSSDark(themedCSSVariables);
	} else {
		darkmodeToggleParent.classList.remove("navbar-toggle-button-checked");
		setCSSLight(themedCSSVariables);
	};
});
