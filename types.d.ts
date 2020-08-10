declare module "php-parser" {
    /**
     * Defines an array structure
     * @example
     * // PHP code :
     * [1, 'foo' => 'bar', 3]
     *
     * // AST structure :
     * {
     *  "kind": "array",
     *  "shortForm": true
     *  "items": [
     *    {"kind": "number", "value": "1"},
     *    {
     *      "kind": "entry",
     *      "key": {"kind": "string", "value": "foo", "isDoubleQuote": false},
     *      "value": {"kind": "string", "value": "bar", "isDoubleQuote": false}
     *    },
     *    {"kind": "number", "value": "3"}
     *  ]
     * }
     * @property items - List of array items
     * @property shortForm - Indicate if the short array syntax is used, ex `[]` instead `array()`
     */
    class Array extends Expression {
        /**
         * List of array items
        */
        items: Entry | Expression | Variable;
        /**
         * Indicate if the short array syntax is used, ex `[]` instead `array()`
        */
        shortForm: boolean;
    }
    /**
     * Defines an arrow function (it's like a closure)
     */
    class ArrowFunc extends Expression {
        arguments: Parameter[];
        type: Identifier;
        body: Expression;
        byref: boolean;
        nullable: boolean;
        isStatic: boolean;
    }
    /**
     * Assigns a value to the specified target
     */
    class Assign extends Expression {
        left: Expression;
        right: Expression;
        operator: string;
    }
    /**
     * Assigns a value to the specified target
     */
    class AssignRef extends Expression {
        left: Expression;
        right: Expression;
        operator: string;
    }
    /**
     * Binary operations
     */
    class Bin extends Operation {
        type: string;
        left: Expression;
        right: Expression;
    }
    /**
     * A block statement, i.e., a sequence of statements surrounded by braces.
     */
    class Block extends Statement {
        children: Node[];
    }
    /**
     * Defines a boolean value (true/false)
     */
    class Boolean extends Literal {
    }
    /**
     * A break statement
     */
    class Break extends Statement {
        level: number | null;
    }
    /**
     * Passing by Reference - so the function can modify the variable
     */
    class ByRef extends Expression {
        what: ExpressionStatement;
    }
    /**
     * Executes a call statement
     */
    class Call extends Expression {
        what: Identifier | Variable;
        arguments: Variable[];
    }
    /**
     * A switch case statement
     * @property test - if null, means that the default case
     */
    class Case extends Statement {
        /**
         * if null, means that the default case
        */
        test: Expression | null;
        body: Block | null;
    }
    /**
     * Binary operations
     */
    class Cast extends Operation {
        type: string;
        raw: string;
        expr: Expression;
    }
    /**
     * Defines a catch statement
     */
    class Catch extends Statement {
        what: Identifier[];
        variable: Variable;
        body: Statement;
    }
    /**
     * A class definition
     */
    class Class extends Declaration {
        extends: Identifier | null;
        implements: Identifier[];
        body: Declaration[];
        isAnonymous: boolean;
        isAbstract: boolean;
        isFinal: boolean;
    }
    /**
     * Defines a class/interface/trait constant
     */
    class ClassConstant extends ConstantStatement {
        visibility: string;
    }
    /**
     * Defines a clone call
     */
    class Clone extends Expression {
        what: Expression;
    }
    /**
     * Defines a closure
     */
    class Closure extends Expression {
        arguments: Parameter[];
        uses: Variable[];
        type: Identifier;
        byref: boolean;
        nullable: boolean;
        body: Block | null;
        isStatic: boolean;
    }
    /**
     * Abstract documentation node (ComentLine or CommentBlock)
     */
    class Comment extends Node {
        value: string;
    }
    /**
     * A comment block (multiline)
     */
    class CommentBlock extends Comment {
    }
    /**
     * A single line comment
     */
    class CommentLine extends Comment {
    }
    /**
     * Defines a constant
     */
    class Constant extends Node {
        name: string;
        value: Node | string | number | boolean | null;
    }
    /**
     * Declares a constants into the current scope
     */
    class ConstantStatement extends Statement {
        constants: Constant[];
    }
    /**
     * A continue statement
     */
    class Continue extends Statement {
        level: number | null;
    }
    /**
     * A declaration statement (function, class, interface...)
     */
    class Declaration extends Statement {
        name: Identifier | string;
    }
    /**
     * The declare construct is used to set execution directives for a block of code
     */
    class Declare extends Block {
        directives: any[][];
        mode: string;
    }
    /**
     * Defines a constant
     */
    class DeclareDirective extends Node {
        name: Identifier;
        value: Node | string | number | boolean | null;
    }
    /**
     * Defines a do/while statement
     */
    class Do extends Statement {
        test: Expression;
        body: Statement;
    }
    /**
     * Defines system based call
     */
    class Echo extends Statement {
        shortForm: boolean;
    }
    /**
     * Defines an empty check call
     */
    class Empty extends Expression {
    }
    /**
     * Defines an encapsed string (contains expressions)
     * @property type - Defines the type of encapsed string (shell, heredoc, string)
     * @property label - The heredoc label, defined only when the type is heredoc
     */
    class Encapsed extends Literal {
        /**
         * Defines the type of encapsed string (shell, heredoc, string)
        */
        type: string;
        /**
         * The heredoc label, defined only when the type is heredoc
        */
        label: string | null;
    }
    /**
     * Part of `Encapsed` node
     */
    class EncapsedPart extends Expression {
        expression: Expression;
        syntax: string;
        curly: boolean;
    }
    /**
     * An array entry - see [Array](#array)
     * @property key - The entry key/offset
     * @property value - The entry value
     * @property byRef - By reference
     * @property unpack - Argument unpacking
     */
    class Entry extends Expression {
        /**
         * The entry key/offset
        */
        key: Node | null;
        /**
         * The entry value
        */
        value: Node;
        /**
         * By reference
        */
        byRef: boolean;
        /**
         * Argument unpacking
        */
        unpack: boolean;
    }
    /**
     * Defines an error node (used only on silentMode)
     */
    class Error extends Node {
        message: string;
        line: number;
        token: number | string;
        expected: string | any[];
    }
    /**
     * Defines an eval statement
     */
    class Eval extends Expression {
        source: Node;
    }
    /**
     * Defines an exit / die call
     */
    class Exit extends Expression {
        expression: Node | null;
        useDie: boolean;
    }
    /**
     * Any expression node. Since the left-hand side of an assignment may
     * be any expression in general, an expression can also be a pattern.
     */
    class Expression extends Node {
    }
    /**
     * Defines an expression based statement
     */
    class ExpressionStatement extends Statement {
        expression: Expression;
    }
    /**
     * Defines a for iterator
     */
    class For extends Statement {
        init: Expression[];
        test: Expression[];
        increment: Expression[];
        body: Statement;
        shortForm: boolean;
    }
    /**
     * Defines a foreach iterator
     */
    class Foreach extends Statement {
        source: Expression;
        key: Expression | null;
        value: Expression;
        body: Statement;
        shortForm: boolean;
    }
    /**
     * Defines a classic function
     */
    class Function extends Declaration {
        arguments: Parameter[];
        type: Identifier;
        byref: boolean;
        nullable: boolean;
        body: Block | null;
    }
    /**
     * Imports a variable from the global scope
     */
    class Global extends Statement {
        items: Variable[];
    }
    /**
     * Defines goto statement
     */
    class Goto extends Statement {
        label: string;
    }
    /**
     * Halts the compiler execution
     * @property after - String after the halt statement
     */
    class Halt extends Statement {
        /**
         * String after the halt statement
        */
        after: string;
    }
    /**
     * Defines an identifier node
     */
    class Identifier extends Node {
        name: string;
    }
    /**
     * Defines a if statement
     */
    class If extends Statement {
        test: Expression;
        body: Block;
        alternate: Block | If | null;
        shortForm: boolean;
    }
    /**
     * Defines system include call
     */
    class Include extends Expression {
        target: Node;
        once: boolean;
        require: boolean;
    }
    /**
     * Defines inline html output (treated as echo output)
     */
    class Inline extends Literal {
    }
    /**
     * An interface definition
     */
    class Interface extends Declaration {
        extends: Identifier[];
        body: Declaration[];
    }
    /**
     * Defines an isset call
     */
    class Isset extends Expression {
    }
    /**
     * A label statement (referenced by goto)
     */
    class Label extends Statement {
        name: string;
    }
    /**
     * Defines list assignment
     */
    class List extends Expression {
        shortForm: boolean;
    }
    /**
     * Defines an array structure
     */
    class Literal extends Expression {
        raw: string;
        value: Node | string | number | boolean | null;
    }
    /**
     * Defines the location of the node (with it's source contents as string)
     */
    class Location {
        source: string | null;
        start: Position;
        end: Position;
    }
    /**
     * Lookup on an offset in the specified object
     */
    class Lookup extends Expression {
        what: Expression;
        offset: Expression;
    }
    /**
     * Defines magic constant
     */
    class Magic extends Literal {
    }
    /**
     * Defines a class/interface/trait method
     */
    class Method extends Function {
        isAbstract: boolean;
        isFinal: boolean;
        isStatic: boolean;
        visibility: string;
    }
    /**
     * Defines a class reference node
     */
    class Name extends Reference {
        name: string;
        resolution: string;
    }
    /**
     * The main program node
     */
    class Namespace extends Block {
        name: string;
        withBrackets: boolean;
    }
    /**
     * Creates a new instance of the specified class
     */
    class New extends Expression {
        what: Identifier | Variable | Class;
        arguments: Variable[];
    }
    /**
     * A generic AST node
     */
    class Node {
        loc: Location | null;
        leadingComments: CommentBlock[] | Comment[] | null;
        trailingComments: CommentBlock[] | Comment[] | null;
        kind: string;
    }
    /**
     * Ignore this node, it implies a no operation block, for example :
     * [$foo, $bar, /* here a noop node * /]
     */
    class Noop extends Node {
    }
    /**
     * Defines a nowdoc string
     */
    class NowDoc extends Literal {
        label: string;
        raw: string;
    }
    /**
     * Represents the null keyword
     */
    class NullKeyword extends Node {
    }
    /**
     * Defines a numeric value
     */
    class Number extends Literal {
    }
    /**
     * Lookup on an offset in an array
     */
    class OffsetLookup extends Lookup {
    }
    /**
     * Defines binary operations
     */
    class Operation extends Expression {
    }
    /**
     * Defines a function parameter
     */
    class Parameter extends Declaration {
        type: Identifier | null;
        value: Node | null;
        byref: boolean;
        variadic: boolean;
        nullable: boolean;
    }
    /**
     * Defines a class reference node
     */
    class ParentReference extends Reference {
    }
    /**
     * Each Position object consists of a line number (1-indexed) and a column number (0-indexed):
     */
    class Position {
        line: number;
        column: number;
        offset: number;
    }
    /**
     * Defines a post operation `$i++` or `$i--`
     */
    class Post extends Operation {
        type: string;
        what: Variable;
    }
    /**
     * Defines a pre operation `++$i` or `--$i`
     */
    class Pre extends Operation {
        type: string;
        what: Variable;
    }
    /**
     * Outputs
     */
    class Print extends Expression {
    }
    /**
     * The main program node
     */
    class Program extends Block {
        errors: Error[];
        comments: Comment[] | null;
        tokens: String[] | null;
    }
    /**
     * Defines a class property
     */
    class Property extends Statement {
        name: string;
        value: Node | null;
        nullable: boolean;
        type: Identifier | Identifier[] | null;
    }
    /**
     * Lookup to an object property
     */
    class PropertyLookup extends Lookup {
    }
    /**
     * Declares a properties into the current scope
     */
    class PropertyStatement extends Statement {
        properties: Property[];
    }
    /**
     * Defines a reference node
     */
    class Reference extends Node {
    }
    /**
     * Defines a short if statement that returns a value
     */
    class RetIf extends Expression {
        test: Expression;
        trueExpr: Expression;
        falseExpr: Expression;
    }
    /**
     * A continue statement
     */
    class Return extends Statement {
        expr: Expression | null;
    }
    /**
     * Defines a class reference node
     */
    class SelfReference extends Reference {
    }
    /**
     * Avoids to show/log warnings & notices from the inner expression
     */
    class Silent extends Expression {
        expr: Expression;
    }
    /**
     * Any statement.
     */
    class Statement extends Node {
    }
    /**
     * Declares a static variable into the current scope
     */
    class Static extends Statement {
        variables: StaticVariable[];
    }
    /**
     * Lookup to a static property
     */
    class StaticLookup extends Lookup {
    }
    /**
     * Defines a class reference node
     */
    class StaticReference extends Reference {
    }
    /**
     * Defines a constant
     */
    class StaticVariable extends Node {
        variable: Variable;
        defaultValue: Node | string | number | boolean | null;
    }
    /**
     * Defines a string (simple or double quoted) - chars are already escaped
     */
    class String extends Literal {
        unicode: boolean;
        isDoubleQuote: boolean;
    }
    /**
     * Defines a switch statement
     */
    class Switch extends Statement {
        test: Expression;
        body: Block;
        shortForm: boolean;
    }
    /**
     * Defines a throw statement
     */
    class Throw extends Statement {
        what: Expression;
    }
    /**
     * A trait definition
     */
    class Trait extends Declaration {
        body: Declaration[];
    }
    /**
     * Defines a trait alias
     */
    class TraitAlias extends Node {
        trait: Identifier | null;
        method: Identifier;
        as: Identifier | null;
        visibility: string | null;
    }
    /**
     * Defines a trait alias
     */
    class TraitPrecedence extends Node {
        trait: Identifier | null;
        method: Identifier;
        instead: Identifier[];
    }
    /**
     * Defines a trait usage
     */
    class TraitUse extends Node {
        traits: Identifier[];
        adaptations: Node[] | null;
    }
    /**
     * Defines a try statement
     */
    class Try extends Statement {
        body: Block;
        catches: Catch[];
        allways: Block;
    }
    /**
     * Defines a class reference node
     */
    class TypeReference extends Reference {
        name: string;
    }
    /**
     * Unary operations
     */
    class Unary extends Operation {
        type: string;
        what: Expression;
    }
    /**
     * Deletes references to a list of variables
     */
    class Unset extends Statement {
    }
    /**
     * Defines a use statement (with a list of use items)
     * @property type - Possible value : function, const
     */
    class UseGroup extends Statement {
        name: string | null;
        /**
         * Possible value : function, const
        */
        type: string | null;
        item: UseItem[];
    }
    /**
     * Defines a use statement (from namespace)
     * @property type - Possible value : function, const
     */
    class UseItem extends Statement {
        name: string;
        /**
         * Possible value : function, const
        */
        type: string | null;
        alias: Identifier | null;
    }
    /**
     * Any expression node. Since the left-hand side of an assignment may
     * be any expression in general, an expression can also be a pattern.
     * @example
     * // PHP code :
     * $foo
     * // AST output
     * {
     *  "kind": "variable",
     *  "name": "foo",
     *  "curly": false
     * }
     * @property name - The variable name (can be a complex expression when the name is resolved dynamically)
     * @property curly - Indicate if the name is defined between curlies, ex `${foo}`
     */
    class Variable extends Expression {
        /**
         * The variable name (can be a complex expression when the name is resolved dynamically)
        */
        name: string | Node;
        /**
         * Indicate if the name is defined between curlies, ex `${foo}`
        */
        curly: boolean;
    }
    /**
     * Introduce a list of items into the arguments of the call
     */
    class Variadic extends Expression {
        what: any[] | Expression;
    }
    /**
     * Defines a while statement
     */
    class While extends Statement {
        test: Expression;
        body: Statement;
        shortForm: boolean;
    }
    /**
     * Defines a yield generator statement
     */
    class Yield extends Expression {
        value: Expression | null;
        key: Expression | null;
    }
    /**
     * Defines a yield from generator statement
     */
    class YieldFrom extends Expression {
        value: Expression;
    }
    /**
     * The AST builder class
     * @property withPositions - Should locate any node (by default false)
     * @property withSource - Should extract the node original code (by default false)
     */
    class AST {
        /**
         * Should locate any node (by default false)
        */
        withPositions: boolean;
        /**
         * Should extract the node original code (by default false)
        */
        withSource: boolean;
    }
    /**
     * Initialise a new parser instance with the specified options
     * @example
     * var parser = require('php-parser');
     * var instance = new parser({
     *   parser: {
     *     extractDoc: true,
     *     suppressErrors: true,
     *     version: 704 // or '7.4'
     *   },
     *   ast: {
     *     withPositions: true
     *   },
     *   lexer: {
     *     short_tags: true,
     *     asp_tags: true
     *   }
     * });
     *
     * var evalAST = instance.parseEval('some php code');
     * var codeAST = instance.parseCode('<?php some php code', 'foo.php');
     * var tokens = instance.tokenGetAll('<?php some php code');
     * @param options - List of options
     */
    class Engine {
        constructor(options: any);
        /**
         * Parse an evaluating mode string (no need to open php tags)
         */
        parseEval(buffer: string): Program;
        /**
         * Function that parse a php code with open/close tags
         *
         * Sample code :
         * ```php
         * <?php $x = 1;
         * ```
         *
         * Usage :
         * ```js
         * var parser = require('php-parser');
         * var phpParser = new parser({
         *   // some options
         * });
         * var ast = phpParser.parseCode('...php code...', 'foo.php');
         * ```
         * @param buffer - The code to be parsed
         * @param filename - Filename
         */
        parseCode(buffer: string, filename: string): Program;
        /**
         * Extract tokens from the specified buffer.
         * > Note that the output tokens are *STRICLY* similar to PHP function `token_get_all`
         * @returns - Each item can be a string or an array with following informations [token_name, text, line_number]
         */
        tokenGetAll(buffer: string): String[];
        lexer: Lexer;
        parser: Parser;
        ast: AST;
        tokens: any;
    }
    /**
     * This is the php lexer. It will tokenize the string for helping the
     * parser to build the AST from its grammar.
     * @property all_tokens - defines if all tokens must be retrieved (used by token_get_all only)
     * @property comment_tokens - extracts comments tokens
     * @property mode_eval - enables the evald mode (ignore opening tags)
     * @property asp_tags - disables by default asp tags mode
     * @property short_tags - enables by default short tags mode
     * @property keywords - List of php keyword
     * @property castKeywords - List of php keywords for type casting
     */
    class Lexer {
        EOF: number;
        /**
         * defines if all tokens must be retrieved (used by token_get_all only)
        */
        all_tokens: boolean;
        /**
         * extracts comments tokens
        */
        comment_tokens: boolean;
        /**
         * enables the evald mode (ignore opening tags)
        */
        mode_eval: boolean;
        /**
         * disables by default asp tags mode
        */
        asp_tags: boolean;
        /**
         * enables by default short tags mode
        */
        short_tags: boolean;
        /**
         * List of php keyword
        */
        keywords: any;
        /**
         * List of php keywords for type casting
        */
        castKeywords: any;
    }
    /**
     * The PHP Parser class that build the AST tree from the lexer
     * @property lexer - current lexer instance
     * @property ast - the AST factory instance
     * @property token - current token
     * @property extractDoc - should extract documentation as AST node
     * @property extractTokens - should extract each token
     * @property suppressErrors - should ignore parsing errors and continue
     * @property debug - should output debug informations
     */
    class Parser {
        /**
         * current lexer instance
        */
        lexer: Lexer;
        /**
         * the AST factory instance
        */
        ast: AST;
        /**
         * current token
        */
        token: number | string;
        /**
         * should extract documentation as AST node
        */
        extractDoc: boolean;
        /**
         * should extract each token
        */
        extractTokens: boolean;
        /**
         * should ignore parsing errors and continue
        */
        suppressErrors: boolean;
        /**
         * should output debug informations
        */
        debug: boolean;
    }
}

