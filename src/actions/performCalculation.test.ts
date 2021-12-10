import { solveEquation } from "./performCalculation";

it('should give right output for given input string', ()=>{
    expect(solveEquation('6+5-6/2*3-1')).toBe(1)
})