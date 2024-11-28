const daftarBayi = [
    
]

let mode ='tambah'

const tampilkanBayi = () => {
    // mengakses dom
    const tblBayi = document.getElementById("tblBayi");
    tblBayi.innerHTML = '<tr><th>No</th><th>Nama</th><th>Nama orang tua</th><th>Edit</th><th>Hapus</th></tr>';
    // menambh isi
  
    for (let idx in daftarBayi) {
      console.log(`${parseInt(idx) + 1}. ${daftarBayi[idx].nama} nama orang tua ${daftarBayi[idx].fk}`);
  
      tblBayi.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarBayi[idx].nama}</td><td>${daftarBayi[idx].fk}</td><td><button class="btn btn-warning" onclick="editBayi('${daftarBayi[idx].nama}')">Edit</button></td></td><td><buton class= "btn btn-danger" onclick="hapusBayi('${daftarBayi[idx].nama}')">Delete</button></td></tr>`;
    }
  };

  const tambahBayi = () => {
    const nama = document.getElementById("textNama").value;
    const fk = document.getElementById("textFk").value;
    
    const bayiBaru = {
      nama: nama,
      fk: fk,
      
    };
// jika ditambah
  if (mode == "tambah") {
    daftarBayi.push(bayiBaru);
  } else {
    // jik edit
    daftarBayi[mode] = bayiBaru;
  }

  document.getElementById("textNama").value = "";
  document.getElementById("textFk").value = "";
  mode = "tambah";

  tampilkanBayi();
};
const cariIndex = (nama) => {
    for (let i = 0; i < daftarBayi.length; i++) {
      if (daftarBayi[i].nama == nama) {
        return i
      }
    }
  }
  const hapusBayi = (target) => {
    const indexDihapus = cariIndex(target);
    if (indexDihapus !== -1) {
      daftarBayi.splice(indexDihapus, 1);
      tampilkanBayi();
    }
  };
  const editBayi = (target) => {
    const indexEdit = cariIndex(target)
   
    console.log(target)
    console.log(indexEdit)
    console.log(daftarBayi[indexEdit])
  
    const bayiDiedit = daftarBayi[indexEdit]
  
      document.getElementById('textNama').value = bayiDiedit.nama
      document.getElementById('textFk').value = bayiDiedit.fk
  
      mode = indexEdit
  
    }
    const batalEdit = (target) => {
        document.getElementById('textNama').value = ""
        document.getElementById('textFk').value = ""
        mode = 'tambah'
      }
  