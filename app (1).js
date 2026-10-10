// Click-to-load live previews.
// Before click: the box is a mini browser window showing the real URL.
// After click: a loading state fills the frame area, then the iframe
// swaps in on top. If the app blocks framing or is slow, a hint appears
// after 12s, and a persistent "open live" link sits under every preview.
document.querySelectorAll('.load-app').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var src = btn.getAttribute('data-src');
    var title = btn.getAttribute('data-title') || 'Live app preview';
    var shell = btn.closest('.preview-shell');

    var wrap = document.createElement('div');
    wrap.className = 'frame-wrap';

    var loading = document.createElement('p');
    loading.className = 'frame-loading';
    loading.setAttribute('role', 'status');
    loading.textContent = 'Loading the live app…';

    var frame = document.createElement('iframe');
    frame.className = 'app-frame';
    frame.src = src;
    frame.title = title;
    frame.setAttribute('referrerpolicy', 'no-referrer');

    var hint = document.createElement('p');
    hint.className = 'frame-hint';
    var hintLink = document.createElement('a');
    hintLink.href = src;
    hintLink.target = '_blank';
    hintLink.rel = 'noopener';
    hintLink.textContent = 'Still blank? This app blocks embedding — open it live here.';
    hint.appendChild(hintLink);
    hint.hidden = true;

    var loaded = false;
    frame.addEventListener('load', function () {
      loaded = true;
      loading.remove();
    });
    setTimeout(function () {
      if (!loaded) hint.hidden = false;
    }, 12000);

    wrap.appendChild(loading);
    wrap.appendChild(frame);
    btn.replaceWith(wrap);
    shell.insertBefore(hint, shell.querySelector('.open-live'));
    frame.focus();
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
