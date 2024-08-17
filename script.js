var gender = ['Masculine', 'Feminine'];
aaweawe
function Random() {
    document.getElementById('tb').innerText = gender.random();
    console.log(gender.random());
}
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }