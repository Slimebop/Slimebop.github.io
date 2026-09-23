let currentchar = null;

const characters = [
	{
		id: "Inkwell",
		name: "Inkwell",
		names: {
			"3": "MASKED MISCREANT",
			"4": "INKWELL PHOBIDAN",
			"5": "Inkwell Phobidan",
			"578": "PETE PAJAMAS",
			"579": "INKWELL PHOBIDAN",
			"580": "Inkwell Phobidan",
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"3": "ourochar_files/earlyinkwell.png",
			"348": "ourochar_files/early_dmg_ink.png",
			"398": "ourochar_files/capewell.png",
			"611": "ourochar_files/!REPLACEMEWHENUPDATE.cotwell.png",
			"3676": "ourochar_files/3676inkwell.png" //test image 
		},
		firstAppearance: 3,
		descriptions: {
			"6": "\"You think about yourself. Just who are you? Luckily, you have a great memory about yourself. You are called INKWELL PHOBIDAN by those with mouths and you are definitely a HUMAN and totally not a half-dead ANGEL from beyond the CELESTIAL TARN OF GREATER REALITY. You like OCEANS, SEA CREATURES, and AQUATIC STUFF. In addition to this arsenal of diverse interests, you appreciate HISTORY and STORIES OF YORE. You believe that in the past, you once dreamed of being a PIRATE. Deep down, you have an insatiable craving to DANCE A JIG WITH A MATIE OR PERHAPS A PARTICULARLY EXCELLENT LASS. Also, you are colorblind. \n Though, to be fair, you don't really know if any of this is true.\"",
			"default": "The standard design and appearance of Inkwell."
		},
		classpect: {},
		lunarswing:{
			"577": "Derse"
		},
		sexuality: {},
		pronouns: {
			"default": "He/Him" 
		},
		location: {
			"8": "the THIRD FRIDGE (Galactic Prison)",
			"182": "???",
			"200": "LAND OF WASTE & SPIRES"
		},
		status: {
			"default": "Alive"
		},
		additional_tags:{
			"Hero": 124,
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
		}, sburbicon: {
			"0": "ourochar_files/Blank.png",
			"182": "ourochar_files/inkwell_gate.png"
		},
		plotrelevance: 100,
	},
	{
		id: "Shelly",
		name: "Shelly",
		names: {
			"49": "SHELLY",
			"384": "Shelly Shackles"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"17": "ourochar_files/earlyshelly.png",
			"608": "ourochar_files/!REPLACEMEWHENUPDATE.shellysmile.png",
		},
		firstAppearance: 17,
		descriptions: {
			"default": "???"
		},
		classpect: {
			"default": "???"
		},
		lunarswing:{
			"580": "Derse"
		},
		sexuality: {
			"default": "???"
		},
		weapon_kind: {
			"1332": "Chainkind",
		},
		pronouns: {
			"default": "She/Her" 
		},
		sylladex: {
			"default": "???",
			"387": "Spin Spirals"
		},
		location: {
			"8": "the THIRD FRIDGE (Galactic Prison)",
			"182": "???",
			"200": "LAND OF WASTE & SPIRES"
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
		},sburbicon: {
			"0": "ourochar_files/Blank.png",
			"182": "ourochar_files/inkwell_gate.png"
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
			"200": "LAND OF WASTE & SPIRES",
			"436": "Derse"
		},
		descriptions: {
			"31": "\"LUNA, the straitjacket adult with the spikey hair is the most like you. He is like a brother or perhaps a father. If you were not human, you would be of the same species as him. But you are human, and so is he. His tales are heroic and wicked as he is a pirate... a SPACE PIRATE. Much of what you have learned has been taught by him. However, you don't wish to adopt his tendency for mass crime and end up with several life sentences.\" (Page 31)"
		},
		additional_tags: {
			"Guardian": 124,
		},sburbicon: {
			"0": "ourochar_files/Blank.png",
			"182": "ourochar_files/inkwell_gate.png"
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
			"200": "LAND OF WASTE & SPIRES"
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
		},sburbicon: {
			"0": "ourochar_files/Blank.png",
			"182": "ourochar_files/inkwell_gate.png"
		},
	},
	{
		id: "SD",
		name: "SD",
		names: {
			"64": "stringlessDevil [SD]"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"64": "ourochar_files/earlySD.png",
			"1213": "ourochar_files/sd_shadow.png"
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
			"1014": "ourochar_files/owiedclover.png",
			"1172": "ourochar_files/healingclover.png"
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
			"243": "Umbrellakind",
			"785": "AXEKIND & UMBRELLAKIND"
		},sburbicon: {
			"0": "ourochar_files/Blank.png",
			"413": "ourochar_files/clover_gate.png"
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
		},sburbicon: {
			"0": "ourochar_files/Blank.png",
			"413": "ourochar_files/clover_gate.png"
		},
		hideafter: 312 
	},
	{
		id: "Seeb",
		name: "Seeb",
		names: {
			"158": "???",
			"246": "SEEB",
			"1295": "Sebastian Kingcull"
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
		},sburbicon: {
			"0": "ourochar_files/Blank.png",
			"413": "ourochar_files/clover_gate.png"
		},
	},
	{
		id: "mysterylady",
		name: "mysterylady",
		names: {
			"184": "???"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"184": "ourochar_files/eoa1shadow.png", //this wont work for some reason while uploaded to github. T-T File garden is signifigantly slower at loading images though.
			"760": "ourochar_files/mysterylady.png"
		},
		firstAppearance: 184,
		plotrelevance: 80,
		hideafter: 1009, //thats right .   spin spirals ws the  real girl all along
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
			"360": "ourochar_files/Early_GA_nohat.png",
			"370": "ourochar_files/Early_GA.png",
		},
		firstAppearance: 187,
		plotrelevance: 4,
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
			"212": "Jekt-O Goner",
			"954": "LITTLE O",
			"955": "Jekt-O Goner",
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"211": "ourochar_files/earlyjekt-o.png",
			"214": "ourochar_files/earlyjekt-olight.png"
		},
		weapon_kind: {
			"451": "Harpngunkind"
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
		lunarswing:{
			"725": "Prospit"
		},
		location:{
			"728": "Land of Depths & Glory"
		},
		sburbicon: {
			"0": "ourochar_files/Blank.png",
			"728": "ourochar_files/jekto_gate.png"
		},
		fonts: {
			"0": `"Courier New", Courier, monospace`,
			"954": "Alternian",
			"955": `"Courier New", Courier, monospace`,
		}
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
			"343": "ourochar_files/wren_demon.png",
			"493": "ourochar_files/unmasked_wren.png",
			"672": "ourochar_files/wren_672.png",
			"1078": "ourochar_files/wren.1078.png",
			"1080": "ourochar_files/suitwren.png",
			"1087": "ourochar_files/swagger.png",
			"1092": "ourochar_files/awesomewren.png"
		},
		sylladex: {
			"481": "Game Show"
		},
		firstAppearance: 216,
		plotrelevance: 100,
		pestertag: {
			"64": "foreverLost [FL]"
		},
		lunarswing:{
			"590": "Derse"
		},
		pestercolor: {
			"default": "#000000",
			"64": "#ff0058"
		},sburbicon: {
			"0": "ourochar_files/Blank.png",
			"728": "ourochar_files/wren_gate.png" 
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
			"263": "???",
			"778": "Bangol"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"263": "ourochar_files/early_bangol.png",
			"778": "ourochar_files/bangol_mirror.png"
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
			"288": "???",
			"454": "Vladsly Parize"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"218": "ourochar_files/early_vladsly.png",
			"450": "ourochar_files/shadow_vladsly.png",
			"454": "ourochar_files/vladsly.png",
			"950": "ourochar_files/sickafvladsly.png",
			"958": "ourochar_files/ouchedvladsly.png",
			"959": "ourochar_files/poorbabyvladsly.png",
			"961": "ourochar_files/smilesadvladsly.png",
			"1132": "ourochar_files/vladslynoglasses.png"
		},
		pestercolor: {
			"default": "#000000",
			"454": "#ff0a2e"
		},
		location:{
			"728": "Land of Depths & Glory"
		},sburbicon: {
			"0": "ourochar_files/Blank.png",
			"728": "ourochar_files/jekto_gate.png"
		},
		firstAppearance: 288,
		plotrelevance: 100,
	},
	{
		id: "Song",
		name: "Song",
		names: {
			"288": "Song the Siren",
			"556": "Song Goner"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"218": "ourochar_files/early_song.png",
			"557": "ourochar_files/!REPLACEMEWHENUPDATE.songreveal.png",
			"1153": "ourochar_files/song_1153.png"
		},
		firstAppearance: 302,
		plotrelevance: 25,
		sburbicon: {
			"0": "ourochar_files/Blank.png",
			"728": "ourochar_files/jekto_gate.png"
		},
	},
	{
		id: "Whispy",
		name: "Whispy",
		names: {
			"306": `"CLIPPED GODDESS FROM ABOVE"`,
			"735": "Whispy Dewblu"
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
		},sburbicon: {
			"0": "ourochar_files/Blank.png",
			"413": "ourochar_files/clover_gate.png"
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
			"347": "ourochar_files/init_sigmund.png",
			"467": "ourochar_files/sigmundbabymode.png",
			"1078": "ourochar_files/sigmund.png",
			"1090": "ourochar_files/awesomesigmund.png"
		},
		lunarswing:{
			"590": "Derse"
		},sburbicon: {
			"0": "ourochar_files/Blank.png",
			"728": "ourochar_files/wren_gate.png"
		},
		firstAppearance: 347,
		plotrelevance: 100,
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
		},sburbicon: {
			"0": "ourochar_files/Blank.png",
			"413": "ourochar_files/clover_gate.png"
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
		plotrelevance: 4,
	},
	{
		id: "MM",
		name: "MM",
		names: {
			"425": `"your partner"`,
			"426": "Merry Madam (MM)"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"425": "ourochar_files/MM.png",
		},
		firstAppearance: 425,
		plotrelevance: 4,
	},
	{
		id: "Automaton W",
		name: "Automaton W",
		names: {
			"430": "W"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"430": "ourochar_files/early_auto_W.png",
			"1156": "ourochar_files/automatonW.png"
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
			"431": "#ff002b"
		},
		plotrelevance: 5,
	},{
		id: "Automaton Z",
		name: "Automaton Z",
		names: {
			"432": "Z"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"432": "ourochar_files/early_auto_Z.png"
		},
		firstAppearance: 432,
		additional_tags:{
			"AUTOMATON": 1
		},
		pestercolor: {
			"default": "#000000",
			"432": "#ff002b"
		},
		hideafter: 908,
		plotrelevance: 5,
	},{
		id: "Automaton C",
		name: "Automaton C",
		names: {
			"435": "C"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"435": "ourochar_files/early_auto_C.png"
		},
		firstAppearance: 435,
		additional_tags:{
			"AUTOMATON": 1
		},
		pestercolor: {
			"default": "#000000",
			"435": "#ff002b"
		},
		plotrelevance: 5,
	},{
		id: "Jack Noir",
		name: "Jack Noir",
		names: {
			"439": "???",
			"441": "Jack Noir"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"439": "ourochar_files/jack_noir.png"
		},
		description: {
			"441": `"Your name is JACK NOIR. It always has been and always will be. Just as your rank has always and will always be ARCHAGENT. You are tasked with a multitude of fundamental affairs within the DARK KINGDOM of DERSE.

Part of the job is viewing the entire kingdom through your FENESTRATED WALLS. Normally, you would have a fourth wall, but it never existed in the first place. There is hardly anything going on right now, anyway, so you only have the front one turned on. It is your favorite.

You are watching as the invader who fell from the stars wanders the dungeons deep beneath the kingdom. He radiates an intense aura that pisses you off, but you do have to admit that he is pretty good at killing your minions. Too bad what he did to HB. Never before have you seen a head roll down a flight of stairs for so long. By the time it hit the bottom, it was impossible to tell the body it once belonged to.

Perhaps you should visit this intruder yourself." (Page 441)`
		},
		firstAppearance: 439,
		plotrelevance: 50,
	},{
		id: "MysteryCreator",
		name: "MysteryCreator",
		names: {
			"442": "???",
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"442": "ourochar_files/mysterynoirvoice.png"
		},pestercolor: {
			"default": "#000000",
			"435": "#5fee30"
		},
		firstAppearance: 442,
		plotrelevance: 85,
	},
	{
		id: "Spin",
		name: "Spin",
		names: {
			"501": "Someone?",
			"1000": "Spin Spirals"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"501": "ourochar_files/Someone.png",
			"1000": "ourochar_files/spin_first_real_appearance.png"
		},
		firstAppearance: 501,
		plotrelevance: 80,
	},
	{
		id: "VEILIA",
		name: "VEILIA",
		names: {
			"571": `"Veilia Scwoll"`
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"571": "ourochar_files/!REPLACEMEWHENUPDATE.veiliamirror.png",
			"1215": "ourochar_files/veiliascwoll.png"
		},
		firstAppearance: 571,
		pestertag: {
			"1214": "karmicRevenant [KR]"
		},
		pestercolor: {
			"default": "#000000",
			"571": "#6a006a"
		},
		plotrelevance: 84,
	},
	{
		id: "Vivi",
		name: "Vivi",
		names: {
			"605": "???",
			"606": "VIVI(AN)",
			"711": "VIVIAN CRYSTALANCE",
			"835": "VIVIAN CRYSTALANCE",
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"605": "ourochar_files/!REPLACEMEWHENUPDATE.dreamvivi.png",
			"831": "ourochar_files/VIVIREVEAL.png", // holy lowquality image :tearful:
			"1031": "ourochar_files/vivimasked.png"
		},
		firstAppearance: 605,
		plotrelevance: 100,
		lunarswing:{
			"590": "Derse"
		},
		pestertag: {
			"676": "noosphereChalice [NC]"
		},
		pestercolor: {
			"default": "#000000",
			"590": "#5ba2c9"
		},
		weapon_kind: {
			"847": "rapierkind"
		}
	},
	{
		id: "Skully",
		name: "Skully",
		names: {
			"632": "Skully"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"632": "ourochar_files/!REPLACEMEWHENUPDATE.skully.png",
		},
		firstAppearance: 632,
		plotrelevance: 0, // this character does jack shit but i added him anyway cuz this line is REALLY fucking funny.
		pesterhighlight: {
			"default": "#FFFFFF00",
			"881": "#b6b6b6"
		}
	},
	{
		id: "Salem",
		name: "Salem",
		names: {
			"640": "Salem"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"640": "ourochar_files/!REPLACEMEWHENUPDATE.salem.png" //this wont work for some reason while uploaded to github. T-T File garden is signifigantly slower at loading images though.
		},
		firstAppearance: 640,
		plotrelevance: 93,
		pestercolor: {
			"default": "#000000",
			"692": "#ffdf3a"
		},
		pesterhighlight: {
			"default": "#FFFFFF00",
			"692": "#000000",
		},
	},
	{
		id: "ADAM",
		name: "ADAM",
		names: {
			"647": `"Adam!"`
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"647": "ourochar_files/!REPLACEMEWHENUPDATE.adammirror.png"
		},
		firstAppearance: 647,
		pestercolor: {
			"default": "#000000",
			"647": "#a15203"
		},
		plotrelevance: 84,
	},
	{
		id: "TESS",
		name: "TESS",
		names: {
			"650": `Tess Synotion`
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"650": "ourochar_files/!REPLACEMEWHENUPDATE.initTess.png"
		},
		firstAppearance: 650,
		plotrelevance: 25,
		sburbicon: {
			"0": "ourochar_files/Blank.png",
			"728": "ourochar_files/wren_gate.png"
		},
	},
	{
		id: "SwarmPriestess",
		name: "SwarmPriestess",
		names: {
			"655": `Priestess of the Swarm`
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"655": "ourochar_files/!REPLACEMEWHENUPDATE.SwarmPriestess.png"
		},
		firstAppearance: 655,
		plotrelevance: 25,
	},
	{
		id: "Unfinished06",
		name: "Unfinished06",
		names: {
			"656": `Unity the Slayer`
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"656": "ourochar_files/!REPLACEMEWHENUPDATE.Unfinished06.png"
		},
		firstAppearance: 656,
		plotrelevance: 25,
	},
	{
		id: "Nora",
		name: "Nora",
		names: {
			"676": `umbralEyes [UE]`,
			"747": `Umbra!`,
			"748": "NORA APHELION",
			"749": "Nora Aphelion"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"676": "ourochar_files/Blank.png",
			"746": "ourochar_files/earlynora.png",
			"935": "ourochar_files/noragame.png",
			"974": "ourochar_files/earlynora.png",
			"1031": "ourochar_files/noragame.png"
		},
		pestertag: {
			"676": "umbralEyes [UE]"
		},
		pestercolor: {
			"default": "#000000",
			"676": "#640d50",
		},
		description: {
			"749": `"Your name is NORA APHELION. But you have another name that you much PURRfur. UMBRA CLAWS THE TWILIGHT ORACLE. You don’t exactly hate your birth name but you just like Umbra better. You answer to both and none… for you are a MYSTERY-LOVING CAT-ENTHUSED CATGIRL. There is a story about why you have authentic cat ears, but you keep that tight to your chest.

Besides cats, you like SILLY HORROR MOVIES AND GAMES, MYSTERIES OF MOST KINDS, and READING CONQUEST CATS(both canonical texts and fanfiction). Speaking of CONQUEST CATS, you and your INFORMANT/BIG BOSS/MYSTERY MAN often roleplay as some OCs. You are, of course, Umbra Claws. You would draw her, but you suck at drawing.

In addition to these silly interests for a cat girl, you love ANIMALS OF MANY KINDS, MONSTERS OF EVEN MORE KINDS, and TALKING TO GHOSTS. You are a normal cat girl. Your favorite color is purple. You have killed before and will kill again. Meow?" (Page 749)`
		},
		firstAppearance: 676,
		plotrelevance: 100,
	},
	{
		id: "Penn",
		name: "Penn",
		names: {
			"676": `Penn(?)`,
			"712": `Gerald Way`,
			"712": `Squintly Depresso`,
			"712": `Johann Sterling`, //Ties dont currently work: Maybe impliment it?
			"713": "Penn Aphelionx`"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"676": "ourochar_files/Blank.png",
			"680": "ourochar_files/ShadowPenn.png",
			"710": "ourochar_files/realPenn.png",
			"935": "ourochar_files/maskedpenn.png",
			"985": "ourochar_files/realPenn.png",
			"1031": "ourochar_files/maskedpenn.png"
		},
		pestertag: {
			"676": "silentCadence [SC]"
		},
		pestercolor: {
			"default": "#000000",
			"676": "#c3c3c3",
		},
		description: {
			"714": `"Your name is PENN APHELION, as said a moment ago. It is a fine name for a fine GENTLEMAN SUCH AS YOURSELF. You are currently in your room within the CRYSTALANCE ESTATE where you serve as the COURT VIOLINIST for the princess whom you are close friends with. While you are praised far and wide for your violin skills, lately you have been stricken with horrible hands and cannot perform as well as you want to.

You have a few interests outside of playing the violin and pleasing the princess, such as listening to ANCIENT EARTH MUSIC OF THE DARK OR REBELLIOUS NATURE, writing POEMS ABOUT DEATH AND LOVE, EXPLORING GRAVEYARDS, DREAMING OF GOLD, HEEDING THE GOLDEN SKULL’S SHRILLS, and ORGANIZING YOUR FRIENDS.

You see yourself as a shadow leader or sidekick to the rest of your friend group despite being neither the shadow leader nor the sidekick in the group. You have a slight case of believing you are a fallen god who is bestowed with near boundless knowledge but cursed to forever be silent. In reality, you are silent because you lost your voice in an accident when you were very young." (Page 714)`
		},
		lunarswing:{
			"725": "Prospit"
		},
		sylladex:{
			"798": "Poem"
		},
		firstAppearance: 676,
		plotrelevance: 100,
	},
	{
		id: "ZZ",
		name: "ZZ ",
		names: {
			"676": `zenithZero [ZZ]`
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"676": "ourochar_files/Blank.png",
			"820": "ourochar_files/ZZ_shadow.png"
		},
		pestertag: {
			"676": "zenithZero [ZZ]"
		},
		pestercolor: {
			"default": "#000000",
			"676": "#ff0000",
		},
		pesterhighlight: {
			"default": "#FFFFFF00",
			"676": "#000000"
		},
		firstAppearance: 676,
		plotrelevance: 100,
	},
	{
		id: "Devari",
		name: "Devari",
		names: {
			"669": "Devari"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"669": "ourochar_files/devarimirror.png",
		},pestercolor: {
			"default": "#000000",
			"647": "#a15203"
		},
		firstAppearance: 669,
		plotrelevance: 84,
	},
	{
		id: "zeapersprite",
		name: "zeapersprite",
		names: {
			"688": "Reaper Kernel",
			"908": "Zeapersprite"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"688": "ourochar_files/reaperkernel.png",
			"908": "ourochar_files/zeapersprite.png"
		},
		firstAppearance: 688,
		status: {
			"688": "Kernel'd",
			"908": "Sprite"
		},
		pestercolor: {
			"default": "#000000",
			"908": "#430720"
		},
		sburbicon: {
			"0": "ourochar_files/Blank.png",
			"728": "ourochar_files/wren_gate.png"
		},
		plotrelevance: 50,
	},
	{
		id: "madnesskernel",
		name: "madnesskernel",
		names: {
			"698": "???",
			"731": "Solsprite"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"698": "ourochar_files/madnesskernel.png",
			"731": "ourochar_files/Solsprite.png"
		},
		firstAppearance: 698,
		status: {
			"698": "Kernel'd",
			"731": "Sprite"
		},
		pestercolor: {
			"default": "#000000",
			"731": "#ff9b00"
		},sburbicon: {
			"0": "ourochar_files/Blank.png",
			"728": "ourochar_files/jekto_gate.png"
		},
		plotrelevance: 50,
	},
	{
		id: "Automaton T",
		name: "Automaton T",
		names: {
			"698": "T"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"698": "ourochar_files/automatonT.png",
		},
		firstAppearance: 698,
		additional_tags:{
			"AUTOMATON": 1
		},
		pestercolor: {
			"default": "#000000",
			"698": "#ff002b"
		},
		plotrelevance: 5,
	},
	{
		id: "Ares",
		name: "Ares",
		names: {
			"704": `Ares`
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"704": "ourochar_files/Blank.png"
		},
		firstAppearance: 704,
		plotrelevance: 93,
		fonts: {
			"704": "Garamond"
		}
	},
	{
		id: "Leon",
		name: "Leon",
		names: {
			"705": `Leon`
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"705": "ourochar_files/Leon.png"
		},
		firstAppearance: 705,
		plotrelevance: 25,
	},
	{
		id: "Lime",
		name: "Lime",
		names: {
			"705": `Lime`
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"705": "ourochar_files/Lime.png"
		},
		firstAppearance: 705,
		plotrelevance: 25,
	},{
		id: "Automaton K",
		name: "Automaton K",
		names: {
			"707": "K"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"707": "ourochar_files/prototypeK.png"
		},
		firstAppearance: 707,
		additional_tags:{
			"AUTOMATON": 1
		},
		pestercolor: {
			"default": "#000000",
			"707": "#ff002b"
		},
		plotrelevance: 5,
	},{
		id: "Mehx",
		name: "Mehx",
		names: {
			"709": "???"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"709": "ourochar_files/Mehx.png"
		},
		firstAppearance: 709,
		pestercolor: {
			"default": "#000000",
			"709": "#ff002b"
		},
		plotrelevance: 5,
	},{
		id: "Silver Serenity",
		name: "Silver Serenity",
		names: {
			"715": "Silver Serenity",
			"1269": "Aria Erased"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"715": "ourochar_files/Silver_Poster.png"
		},
		pestercolor: {
			"default": "#000000",
			"1266": "#a80081",
		},
		firstAppearance: 715,
		plotrelevance: 25,
	},{
		id: "Vista",
		name: "Vista",
		names: {
			"721": "Vista",
			"827": "Vista Nocturna"
		},
		images: {
			"721": "ourochar_files/VISTA.png"
		},
		firstAppearance: 721,
		plotrelevance: 100, //LIKE A MILLION!!!!!!!!!!!
		pestercolor: {
			"default": "#000000",
			"721": "#9e469e"
		}
	},
	{
		id: "Oxovuu",
		name: "Oxovuu",
		names: {
			"755": "Oxovuu"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"755": "ourochar_files/oxovuu_mirror.png"
		},
		firstAppearance: 755,
		pestercolor: {
			"default": "#000000",
			"755": "#008282"
		},
		plotrelevance: 84,
	},{
		id: "Gimmie",
		name: "Gimmie",
		names: {
			"808": "???",
			"809": "GIMMIE APITHA",
			"810": "Gimmie Apitha"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"808": "ourochar_files/mirrorgimmie.png",
			"809": "ourochar_files/gimmiereveal.png"
		},
		firstAppearance: 808,
		pestercolor: {
			"default": "#000000",
			"808": "#a1a100"
		},
		description: {
			"809": `"Your name is GIMMIE APITHA. You aren’t supposed to show up yet in this form. But then again, you never were one for the rules. At some point, you will get a fancy introduction paragraph or two. Maybe you will have a funny naming joke as well. But that is for later. You have important business to attend to right now." (Page 809)`
		},
		plotrelevance: 84,
	},
	{
		id: "Saxo",
		name: "Saxo",
		names: {
			"830": "Saxo"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"830": "ourochar_files/Saxo.png"
		},
		firstAppearance: 830,
		plotrelevance: 25,
	},
	{
		id: "Ashe",
		name: "Ashe",
		names: {
			"833": "???",
			"838": "Ashe",
			"841": "ASHE WITHERSCOWL",
			"842": "Ashe Witherscowl"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"833": "ourochar_files/ASHe.png"
		},
		firstAppearance: 833,
		plotrelevance: 100,
		pestercolor: {
			"default": "#000000",
			"861": "#ffd873"
		},
		pesterhighlight: {
			"default": "#FFFFFF00",
			"861": "#949494"
		}
	},
	{
		id: "Ashe",
		name: "Ashe",
		names: {
			"835": "???",
			"837": "ASHE WITHERSCOWL",
			"838": "Ashe Witherscowl"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"835": "ourochar_files/ASHe.png"
		},
		firstAppearance: 835,
		plotrelevance: 100,
	},
	{
		id: "Curi",
		name: "Curi",
		names: {
			"835": "???",
			"837": "CURI CRESTFLAME",
			"838": "Curi Crestflame"
		},
		images: {//im pretty usre links should work here too?(if you wanted to use filegarden ^_^)
			"835": "ourochar_files/curi.png"
		},
		firstAppearance: 835,
		plotrelevance: 25,
	},
	{
		id: "TB",
		name: "TB",
		names: {
			"857": "???",
			"858": "torchedBlindman [TB]",
			"1256": `"RXTSKX AISTEI"`
		},
		pestertag: {
			"858": "torchedBlindman [TB]"
		},
		images: {
			"857": "ourochar_files/TB.png",
			"859": "ourochar_files/TB_img.png"
		},
		pestercolor: {
			"default": "#000000",
			"858": "#a10000"
		},
		plotrelevance: 84,
		firstAppearance: 857,
	},
	{
		id: "UM",
		name: "UM",
		names: {
			"884": "unrequitedMechlord [UM]"
		},
		pestertag: {
			"884": "unrequitedMechlord [UM]"
		},
		pestercolor: {
			"default": "#000000",
			"884": "#004183"
		},
		images: {
			"884": "ourochar_files/UM.png",
			"885": "ourochar_files/UMappear.png"
		},
		plotrelevance: 84,
		firstAppearance: 884,
	},
	{
		id: "Rorschi",
		name: "Rorschi",
		names: {
			"899": "???",
			"900": "Rorschi"
		},
		pestercolor: {
			"default": "#000000",
			"899": "#316c58"
		},
		images: {
			"899": "ourochar_files/rorschishadow.png",
			"900": "ourochar_files/rorschireal.png",
		},
		plotrelevance: 26,
		firstAppearance: 899,
	},
	{
		id: "Bloomi",
		name: "Bloomi",
		names: {
			"921": "Bloomi"
		},
		pestercolor: {
			"default": "#000000",
			"922": "#658200"
		},
		images: {
			"921": "ourochar_files/bloomicon.png",
			"922": "ourochar_files/bloomishadow.png"
		},
		pestertag: {
			"922": "graveyardGardener [GG]"
		},
		plotrelevance: 84, //1 billion in my heart </3
		firstAppearance: 921
	},
	{
		id: "butlerdive",
		name: "butlerdive",
		names: {
			"1039": "Dive?????",
			"1040": "Dive"
		},
		images: {
			"1039": "ourochar_files/butlerdive.png",
		},
		plotrelevance: 50,
		firstAppearance: 1039
	},
	{
		id: "soka",
		name: "soka",
		names: {
			"1039": "???",
			"1046": "Soka Snapdragon"
		},
		images: {
			"1039": "ourochar_files/soka.png",
		},
		plotrelevance: 25,
		firstAppearance: 1039
	},
	{
		id: "mimi",
		name: "mimi",
		names: {
			"1039": "???",
			"1126": "Mimi Snapdragon"
		},
		images: {
			"1039": "ourochar_files/mimismile.png"
		},
		plotrelevance: 100,
		firstAppearance: 1039
	},
	{
		id: "cleo",
		name: "cleo",
		names: {
			"1050": "???",
			"1054": "Cleo"
		},
		firstAppearance: 1050,
		plotrelevance: 100,
		images: {
			"1050": "ourochar_files/celosmile.png",
		},
		pestercolor: {
			"default": "#000000",
			"1052": "#c90021"
		}
	},
	{
		id: "KC",
		name: "KC",
		names: {
			1061: "???",
			1062: "Klutzy Castaway (KC)"
		},
		images: {
			1061: "ourochar_files/kc.png",
		},
		firstAppearance: 1061,
		plotrelevance: 4,
	},
	{
		id: "GDINKWELL",
		name: "GDINKWELL",
		names: {
			"1067": "GDINKWELL"
		},
		images: {
			"1067": "ourochar_files/GDINKWELL.png",
		},
		firstAppearance: 1067,
		plotrelevance: 93,
		fonts: {
			"1067": "Rockwell"
		},
		description: {
			"1067": "The Demon currently attached to half of Inkwell's face."
		}
	},
	{
		id: "enzzo",
		name: "enzzo",
		names: {
			"1112": "???",
			"1115": "Enzo",
			"1116": "Enzo Archivisper"
		},
		pestercolor: {
			"default": "#000000",
			"1115": "#4b4b4b"
		},
		images: {
			"1112": "ourochar_files/enzo.png",
		},
		firstAppearance: 1112,
		plotrelevance: 100,
	},
	{
		id: "Luxlux",
		name: "Luxlux",
		names: {
			"1130": "Luxlux"
		},
		images: {
			"1130": "ourochar_files/mirrorluxlux.png",
		},
		pestertag: {
			"1272": "nocturneOperator [NO]"
		},
		firstAppearance: 1130,
		plotrelevance: 84,
		pestercolor: {
			"default": "#000000",
			"1130": "#631db4"
		}
	},
	{
		id: "HANK",
		name: "HANK",
		names: {
			"1281": "accretionUnberufen [AU]"
		},
		images: {
			"1281": "ourochar_files/AU.png",
		},
		plotrelevance: 99,
		firstAppearance: 1281,
		pestercolor: {
			"default": "#000000",
			"1281": "#d3b114"
		},
		pestertag: {
			"1281": "accretionUnberufen [AU]"
		}
	},
	{
		id: "CHAD",
		name: "CHAD",
		names: {
			"1288": "pipersFanfare [PF]"
		},
		pestercolor: {
			"default": "#000000",
			"1288": "#63b4ff"
		},	
		images: {
			"1288": "ourochar_files/CHAD.png"
		},
		plotrelevance: 99,
		firstAppearance: 1288,
		pestertag: {
			"1288": "pipersFanfare [PF]"
		}
	},
	{
		id: "HADWAQ",
		name: "HADWAQ",
		names: {
			"1329": "HADWAQ"
		},
		images: {
			"1329": "ourochar_files/hadwaqshadow.png"
		},
		firstAppearance: 1329,
		plotrelevance: 84,
		pestercolor: {
			"default": "#000000",
			"1329": "#416600"
		}
	}
];	


