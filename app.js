function calc() {
  var replaced = res.value;
  if (
    res.value.includes("÷") ||
    res.value.includes("×") ||
    res.value.includes("+") ||
    res.value.includes("-") ||
    res.value.includes("%")
  ) {
    replaced = res.value
      .replaceAll("×", "*")
      .replaceAll("÷", "/")
      .replaceAll("+", "+")
      .replaceAll("-", "-")
      .replaceAll("%", "%");
    res.value = eval(replaced);
  } else if (
    res.value.includes("*") ||
    res.value.includes("/") ||
    res.value.includes("+") ||
    res.value.includes("-") ||
    res.value.includes("%")
  ) {
  } else if (res.value == ".") {
    if (!res.value.includes(".")) {
      res.value = eval(replaced);
    }
  }
}
