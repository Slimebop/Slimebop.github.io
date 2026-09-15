let currentchar = null;

const characters = [
	{
		id: "Inkwell",
		name: "Inkwell",
		names: {
			"3": "MASKED MISCREANT",
			"4": "INKWELL PHOBIDAN",
			"5": "Inkwell Phobidan"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"3": "ourochar_files/earlyinkwell.png",
			"348": "ourochar_files/early_dmg_ink.png",
			"398": "ourochar_files/capewell.png",
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
			"default": "He/Him" 
		},
		location: {
			"8": "the THIRD FRIDGE (Galactic Prison)",
			"182": "???",
			"200": "LAND OF WASTE & SPACE"
		},
		status: {
			"default": "Alive"
		},
		additional_tags:{
			"Hero": 124
		},
		//you must add both!!
		pestertag: {
			"36": "rhythmicWailing [RW]"
		},
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
			"45": "SPIN SPIRAL"
		},
		plotrelevance: 100,
	},
	{
		id: "Shelly",
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
			"8": "the THIRD FRIDGE (Galactic Prison)",
			"182": "???",
			"200": "LAND OF WASTE & SPACE"
		},
		status: {
			"default": "Alive"
		},
		additional_tags:{
			"Demon": 26,
			"Fiend": 380,
			"Succubi": 380,
			"Squire": 124
		},
		pestercolor:{
			"default": "#000000",
			"49": "#ff8000"
		},
		plotrelevance: 100,
	},
	{
		id: "Automaton",
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
		plotrelevance: 2.5,
	},
	{
		id: "Luna",
		name: "Luna",
		names: {
			"22": "Luna"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"22": "ourochar_files/earlyluna.png"
		},
		firstAppearance: 22,
		status: {
			"default": "Alive"
		},
		location: {
			"8": "the THIRD FRIDGE (Galactic Prison)",
			"182": "???",
			"200": "LAND OF WASTE & SPACE"
		},
		descriptions: {
			"31": "\"LUNA, the straitjacket adult with the spikey hair is the most like you. He is like a brother or perhaps a father. If you were not human, you would be of the same species as him. But you are human, and so is he. His tales are heroic and wicked as he is a pirate... a SPACE PIRATE. Much of what you have learned has been taught by him. However, you don't wish to adopt his tendency for mass crime and end up with several life sentences.\" (Page 31)"
		},
		additional_tags: {
			"Guardian": 124,
		},
		plotrelevance: 25,
	},
	{
		id: "Dive",
		name: "Dive",
		names: {
			"22": "Dive",
			"103": "???",
			"203": "DIVECHAINSPRITE"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"22": "ourochar_files/earlydive.png",
			"103": "ourochar_files/protodive.png",
			"202": "ourochar_files/divechainsprite.png",
		},
		firstAppearance: 22,
		status: {
			"default": "Alive",
			"101": "Dead",
			"103": "Kernel'd",
			"203": "Sprite"
		},
		location: {
			"8": "the THIRD FRIDGE (Galactic Prison)",
			"182": "???",
			"200": "LAND OF WASTE & SPACE"
		},
		descriptions: {
			"31": "\"Beside him is DIVE, a chill guy who like you, wears a mask proudly. He claims that he is a twisted monster 'straight out of your deepest darkest nightmares', and that is why he is named DIVE. He is a deep dive into your phobias. You don't actually know much about him, as he is just as fascinated by LUNA as you. You do, however, know that DIVE is responsible for horrible atrocities on Mars.\" (Page 31) "
		},
		plotrelevance: 50,
		pestercolor: {
			"default": "#000000",
			"203": "#1efcf0"
		},
		pesterhighlight: {
			"default": "#FFFFFF00",
			"203": "#FFFFFF",
		}
	},
	{
		id: "SD",
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
		plotrelevance: 85,
	},
	{
		id: "Clover",
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
		sylladex: {
			"252": "Pocket Garden"
		},
		pronouns: {
			"default": "She/her"
		},
		descriptions: {
			"146": `\"Your name is CLOVER SOLSANGK. You have lived a highly sheltered life, if a bit too sheltered. You don't know what you are but don't think you are a human. You don't really care, as Wolf says you are "MY DARLING LITTLE BLOOM" every time you ask him. Though, he sometimes calls you "WOOF WOOF WOOF."
\n\n
You are captivated by BOTANY, SOFT THINGS, ROCKS AND GEMS, and THE VOICES OF THE RADIO. Additionally, you appreciate GOOD TASTING FOOD, VIDEO GAMES, and SLEEP. Despite your wide range of interests, nothing calls out to you. Nothing brings you to your knees or out on the streets.

Also, you are a tad... skittish. You could line the walls with all your fears and still not have enough room.\" (Page 146)`
		},
		location: {
			"217": "Bunker",
			"413": "Land of Flowers & Bastions"
		},
		weapon_kind: {
			"243": "Umbrellakind"
		},
		plotrelevance: 100,
	},
	{
		id: "Automaton V",
		name: "Automaton V",
		names: {
			"103": "V"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"103": "ourochar_files/earlyAutomatonV.png",
			"173": "ourochar_files/AutomatonV.png",
			"428": "ourochar_files/laterautomatonv.png"
		},
		firstAppearance: 103,
		additional_tags:{
			"AUTOMATON": 1
		},
		pestercolor: {
			"default": "#000000",
			"72": "#ff002b"
		},
		plotrelevance: 5,
	},
	{
		id: "RadioVoice",
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
		},
		plotrelevance: 1,
		location: {
			"217": "Bunker"
		},
		hideafter: 312 
	},
	{
		id: "Seeb",
		name: "Seeb",
		names: {
			"158": "???",
			"246": "SEEB"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"158": "https://file.garden/aLffnvE920YlSFwc/osalcharacters/seebshadow.png", //this wont work for some reason while uploaded to github. T-T File garden is signifigantly slower at loading images though.
			"218": "ourochar_files/early_seeb.png"
		},
		firstAppearance: 158,
		plotrelevance: 100,
		additional_tags:{
			"217": "Squire"
		},
		location: {
			"217": "Bunker",
			"413": "Land of Flowers & Bastions"
		},
		pestercolor: {
			"default": "#000000",
			"408": "#ffe100"
		},pesterhighlight: {
			"151": "#ffffff00",
			"408": "#000000"
		},
	},
	{
		id: "Spin",
		name: "Spin",
		names: {
			"184": "???"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"184": "ourochar_files/eoa1shadow.png" //this wont work for some reason while uploaded to github. T-T File garden is signifigantly slower at loading images though.
		},
		firstAppearance: 184,
		plotrelevance: 80,
	},{
		id: "GA",
		name: "GA",
		names: {
			"187": "YOU",
			"351": "Grim Archivest (GA)"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"187": "ourochar_files/187_you.png", //this wont work for some reason while uploaded to github. T-T File garden is signifigantly slower at loading images though.
			"351": "ourochar_files/Early_GA.png",
			"360": "ourochar_files/Early_GA_no_hat.png",
			"369": "ourochar_files/Early_GA.png",
		},
		firstAppearance: 187,
		plotrelevance: 0,
	},{
		id: "Automaton U",
		name: "Automaton U",
		names: {
			"195": "U"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"195": "ourochar_files/earlyAutomatonU.png"
		},
		firstAppearance: 195,
		additional_tags:{
			"AUTOMATON": 1
		},
		pestercolor: {
			"default": "#000000",
			"72": "#ff002b"
		},
		plotrelevance: 5,
	},
	{
		id: "Jekt-O",
		name: "Jekt-O",
		names: {
			"211": "???",
			"212": "Jekt-O Goner"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"211": "ourochar_files/earlyjekt-o.png",
			"214": "ourochar_files/earlyjekt-olight.png"
		},
		descriptions: {
			"214": `"Your name is JEKT-O GONER. Though, your mom says the O is silent. You don't care. You keep the O in your name anyway and tell others that they have to emphasize the O. That is... if you talked to anyone. Living at the bottom of the ocean doesn't give you many opportunities to make friends.

Your interests are in MARINE BIOLOGY, ELDRITCH BEASTS, and DRAWING. You are also quite fond of KILLING PIRATES, SHOOTER GAMES, and HUNTING THE WHITE WHALE. You think you would have more interests if you were allowed to leave your undersea home and go to the surface. But your mother, SONG, keeps you down here. You don't remember what the sun looks like." (Page 214)`
		},
		firstAppearance: 211,
		plotrelevance: 100,
		pestertag: {
			"64": "abyssalTitan [AT]"
		},
		pestercolor: {
			"default": "#000000",
			"64": "#003f62"
		},
		sylladex: {
			"295": "Iceberg"
		},
	},
	{
		id: "Wren",
		name: "Wren",
		names: {
			"216": "???",
			"332": "DAME MYSTERIOSO",
			"333": "Wren Synotion"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"216": "ourochar_files/early_FL.png",
			"315": "ourochar_files/shadow_wren.png",
			"331": "ourochar_files/wren_reveal.png",
			"343": "ourochar_files/wren_demon.png"
		},
		firstAppearance: 216,
		plotrelevance: 100,
		pestertag: {
			"64": "foreverLost [FL]"
		},
		pestercolor: {
			"default": "#000000",
			"64": "#ff0058"
		},
		descriptions: {
			"335": `Your name is WREN SYNOTION. You are currently on a mission with your older sister and her companions to save the world from an oppressive shadow organization known as WADE, which steals children for experimentation. Of course, the mission has changed now that the world is ending from something completely unrelated.

When you are not TOPPLING EMPIRES, BLASTING BADDIES, and EXORCISING DEMONS, you spend your time READING ROMANTIC TRASH, BIRDWATCHING, and SNACKING. You are interested in STREET ART, FREEDOM FIGHTING, and TOUGH PUZZLES.`
		}
	},
	{
		id: "Bangol",
		name: "Bangol",
		names: {
			"263": "???"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"263": "ourochar_files/early_bangol.png"
		},
		firstAppearance: 263,
		pestercolor: {
			"default": "#000000",
			"64": "#b11262"
		},
		plotrelevance: 84,
	},
	{
		id: "Vladsly",
		name: "Vladsly",
		names: {
			"288": "???"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"218": "ourochar_files/early_vladsly.png"
		},
		firstAppearance: 288,
		plotrelevance: 100,
	},
	{
		id: "Song",
		name: "Song",
		names: {
			"288": "Song the Siren"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"218": "ourochar_files/early_song.png"
		},
		firstAppearance: 302,
		plotrelevance: 25,
	},
	{
		id: "Whispy",
		name: "Whispy",
		names: {
			"306": `"CLIPPED GODDESS FROM ABOVE"`
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"306": "ourochar_files/early_whispy.png"
		},
		firstAppearance: 306,
		pestercolor: {
			"default": "#000000",
			"306": "#078446"
		},
		plotrelevance: 84,
	},
	{
		id: "KINGSLAYER",
		name: "KINGSLAYER",
		names: {
			"141": "Toy",
			"241": "KINGSLAYER",
			"279": "KINGSLAYER(?)",
			"407": "RADIOKINGSPRITE"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"141": "ourochar_files/early_plushie.png",
			"279": "ourochar_files/early_kingskernel.png",
			"312": "ourochar_files/early_kingradiokernel.png",
			"406": "ourochar_files/RADIOKINGSPRITE.png"
		},
		firstAppearance: 141,
		status: {
			"default": "Alive",
			"279": "Kernel'd",
			"406": "Sprite"
		},
		location: {
			"217": "Bunker",
			"413": "Land of Flowers & Bastions"
		},
		plotrelevance: 50,
		
	},
	{
		id: "Automaton X",
		name: "Automaton X",
		names: {
			"325": "X"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"325": "ourochar_files/early_x.png"
		},
		firstAppearance: 325,
		additional_tags:{
			"AUTOMATON": 1
		},
		pestercolor: {
			"default": "#000000",
			"325": "#ff002b"
		},
		plotrelevance: 5,
	},
	{
		id: "Sigmund",
		name: "Sigmund",
		names: {
			"347": "Sigmund"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"347": "ourochar_files/init_sigmund.png"
		},
		firstAppearance: 347,
		plotrelevance: 95,
		pestercolor: {
			"default": "#000000",
			"347": "#12cb7d"
		},
	},
	{
		id: "Wolf",
		name: "Wolf",
		names: {
			"317": "Wolf"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"317": "ourochar_files/early_wolf.png"
		},
		firstAppearance: 317,
		status: {
			"default": "Alive"
		},
		location: {
			"217": "Bunker",
			"413": "Land of Flowers & Bastions",
			"419": "???"
		},
		descriptions: {
			"317": `"While you and Wolf don't get along the best, you still love each other a lot. He gives you warm cans of food whenever you are sad and hugs you when you are cold. While he can't care for you like mom could(because he lacks arms) and is a guy, he still tries. And you appreciate that. In the end, everything he has done has been for you." (Page 319)`
		},
		plotrelevance: 25,
	},
	{
		id: "HG",
		name: "HG",
		names: {
			"425": "Hallowed Gunman (HG)"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"425": "ourochar_files/early_HG.png",
		},
		firstAppearance: 425,
		plotrelevance: 0,
	},
	{
		id: "MM",
		name: "MM",
		names: {
			"425": `"your partner"`,
			"426": "Merry Madam"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"425": "ourochar_files/MM.png",
		},
		firstAppearance: 425,
		plotrelevance: 0,
	},
	{
		id: "GA",
		name: "GA",
		names: {
			"187": "YOU",
			"351": "Grim Archivest (GA)"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"187": "ourochar_files/187_you.png", //this wont work for some reason while uploaded to github. T-T File garden is signifigantly slower at loading images though.
			"351": "ourochar_files/Early_GA.png",
			"360": "ourochar_files/Early_GA_nohat.png",
			"369": "ourochar_files/Early_GA.png",
		},
		firstAppearance: 187,
		plotrelevance: 0,
	},
	{
		id: "Automaton W",
		name: "Automaton W",
		names: {
			"430": "W"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"430": "ourochar_files/early_auto_W.png"
		},
		firstAppearance: 430,
		additional_tags:{
			"AUTOMATON": 1
		},
		pestercolor: {
			"default": "#000000",
			"430": "#ff002b"
		},
		plotrelevance: 5,
	},{
		id: "Automaton L",
		name: "Automaton L",
		names: {
			"430": "L"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"430": "ourochar_files/early_auto_L.png"
		},
		firstAppearance: 430,
		additional_tags:{
			"AUTOMATON": 1
		},
		pestercolor: {
			"default": "#000000",
			"430": "#ff002b"
		},
		plotrelevance: 5,
	},{
		id: "Automaton Y",
		name: "Automaton Y",
		names: {
			"431": "Y"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"431": "ourochar_files/early_auto_Y.png"
		},
		firstAppearance: 431,
		additional_tags:{
			"AUTOMATON": 1
		},
		pestercolor: {
			"default": "#000000",
			"430": "#ff002b"
		},
		plotrelevance: 5,
	},
];


