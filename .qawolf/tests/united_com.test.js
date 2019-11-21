describe('united_com', () => {
    it('can type into "from*" input', async () => {
      await type(steps[0], values[0]);
    });
  
    it('can Tab', async () => {
      await type(steps[1], values[1]);
    });
  
    it('can type into "to*" input', async () => {
      await type(steps[2], values[2]);
    });
  
    it('can Tab', async () => {
      await type(steps[3], values[3]);
    });
  
    it('can Tab', async () => {
      await type(steps[4], values[4]);
    });
  
    it('can type into "DepartDate" input', async () => {
      await type(steps[5], values[5]);
    });
  
    it('can Tab', async () => {
      await type(steps[6], values[6]);
    });
  
    it('can type into "ReturnDate" input', async () => {
      await type(steps[7], values[7]);
    });
  
    it('can Tab', async () => {
      await type(steps[8], values[8]);
    });
  
    it('can click "find flights" span', async () => {
      await click(steps[9]);
    });
  
    it('can click "sort flights by: sort flights by dropdow..." div', async () => {
      await click(steps[10]);
    });
  
    it('can click "afternoon departure" link', async () => {
      await click(steps[11]);
    });
  
    it('can scroll', async () => {
      await scroll(steps[12], values[12]);
    });
  });