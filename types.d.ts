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
    items: (Entry | Expression | Variable)[];
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
   * Attribute group
   */
  class AttrGroup extends Node {
    attrs: Attribute[];
  }
  /**
   * Attribute Value
   */
  class Attribute extends Node {
    name: string;
    args: Parameter[];
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
    value: boolean;
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
    arguments: Expression[];
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
    what: Name[];
    variable: Variable;
    body: Block;
  }
  /**
   * A class definition
   */
  class Class extends Declaration {
    extends: Identifier | null;
    implements: Identifier[] | null;
    body: Declaration[];
    isAnonymous: boolean;
    isAbstract: boolean;
    isFinal: boolean;
    isReadonly: boolean;
    attrGroups: AttrGroup[];
  }
  /**
   * Defines a class/interface/trait constant
   */
  class ClassConstant extends ConstantStatement {
    /**
     * Generic flags parser
     */
    parseFlags(flags: (number | null)[]): void;
    visibility: string;
    final: boolean;
    nullable: boolean;
    type: TypeReference | IntersectionType | UnionType | null;
    attrGroups: AttrGroup[];
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
    attrGroups: AttrGroup[];
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
  class CommentBlock extends Comment {}
  /**
   * A single line comment
   */
  class CommentLine extends Comment {}
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
    /**
     * Generic flags parser
     */
    parseFlags(flags: (number | null)[]): void;
    name: Identifier | string;
  }
  /**
   * The declare construct is used to set execution directives for a block of code
   */
  class Declare extends Block {
    /**
     * The node is declared as a short tag syntax :
     * ```php
     * <?php
     * declare(ticks=1):
     * // some statements
     * enddeclare;
     * ```
     */
    readonly MODE_SHORT: string;
    /**
     * The node is declared bracket enclosed code :
     * ```php
     * <?php
     * declare(ticks=1) {
     * // some statements
     * }
     * ```
     */
    readonly MODE_BLOCK: string;
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
    readonly MODE_NONE: string;
    directives: DeclareDirective[];
    mode: string;
  }
  /**
   * Defines a constant
   */
  class DeclareDirective extends Node {
    key: Identifier;
    value: Node | string | number | boolean | null;
  }
  /**
   * Defines a do/while statement
   */
  class Do extends Statement {
    test: Expression;
    body: Block | null;
  }
  /**
   * Defines system based call
   */
  class Echo extends Statement {
    shortForm: boolean;
    expressions: Expression[];
  }
  /**
   * Defines an empty check call
   */
  class Empty extends Expression {}
  /**
   * Defines an encapsed string (contains expressions)
   * @property type - Defines the type of encapsed string (shell, heredoc, string)
   * @property label - The heredoc label, defined only when the type is heredoc
   */
  class Encapsed extends Literal {
    /**
     * The node is a double quote string :
     * ```php
     * <?php
     * echo "hello $world";
     * ```
     */
    readonly TYPE_STRING: string;
    /**
     * The node is a shell execute string :
     * ```php
     * <?php
     * echo `ls -larth $path`;
     * ```
     */
    readonly TYPE_SHELL: string;
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
    readonly TYPE_HEREDOC: string;
    /**
     * The node contains a list of constref / variables / expr :
     * ```php
     * <?php
     * echo $foo->bar_$baz;
     * ```
     */
    readonly TYPE_OFFSET: string;
    /**
     * Defines the type of encapsed string (shell, heredoc, string)
     */
    type: string;
    /**
     * The heredoc label, defined only when the type is heredoc
     */
    label: string | null;
    value: EncapsedPart[];
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
   * A enum definition
   */
  class Enum extends Declaration {
    valueType: Identifier | null;
    implements: Identifier[];
    body: Declaration[];
    attrGroups: AttrGroup[];
  }
  /**
   * Declares a cases into the current scope
   */
  class EnumCase extends Node {
    name: string;
    value: string | number | null;
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
  class Expression extends Node {}
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
    body: Block | null;
    shortForm: boolean;
  }
  /**
   * Defines a foreach iterator
   */
  class Foreach extends Statement {
    source: Expression;
    key: Expression | null;
    value: Expression;
    body: Block | null;
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
    attrGroups: AttrGroup[];
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
    value: string;
  }
  /**
   * An interface definition
   */
  class Interface extends Declaration {
    extends: Identifier[];
    body: Declaration[];
    attrGroups: AttrGroup[];
  }
  /**
   * A union of types
   */
  class IntersectionType extends Declaration {
    types: TypeReference[];
  }
  /**
   * Defines an isset call
   */
  class Isset extends Expression {}
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
    items: Entry[];
  }
  /**
   * Defines an array structure
   */
  class Literal extends Expression {
    raw: string;
    value: EncapsedPart[] | Node | string | number | boolean | null;
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
  class Magic extends Literal {}
  /**
   * Defines a match expression
   * @property cond - Condition expression to match against
   * @property arms - Arms for comparison
   */
  class Match extends Expression {
    /**
     * Condition expression to match against
     */
    cond: Expression;
    /**
     * Arms for comparison
     */
    arms: MatchArm[];
  }
  /**
   * An array entry - see [Array](#array)
   * @property conds - The match condition expression list - null indicates default arm
   * @property body - The return value expression
   */
  class MatchArm extends Expression {
    /**
     * The match condition expression list - null indicates default arm
     */
    conds: Expression[] | null;
    /**
     * The return value expression
     */
    body: Expression;
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
    /**
     * This is an identifier without a namespace separator, such as Foo
     */
    readonly UNQUALIFIED_NAME: string;
    /**
     * This is an identifier with a namespace separator, such as Foo\Bar
     */
    readonly QUALIFIED_NAME: string;
    /**
     * This is an identifier with a namespace separator that begins with
     * a namespace separator, such as \Foo\Bar. The namespace \Foo is also
     * a fully qualified name.
     */
    readonly FULL_QUALIFIED_NAME: string;
    /**
     * This is an identifier starting with namespace, such as namespace\Foo\Bar.
     */
    readonly RELATIVE_NAME: string;
    name: string;
    resolution: string;
  }
  /**
   * Named arguments.
   */
  class namedargument extends Expression {
    name: string;
    value: Expression;
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
    static extends(
      type: string,
      constructor: (...params: any[]) => any,
    ): (...params: any[]) => any;
    loc: Location | null;
    leadingComments: CommentBlock[] | Comment[] | null;
    trailingComments: CommentBlock[] | Comment[] | null;
    kind: string;
  }
  /**
   * Ignore this node, it implies a no operation block, for example :
   * [$foo, $bar, /* here a noop node * /]
   */
  class Noop extends Node {}
  /**
   * Defines a nowdoc string
   */
  class NowDoc extends Literal {
    label: string;
    raw: string;
    value: string;
  }
  /**
   * Represents the null keyword
   */
  class NullKeyword extends Node {}
  /**
   * Lookup to an object property
   */
  class NullSafePropertyLookup extends Lookup {}
  /**
   * Defines a numeric value
   */
  class Number extends Literal {
    value: number;
  }
  /**
   * Lookup on an offset in an array
   */
  class OffsetLookup extends Lookup {}
  /**
   * Defines binary operations
   */
  class Operation extends Expression {}
  type MODIFIER_PUBLIC = 1;
  type MODIFIER_PROTECTED = 2;
  type MODIFIER_PRIVATE = 4;
  /**
   * Defines a function parameter
   */
  class Parameter extends Declaration {
    type: Identifier | null;
    value: Node | null;
    byref: boolean;
    variadic: boolean;
    readonly: boolean;
    nullable: boolean;
    attrGroups: AttrGroup[];
    flags: MODIFIER_PUBLIC | MODIFIER_PROTECTED | MODIFIER_PRIVATE;
  }
  /**
   * Defines a class reference node
   */
  class ParentReference extends Reference {}
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
  class Print extends Expression {}
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
    readonly: boolean;
    nullable: boolean;
    type: Identifier | Identifier[] | null;
    attrGroups: AttrGroup[];
  }
  /**
   * Lookup to an object property
   */
  class PropertyLookup extends Lookup {}
  /**
   * Declares a properties into the current scope
   */
  class PropertyStatement extends Statement {
    /**
     * Generic flags parser
     */
    parseFlags(flags: (number | null)[]): void;
    properties: Property[];
    visibility: string | null;
    isStatic: boolean;
  }
  /**
   * Defines a reference node
   */
  class Reference extends Node {}
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
  class SelfReference extends Reference {}
  /**
   * Avoids to show/log warnings & notices from the inner expression
   */
  class Silent extends Expression {
    expr: Expression;
  }
  /**
   * Any statement.
   */
  class Statement extends Node {}
  /**
   * Declares a static variable into the current scope
   */
  class Static extends Statement {
    variables: StaticVariable[];
  }
  /**
   * Lookup to a static property
   */
  class StaticLookup extends Lookup {}
  /**
   * Defines a class reference node
   */
  class StaticReference extends Reference {}
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
    value: string;
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
    always: Block;
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
   * A union of types
   */
  class UnionType extends Declaration {
    types: TypeReference[];
  }
  /**
   * Deletes references to a list of variables
   */
  class Unset extends Statement {}
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
    /**
     * Importing a constant
     */
    readonly TYPE_CONST: string;
    /**
     * Importing a function
     */
    readonly TYPE_FUNC: string;
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
   * Defines a variadic placeholder (the ellipsis in PHP 8.1+'s first-class callable syntax)
   */
  class VariadicPlaceholder extends Node {}
  /**
   * Defines a while statement
   */
  class While extends Statement {
    test: Expression;
    body: Block | null;
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
    tokenGetAll(buffer: string): (string | string[])[];
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
    popState(): string | any;
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
     * Create a position node from the lexers position
     */
    position(): Position;
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
     * Peek at the next token.
     * @returns Next Token
     */
    peek(): string | number;
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
  const enum TokenNames {
    T_HALT_COMPILER = 101,
    T_USE = 102,
    T_ENCAPSED_AND_WHITESPACE = 103,
    T_OBJECT_OPERATOR = 104,
    T_STRING = 105,
    T_DOLLAR_OPEN_CURLY_BRACES = 106,
    T_STRING_VARNAME = 107,
    T_CURLY_OPEN = 108,
    T_NUM_STRING = 109,
    T_ISSET = 110,
    T_EMPTY = 111,
    T_INCLUDE = 112,
    T_INCLUDE_ONCE = 113,
    T_EVAL = 114,
    T_REQUIRE = 115,
    T_REQUIRE_ONCE = 116,
    T_NAMESPACE = 117,
    T_NS_SEPARATOR = 118,
    T_AS = 119,
    T_IF = 120,
    T_ENDIF = 121,
    T_WHILE = 122,
    T_DO = 123,
    T_FOR = 124,
    T_SWITCH = 125,
    T_BREAK = 126,
    T_CONTINUE = 127,
    T_RETURN = 128,
    T_GLOBAL = 129,
    T_STATIC = 130,
    T_ECHO = 131,
    T_INLINE_HTML = 132,
    T_UNSET = 133,
    T_FOREACH = 134,
    T_DECLARE = 135,
    T_TRY = 136,
    T_THROW = 137,
    T_GOTO = 138,
    T_FINALLY = 139,
    T_CATCH = 140,
    T_ENDDECLARE = 141,
    T_LIST = 142,
    T_CLONE = 143,
    T_PLUS_EQUAL = 144,
    T_MINUS_EQUAL = 145,
    T_MUL_EQUAL = 146,
    T_DIV_EQUAL = 147,
    T_CONCAT_EQUAL = 148,
    T_MOD_EQUAL = 149,
    T_AND_EQUAL = 150,
    T_OR_EQUAL = 151,
    T_XOR_EQUAL = 152,
    T_SL_EQUAL = 153,
    T_SR_EQUAL = 154,
    T_INC = 155,
    T_DEC = 156,
    T_BOOLEAN_OR = 157,
    T_BOOLEAN_AND = 158,
    T_LOGICAL_OR = 159,
    T_LOGICAL_AND = 160,
    T_LOGICAL_XOR = 161,
    T_SL = 162,
    T_SR = 163,
    T_IS_IDENTICAL = 164,
    T_IS_NOT_IDENTICAL = 165,
    T_IS_EQUAL = 166,
    T_IS_NOT_EQUAL = 167,
    T_IS_SMALLER_OR_EQUAL = 168,
    T_IS_GREATER_OR_EQUAL = 169,
    T_INSTANCEOF = 170,
    T_INT_CAST = 171,
    T_DOUBLE_CAST = 172,
    T_STRING_CAST = 173,
    T_ARRAY_CAST = 174,
    T_OBJECT_CAST = 175,
    T_BOOL_CAST = 176,
    T_UNSET_CAST = 177,
    T_EXIT = 178,
    T_PRINT = 179,
    T_YIELD = 180,
    T_YIELD_FROM = 181,
    T_FUNCTION = 182,
    T_DOUBLE_ARROW = 183,
    T_DOUBLE_COLON = 184,
    T_ARRAY = 185,
    T_CALLABLE = 186,
    T_CLASS = 187,
    T_ABSTRACT = 188,
    T_TRAIT = 189,
    T_FINAL = 190,
    T_EXTENDS = 191,
    T_INTERFACE = 192,
    T_IMPLEMENTS = 193,
    T_VAR = 194,
    T_PUBLIC = 195,
    T_PROTECTED = 196,
    T_PRIVATE = 197,
    T_CONST = 198,
    T_NEW = 199,
    T_INSTEADOF = 200,
    T_ELSEIF = 201,
    T_ELSE = 202,
    T_ENDSWITCH = 203,
    T_CASE = 204,
    T_DEFAULT = 205,
    T_ENDFOR = 206,
    T_ENDFOREACH = 207,
    T_ENDWHILE = 208,
    T_CONSTANT_ENCAPSED_STRING = 209,
    T_LNUMBER = 210,
    T_DNUMBER = 211,
    T_LINE = 212,
    T_FILE = 213,
    T_DIR = 214,
    T_TRAIT_C = 215,
    T_METHOD_C = 216,
    T_FUNC_C = 217,
    T_NS_C = 218,
    T_START_HEREDOC = 219,
    T_END_HEREDOC = 220,
    T_CLASS_C = 221,
    T_VARIABLE = 222,
    T_OPEN_TAG = 223,
    T_OPEN_TAG_WITH_ECHO = 224,
    T_CLOSE_TAG = 225,
    T_WHITESPACE = 226,
    T_COMMENT = 227,
    T_DOC_COMMENT = 228,
    T_ELLIPSIS = 229,
    T_COALESCE = 230,
    T_POW = 231,
    T_POW_EQUAL = 232,
    T_SPACESHIP = 233,
    T_COALESCE_EQUAL = 234,
    T_FN = 235,
    T_NULLSAFE_OBJECT_OPERATOR = 236,
    T_MATCH = 237,
    T_ATTRIBUTE = 238,
    T_ENUM = 239,
    T_READ_ONLY = 240,
    T_NAME_RELATIVE = 241,
    T_NAME_QUALIFIED = 242,
    T_NAME_FULLY_QUALIFIED = 243,
  }
  /**
   * PHP AST Tokens
   */
  const tokens: {
    values: {
      [key: number]: string;
    };
    names: TokenNames;
  };
}