const pageInput = document.getElementById('page-input');
const grid = document.getElementById('character-grid');

function dynamicallyCreateCharacterElements() {
	// based off of: <div class="grid-item" id="Inkwell" ><img class="thumbnail" src="ourochar_files\err.png" alt="Description of the image"><bold class="charname">PLACEHOLDER</bold></div>
	characters.forEach(char => {
		const charElement = document.createElement('div');
		charElement.classList.add('grid-item');
		charElement.id = char.id;
		charElement.innerHTML = `<img class="thumbnail" src="ourochar_files\err.png" alt="Description of the image"><bold class="charname">PLACEHOLDER</bold>`;
		grid.appendChild(charElement);
	});
}

function sortElementsByPlot() {
	// Sort the characters grid based on plotrelevance, ties broken by firstAppearance (lower is better for first appearance.)
	characters.sort((a, b) => {
		if (a.plotrelevance === b.plotrelevance) {
			return a.firstAppearance - b.firstAppearance;
		}
		return b.plotrelevance - a.plotrelevance;
	});

	characters.forEach(char => {
		const charElement = document.getElementById(char.id);
		if (charElement) {
			grid.appendChild(charElement); // This will move the element to the end of the grid, effectively sorting it.
		}
	});
}

function sortElementsByFirstAppearance() {
	// Sort the characters grid based on firstAppearance, ties broken by plotrelevance (higher is better for plotrelevance.)
	characters.sort((a, b) => {
		if (a.firstAppearance === b.firstAppearance) {
			return b.plotrelevance - a.plotrelevance;
		}
		return a.firstAppearance - b.firstAppearance;
	});
	characters.forEach(char => {
		const charElement = document.getElementById(char.id);
		if (charElement) {
			grid.appendChild(charElement); // This will move the element to the end of the grid, effectively sorting it.
		}
	});
}


