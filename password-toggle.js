document.addEventListener("click", event => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const button = target.closest("[data-password-toggle]");
  if (!(button instanceof HTMLButtonElement)) return;

  const input = document.getElementById(button.getAttribute("aria-controls"));
  if (!(input instanceof HTMLInputElement)) return;

  const showPassword = input.type === "password";
  input.type = showPassword ? "text" : "password";
  const label = showPassword ? "Hide password" : "Show password";
  button.setAttribute("aria-label", label);
  button.title = label;
  button.setAttribute("aria-pressed", String(showPassword));
});
