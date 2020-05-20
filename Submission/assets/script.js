function inputNama() {
  var nama = prompt("Silahkan Masukkan Nama Anda :");
  if (nama == null || nama == "") {
    alert("Terjadi Kesalahan");
    inputNama();
  } else {
    document.getElementById("guest").innerHTML = "Hi, " + nama + " :)";
  }
}

inputNama();