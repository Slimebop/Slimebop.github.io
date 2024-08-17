var gender = ['Masculine', 'Feminine'];

function Random() {
    document.getElementById('tb').innerText = gender.random();
    print(gender.random());
}
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }