'use strict';

// jqueryで実装
$(document).ready(function(){
  
  //ローディング画像を表示
  $('#loading').on('animationend', function(){
    $(this).remove(); // 完全削除
  });

  //ドロワーナビゲーションの開閉
  $('#drawerBtn').on('click',function(){
    $('.header-nav').toggleClass('active');
    $('header').toggleClass('active');
  });
});




