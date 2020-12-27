const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  console.log(e);
  console.log(e.key);
  console.log(e.code);
  console.log(e.keyCode);

  insert.innerHTML = ` <div class="key">
  ${e.key === ' ' ? 'Space' : e.key}
  <small>event.key</small>
</div>

<div class="key">
${e.key === ' ' ? 'Space' : e.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
${e.key === ' ' ? 'Space' : e.code}
  <small>event.code</small>
</div>
`;
});
