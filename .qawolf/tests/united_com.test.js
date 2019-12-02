describe('united_com', () => {
  it('can type into "From*" input', async () => {
    await type(steps[0], values[0]);
  });

  it('can click div', async () => {
    await click(steps[1]);
  });

  it('can type into "To*" input', async () => {
    await type(steps[2], values[2]);
  });

  it('can click div', async () => {
    await click(steps[3]);
  });

  it('can type into "DepartDate" input', async () => {
    await type(steps[4], values[4]);
  });

  it('can Tab', async () => {
    await type(steps[5], values[5]);
  });

  it('can type into "ReturnDate" input', async () => {
    await type(steps[6], values[6]);
  });

  it('can click div', async () => {
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

  it('can scroll', async () => {
    await scroll(steps[11], values[11]);
  });
});