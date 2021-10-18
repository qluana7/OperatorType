import * as Type from "./types.ts"

export interface Operator {
    operator: Type.Operators;
    
    operatorType: Type.OperatorType;
    complexType: Type.OperatorComplexType;
    
    invoke(...obj: any): any;
}

export class UnaryOperator implements Operator {
    constructor(operator: Type.UnaryType) {
        this.operator = operator;
        this.complexType = typeCheck(operator, Type.CrementOperators) ? "Unary" : "Crement";
    }
    
    operator: Type.Operators;
    
    operatorType: Type.OperatorType = "Unary";
    complexType: Type.OperatorComplexType;
    
    invoke(obj1: any): any {
        return eval(`${this.operator}${obj1}`);
    }
}

export class BinaryOperator implements Operator {
    constructor(operator: Type.BinaryType) {
        this.operator = operator;
        this.complexType = typeCheck(operator, Type.ArithmeticOperators)        ? "Arithmetic"
                            : typeCheck(operator, Type.RelationalOperators)     ? "Relational"
                            : typeCheck(operator, Type.EqualityOperators)       ? "Equality"
                            : typeCheck(operator, Type.BitwiseShiftOperators)   ? "BitwiseShift"
                            : typeCheck(operator, Type.BinaryBitwiseOperators)  ? "BinaryBitwise"
                            : typeCheck(operator, Type.BinaryLogicalOperators)  ? "BinaryLogical"
                            : "Assignment"
    }
    
    operator: Type.Operators;
    
    operatorType: Type.OperatorType = "Binary";
    complexType: Type.OperatorComplexType;
    
    invoke(obj1: any, obj2: any): any {
        return eval(`${obj1}${this.operator}${obj2}`);
    }
}

export class TernaryOperator implements Operator {
    constructor(operator: Type.TernaryType) {
        this.operator = operator;
    }
    
    operator: Type.Operators;
    
    operatorType: Type.OperatorType = "Ternary";
    complexType: Type.OperatorComplexType = "Conditional";
    
    invoke(obj1: any, obj2: any, obj3: any): any {
        return eval(`${obj1}?${obj2}:${obj3}`);
    }
}

export class MultipleOperator implements Operator {
    constructor(operator: Type.MultipleType) {
        this.operator = operator;
    }
    
    operator: Type.Operators;
    
    operatorType: Type.OperatorType = "Multiple";
    complexType: Type.OperatorComplexType = "Comma";
    
    invoke(...obj: any): any {
        return eval(`${obj}`);
    }
}

function typeCheck(op: any, a: any): boolean {
    return [a].find(l => op in l) === undefined
}