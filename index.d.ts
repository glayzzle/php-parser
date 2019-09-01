/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

declare module "php-parser" {
  /**
   * Token items
   */
  const enum TokenEnum {
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
    T_COALESCE_EQUAL = 234
  }

  /**
   * The tokens dictionnary
   */
  interface TokenDefinition {
    /** List of token names as texts */
    values: String[],
    /** Define tokens */
    names: TokenEnum[]
  }

  /**
   * The token structure
   */
  interface Token extends Array<any> {
    // token name
    0: String;
    // the token value
    1: TokenEnum;
    // the current line
    2: Number
  }

  /**
   * Each Position object consists of a line number (1-indexed) and a column number (0-indexed):
   */
  interface Position {
    line: Number;
    column: Number;
    offset: Number;
  }

  /**
   * Defines the location of the node (with it's source contents as string)
   */
  interface Location {
    source: string;
    start: Position;
    end: Position;
  }

  /**
   *
   */
  interface Node {
    kind: String;
    loc: Location;
  }

  /**
   * Error node
   */
  interface ParserError extends Node {
    message: String;
    token: Token;
    line: Number;
    expected: any;
  }

  /**
   * A block statement, i.e., a sequence of statements surrounded by braces.
   */
  interface Block extends Node {
    children: Node[];
  }

  /**
   * The main root node
   */
  interface Program extends Block {
    errors: ParserError[];
  }

  interface Parser {
    lexer: Lexer;
    ast: AST;
    token: TokenEnum;
    prev: TokenEnum;
    debug: Boolean;
    extractDoc: Boolean;
    suppressErrors: Boolean;
    getTokenName(token:TokenEnum): String;
    parse(code: String, filename: String): Program;
    raiseError(message: String, msgExpect: String, expect: any, token: TokenEnum): ParserError;
    error(expect: String): ParserError;
    node(kind:String): Node;
    expectEndOfStatement(): Boolean;
    showlog(): Parser;
    expect(token:TokenEnum): Boolean;
    expect(tokens:TokenEnum[]): Boolean;
    text(): String;
    next(): Parser;
    ignoreComments(): Parser;
    nextWithComments(): Parser;
    is(type: String): Boolean;
    // @todo other parsing functions ...
  }

  interface KeywordsDictionnary {
    [index: string]: TokenEnum
  }

  interface  yylloc {
    first_offset: Number;
    first_line: Number;
    first_column: Number;
    last_line: Number;
    last_column: Number;
  }

  interface LexerState {
    yytext: String;
    offset: Number;
    yylineno: Number;
    yyprevcol: Number;
    yylloc: yylloc;
  }

  interface Lexer {
    debug: Boolean;
    all_tokens: Boolean;
    comment_tokens: Boolean;
    mode_eval: Boolean;
    asp_tags: Boolean;
    short_tags: Boolean;
    keywords: KeywordsDictionnary;
    castKeywords: KeywordsDictionnary;
    setInput(input:String): Lexer;
    input(size:Number): String;
    unput(size:Number): Lexer;
    tryMatch(match:String): Boolean;
    tryMatchCaseless(match:String): Boolean;
    ahead(size:Number): String;
    consume(size:Number): Lexer;
    getState(): LexerState;
    setState(state:LexerState): Lexer;
    appendToken(value:TokenEnum, ahead:Number): Lexer;
    lex(): TokenEnum;
    begin(state:String): Lexer;
    popState(): String;
    next(): TokenEnum;
    // @todo other lexer functions ...
  }


  interface AST {
    /**
     *
     */
    withPositions: Boolean;
    /**
     * Option, if true extracts original source code attached to the node (by default false)
     */
    withSource: Boolean;
    /**
     * Constructor
     */
    constructor(withPositions:Boolean, withSource:Boolean): AST;
    constructor(withPositions:Boolean): AST;
    constructor(): AST;
    /**
     * Create a position node from specified parser
     * including it's lexer current state
     */
    position(parser:Parser): Position;
    /**
     * Prepares an AST node
     */
    prepare(kind:String, parser:Parser): Function;
  }

  /**
   * List of options / extensions
   */
  interface Options {
    ast?: {
        withPositions?: Boolean;
        withSource?: Boolean;
    };
    lexer?: {
        debug?: Boolean;
        all_tokens?: Boolean;
        comment_tokens?: Boolean;
        mode_eval?: Boolean;
        asp_tags?: Boolean;
        short_tags?: Boolean;
    };
    parser?: {
        debug?: Boolean;
        extractDoc?: Boolean;
        suppressErrors?: Boolean;
    };
  }

  /**
   * Initialise a new parser instance with the specified options
   */
  export default class Engine {
    // ----- STATIC HELPERS
    static create(options?: Options) : Engine;
    static parseEval(buffer: String, options: Options)  : Program;
    static parseEval(buffer: String) : Program;
    static parseCode(buffer: String, filename: String, options: Options) : Program;
    static parseCode(buffer: String, options: Options) : Program;
    static parseCode(buffer: String) : Program;
    static tokenGetAll(buffer: String, options: Options) : Token[];
    static tokenGetAll(buffer: String) : Token[];
    // ----- INSTANCE FUNCTIONS
    ast: AST;
    lexer: Lexer;
    parser: Parser;
    tokens: TokenDefinition;
    constructor(options?: Options);
    parseEval(buffer: String) : Program;
    parseCode(buffer: String, filename: String) : Program;
    parseCode(buffer: String) : Program;
    tokenGetAll(buffer: String) : Token[];
  }
}
