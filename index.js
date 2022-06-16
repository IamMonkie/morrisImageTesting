/* ----------------------------- Runs at startup ---------------------------- */
// add page ready and reset
/* -------------------------------- Variables ------------------------------- */
var animation = bodymovin.loadAnimation({
  container: document.getElementById("bm"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "conveyorTest.json",
});
/* -------------------------------------------------------------------------- */

console.log("Animation Script Loaded");
