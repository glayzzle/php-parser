<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

# AST

## Class hierarchy

-   [Node](#Node)
    -   [Expression](#expression)
        -   [Literal](#literal)
            -   [Boolean](#boolean)
            -   [String](#string)
            -   [Number](#number)
            -   [Inline](#inline)
            -   [Magic](#magic)
            -   [Shell](#shell)
        -   [Array](#array)
        -   [Variable](#variable)
    -   [Statement](#statement)
        -   [Block](#block)
            -   [Program](#program)
            -   [Namespace](#namespace)
        -   [Sys](#sys)
            -   [Echo](#echo)
            -   [Print](#print)
            -   [Isset](#isset)
            -   [Unset](#unset)
            -   [Empty](#empty)
        -   [Declaration](#declaration)
            -   [Class](#class)
            -   [Constant](#constant)
                -   [ClassConstant](#classconstant)
            -   [Function](#function)
                -   [Method](#method)
            -   [Parameter](#parameter)
            -   [Property](#property)
        -   [Eval](#eval)
        -   [Exit](#exit)
        -   [Clone](#clone)
        -   [Coalesce](#coalesce)
        -   [Include](#include)
        -   [Assign](#assign)
    -   [Identifier](#identifier)
    -   [Entry](#entry)
    -   [Documentation](#documentation)
    -   [Error](#error)
-   [Location](#location)
-   [Position](#position)

* * *

**Parameters**

-   `withPositions`  
-   `withSource`  

## prepare

Prepares an AST node

**Parameters**

-   `kind` **([String](#string) | null)** Defines the node type
    (if null, the kind must be passed at the function call)
-   `parser` **Parser** The parser instance (use for extracting locations)

Returns **[Function](#function)** 

# AST

The AST builder class

**Parameters**

-   `withPositions`  
-   `withSource`  

**Properties**

-   `withPositions` **[Boolean](#boolean)** Should locate any node (by default false)
-   `withSource` **[Boolean](#boolean)** Should extract the node original code (by default false)

## prepare

Prepares an AST node

**Parameters**

-   `kind` **([String](#string) | null)** Defines the node type
    (if null, the kind must be passed at the function call)
-   `parser` **Parser** The parser instance (use for extracting locations)

Returns **[Function](#function)** 

# Array

**Extends Expression**

Defines an array structure

**Properties**

-   `items` **[Array](#array)&lt;[Entry](#entry)>** 
-   `shortForm` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# Assign

**Extends Statement**

Assigns a value to the specified target

**Properties**

-   `left` **[Expression](#expression)** 
-   `right` **[Expression](#expression)** 
-   `operator` **[String](#string)** 

# Block

**Extends Statement**

A block statement, i.e., a sequence of statements surrounded by braces.

**Properties**

-   `children` **[Array](#array)&lt;[Node](#node)>** 

# Boolean

**Extends Literal**

Defines a boolean value (true/false)

# Class

**Extends Declaration**

A class definition

**Properties**

-   `extends` **([Identifier](#identifier) | null)** 
-   `implements` **[Array](#array)&lt;[Identifier](#identifier)>** 
-   `body` **[Array](#array)&lt;[Declaration](#declaration)>** 
-   `isAnonymous` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `isAbstract` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `isFinal` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `isFinal` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# ClassConstant

**Extends Constant**

Defines a class/interface/trait constant

**Properties**

-   `isStatic` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `visibility` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

# Clone

**Extends Statement**

Defines a clone call

**Properties**

-   `what` **[Expression](#expression)** 

# Coalesce

**Extends Statement**

Verify is the test property is defined and is not null, and returns
is, otherwise returns the ifnull expression.

**Properties**

-   `test` **[Expression](#expression)** The expression to be testes
-   `ifnull` **[Expression](#expression)** The returned expression if test is null

# Constant

**Extends Declaration**

Defines a namespace constant

**Properties**

-   `value` **([Node](#node) | null)** 

# Declaration

**Extends Statement**

A declaration statement (function, class, interface...)

**Properties**

-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## parseFlags

Generic flags parser

**Parameters**

-   `flags` **[Array](#array)&lt;Integer>** 

Returns **void** 

# Documentation

**Extends Node**

A comment or documentation

**Properties**

-   `isDoc` **[Boolean](#boolean)** 
-   `text` **[String](#string)** 

# Echo

**Extends Sys**

Defines system based call

# Empty

**Extends Sys**

Defines an empty check call

# Entry

**Extends Node**

An array entry

**Properties**

-   `key` **([Node](#node) | null)** 
-   `value` **[Node](#node)** 

# Error

**Extends Node**

Defines an error node (used only on silentMode)

**Properties**

-   `message` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `line` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `token` **([number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** 
-   `expected` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array))** 

# Eval

**Extends Statement**

Defines an eval statement

**Properties**

-   `source` **[Node](#node)** 

# Exit

**Extends Statement**

Defines an exit / die call

**Properties**

-   `status` **([Node](#node) | null)** 

# Expression

**Extends Node**

Any expression node. Since the left-hand side of an assignment may
be any expression in general, an expression can also be a pattern.

# Function

**Extends Declaration**

Defines a classic function

**Properties**

-   `arguments` **[Array](#array)&lt;Argument>** 
-   `type` **[Identifier](#identifier)** 
-   `byref` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `children` **[Array](#array)&lt;[Node](#node)>** 

# Identifier

**Extends Node**

Defines an identifier node

**Properties**

-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `fqn` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# Include

**Extends Statement**

Defines system include call

**Properties**

-   `target` **[Node](#node)** 
-   `once` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `require` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# Inline

**Extends Literal**

Defines inline html output (treated as echo output)

# Isset

**Extends Sys**

Defines an isset call

# ArrayExpression

**Extends Expression**

Defines an array structure

**Properties**

-   `value` **([Node](#node) \| [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | null)** 

# Location

Defines the location of the node (with it's source contents as string)

**Parameters**

-   `source`  
-   `start`  
-   `end`  

**Properties**

-   `source` **([String](#string) | null)** 
-   `start` **[Position](#position)** 
-   `end` **[Position](#position)** 

# Magic

**Extends Literal**

Defines magic constant

# Method

**Extends Function**

Defines a class/interface/trait method

**Properties**

-   `isAbstract` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `isFinal` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `isStatic` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `visibility` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

# Namespace

**Extends Block**

The main program node

**Properties**

-   `name` **[Identifier](#identifier)** 
-   `withBrackets` **[Boolean](#boolean)** 

# Node

A generic AST node

**Parameters**

-   `kind`  
-   `location`  

**Properties**

-   `loc` **([Location](#location) | null)** 
-   `kind` **[String](#string)** 

## extends

Helper for extending the Node class

**Parameters**

-   `constructor` **[Function](#function)** 

Returns **[Function](#function)** 

# Number

**Extends Literal**

Defines a numeric value

# Parameter

**Extends Declaration**

Defines a function parameter

**Properties**

-   `type` **([Identifier](#identifier) | null)** 
-   `value` **([Node](#node) | null)** 
-   `byref` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `variadic` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# Position

Each Position object consists of a line number (1-indexed) and a column number (0-indexed):

**Parameters**

-   `line`  
-   `column`  
-   `offset`  

**Properties**

-   `line` **[Number](#number)** 
-   `column` **[Number](#number)** 
-   `offset` **[Number](#number)** 

# Print

**Extends Sys**

Outputs

# Program

**Extends Block**

The main program node

**Properties**

-   `errors` **[Array](#array)&lt;[Error](#error)>** 

# Property

**Extends Declaration**

Defines a class property

**Properties**

-   `isFinal` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `isStatic` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `visibility` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `value` **([Node](#node) | null)** 

# Shell

**Extends Literal**

Defines inline html output (treated as echo output)

# Statement

**Extends Node**

Any statement.

# String

**Extends Literal**

Defines inline html output (treated as echo output)

**Properties**

-   `isDoubleQuote` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# Sys

**Extends Statement**

Defines system based call

**Properties**

-   `arguments` **[Array](#array)&lt;[Node](#node)>** 

# Unset

**Extends Sys**

Deletes references to a list of variables

# Variable

**Extends Expression**

Any expression node. Since the left-hand side of an assignment may
be any expression in general, an expression can also be a pattern.

**Properties**

-   `identifier` **([String](#string) \| [Node](#node))** 
-   `byref` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 