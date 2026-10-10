// Click-to-load live previews: keeps the page fast, mobile-friendly,
// and fails gracefully when a site blocks framing.
document.querySelectorAll('.load-app').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var src = btn.getAttribute('data-src');
    var title = btn.getAttribute('data-title') || 'Live app preview';
    var frame = document.createElement('iframe');
    frame.className = 'app-frame';
    frame.src = src;
    frame.title = title;
    frame.setAttribute('loading', 'lazy');
    frame.setAttribute('referrerpolicy', 'no-referrer');
    btn.replaceWith(frame);
    frame.focus();
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
