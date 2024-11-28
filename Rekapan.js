const daftarRekap = [
   

  ]
  let mode ='tambah'

  const tampilkanRekap = () => {
    // mengakses dom
    const tblRekap = document.getElementById("tblRekap");
    tblRekap.innerHTML = '<tr><th>No</th><th>Nama</th><th>Berat Badan</th><th>Tinggi Badan</th><th>Lingkar Kepala</th><th>Bulan</th><th>Edit</th><th>Hapus</th></tr>'
    // menambh isi
  
    for (let idx in daftarRekap) {
      console.log(`${parseInt(idx) + 1}. ${daftarRekap[idx].nama} berat badan ${daftarRekap[idx].bb}tinggi badan ${daftarRekap[idx].tb}lingkar kepala ${daftarRekap[idx].lk}bulan ${daftarRekap[idx].bulan}`);
  
      tblRekap.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarRekap[idx].nama}</td><td>${daftarRekap[idx].bb}</td><td>${daftarRekap[idx].tb}</td><td>${daftarRekap[idx].lk}</td><td>${daftarRekap[idx].bulan}</td><td><button class="btn btn-warning" onclick="editRekap('${daftarRekap[idx].nama}')">Edit</button></td></td><td><buton class="btn btn-danger" onclick="hapusRekap('${daftarRekap[idx].nama}')">Delete</button></td></tr>`;
    }
  };

  const tambahRekap = () => {
    const nama = document.getElementById("textNama").value;
    const bb = document.getElementById("textBb").value;
    const tb = document.getElementById("textTb").value;
    const lk = document.getElementById("textLk").value;
    const bulan = document.getElementById("textBulan").value;
    
    const rekapBaru = {
      nama: nama,
      bb: bb,
      tb: tb,
      lk: lk,
      bulan: bulan,

      
    };
// jika ditambah
  if (mode == "tambah") {
    daftarRekap.push(rekapBaru);
  } else {
    // jik edit
    daftarRekap[mode] = rekapBaru;
  }

  document.getElementById("textNama").value = "";
  document.getElementById("textBb").value = "";
  document.getElementById("textTb").value = "";
  document.getElementById("textLk").value = "";
  document.getElementById("textBulan").value = "";
  mode = "tambah";

  tampilkanRekap();
  };

const cariIndex = (nama) => {
    for (let i = 0; i < daftarRekap.length; i++) {
      if (daftarRekap[i].nama == nama) {
        return i
      }
    }
  }
  const hapusRekap = (target) => {
    const indexDihapus = cariIndex(target);
    if (indexDihapus !== -1) {
      daftarRekap.splice(indexDihapus, 1);
      tampilkanRekap();
    }
  };
  const editRekap = (target) => {
    const indexEdit = cariIndex(target)
   
    console.log(target)
    console.log(indexEdit)
    console.log(daftarRekap[indexEdit])
  
    const rekapDiedit = daftarRekap[indexEdit]
  
    document.getElementById('textNama').value = rekapDiedit.nama
    document.getElementById('textBb').value = rekapDiedit.bb
    document.getElementById('textTb').value = rekapDiedit.tb
    document.getElementById('textLk').value = rekapDiedit.lk
    document.getElementById('textBulan').value = rekapDiedit.bulan
     
    mode = indexEdit
  
    }
    const batalEdit = (target) => {
      document.getElementById('textNama').value = ""
      document.getElementById('textBb').value = ""
      document.getElementById('textTb').value = ""
      document.getElementById('textLk').value = ""
      document.getElementById('textBulan').value = ""
      mode = 'tambah'
    }