'use strict';


const $hamburger = document.getElementById('hamburger');
    $hamburger.addEventListener('click',(evt)=>{

      const $logo = document.querySelector('.navbar .navbar-logo');
      const $menu = document.querySelector('.navbar .navbar-menu');
      const $sns  = document.querySelector('.navbar .navbar-sns');

      //요소 타겟팅한 뒤에 클래스 값을 읽어온 다음에 토글을 체크한다. 
      //('active')가 되어 있으면 넣고 아니면 말고 함.
      $logo.classList.toggle('active');
      $menu.classList.toggle('active');
      $sns.classList.toggle('active');
    });
