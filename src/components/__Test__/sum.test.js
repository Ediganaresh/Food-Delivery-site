import { sum } from "../sum";

test("sum fuction answer of two numbers",()=>{
    const result=sum(3,4);
    
    expect(result).toBe(7);
})