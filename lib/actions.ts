export function scrollToOrder() {
  const el = document.getElementById("order-section");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    // Not on the home page (e.g. /team) — navigate home to the order section
    window.location.href = "/#order-section";
  }
}

export function selectProduct(productName: string) {
  const selectEl = document.getElementById(
    "cust-product"
  ) as HTMLSelectElement | null;
  if (selectEl) {
    selectEl.value = productName;
  }
  scrollToOrder();
}
