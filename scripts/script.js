'use strict';

// jqueryで実装
$(document).ready(function(){
  $('a').on('click',function(event){

    const url = $(this).attr('href');

    //ページ内リンク以外のとき、ローディング画像を表示
    if (!url.startsWith('#')) {
      //すぐに遷移しないようにタグの基本操作をキャンセル
      event.preventDefault();

      //ローディング画像を表示
      $('#loading').css('display','block');

      //ローディングアニメーション終了後
      $('#loading img').one('animationend', function(){
        window.location.href = url;
      });
    }
  });

  //ドロワーナビゲーションの開閉
  $('#drawerBtn').on('click',function(){
    $('.header-nav').toggleClass('active');
    $('header').toggleClass('active');
  });
});




