import {
    Operator,
    UnaryOperator,
    BinaryOperator,
    TernaryOperator,
    MultipleOperator
} from "../mod.ts"

const op1: Operator = new UnaryOperator("!");

console.log(op1.invoke(false));

const op2: Operator = new BinaryOperator("+");

console.log(op2.invoke(1, 1) as number);

const op3: Operator = new TernaryOperator("?:");

console.log(op3.invoke(true, 1, 3));

const op4: Operator = new MultipleOperator(",");

console.log(op4.invoke("console.log(4)", 3));

console.log(op3.invoke(op1.invoke(false), op2.invoke(2, 5), 0));