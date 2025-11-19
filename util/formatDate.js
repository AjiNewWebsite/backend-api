export const formatDate = (value) => {
  if (typeof value === "number") {
    const d = XLSX.SSF.parse_date_code(value);
    if (!d) throw new Error("Tanggal tidak valid");
    return `${d.y}-${String(d.m).padStart(2, "0")}-${String(d.d).padStart(
      2,
      "0"
    )}`;
  }

  const date = new Date(value);
  if (isNaN(date.getTime())) throw new Error("Format tanggal tidak dikenali");

  return date.toISOString().slice(0, 10);
};
