function addRow(){
    let table = document.getElementById("isiTabel");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let nama = document.getElementById('exampleInputNama').value;
    let umur = document.getElementById('exampleInputUmur').value;
    cell1.innerHTML = nama;
    cell2.innerHTML = umur;
}

function deleteRow(){
    document.getElementById('isiTabel').deleteRow(0);
}


fetch('https://kipi.covid19.go.id/api/get-faskes-vaksinasi')
  .then(response => response.json())
  .then(data => bacaDataVaksin(data));

function bacaDataVaksin(data) {
    console.log(data['data']);
    let table = document.getElementById("isiTabelCovid");

    data['data'].forEach(element => {
        if(element['kota'] == 'KOTA LANGSA'){
            let row = table.insertRow(0);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let kode = element['kode'];
            let nama_kecamatan = element['nama'];
            let nama_kabkot =  element['kota'];
            let provinsi =  element['provinsi'];
            let status =  element['status'];
            cell1.innerHTML = kode;
            cell2.innerHTML = nama_kecamatan;
            cell3.innerHTML = nama_kabkot;
            cell4.innerHTML = provinsi;
            cell5.innerHTML = status;
        }    
    });

  
}






























// fetch('https://kipi.covid19.go.id/api/get-faskes-vaksinasi')
//   .then(response => response.json())
//   .then(data => hua(data));

// function hua(data) {
//     data['data'].forEach(element => {
//         let table = document.getElementById("isiTabel2");
//         let row = table.insertRow(0);
//         let cell1 = row.insertCell(0);
//         let cell2 = row.insertCell(1);
//         let nama = element['nama'];
//         let umur = element['kode'];
//         cell1.innerHTML = nama;
//         cell2.innerHTML = umur;
//     });
    
// }