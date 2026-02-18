'use strict';

/* jqueryで実装 */
document.addEventListener('DOMContentLoaded', function() {
    const drawerBtn = document.getElementById('drawerBtn');
    const header = document.querySelector('header');

    if (drawerBtn && header) {
        drawerBtn.addEventListener('click', function() {
            // header要素に active クラスを付け外しするだけにする
            header.classList.toggle('active');
        });
    }

    // メニュー内のリンクをクリックしたらメニューを閉じる
    const navLinks = document.querySelectorAll('.navList a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('active');
        });
    });
});

window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    // ページ読み込み完了から1秒（1000ミリ秒）後に実行
    setTimeout(function() {
        if (loading) {
            // 透明度を変えてフェードアウトさせる
            loading.style.opacity = '0';
            loading.style.transition = 'opacity 0.5s ease';
            
            // アニメーションが終わる頃に完全に非表示（クリック不可）にする
            setTimeout(function() {
                loading.style.display = 'none';
            }, 500);
        }
    }, 1000); 
});