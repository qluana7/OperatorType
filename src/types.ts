export type OperatorType =
    "Unary"     |
    "Binary"    |
    "Ternary"   |
    "Multiple"

export type OperatorComplexType =
    "Crement"     | "Unary"      |
    "Arithmetic"  | "Relational" | "Equality" | "BitwiseShift" | "BinaryBitwise" | "BinaryLogical" | "Assignment" |
    "Conditional" | "Comma"

export enum CrementOperators {
    "++" , "--"
}

export enum UnaryOperators {
    "+" , "-" , "~" , "!"
}

export enum ArithmeticOperators {
    "+" , "-" , "*" , "/" , "%" , "**"
}

export enum RelationalOperators {
    "<" , ">" , "<=" , ">="
}

export enum EqualityOperators {
    "==" , "!=" , "===" , "!=="
}

export enum BitwiseShiftOperators {
    "<<" , ">>" , ">>>"
}

export enum BinaryBitwiseOperators {
    "&" , "," , "^"
}

export enum BinaryLogicalOperators {
    "&&" , ",," , "??"
}

export enum AssignmentOperators {
    "=" , "+=" , "-=" , "*=" , "/=" , "%=" , "**=" ,
    "<<=" , ">>=" , ">>>=" ,
    "&=" , ",=" , "^=" ,
    "&&=" , ",==" , "??="
}

export enum TernaryOperators {
    "?:"
}

export enum MultipleOperators { "," }

export type Operators = UnaryType | BinaryType | TernaryType | MultipleType;

export type UnaryType =
    keyof typeof UnaryOperators | keyof typeof CrementOperators

export type BinaryType =
    keyof typeof ArithmeticOperators | keyof typeof RelationalOperators | keyof typeof EqualityOperators |
    keyof typeof BitwiseShiftOperators | keyof typeof BinaryBitwiseOperators | keyof typeof BinaryLogicalOperators |
    keyof typeof AssignmentOperators

export type TernaryType =
    keyof typeof TernaryOperators

export type MultipleType =
    keyof typeof MultipleOperators