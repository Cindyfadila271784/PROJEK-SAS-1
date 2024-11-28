const daftarOrangtua = [
  
]
let mode ='tambah'

const tampilkanOrangtua = () => {
  // mengakses dom
  const tblOrangtua = document.getElementById("tblOrangtua");
  tblOrangtua.innerHTML = '<tr><th>No</th><th>Nama Orang Tua</th><th>Alamat</th><th>No hp</th><th>Edit</th><th>Hapus</th></tr>'
  // menambah isi

  for (let idx in daftarOrangtua) {
    console.log(`${parseInt(idx) + 1}. ${daftarOrangtua[idx].nama} alamat${daftarOrangtua[idx].alamat} no hp${daftarOrangtua[idx].nohp}`);

    tblOrangtua.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarOrangtua[idx].nama}</td><td>${daftarOrangtua[idx].alamat}</td><td>${daftarOrangtua[idx].nohp}</td><td> <button class="btn btn-primary" onclick="editOrangtua('${daftarOrangtua[idx].nama}')">Edit</button></td><td><button class="btn btn-danger" onclick="hapusOrangtua('${daftarOrangtua[idx].nama}')">Delete</button></td></tr>`;
  }
};

const tambahOrangtua = () => {
  const nama = document.getElementById("textNama").value;
  const alamat = document.getElementById("textAlamat").value;
  const nohp = document.getElementById("textNohp").value;

  const orangtuaBaru = {
    nama: nama,
    alamat: alamat,
    nohp: nohp,
  };

  // jika ditambah
  if (mode == "tambah") {
    daftarOrangtua.push(orangtuaBaru);
  } else {
    // jika edit
    daftarOrangtua[mode] = orangtuaBaru;
  }

  document.getElementById("textNama").value ="";
  document.getElementById("textAlamat").value ="";
  document.getElementById("textNohp").value ="";
  mode = "tambah";

  tampilkanOrangtua();
};

const cariIndex = (nama) => {
  for (let i = 0; i < daftarOrangtua.length; i++) {
    if (daftarOrangtua[i].nama == nama) {
      return i
    }
  }
}
const hapusOrangtua = (target) => {
  const indexDihapus = cariIndex(target);
  if (indexDihapus !== -1) {
    daftarOrangtua.splice(indexDihapus, 1);
    tampilkanOrangtua();
  }
};
const editOrangtua = (target) => {
  const indexEdit = cariIndex(target)
 
  console.log(target)
  console.log(indexEdit)
  console.log(daftarOrangtua[indexEdit])

  const orangtuaDiedit = daftarOrangtua[indexEdit]

  document.getElementById('textNama').value = orangtuaDiedit.nama
  document.getElementById('textAlamat').value = orangtuaDiedit.alamat
  document.getElementById('textNohp').value = orangtuaDiedit.nohp
   
  mode = indexEdit

  }
  const batalEdit = (target) => {
    document.getElementById('textNama').value = ""
    document.getElementById('textAlamat').value = ""
    document.getElementById('textNohp').value = ""
    mode = 'tambah'
  }
  
  