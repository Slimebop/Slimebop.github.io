var gender = ['Masculine', 'Feminine'];
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }
function Random() {
    document.getElementById('tb').innerText = gender.random();
    console.log(gender.random());
}
