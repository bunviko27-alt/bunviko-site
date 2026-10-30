(() => {
  const root = document.documentElement;
  const welcome = document.querySelector('.welcome');
  if (!welcome) return;
  if (!root.classList.contains('welcome-pending')) { welcome.remove(); return; }
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    const hadFocus = welcome.contains(document.activeElement);
    root.classList.remove('welcome-pending');
    welcome.remove();
    try { sessionStorage.setItem('bunviko-welcome', 'seen'); } catch (_) {}
    document.removeEventListener('keydown', onKey);
    if (hadFocus) document.querySelector('.brand')?.focus({preventScroll:true});
  };
  const onKey = event => { if (event.key === 'Escape' || event.key === 'Tab') finish(); };
  document.addEventListener('keydown', onKey);
  welcome.querySelector('.welcome-skip').addEventListener('click', finish);
  welcome.querySelector('.welcome-bottom').addEventListener('animationend', finish, {once:true});
  setTimeout(finish, 4200);
})();
