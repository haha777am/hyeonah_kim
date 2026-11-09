/* ==========================================================
   HYEON AH KIM — 공통 스크립트 (모든 페이지에서 불러와요)
   ========================================================== */
(function () {
    /* ▼▼▼ 여기만 채우면 사이트 전체에 연락처가 반영돼요 ▼▼▼ */
    var SITE = {
        email: 'p_oiuytrewq@naver.com',          // 예: 'name@example.com'  → 푸터·C.V·연락 폼에 연결돼요 (비우면 이메일 링크는 숨겨져요)
        formEndpoint: '',   // Formspree 같은 폼 주소 (비워두면 보내기 버튼이 이메일 앱을 열어줘요)
        instagram: 'https://instagram.com/corde.ah'
    };
    /* ▲▲▲ ----------------------------------------------- ▲▲▲ */
    window.SITE = SITE;

    // 뒤로가기(bfcache)로 돌아왔을 때 페이드 아웃 상태로 남는 문제 방지
    window.addEventListener('pageshow', function () {
        document.body.classList.remove('fade-out');
    });

    // [data-email] 요소: 이메일이 설정돼 있을 때만 보여줌
    document.querySelectorAll('[data-email]').forEach(function (el) {
        if (!SITE.email) return;
        el.setAttribute('href', 'mailto:' + SITE.email);
        el.removeAttribute('hidden');
    });

    // [data-print] 요소: 누르면 인쇄/PDF 저장 창 열기
    document.querySelectorAll('[data-print]').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            window.print();
        });
    });

    // 공통 푸터 (연락 폼·보조 페이지에는 넣지 않음)
    var page = location.pathname.split('/').pop() || 'index.html';
    if (['contact.html', 'bside.html'].indexOf(page) !== -1) return;

    var footer = document.createElement('footer');
    footer.className = 'site-footer';

    var copy = document.createElement('span');
    copy.textContent = '© ' + new Date().getFullYear() + ' HYEON AH KIM';
    footer.appendChild(copy);

    var nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Contact');

    function addLink(label, href, external) {
        var a = document.createElement('a');
        a.textContent = label;
        a.href = href;
        if (external) { a.target = '_blank'; a.rel = 'noopener'; }
        nav.appendChild(a);
    }

    if (SITE.email) addLink(SITE.email, 'mailto:' + SITE.email);
    addLink('Message', 'contact.html');
    if (SITE.instagram) addLink('Instagram', SITE.instagram, true);

    footer.appendChild(nav);
    document.body.appendChild(footer);
})();
