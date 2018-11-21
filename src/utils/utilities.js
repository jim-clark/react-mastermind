export function formatTime(seconds) {
  let mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  let secs = (seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}