export const formatTime = (val) => {
  if (typeof val === "number") {
    const totalSec = Math.round(val * 24 * 3600);
    const h = String(Math.floor(totalSec / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
    const s = String(totalSec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }
  return val.toString().padStart(8, "0");
};
