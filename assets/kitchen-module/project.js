(() => {
  const steps = [
    ['Aluminium frame', 'Connect the aluminium members to form the primary frame. The exposed fixings keep the construction legible.'],
    ['Timber supports', 'Bolt the timber supports and grooved rails to the frame.'],
    ['Base and bracing', 'Install the transverse members and timber base boards.'],
    ['Panels and door', 'Attach the panels, hinges and door, with the salvaged green tile as a distinctive detail.'],
    ['Final assembly', 'Fit the assembled benchtop and drawer to complete the module.']
  ];
  const panel = document.querySelector('#step-panel');
  const initialURL = new URL(panel.querySelector('img').getAttribute('src'), document.baseURI);
  document.querySelectorAll('[data-step]').forEach(button => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.step);
      const label = `Stage 0${index + 1} / ${steps[index][0]}`;
      const url = new URL(`Kitchen-Assembly-${index + 1}.webp`, initialURL).href;
      const img = panel.querySelector('img');
      img.src = url; img.alt = label;
      const link = panel.querySelector('.zoom');
      link.href = url; link.dataset.caption = label;
      panel.querySelector('figcaption').textContent = label + ' ↗';
      document.querySelector('#step-title').textContent = `0${index + 1} / ${steps[index][0]}`;
      document.querySelector('#step-description').textContent = steps[index][1];
      document.querySelectorAll('[data-step]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    });
  });
  const dialog = document.querySelector('#lightbox');
  let opener;
  document.querySelectorAll('.zoom').forEach(link => {
    link.addEventListener('click', event => {
      if (typeof dialog.showModal !== 'function' || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault(); opener = link;
      dialog.querySelector('img').src = link.href;
      dialog.querySelector('img').alt = link.dataset.caption;
      dialog.querySelector('p').textContent = link.dataset.caption;
      dialog.showModal();
    });
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); }});
  dialog.addEventListener('close', () => opener?.focus());
})();

if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.querySelectorAll(".opening-video video").forEach(video=>{video.autoplay=false;video.pause();});}
