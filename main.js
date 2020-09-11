document.getElementsByClassName('cong').onchange = function() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var ketqua = parseInt(a) + parseInt(b);
    //console.log([document.getElementById('ketqua')]);
    document.getElementById('ketqua').innerHTML = 'Kết quả là' + ketqua;
}