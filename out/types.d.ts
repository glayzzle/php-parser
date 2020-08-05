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
declare class Array extends Expression {
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
declare class ArrowFunc extends Expression {
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
declare class Assign extends Expression {
    left: Expression;
    right: Expression;
    operator: string;
}

/**
 * Assigns a value to the specified target
 */
declare class AssignRef extends Expression {
    left: Expression;
    right: Expression;
    operator: string;
}

/**
 * Binary operations
 */
declare class Bin extends Operation {
    type: string;
    left: Expression;
    right: Expression;
}

/**
 * A block statement, i.e., a sequence of statements surrounded by braces.
 */
declare class Block extends Statement {
    children: Node[];
}

/**
 * Defines a boolean value (true/false)
 */
declare class Boolean extends Literal {
}

/**
 * A break statement
 */
declare class Break extends Statement {
    level: number | null;
}

/**
 * Passing by Reference - so the function can modify the variable
 */
declare class ByRef extends Expression {
    what: ExpressionStatement;
}

/**
 * Executes a call statement
 */
declare class Call extends Expression {
    what: Identifier | Variable;
    arguments: Variable[];
}

/**
 * A switch case statement
 * @property test - if null, means that the default case
 */
declare class Case extends Statement {
    /**
     * if null, means that the default case
    */
    test: Expression | null;
    body: Block | null;
}

/**
 * Binary operations
 */
declare class Cast extends Operation {
    type: string;
    raw: string;
    expr: Expression;
}

/**
 * Defines a catch statement
 */
declare class Catch extends Statement {
    what: Identifier[];
    variable: Variable;
    body: Statement;
}

/**
 * A class definition
 */
declare class Class extends Declaration {
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
declare class ClassConstant extends ConstantStatement {
    /**
     * Generic flags parser
     */
    parseFlags(flags: (number | null)[]): void;
    visibility: string;
}

/**
 * Defines a clone call
 */
declare class Clone extends Expression {
    what: Expression;
}

/**
 * Defines a closure
 */
declare class Closure extends Expression {
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
declare class Comment extends Node {
    value: string;
}

/**
 * A comment block (multiline)
 */
declare class CommentBlock extends Comment {
}

/**
 * A single line comment
 */
declare class CommentLine extends Comment {
}

/**
 * Defines a constant
 */
declare class Constant extends Node {
    name: string;
    value: Node | string | number | boolean | null;
}

/**
 * Declares a constants into the current scope
 */
declare class ConstantStatement extends Statement {
    constants: Constant[];
}

/**
 * A continue statement
 */
declare class Continue extends Statement {
    level: number | null;
}

/**
 * A declaration statement (function, class, interface...)
 */
declare class Declaration extends Statement {
    /**
     * Generic flags parser
     */
    parseFlags(flags: (number | null)[]): void;
    name: number | string;
}

/**
 * The declare construct is used to set execution directives for a block of code
 */
declare class Declare extends Block {
    directives: any[][];
    mode: string;
}

/**
 * The node is declared as a short tag syntax :
 * ```php
 * <?php
 * declare(ticks=1):
 * // some statements
 * enddeclare;
 * ```
 */
declare const MODE_SHORT: string;

/**
 * The node is declared bracket enclosed code :
 * ```php
 * <?php
 * declare(ticks=1) {
 * // some statements
 * }
 * ```
 */
declare const MODE_BLOCK: string;

/**
 * The node is declared as a simple statement. In order to make things simpler
 * children of the node are automatically collected until the next
 * declare statement.
 * ```php
 * <?php
 * declare(ticks=1);
 * // some statements
 * declare(ticks=2);
 * // some statements
 * ```
 */
declare const MODE_NONE: string;

/**
 * Defines a constant
 */
declare class DeclareDirective extends Node {
    name: Identifier;
    value: Node | string | number | boolean | null;
}

/**
 * Defines a do/while statement
 */
declare class Do extends Statement {
    test: Expression;
    body: Statement;
}

/**
 * Defines system based call
 */
declare class Echo extends Statement {
    shortForm: boolean;
}

/**
 * Defines an empty check call
 */
declare class Empty extends Expression {
}

/**
 * Defines an encapsed string (contains expressions)
 * @property type - Defines the type of encapsed string (shell, heredoc, string)
 * @property label - The heredoc label, defined only when the type is heredoc
 */
declare class Encapsed extends Literal {
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
 * The node is a double quote string :
 * ```php
 * <?php
 * echo "hello $world";
 * ```
 */
declare const TYPE_STRING: string;

/**
 * The node is a shell execute string :
 * ```php
 * <?php
 * echo `ls -larth $path`;
 * ```
 */
declare const TYPE_SHELL: string;

/**
 * The node is a shell execute string :
 * ```php
 * <?php
 * echo <<<STR
 *  Hello $world
 * STR
 * ;
 * ```
 */
declare const TYPE_HEREDOC: string;

/**
 * The node contains a list of constref / variables / expr :
 * ```php
 * <?php
 * echo $foo->bar_$baz;
 * ```
 */
declare const TYPE_OFFSET: string;

/**
 * Part of `Encapsed` node
 */
declare class EncapsedPart extends Expression {
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
declare class Entry extends Expression {
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
declare class Error extends Node {
    message: string;
    line: number;
    token: number | string;
    expected: string | any[];
}

/**
 * Defines an eval statement
 */
declare class Eval extends Expression {
    source: Node;
}

/**
 * Defines an exit / die call
 */
declare class Exit extends Expression {
    expression: Node | null;
    useDie: boolean;
}

/**
 * Any expression node. Since the left-hand side of an assignment may
 * be any expression in general, an expression can also be a pattern.
 */
declare class Expression extends Node {
}

/**
 * Defines an expression based statement
 */
declare class ExpressionStatement extends Statement {
    expression: Expression;
}

/**
 * Defines a for iterator
 */
declare class For extends Statement {
    init: Expression[];
    test: Expression[];
    increment: Expression[];
    body: Statement;
    shortForm: boolean;
}

/**
 * Defines a foreach iterator
 */
declare class Foreach extends Statement {
    source: Expression;
    key: Expression | null;
    value: Expression;
    body: Statement;
    shortForm: boolean;
}

/**
 * Defines a classic function
 */
declare class Function extends Declaration {
    arguments: Parameter[];
    type: Identifier;
    byref: boolean;
    nullable: boolean;
    body: Block | null;
}

/**
 * Imports a variable from the global scope
 */
declare class Global extends Statement {
    items: Variable[];
}

/**
 * Defines goto statement
 */
declare class Goto extends Statement {
    label: string;
}

/**
 * Halts the compiler execution
 * @property after - String after the halt statement
 */
declare class Halt extends Statement {
    /**
     * String after the halt statement
    */
    after: string;
}

/**
 * Defines an identifier node
 */
declare class Identifier extends Node {
    name: string;
}

/**
 * Defines a if statement
 */
declare class If extends Statement {
    test: Expression;
    body: Block;
    alternate: Block | If | null;
    shortForm: boolean;
}

/**
 * Defines system include call
 */
declare class Include extends Expression {
    target: Node;
    once: boolean;
    require: boolean;
}

/**
 * Defines inline html output (treated as echo output)
 */
declare class Inline extends Literal {
}

/**
 * An interface definition
 */
declare class Interface extends Declaration {
    extends: Identifier[];
    body: Declaration[];
}

/**
 * Defines an isset call
 */
declare class Isset extends Expression {
}

/**
 * A label statement (referenced by goto)
 */
declare class Label extends Statement {
    name: string;
}

/**
 * Defines list assignment
 */
declare class List extends Expression {
    shortForm: boolean;
}

/**
 * Defines an array structure
 */
declare class Literal extends Expression {
    raw: string;
    value: Node | string | number | boolean | null;
}

/**
 * Defines the location of the node (with it's source contents as string)
 */
declare class Location {
    source: string | null;
    start: Position;
    end: Position;
}

/**
 * Lookup on an offset in the specified object
 */
declare class Lookup extends Expression {
    what: Expression;
    offset: Expression;
}

/**
 * Defines magic constant
 */
declare class Magic extends Literal {
}

/**
 * Defines a class/interface/trait method
 */
declare class Method extends Function {
    isAbstract: boolean;
    isFinal: boolean;
    isStatic: boolean;
    visibility: string;
}

/**
 * Defines a class reference node
 */
declare class Name extends Reference {
    name: string;
    resolution: string;
}

/**
 * This is an identifier without a namespace separator, such as Foo
 */
declare const UNQUALIFIED_NAME: string;

/**
 * This is an identifier with a namespace separator, such as Foo\Bar
 */
declare const QUALIFIED_NAME: string;

/**
 * This is an identifier with a namespace separator that begins with
 * a namespace separator, such as \Foo\Bar. The namespace \Foo is also
 * a fully qualified name.
 */
declare const FULL_QUALIFIED_NAME: string;

/**
 * This is an identifier starting with namespace, such as namespace\Foo\Bar.
 */
declare const RELATIVE_NAME: string;

/**
 * The main program node
 */
declare class Namespace extends Block {
    name: string;
    withBrackets: boolean;
}

/**
 * Creates a new instance of the specified class
 */
declare class New extends Expression {
    what: Identifier | Variable | Class;
    arguments: Variable[];
}

/**
 * A generic AST node
 */
declare class Node {
    /**
     * Attach comments to current node
     */
    setTrailingComments(docs: any): void;
    /**
     * Destroying an unused node
     */
    destroy(): void;
    /**
     * Includes current token position of the parser
     */
    includeToken(parser: any): void;
    /**
     * Helper for extending the Node class
     */
    static extends(type: string, constructor: (...params: any[]) => any): (...params: any[]) => any;
    loc: Location | null;
    leadingComments: CommentBlock[] | Comment[] | null;
    trailingComments: CommentBlock[] | Comment[] | null;
    kind: string;
}

/**
 * Ignore this node, it implies a no operation block, for example :
 * [$foo, $bar, /* here a noop node * /]
 */
declare class Noop extends Node {
}

/**
 * Defines a nowdoc string
 */
declare class NowDoc extends Literal {
    label: string;
    raw: string;
}

/**
 * Represents the null keyword
 */
declare class NullKeyword extends Node {
}

/**
 * Defines a numeric value
 */
declare class Number extends Literal {
}

/**
 * Lookup on an offset in an array
 */
declare class OffsetLookup extends Lookup {
}

/**
 * Defines binary operations
 */
declare class Operation extends Expression {
}

/**
 * Defines a function parameter
 */
declare class Parameter extends Declaration {
    type: Identifier | null;
    value: Node | null;
    byref: boolean;
    variadic: boolean;
    nullable: boolean;
}

/**
 * Defines a class reference node
 */
declare class ParentReference extends Reference {
}

/**
 * Each Position object consists of a line number (1-indexed) and a column number (0-indexed):
 */
declare class Position {
    line: number;
    column: number;
    offset: number;
}

/**
 * Defines a post operation `$i++` or `$i--`
 */
declare class Post extends Operation {
    type: string;
    what: Variable;
}

/**
 * Defines a pre operation `++$i` or `--$i`
 */
declare class Pre extends Operation {
    type: string;
    what: Variable;
}

/**
 * Outputs
 */
declare class Print extends Expression {
}

/**
 * The main program node
 */
declare class Program extends Block {
    errors: Error[];
    comments: Comment[] | null;
    tokens: String[] | null;
}

/**
 * Defines a class property
 */
declare class Property extends Statement {
    name: string;
    value: Node | null;
    nullable: boolean;
    type: Identifier | Identifier[] | null;
}

/**
 * Lookup to an object property
 */
declare class PropertyLookup extends Lookup {
}

/**
 * Declares a properties into the current scope
 */
declare class PropertyStatement extends Statement {
    /**
     * Generic flags parser
     */
    parseFlags(flags: (number | null)[]): void;
    properties: Property[];
}

/**
 * Defines a reference node
 */
declare class Reference extends Node {
}

/**
 * Defines a short if statement that returns a value
 */
declare class RetIf extends Expression {
    test: Expression;
    trueExpr: Expression;
    falseExpr: Expression;
}

/**
 * A continue statement
 */
declare class Return extends Statement {
    expr: Expression | null;
}

/**
 * Defines a class reference node
 */
declare class SelfReference extends Reference {
}

/**
 * Avoids to show/log warnings & notices from the inner expression
 */
declare class Silent extends Expression {
    expr: Expression;
}

/**
 * Any statement.
 */
declare class Statement extends Node {
}

/**
 * Declares a static variable into the current scope
 */
declare class Static extends Statement {
    variables: StaticVariable[];
}

/**
 * Lookup to a static property
 */
declare class StaticLookup extends Lookup {
}

/**
 * Defines a class reference node
 */
declare class StaticReference extends Reference {
}

/**
 * Defines a constant
 */
declare class StaticVariable extends Node {
    variable: Variable;
    defaultValue: Node | string | number | boolean | null;
}

/**
 * Defines a string (simple or double quoted) - chars are already escaped
 */
declare class String extends Literal {
    unicode: boolean;
    isDoubleQuote: boolean;
}

/**
 * Defines a switch statement
 */
declare class Switch extends Statement {
    test: Expression;
    body: Block;
    shortForm: boolean;
}

/**
 * Defines a throw statement
 */
declare class Throw extends Statement {
    what: Expression;
}

/**
 * A trait definition
 */
declare class Trait extends Declaration {
    body: Declaration[];
}

/**
 * Defines a trait alias
 */
declare class TraitAlias extends Node {
    trait: Identifier | null;
    method: Identifier;
    as: Identifier | null;
    visibility: string | null;
}

/**
 * Defines a trait alias
 */
declare class TraitPrecedence extends Node {
    trait: Identifier | null;
    method: Identifier;
    instead: Identifier[];
}

/**
 * Defines a trait usage
 */
declare class TraitUse extends Node {
    traits: Identifier[];
    adaptations: Node[] | null;
}

/**
 * Defines a try statement
 */
declare class Try extends Statement {
    body: Block;
    catches: Catch[];
    allways: Block;
}

/**
 * Defines a class reference node
 */
declare class TypeReference extends Reference {
    name: string;
}

/**
 * Unary operations
 */
declare class Unary extends Operation {
    type: string;
    what: Expression;
}

/**
 * Deletes references to a list of variables
 */
declare class Unset extends Statement {
}

/**
 * Defines a use statement (with a list of use items)
 * @property type - Possible value : function, const
 */
declare class UseGroup extends Statement {
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
declare class UseItem extends Statement {
    name: string;
    /**
     * Possible value : function, const
    */
    type: string | null;
    alias: Identifier | null;
}

/**
 * Importing a constant
 */
declare const TYPE_CONST: string;

/**
 * Importing a function
 */
declare const TYPE_FUNC: string;

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
declare class Variable extends Expression {
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
declare class variadic extends Expression {
    what: any[] | Expression;
}

/**
 * Defines a while statement
 */
declare class While extends Statement {
    test: Expression;
    body: Statement;
    shortForm: boolean;
}

/**
 * Defines a yield generator statement
 */
declare class Yield extends Expression {
    value: Expression | null;
    key: Expression | null;
}

/**
 * Defines a yield from generator statement
 */
declare class YieldFrom extends Expression {
    value: Expression;
}

/**
 * The AST builder class
 * @property withPositions - Should locate any node (by default false)
 * @property withSource - Should extract the node original code (by default false)
 */
declare class AST {
    /**
     * Change parent node informations after swapping childs
     */
    swapLocations(): void;
    /**
     * Includes locations from first & last into the target
     */
    resolveLocations(): void;
    /**
     * Check and fix precence, by default using right
     */
    resolvePrecedence(): void;
    /**
     * Prepares an AST node
     * @param kind - Defines the node type
     * (if null, the kind must be passed at the function call)
     * @param parser - The parser instance (use for extracting locations)
     */
    prepare(kind: string | null, parser: Parser): (...params: any[]) => any;
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
declare class Engine {
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
 * Check if the inpyt is a buffer or a string
 * @param buffer - Input value that can be either a buffer or a string
 * @returns Returns the string from input
 */
declare function getStringBuffer(buffer: Buffer | string): string;

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
declare class Lexer {
    /**
     * Initialize the lexer with the specified input
     */
    setInput(): void;
    /**
     * consumes and returns one char from the input
     */
    input(): void;
    /**
     * revert eating specified size
     */
    unput(): void;
    /**
     * check if the text matches
     */
    tryMatch(text: string): boolean;
    /**
     * check if the text matches
     */
    tryMatchCaseless(text: string): boolean;
    /**
     * look ahead
     */
    ahead(size: number): string;
    /**
     * consume the specified size
     */
    consume(size: number): Lexer;
    /**
     * Gets the current state
     */
    getState(): void;
    /**
     * Sets the current lexer state
     */
    setState(): void;
    /**
     * prepend next token
     */
    appendToken(value: any, ahead: any): Lexer;
    /**
     * return next match that has a token
     */
    lex(): number | string;
    /**
     * activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
     */
    begin(condition: any): Lexer;
    /**
     * pop the previously active lexer condition state off the condition stack
     */
    popState(): T | string | any;
    /**
     * return next match in input
     */
    next(): number | any;
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
 * reset to true after a new line
 */
declare var inCoutingState: boolean;

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
declare class Parser {
    /**
     * helper : gets a token name
     */
    getTokenName(): void;
    /**
     * main entry point : converts a source code to AST
     */
    parse(): void;
    /**
     * Raise an error
     */
    raiseError(): void;
    /**
     * handling errors
     */
    error(): void;
    /**
     * Creates a new AST node
     */
    node(): void;
    /**
     * expects an end of statement or end of file
     */
    expectEndOfStatement(): boolean;
    /**
     * Force the parser to check the current token.
     *
     * If the current token does not match to expected token,
     * the an error will be raised.
     *
     * If the suppressError mode is activated, then the error will
     * be added to the program error stack and this function will return `false`.
     */
    expect(token: string | number): boolean;
    /**
     * Returns the current token contents
     */
    text(): string;
    /**
     * consume the next token
     */
    next(): void;
    /**
     * Eating a token
     */
    lex(): void;
    /**
     * Check if token is of specified type
     */
    is(): void;
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

/**
 * outputs some debug information on current token
 */
declare const ignoreStack: any;

