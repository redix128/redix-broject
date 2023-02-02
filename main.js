let stars = document.getElementById('stars')
let moon2 = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river5 = document.getElementById('river')
let boat6 = document.getElementById('boat')
let redix = document.querySelector('.redix')
window.onscroll = function(){
     let value = scrollY;
     stars.style.left = value + 'px';
     moon2.style.top = value * 4 + 'px';
     mountains3.style.top = value * 2 + 'px';
     mountains4.style.top = value * 1.5 + 'px';
     river5.style.top = value   + 'px';
     boat6.style.top = value   + 'px';
     boat6.style.left = value * 3  + 'px';
     redix.style.fontSize = value   + 'px';
     if(scrollY >= 67){
       redix.style.fontSize = 67 + 'px';
       redix.style.position = 'fixed';
       if(scrollY >= 478){
       redix.style.display = 'none';

       }else{
       redix.style.display = 'block';

       }
     if(scrollY >= 127){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
      }else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';

      }
     }


}
