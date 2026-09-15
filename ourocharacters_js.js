let currentchar = "NotACharacter";

const characters = [
	{
		id: "Inkwell", //CASE SENSITIVE!!!! WRAHH!!!
		name: "Inkwell",
		names: {
			"3": "MASKED MISCREANT",
			"4": "INKWELL PHOBIDAN"
		},
		images: {//im pretty usre links should work here too? its a 450x450 image. for the record. (if you wanted to use filegarden ^_^)
			"3": "ourochar_files/earlyinkwell.png",
			"3676": "ourochar_files/3676inkwell.png" //test image 
		},
		firstAppearance: 3,
		descriptions: {
			"default": "???",
			"6": "\"You think about yourself. Just who are you? Luckily, you have a great memory about yourself. You are called INKWELL PHOBIDAN by those with mouths and you are definitely a HUMAN and totally not a half-dead ANGEL from beyond the CELESTIAL TARN OF GREATER REALITY. You like OCEANS, SEA CREATURES, and AQUATIC STUFF. In addition to this arsenal of diverse interests, you appreciate HISTORY and STORIES OF YORE. You believe that in the past, you once dreamed of being a PIRATE. Deep down, you have an insatiable craving to DANCE A JIG WITH A MATIE OR PERHAPS A PARTICULARLY EXCELLENT LASS. Also, you are colorblind. \n Though, to be fair, you don't really know if any of this is true.\"",
			"default": "The standard design and appearance of Inkwell."
		},
		classpect: {
			"default": "???" //aspect more like. glasspect. shatters into a million shards of glass
		},
		lunarswing:{
			"default": "???" 
		},
		sexuality: {
			"default": "???" //this (has been shown) to change throughout the story. also we learn more info as it goes lmao
		},
		pronouns: {
			"default": "???" //just incase someone changes,,, ;)
		},
		location: {
			"default": "???"
		},
		status: {
			"default": "???"
		},
	},
	{
		id: "Shelly", //CASE SENSITIVE!!!! WRAHH!!!
		name: "Shelly",
		names: {
			"default": "???"
		},
		images: {//im pretty usre links should work here too? its a 450x450 image. for the record. (if you wanted to use filegarden ^_^)
			"17": "ourochar_files/earlyshelly.png"
		},
		firstAppearance: 17,
		descriptions: {
			"default": "???"
		},
		classpect: {
			"default": "???"
		},
		lunarswing:{
			"default": "???" 
		},
		sexuality: {
			"default": "???"
		},
		pronouns: {
			"default": "???" 
		},
		location: {
			"default": "???"
		},
		status: {
			"default": "???"
		},
	},
	{
		id: "Automaton", //CASE SENSITIVE!!!! WRAHH!!!
		name: "Automaton",
		names: {
			"default": "???",
			"17": "Automaton"
		},
		images: {//im pretty usre links should work here too? its a 450x450 image. for the record. (if you wanted to use filegarden ^_^)
			"17": "ourochar_files/earlyautomaton.png"
		},
		firstAppearance: 17,
		descriptions: {
			"default": "???",
			"17": "A default automaton."
		},
		classpect: {
			"default": "???"
		},
		lunarswing:{
			"default": "???" 
		},
		sexuality: {
			"default": "???"
		},
		pronouns: {
			"default": "???" 
		},
		location: {
			"default": "???"
		},
		status: {
			"default": "???"
		},
	},
	{
		id: "Luna", //CASE SENSITIVE!!!! WRAHH!!!
		name: "Luna",
		names: {
			"default": "???",
			"25": "Luna"
		},
		images: {//im pretty usre links should work here too? its a 450x450 image. for the record. (if you wanted to use filegarden ^_^)
			"25": "ourochar_files/earlyluna.png"
		},
		firstAppearance: 22,
		descriptions: {
			"default": "???"
		},
		classpect: {
			"default": "???"
		},
		lunarswing:{
			"default": "???" 
		},
		sexuality: {
			"default": "???"
		},
		pronouns: {
			"default": "???" 
		},
		location: {
			"default": "???"
		},
		status: {
			"default": "???"
		},
	},
	{
		id: "Dive", //CASE SENSITIVE!!!! WRAHH!!!
		name: "Dive",
		names: {
			"default": "???",
			"25": "Dive"
		},
		images: {//im pretty usre links should work here too? its a 450x450 image. for the record. (if you wanted to use filegarden ^_^)
			"25": "ourochar_files/earlydive.png"
		},
		firstAppearance: 22,
		descriptions: {
			"default": "???"
		},
		classpect: {
			"default": "???"
		},
		lunarswing:{
			"default": "???" 
		},
		sexuality: {
			"default": "???"
		},
		pronouns: {
			"default": "???" 
		},
		location: {
			"default": "???"
		},
		status: {
			"default": "???"
		},
	}
];


