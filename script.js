


      var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
      })


      
// ini java script popup keterangan terkirim
    // ini untuk menghubungkan item alert yang sudah dibuat
      var myAlert = document.getElementById('myAlert');
    // ini untuk menyembunyikan tampilan alertnya
      myAlert.style.display = 'none'
    // ini ketika diklik kirim alert akan muncul
      function myFunction(){
        myAlert.style.display = 'block'
      }


//ini java script tombol loading
     // ini deklarasi membuat nama variabel yang sama dengan id di elementnya.
     var btnKirim = document.getElementById('btnKirim');
     var btnLoading = document.getElementById('btnLoading');
     // ini untuk menyembunyikan tombol loading sebelum diklik kirim
     btnLoading.style.display = 'none';

     //ini ketika diklik kirim tombol kirim tersembunyi
     function startProses(){
      //setelah kirim di klik maka akan menghilang tombolnya
      btnKirim.style.display = 'none';
      //lalu munculkan tombol loading
      btnLoading.style.display = 'block';

     }

     //ini setelah loading muncul beberapa detik, tombol kirim akan muncul kembali
     function endProses(){
      btnLoading.style.display = 'none';
      btnKirim.style.display = 'block';
     }

    //ini function untuk menjalakan function starproses, dan pada item/tombol kirim diberi perintah (onclick), lalu diberi nama bebas disini diberi nama = simpanForm
     function simpanForm(){
      startProses();
    //ini untuk mengatur berapa lama icon loading muncul. 3000 artinya 3 detik.
    // cara pembacannya jalankan function endproses dan jalankan function myfunction setelah 3 detik.
      setTimeout(function(){
        endProses(); myFunction()}, 3000);
     }
// ini javascript alert formulir
     var AlertFormulir = document.getElementById('AlertFormulir');
     AlertFormulir.style.display = ('none');

     function inFunction(){
        AlertFormulir.style.display = 'block'
     } 

// ini javascript loading formulir pendaftaran
     // ini deklarasi var dengan element htmlnya.
     var forKirim = document.getElementById('forKirim');
     var forLoading = document.getElementById('forLoading');
     // ini untuk menyembunyikan spinner loadingnya
     forLoading.style.display = 'none';
     
     // ini ketika diklik kirim tombol kirim tersembunyi dan spinner loading muncul
     function mulaiProses(){
        forKirim.style.display = 'none';
        forLoading.style.display = 'block';
     }

     // ini setelah spinner loading muncul beberapa detik, lalu tombol kirim muncul kembali
     function selesaiProses(){
        forLoading.style.display = 'none';
        forKirim.style.display = 'block';   
     }

     function jalankanSpinner(){
        mulaiProses();
        setTimeout(function(){
        selesaiProses(); inFunction()}, 3000);
     }

