let currentchar = null;

const characters = [
	{
		id: "Inkwell", //CASE SENSITIVE!!!! WRAHH!!!
		name: "Inkwell",
		names: {
			"3": "MASKED MISCREANT",
			"4": "INKWELL PHOBIDAN",
			"5": "Inkwell Phobidan"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"3": "ourochar_files/earlyinkwell.png",
			"3676": "ourochar_files/3676inkwell.png" //test image 
		},
		firstAppearance: 3,
		descriptions: {
			"6": "\"You think about yourself. Just who are you? Luckily, you have a great memory about yourself. You are called INKWELL PHOBIDAN by those with mouths and you are definitely a HUMAN and totally not a half-dead ANGEL from beyond the CELESTIAL TARN OF GREATER REALITY. You like OCEANS, SEA CREATURES, and AQUATIC STUFF. In addition to this arsenal of diverse interests, you appreciate HISTORY and STORIES OF YORE. You believe that in the past, you once dreamed of being a PIRATE. Deep down, you have an insatiable craving to DANCE A JIG WITH A MATIE OR PERHAPS A PARTICULARLY EXCELLENT LASS. Also, you are colorblind. \n Though, to be fair, you don't really know if any of this is true.\"",
			"default": "The standard design and appearance of Inkwell."
		},
		classpect: {},
		lunarswing:{},
		sexuality: {},
		pronouns: {
			"default": "They/Them" 
		},
		location: {
			"8": "the THIRD FRIDGE (Galactic Prison)"
		},
		status: {
			"default": "Alive"
		},
		additional_tags:{
			"Hero": 124
		},
		//you must add both!!
		pestertag: {},
		pestercolor: {
			"default": "#000000",
			"36": "#000000"
		},
		pesterhighlight:{
			default: "#c6c3c3"
		},
		weapon_kind: {
			"130": "Anchorkind"
		}, sylladex: {
			"45": "SPIN SPIRAL SYLLADEX"
		}
	},
	{
		id: "Shelly", //CASE SENSITIVE!!!! WRAHH!!!
		name: "Shelly",
		names: {
			"49": "SHELLY"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
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
			"default": "She/Her" 
		},
		location: {
			"8": "the THIRD FRIDGE (Galactic Prison)"
		},
		status: {
			"default": "Alive"
		},
		additional_tags:{
			"Demon": 26,
			"Squire": 124
		},
		pestercolor:{
			"default": "#000000",
			"49": "#ff8000"
		}
		
	},
	{
		id: "Automaton", //CASE SENSITIVE!!!! WRAHH!!!
		name: "Automaton",
		names: {
			"17": "Automaton"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"17": "ourochar_files/earlyautomaton.png"
		},
		firstAppearance: 17,
		descriptions: {
			"17": "A default automaton.",
			"52": "\"The automatons scare you despite how amusing many of them look. No one knows who made them or where they come from. However, they are everywhere in space. They claim to be protecting humanity, but they actively ruin what it means to be human. Also, they are quite genocidal. If you were not a human, you would already be dead.\" (Page 52)",
		},
		classpect: {
			"default": "N/A"
		},
		lunarswing:{
			"default": "N/A" 
		},
		sexuality: {
			"default": "N/A"
		},
		pronouns: {
			"default": "They/Them" 
		},
		additional_tags:{
			"AUTOMATON": 1
		},
		pestercolor: {
			"default": "#000000",
			"72": "#ff002b"
		},
	},
	{
		id: "Luna", //CASE SENSITIVE!!!! WRAHH!!!
		name: "Luna",
		names: {
			"25": "Luna"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"25": "ourochar_files/earlyluna.png"
		},
		firstAppearance: 22,
		status: {
			"default": "Alive"
		},
		location: {
			"8": "the THIRD FRIDGE (Galactic Prison)"
		},
		descriptions: {
			"31": "\"LUNA, the straitjacket adult with the spikey hair is the most like you. He is like a brother or perhaps a father. If you were not human, you would be of the same species as him. But you are human, and so is he. His tales are heroic and wicked as he is a pirate... a SPACE PIRATE. Much of what you have learned has been taught by him. However, you don't wish to adopt his tendency for mass crime and end up with several life sentences.\" (Page 31)"
		},
		additional_tags: {
			"Guardian": 124,
		}
	},
	{
		id: "Dive", //CASE SENSITIVE!!!! WRAHH!!!
		name: "Dive",
		names: {
			"25": "Dive",
			"103": "???"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"25": "ourochar_files/earlydive.png",
			"103": "ourochar_files/protodive.png"
		},
		firstAppearance: 22,
		status: {
			"default": "Alive",
			"101": "Dead",
			"103": "Kernel'd"
		},
		location: {
			"8": "the THIRD FRIDGE (Galactic Prison)"
		},
		descriptions: {
			"31": "\"Beside him is DIVE, a chill guy who like you, wears a mask proudly. He claims that he is a twisted monster 'straight out of your deepest darkest nightmares', and that is why he is named DIVE. He is a deep dive into your phobias. You don't actually know much about him, as he is just as fascinated by LUNA as you. You do, however, know that DIVE is responsible for horrible atrocities on Mars.\" (Page 31) "
		},
	},
	{
		id: "SD", //CASE SENSITIVE!!!! WRAHH!!!
		name: "SD",
		names: {
			"64": "stringlessDevil [SD]"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"64": "ourochar_files/earlySD.png"
		},
		firstAppearance: 64,
		pestertag: {
			"64": "stringlessDevil [SD]"
		},
		pestercolor: {
			"default": "#000000",
			"64": "#003d12"
		},
	},
	{
		id: "Clover", //CASE SENSITIVE!!!! WRAHH!!!
		name: "Clover",
		names: {
			"65": "Clover(?)",
			"139": "CROSSEYED DIMWIT",
			"140": "CLOVER SOLSANGK",
			"141": "Clover Solsangk"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"65": "ourochar_files/clovericon.png",
			"138": "ourochar_files/earlyclover.png",
		},
		firstAppearance: 65,
		pestertag: {
			"65": "luckyRaindrops [LR]"
		},
		pestercolor: {
			"default": "#000000",
			"64": "#59a636"
		},
		descriptions: {
			"146": `\"Your name is CLOVER SOLSANGK. You have lived a highly sheltered life, if a bit too sheltered. You don't know what you are but don't think you are a human. You don't really care, as Wolf says you are "MY DARLING LITTLE BLOOM" every time you ask him. Though, he sometimes calls you "WOOF WOOF WOOF."
\n\n
You are captivated by BOTANY, SOFT THINGS, ROCKS AND GEMS, and THE VOICES OF THE RADIO. Additionally, you appreciate GOOD TASTING FOOD, VIDEO GAMES, and SLEEP. Despite your wide range of interests, nothing calls out to you. Nothing brings you to your knees or out on the streets.

Also, you are a tad... skittish. You could line the walls with all your fears and still not have enough room.\" (Page 146)`
		}
	},
	{
		id: "Automaton V", //CASE SENSITIVE!!!! WRAHH!!!
		name: "Automaton V",
		names: {
			"103": "V"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"103": "ourochar_files/earlyAutomatonV.png",
			"173": "ourochar_files/AutomatonV.png"
		},
		firstAppearance: 103,
		additional_tags:{
			"AUTOMATON": 1
		},
		pestercolor: {
			"default": "#000000",
			"72": "#ff002b"
		},
	},
	{
		id: "RadioVoice", //CASE SENSITIVE!!!! WRAHH!!!
		name: "RadioVoice",
		names: {
			"151": "Mysterious Radio Voice"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"151": "ourochar_files/radiovoice.png"
		},
		firstAppearance: 151,
		pestercolor: {
			"default": "#000000",
			"151": "#5fee30"
		},pesterhighlight: {
			"151": "#ffffff"
		}
	},
	{
		id: "Seeb", //CASE SENSITIVE!!!! WRAHH!!!
		name: "Seeb",
		names: {
			"158": "???"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"158": "ourochar_files/seebshadow.png"
		},
		firstAppearance: 158,
	},
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
				})
				// COLORS ^_^
				if (char.pestercolor != null) {
					tempcolor = getHighestUnder(char.pestercolor,currentPage)
					tempchar.style.borderColor = tempcolor
					tempchar.style.color = tempcolor
				}
				if (char.pesterhighlight != null) {
					temphighlight = getHighestUnder(char.pesterhighlight,currentPage)
					//tempchar.style.background = temphighlight
				}
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

	const CharCard_Sylladex = document.getElementById("CharCard_Sylladex");
	CharCard_Sylladex.textContent = getHighestUnder(char.sylladex,currentPage)

	const CharCard_WeaponKind = document.getElementById("CharCard_WeaponKind");
	CharCard_WeaponKind.textContent = getHighestUnder(char.weapon_kind,currentPage)

	const CharCard_Desc = document.getElementById("CharCard_Desc");
	CharCard_Desc.textContent = getHighestUnder(char.descriptions,currentPage)

	const CharCard_Name = document.getElementById("CharCard_Name");
	CharCard_Name.textContent = getHighestUnder(char.names,currentPage)
	CharCard_Name.style.color = getHighestUnder(char.pestercolor,currentPage)
	CharCard_Name.style.background = getHighestUnder(char.pesterhighlight,currentPage)

	const CharCard_Pestertag = document.getElementById("CharCard_Pestertag");
	temppestertag = getHighestUnder(char.pestertag,currentPage)
	if (temppestertag != "???"){
		CharCard_Pestertag.textContent = temppestertag
		CharCard_Pestertag.style.color = getHighestUnder(char.pestercolor,currentPage)
		CharCard_Pestertag.style.background = getHighestUnder(char.pesterhighlight,currentPage)
	} else {
		CharCard_Pestertag.textContent = ""
	}

	const CharCard_Tags = document.getElementById("CharCard_Tags");
	CharCard_Tags.innerHTML = ''; 
	Object.entries(char.additional_tags).forEach(([key, value]) => {
		const currentNumber = Number(value);
		if (currentPage >= currentNumber) {
			newElement = document.createElement('p');
			newElement.textContent = key;
			newElement.classList.add('additional_tag');
			newElement.classList.add('ADTAG-'+key);
			CharCard_Tags.appendChild(newElement);
		}
	})


	document.getElementById('main-container').scrollIntoView({ behavior: 'smooth' });
}
pageInput.addEventListener("input", (e) => {
    const page = parseInt(e.target.value) || 1;
    renderCharacters(page);
	if (globalThis.currentchar != null) {
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
	if (listObj == null) {
        return "???";
    }
    const keys = Object.keys(listObj).map(Number);
    const validKeys = keys.filter(key => key <= targetNumber);
    if (validKeys.length === 0) {
		if (listObj["default"] == null) {
			return "???";
		}
        return listObj["default"];
    }
    const highestKey = Math.max(...validKeys);
    return listObj[highestKey];
}