const pageInput = document.getElementById('page-input');
const grid = document.getElementById('character-grid');

function renderCharacters(currentPage) {
	const nocharacters = document.getElementById("NoCharacters");
	var amountofcharacters = 0
    characters.forEach(char => {
        const tempchar = document.getElementById(char.id);
        if (tempchar) {
            if (currentPage < char.firstAppearance) {
                tempchar.style.display = "none";
            } else {
				amountofcharacters++
                tempchar.style.display = "flex";

				//continue...?

				const thumb = tempchar.querySelector('.thumbnail');
				thumb.src = getHighestUnder(char.images,currentPage)
				
				//moar... get that name in here baby...
				const name = tempchar.querySelector('.charname');
				name.textContent = getHighestUnder(char.names,currentPage)
				
				//>get the damn clicktriggeralready
				//sigh... fine.. :(
				tempchar.addEventListener('click', () => {
					displayCharacterInfo(char, currentPage)
					
				});
            }
        }
    });
	if(amountofcharacters == 0){
		nocharacters.style.display = "block";
	}else{
		nocharacters.style.display = "none";
	}
}

function displayCharacterInfo(char, currentPage){
	globalThis.currentchar = char
	const charsheet = document.getElementById("charinfoparent");
	charsheet.style.display = "block";

	const CharCard_Classpect = document.getElementById("CharCard_Classpect");
	CharCard_Classpect.textContent = getHighestUnder(char.classpect,currentPage)

	const CharCard_Lunar = document.getElementById("CharCard_Lunar");
	CharCard_Lunar.textContent = getHighestUnder(char.lunarswing,currentPage)

	const CharCard_Sexuality = document.getElementById("CharCard_Sexuality");
	CharCard_Sexuality.textContent = getHighestUnder(char.sexuality,currentPage)

	const CharCard_Pronouns = document.getElementById("CharCard_Pronouns");
	CharCard_Pronouns.textContent = getHighestUnder(char.pronouns,currentPage)

	const CharCard_Location = document.getElementById("CharCard_Location");
	CharCard_Location.textContent = getHighestUnder(char.location,currentPage)
	
	const CharCard_Status = document.getElementById("CharCard_Status");
	CharCard_Status.textContent = getHighestUnder(char.status,currentPage)

	const CharCard_Img = document.getElementById("CharCard_Img");
	CharCard_Img.src = getHighestUnder(char.images,currentPage)

	const CharCard_Desc = document.getElementById("CharCard_Desc");
	CharCard_Desc.textContent = getHighestUnder(char.descriptions,currentPage)

	const CharCard_Name = document.getElementById("CharCard_Name");
	CharCard_Name.textContent = getHighestUnder(char.names,currentPage)

	document.getElementById('main-container').scrollIntoView({ behavior: 'smooth' });
}
pageInput.addEventListener("input", (e) => {
    const page = parseInt(e.target.value) || 1;
    renderCharacters(page);
	if (globalThis.currentchar.firstAppearance) {
		if (page >= globalThis.currentchar.firstAppearance){
			displayCharacterInfo(globalThis.currentchar, page)
		}else{
			const charsheet = document.getElementById("charinfoparent");
			charsheet.style.display = "none";
		}
}
	
});

// Run it once on initial load
renderCharacters(parseInt(pageInput.value) || 1);


function getHighestUnder(listObj, targetNumber) {
    const keys = Object.keys(listObj).map(Number);
    const validKeys = keys.filter(key => key <= targetNumber);
    if (validKeys.length === 0) {
        return listObj["default"];
    }
    const highestKey = Math.max(...validKeys);
    return listObj[highestKey];
}
