var gender = ['Masculine', 'Feminine'];
function get_random(list) {
    return list[Math.floor((Math.random()*list.length))];
  }
  
function Random() {
    document.getElementById('tb').innerText = get_random(gender);
    console.log(get_random(gender));
}
