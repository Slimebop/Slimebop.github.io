var gender = ['Masculine', 'Feminine'];

function Random() {
    document.getElementById('tb').value = gender.random();
}
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }