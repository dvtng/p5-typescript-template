const w = window as any;

w.setup = function () {
  const canvasSize = 800;
  createCanvas(canvasSize, canvasSize);
  background(200);
};
