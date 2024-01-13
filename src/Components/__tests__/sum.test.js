
import {sum} from "../sum.js"
test("Testing for a sum of two numbers" ,()=>{
       const result= sum(3,4)
     expected(result).toBe(7)
})