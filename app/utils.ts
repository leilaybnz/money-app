const formatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
});

export function formatMoney(money: string | number) {
  const parsedMoney = typeof money === "string" ? parseInt(money) : money;
  return formatter.format(parsedMoney);
}
