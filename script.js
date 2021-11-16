const labels = document.querySelectorAll(".form-control label");
console.log(labels);

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (val, idx) => `<span style="transition-delay:${idx * 50}ms">${val}</span>`
    )
    .join("");
});