function renderCharacters(currentPage) {
	const nocharacters = document.getElementById("NoCharacters");
	var amountofcharacters = 0
    characters.forEach(char => {
        const tempchar = document.getElementById(char.id);
        if (tempchar) {
            if (currentPage < char.firstAppearance) {
                tempchar.style.display = "none";
            }else if (currentPage >= char.hideafter) {
                tempchar.style.display = "none";
            }else {
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
				
				//if (char.pesterhighlight != null) {
					//temphighlight = getHighestUnder(char.pesterhighlight,currentPage)
					//tempchar.style.background = temphighlight
				//}
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
	document.getElementById('main-container').scrollIntoView({ behavior: 'smooth' });
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
	CharCard_Name.style.background = 'none';
	CharCard_Name.textContent = getHighestUnder(char.names,currentPage)
	CharCard_Name.style.color = getHighestUnder(char.pestercolor,currentPage)
	CharCard_Name.style.background = getHighestUnder(char.pesterhighlight,currentPage)
	const CharCard_Page = document.getElementById("CharCard_Page");
	CharCard_Page.textContent = char.firstAppearance;

	const CharCard_Pestertag = document.getElementById("CharCard_Pestertag");
	temppestertag = getHighestUnder(char.pestertag,currentPage)
	CharCard_Pestertag.style.background = 'none';
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


	
}
pageInput.addEventListener("input", (e) => {
    const page = parseInt(e.target.value) || 1;
	savePageToCookies();
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
dynamicallyCreateCharacterElements()
loadPageFromCookies();
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


function savePageToCookies() { // Keeping name same so you don't have to change your event listener
    const page = parseInt(pageInput.value) || 1;
    localStorage.setItem('osal_currentPage', page);
}

function loadPageFromCookies() { // Keeping name same so it drops right in
    const savedPage = localStorage.getItem('osal_currentPage');
    const page = parseInt(savedPage);

    if (!isNaN(page)) {
        pageInput.value = page;
        renderCharacters(page);
    } else {
        // Default to page 1 if nothing is stored yet
        pageInput.value = 1;
        renderCharacters(1);
    }
}
