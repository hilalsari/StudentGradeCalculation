document.addEventListener("DOMContentLoaded", function() {
  // DOMdan verileri değişkene atama 

  let vize = document.getElementById("vize");
  let final = document.getElementById("final");
  
  // buton elementini değişkene atama
  let button = document.getElementById("btn");

  //butona fonksiyon ekleme 
  
  button.onclick= function() {
      //alınan vize ve final notlarının veri türünü floata dönüştürme 
      let vizeValue = parseFloat(vize.value);
      let finalValue = parseFloat(final.value);
    
      //ortalama hesaplama 
      let ortalama = ((vizeValue * 0.3) + (finalValue * 0.7));

      if (ortalama >0 && ortalama <= 30) { 
        console.log("not ortalamanız:" + ortalama + " KALDINIZ(FF) ");
        window.alert("not ortalamanız:"  + ortalama.toFixed(2) +  " KALDINIZ - FF ");
          
      }
      else if (ortalama >=31 && ortalama <= 49) {
        console.log("not ortalamanız:" + ortalama + " DC - KOŞULLU ");
          window.alert("not ortalamanız:"  + ortalama.toFixed(2) + " DC-KOŞULLU ");
      }
      else if (ortalama >=50 && ortalama <= 84) {
        console.log("not ortalamanız:" + ortalama + " CC -KOŞULLU " );
        window.alert("not ortalamanız:"  + ortalama.toFixed(2) + " CC- KOŞULLU ");
      }
      else if (ortalama >=85 && ortalama <=100 ) {
        console.log("not ortalamanız:" + ortalama + "AA - GEÇTİNİZ"); 
        window.alert("not ortalamanız:"  + ortalama.toFixed(2) + " AA- GEÇTİNİZ ");
      }
      else {
        console.log("NOTUNUZ HESAPLANAMADI!")
        alert("NOTUNUZ HESAPLANAMADI!")
      }

    };
});
