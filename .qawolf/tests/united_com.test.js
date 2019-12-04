describe("united_com", () => {
  it('can type into "From*" input', async () => {
    await type(
      steps[0],
      "↓MetaLeft↓KeyA↑MetaLeft↓ShiftLeft↓KeyJ↑KeyJ↓KeyF↑KeyF↓KeyK↑KeyK↑ShiftLeft"
    );
  });

  it("can click div", async () => {
    await click(steps[1]);
  });

  it('can type into "To*" input', async () => {
    await type(steps[2], "↓ShiftLeft↓KeyB↑KeyB↓KeyO↑KeyO↓KeyS↑KeyS↑ShiftLeft");
  });

  it("can click div", async () => {
    await click(steps[3]);
  });

  it('can type into "DepartDate" input', async () => {
    await type(
      steps[4],
      "↓MetaLeft↓KeyA↑MetaLeft↑KeyA↓Digit3↑Digit3↓NumpadDivide↑NumpadDivide↓Digit2↑Digit2↓Digit0↑Digit0"
    );
  });

  it("can Tab", async () => {
    await type(steps[5], "↓Tab↑Tab");
  });

  it('can type into "ReturnDate" input', async () => {
    await type(
      steps[6],
      "↓Digit4↑Digit4↓NumpadDivide↑NumpadDivide↓Digit2↑Digit2↓Digit0↑Digit0"
    );
  });

  it("can click div", async () => {
    await click(steps[7]);
  });

  it('can click "Find flights" button', async () => {
    await click(steps[8]);
  });

  it('can click "Sort flights by: &#10;Sort flights by dr..." div', async () => {
    await click(steps[9]);
  });

  it('can click "Afternoon departure" link', async () => {
    await click(steps[10]);
  });

  it("can scroll", async () => {
    await scroll(steps[11], { x: 0, y: 1055 });
  });
});
