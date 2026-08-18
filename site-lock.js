(function(){
  var KEY = 'smthg_unlocked_v1';
  var PASSWORD = 'smthg2026!us';
  if (sessionStorage.getItem(KEY) === '1') return;
  document.documentElement.style.visibility = 'hidden';
  document.addEventListener('DOMContentLoaded', function(){
    var overlay = document.createElement('div');
    overlay.id = 'site-lock-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:#F8F6F2;z-index:99999;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;';
    overlay.innerHTML =
      '<div style="background:#FFFFFF;border:1px solid #D9D4C9;padding:32px;max-width:320px;width:90%;text-align:center;box-sizing:border-box;">' +
        '<div style="font-weight:800;letter-spacing:1px;margin-bottom:16px;color:#161616;">smthg<span style="color:#E8002D">.</span> — private</div>' +
        '<input id="site-lock-input" type="password" placeholder="Password" autocomplete="off" style="width:100%;padding:10px;border:1px solid #D9D4C9;font-size:14px;margin-bottom:10px;box-sizing:border-box;">' +
        '<button id="site-lock-btn" style="width:100%;padding:10px;background:#E8002D;color:#FFFFFF;border:none;font-weight:700;cursor:pointer;font-size:14px;">Enter</button>' +
        '<div id="site-lock-error" style="color:#C0392B;font-size:12px;margin-top:8px;display:none;">Incorrect password</div>' +
      '</div>';
    document.body.appendChild(overlay);
    document.documentElement.style.visibility = 'visible';
    var input = document.getElementById('site-lock-input');
    var btn = document.getElementById('site-lock-btn');
    var err = document.getElementById('site-lock-error');
    function tryUnlock(){
      if (input.value === PASSWORD) {
        sessionStorage.setItem(KEY, '1');
        overlay.remove();
      } else {
        err.style.display = 'block';
      }
    }
    btn.addEventListener('click', tryUnlock);
    input.addEventListener('keydown', function(e){ if (e.key === 'Enter') tryUnlock(); });
    input.focus();
  });
})();