const pageInput = document.getElementById('page-input');
const grid = document.getElementById('character-grid');
let lastUpdateSortActive = false;

function dynamicallyCreateCharacterElements() {
	// based off of: <div class="grid-item" id="Inkwell" ><img class="thumbnail" src="ourochar_files\err.png" alt="Description of the image"><bold class="charname">PLACEHOLDER</bold></div>
	characters.forEach(char => {
		const charElement = document.createElement('div');
		charElement.classList.add('grid-item');
		charElement.id = char.id;
		charElement.innerHTML = `<img class="thumbnail" src="ourochar_files\err.png" alt="Description of the image"><img class="sburboverlay" src="ourochar_files\Blank.png"><bold class="charname">PLACEHOLDER</bold>`;
		grid.appendChild(charElement);
	});
}

function sortElementsByPlot() {
	lastUpdateSortActive = false;
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
	lastUpdateSortActive = false;
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

//sort by last update (images, names, pestercolor, etc.)
function sortElementsByLastUpdate() {
	lastUpdateSortActive = true;
	
	const currentPage = parseInt(pageInput.value, 10) || 1;
	const getLastUpdate = character => {
		const updates = [
			...Object.keys(character.images || {}),
			...Object.keys(character.names || {}),
			...Object.keys(character.pestercolor || {}),
			...Object.keys(character.pesterhighlight || {}),
		]
			.map(Number)
			.filter(update => Number.isFinite(update) && update <= currentPage);

		return updates.length ? Math.max(...updates) : 0;
	};

	characters.sort((a, b) => {
		const lastUpdateA = getLastUpdate(a);
		const lastUpdateB = getLastUpdate(b);
		if (lastUpdateA === lastUpdateB) {
			return b.plotrelevance - a.plotrelevance;
		}
		return lastUpdateB - lastUpdateA;
	});

	characters.forEach(char => {
		const charElement = document.getElementById(char.id);
		if (charElement) {
			grid.appendChild(charElement); // This will move the element to the end of the grid, effectively sorting it.
		}
	});
}

// reverse sort by first appearance
function sortElementsByFirstAppearanceReverse() {
	lastUpdateSortActive = false;
	// Sort the characters grid based on firstAppearance.
	characters.sort((a, b) => {
		if (a.firstAppearance === b.firstAppearance) {
			return b.plotrelevance - a.plotrelevance;
		}
		return b.firstAppearance - a.firstAppearance;
	});
	characters.forEach(char => {
		const charElement = document.getElementById(char.id);
		if (charElement) {
			grid.appendChild(charElement); // This will move the element to the end of the grid, effectively sorting it.
		}
	});
}

// reverse plot
function sortElementsByPlotReverse() {
	lastUpdateSortActive = false;
	// Sort the characters grid based on plotrelevance, ties broken by firstAppearance (lower is better for first appearance.)
	characters.sort((a, b) => {
		if (a.plotrelevance === b.plotrelevance) {
			return a.firstAppearance - b.firstAppearance;
		}
		return a.plotrelevance - b.plotrelevance;
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
				
				const overlay = tempchar.querySelector('.sburboverlay');
					overlay.src = "ourochar_files/Blank.png"
				if (char.sburbicon != null) {
					overlay.src = getHighestUnder(char.sburbicon,currentPage)
				}


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

				//font
				if (char.fonts != null) {
					tempfont = getHighestUnder(char.fonts,currentPage)
					tempchar.style.fontFamily = tempfont
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


	charsheet.style.fontFamily = getHighestUnder(char.fonts,currentPage)

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
	if (lastUpdateSortActive) {
		sortElementsByLastUpdate();
	}
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
			//check for if its a image and return blank otherwise
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


function toggleFilters() {
    const filters = document.querySelector('.filters');
    if (filters.style.display === 'none') {
        filters.style.display = 'block';
    } else {
        filters.style.display = 'none';
    }
}

/*
function filterCharacters() {
	const searchInput = document.getElementById('SearchInput').value.toLowerCase();
	const currentPage = parseInt(pageInput.value) || 1;
	//filter characters based off of search PLEASE. include name, tags, pestertags, pestercolors, and descriptions.

	characters.forEach(char => {
		// Check if the character matches the search criteria

		//first, check if the character is visible based on the current page
		if (currentPage < char.firstAppearance || (char.hideafter && currentPage >= char.hideafter)) {
			// If the character is not visible, hide it and skip further checks
			const charElement = document.getElementById(`char-${char.id}`);
			if (charElement) {
				charElement.style.display = 'none';
			}
			return; // Skip to the next character
		}
		//check to see if they have additional tags or pestertags or pestercolors or descriptions before searhcing for such

		

		
		const matches = char.name.toLowerCase().includes(searchInput)

		
		// Show or hide the character based on the search result
		const charElement = document.getElementById(`char-${char.id}`);
		if (charElement) {
			charElement.style.display = matches ? 'block' : 'none';
		}
	});
}
*/


//⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⠀⠀⠀
//⠀⠀⠀⢠⡶⠲⠶⢒⣓⡶⠮⢤⠀⠀
//⢀⣀⣿⣏⣀⣀⠀⠘⠛⠃⠀⠈⠉⢹
//⠘⢶⣾⣟⣟⣿⣀⣄⣀⣀⣴⣼⣢⡮
//⠀⠘⠛⠻⢿⣿⠿⠿⡿⣿⣿⣿⠛⠀
//⠀⠀⠀⠀⢀⣬⣿⣿⠛⠛⠃⠀⠀⠀
//⠀⠀⢀⣤⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀
//⠀⠀⠈⠉⠉⠉⠉⠉⠁⠀⠀⠀
// (You have recieved an egg.)