var Gender = ['Masculine', 'Feminine'];
var BodyType = ['Lean', 'Regular', 'Large'];
var Adret = ['Alder','Greymarch','Salt','Seeker','Boulder','Hallowtide']
var Canor = ['River', 'Red', 'Lion', 'Interior', 'Steppe', 'Hallowtide']
var Capra = ['Jurik', 'Nemit', 'Ku', 'Hallowtide']
var Celtor = ['Marten', 'Otter', 'Badger', 'Weasel', 'Hallowtide']
var Chrysid = ['Hierophant', 'Devout', 'Seer', 'Adept', 'Hallowtide']
var Etrean = ['Viper', 'Coral', 'Mamba', 'Hallowtide']
var Felinor = ['Leopard', 'Lynx', 'Panther', 'Sphynx', 'Hallowtide']
var Ganymede = ['Enceladus', 'Hyperion', 'Tethys', 'Titan', 'Hallowtide']
var Gremor = ['Birch', 'Cedar', 'Redwood', 'Aspen', 'Teak', 'Hallowtide']
var Khan = ['Tamarin', 'Capuchin', 'Albino', 'Silverback', 'Hallowtide']
var Tiran = ['Canary', 'Crow', 'Jay', 'Cardinal', 'Hallowtide']
var Vesperian = ['Plackart', 'Sabaton', 'Besague', 'Hallowtide']
var Race = "Canor"
var Weapons = ['Sword', 'Battleaxe', 'Stilleto', 'Way Of Navae', 'Quickfang', 'Irontusk', 'Silversix', 'Avenger', 'Jus Karita', 'Legion Kata']
var AllAtunements = ['Attunement-less', 'Random', 'Flamecharm', 'Frostdraw', 'Thundercall', 'Galebreathe', 'Shadowcast', 'Ironsing']
var Attunements = ['Flamecharm', 'Frostdraw', 'Thundercall', 'Galebreathe', 'Shadowcast', 'Ironsing']
var Boons = ['Gourmet', 'Autodidact', 'Maverick', 'Survivalist', 'Steadfast', 'Scrapper', 'Packmule', 'Sly']
var Flaws = ['Vegetarian', 'Squeamish', 'Obvious', 'Haemophilia', 'Deficient', 'Blind', 'Fugitive', 'Manic', 'Glutton']
function get_random(list) {
    return list[Math.floor((Math.random()*list.length))];
  }
function RandomizeWeapon() {
    document.getElementById('Weapon').innerText = "Weapon:"+get_random(Weapons);
}
function RandomizeAttunement() {
    var firstattunement = get_random(AllAtunements);
    var secondattunement = get_random(Attunements);
    var rand = Math.floor(Math.random)
    console.log(firstattunement, secondattunement, rand)
    if(firstattunement === 'Attunement-less' || rand == 1) {
        document.getElementById('Attunement').innerText = "Attunement:"+firstattunement;
    }else{
        document.getElementById('Attunement').innerText = "Attunement:"+firstattunement+"+"+secondattunement;
    }
}
function RandomizeBoonNFlaw() {
    var temporaryBoons = Boons;
    var temporaryFlaws = Flaws;
    var temporary = get_random(Boons);
    var index = array.indexOf(temporary);
    if (index > -1) { // only splice array when item is found
        temporaryBoons.splice(index, 1); // 2nd parameter means remove one item only
    }
    var blehh = temporary
    temporary = get_random(temporaryBoons);
    index = array.indexOf(temporary);
    if (index > -1) { // only splice array when item is found
        temporaryBoons.splice(index, 1); // 2nd parameter means remove one item only
    }
    blehh = blehh+" - "+temporary
    temporary = get_random(temporaryFlaws);
    index = array.indexOf(temporary);
    if (index > -1) { // only splice array when item is found
        temporaryFlaws.splice(index, 1); // 2nd parameter means remove one item only
    }
    blehh = blehh+" - "+temporary
    temporary = get_random(temporaryFlaws);
    index = array.indexOf(temporary);
    if (index > -1) { // only splice array when item is found
        temporaryFlaws.splice(index, 1); // 2nd parameter means remove one item only
    }
    blehh = blehh+" - "+temporary
    document.getElementById('Boons').innerText = "Boons And Flaws:"+temporary;
}
function RandomizeCharacter() {
    var Races = document.getElementById("Races");
    Race = Races.options[Races.selectedIndex].value;
    document.getElementById('Gender').innerText = "Gender:"+get_random(Gender);
    document.getElementById('BodyType').innerText = "Body Type:"+get_random(BodyType);
    document.getElementById('Variant').innerText = "Variant: "+get_random(eval(Race));
}
