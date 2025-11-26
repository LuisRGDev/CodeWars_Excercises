function getRectangleString(width, height) {
  
  const outer = "*".repeat(width) + "\r\n"
  ,     inner = (width >= 2 ? "*" + " ".repeat(width - 2) : "") + "*\r\n";

  return outer + (height < 2 ? "" : inner.repeat(height - 2) + outer);
  
}

console.log(getRectangleString(3,3));