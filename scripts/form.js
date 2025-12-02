// Product array
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Time Circuits" },
  { id: "ac-2000", name: "Low Voltage Reactor" },
  { id: "jj-1969", name: "Warp Equalizer" }
];

// Populate product select
function populateProducts() {
  const sel = document.getElementById('productName');
  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.name;
    sel.appendChild(opt);
  });
}

// Keyboard-friendly radio labels
function initRadioLabels() {
  const radios = document.querySelectorAll('.radio-group input[type="radio"]');
  radios.forEach(radio => {
    const lbl = document.querySelector(`label[for="${radio.id}"]`);
    if (lbl) {
      lbl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          radio.checked = true;
          radio.dispatchEvent(new Event('change'));
        }
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateProducts();
  initRadioLabels();
});
