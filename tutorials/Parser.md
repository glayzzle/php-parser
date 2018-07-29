The PHP Parser class that build the AST tree from the lexer

Type: Parser

**Parameters**

* `lexer`
* `ast`

**Properties**

* `lexer` **Lexer** current lexer instance
* `ast` **AST** the AST factory instance
* `token` **(Integer | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** current token
* `extractDoc` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** should extract documentation as AST node
* `extractTokens` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** should extract each token
* `suppressErrors` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** should ignore parsing errors and continue
* `debug` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** should output debug informations

### getTokenName

helper : gets a token name

**Parameters**

* `token`

### parse

main entry point : converts a source code to AST

**Parameters**

* `code`
* `filename`

### raiseError

Raise an error

**Parameters**

* `message`
* `msgExpect`
* `expect`
* `token`

### error

handling errors

**Parameters**

* `expect`

### node

Creates a new AST node

**Parameters**

* `name`

### expectEndOfStatement

expects an end of statement or end of file

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

### expect

Force the parser to check the current token.

If the current token does not match to expected token,
the an error will be raised.

If the suppressError mode is activated, then the error will
be added to the program error stack and this function will return `false`.

**Parameters**

* `token` **([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))**

- Throws **any** Error

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

### text

Returns the current token contents

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

### next

consume the next token \*

### lex

Eating a token

### is

Check if token is of specified type

**Parameters**

* `type`

## ignoreStack

outputs some debug information on current token \*

## read_array

Parse an array

```ebnf
array ::= T_ARRAY '(' array_pair_list ')' |
  '[' array_pair_list ']'
```

## read_array_pair_list

Reads an array entry item

```ebnf
array_pair_list ::= '&' w_variable |
 (
   expr (
     T_DOUBLE_ARROW (
       expr | '&' w_variable
     )
   )?
 )
```

## read_dim_offset

```ebnf
 dim_offset ::= expr?
```

## read_class

reading a class

```ebnf
class ::= class_scope? T_CLASS T_STRING (T_EXTENDS NAMESPACE_NAME)? (T_IMPLEMENTS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' CLASS_BODY '}'
```

## read_class_scope

Read the class visibility

```ebnf
  class_scope ::= (T_FINAL | T_ABSTRACT)?
```

## read_class_body

Reads a class body

```ebnf
  class_body ::= (member_flags? (T_VAR | T_STRING | T_FUNCTION))*
```

## read_variable_list

Reads variable list

```ebnf
 variable_list ::= (variable_declaration ',')* variable_declaration
```

## read_constant_list

Reads constant list

```ebnf
 constant_list ::= T_CONST (constant_declaration ',')* constant_declaration
```

## read_member_flags

Read member flags

Returns **any** array
1st index : 0 => public, 1 => protected, 2 => private
2nd index : 0 => instance member, 1 => static member
3rd index : 0 => normal, 1 => abstract member, 2 => final member

## read_interface

reading an interface

```ebnf
interface ::= T_INTERFACE T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' INTERFACE_BODY '}'
```

## read_interface_body

Reads an interface body

```ebnf
  interface_body ::= (member_flags? (T_CONST | T_FUNCTION))*
```

## read_trait

reading a trait

```ebnf
trait ::= T_TRAIT T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' FUNCTION* '}'
```

## read_trait_use_statement

reading a use statement

```ebnf
trait_use_statement ::= namespace_name (',' namespace_name)* ('{' trait_use_alias '}')?
```

## read_trait_use_alias

Reading trait alias

```ebnf
trait_use_alias ::= namespace_name ( T_DOUBLE_COLON T_STRING )? (T_INSTEADOF namespace_name) | (T_AS member_flags? T_STRING)
```

name list : <https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L303>
trait adaptation : <https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L742>

## read_variable_declaration

Reads a variable declaration

```ebnf
 variable_declaration ::= T_VARIABLE '=' scalar
```

## read_constant_declaration

Reads a constant declaration

```ebnf
 constant_declaration ::= (T_STRING | IDENTIFIER) '=' expr
```

Returns **Constant** [:link:](AST.md#constant)

## read_comment

Comments with // or # or / _ ... _ /

## read_doc_comment

Comments with / \*_ ... _ /

## read_expr_item

```ebnf
Reads an expression
 expr ::= @todo
```

## read_new_expr

```ebnf
   new_expr ::= T_NEW (namespace_name function_argument_list) | (T_CLASS ... class declaration)
```

<https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L850>

## read_class_name_reference

Reads a class name

```ebnf
class_name_reference ::= namespace_name | variable
```

## read_assignment_list

```ebnf
  assignment_list ::= assignment_list_element (',' assignment_list_element?)*
```

## read_assignment_list_element

```ebnf
 assignment_list_element ::= expr | expr T_DOUBLE_ARROW expr
```

## is_reference

checks if current token is a reference keyword

## is_variadic

checks if current token is a variadic keyword

## read_function

reading a function

```ebnf
function ::= function_declaration code_block
```

## read_function_declaration

reads a function declaration (without his body)

```ebnf
function_declaration ::= T_FUNCTION '&'?  T_STRING '(' parameter_list ')'
```

## read_lexical_var

```ebnf
lexical_var ::= '&'? T_VARIABLE
```

## read_parameter_list

reads a list of parameters

```ebnf
 parameter_list ::= (parameter ',')* parameter?
```

## read_parameter

```ebnf
 parameter ::= type? '&'? T_ELLIPSIS? T_VARIABLE ('=' expr)?
```

## read_function_argument_list

Reads a list of arguments

```ebnf
 function_argument_list ::= '(' (argument_list (',' argument_list)*)? ')'
```

## read_argument_list

```ebnf
   argument_list ::= T_ELLIPSIS? expr
```

## read_type

read type hinting

```ebnf
 type ::= T_ARRAY | T_CALLABLE | namespace_name
```

## read_if

Reads an IF statement

```ebnf
 if ::= T_IF '(' expr ')' ':' ...
```

## read_if_expr

reads an if expression : '(' expr ')'

## read_elseif_short

reads an elseif (expr): statements

## read_else_short

## read_while

Reads a while statement

```ebnf
while ::= T_WHILE (statement | ':' inner_statement_list T_ENDWHILE ';')
```

Returns **While**

## read_do

Reads a do / while loop

```ebnf
do ::= T_DO statement T_WHILE '(' expr ')' ';'
```

Returns **Do**

## read_for

Read a for incremental loop

```ebnf
for ::= T_FOR '(' for_exprs ';' for_exprs ';' for_exprs ')' for_statement
for_statement ::= statement | ':' inner_statement_list T_ENDFOR ';'
for_exprs ::= expr? (',' expr)*
```

Returns **For**

## read_foreach

Reads a foreach loop

```ebnf
foreach ::= '(' expr T_AS foreach_variable (T_DOUBLE_ARROW foreach_variable)? ')' statement
```

Returns **Foreach**

## read_foreach_variable

Reads a foreach variable statement

```ebnf
foreach_variable = variable |
 T_LIST '(' assignment_list ')' |
 '[' array_pair_list ']'
```

Returns **Expression**

## read_start

```ebnf
start ::= (namespace | top_statement)*
```

## read_namespace

Reads a namespace declaration block

```ebnf
namespace ::= T_NAMESPACE namespace_name? '{'
   top_statements
'}'
| T_NAMESPACE namespace_name ';' top_statements
```

Returns **Namespace**

## read_namespace_name

Reads a namespace name

```ebnf
 namespace_name ::= T_NS_SEPARATOR? (T_STRING T_NS_SEPARATOR)* T_STRING
```

Returns **Identifier**

## read_use_statement

Reads a use statement

```ebnf
use_statement ::= T_USE
  use_type? use_declarations |
  use_type use_statement '{' use_declarations '}' |
  use_statement '{' use_declarations(=>typed) '}'
';'
```

Returns **UseGroup**

## read_use_declaration

Reads a use declaration

```ebnf
use_declaration ::= use_type? namespace_name use_alias
```

Returns **UseItem**

## read_use_declarations

Reads a list of use declarations

```ebnf
use_declarations ::= use_declaration (',' use_declaration)*
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;UseItem>**

## read_use_alias

Reads a use statement

```ebnf
use_alias ::= (T_AS T_STRING)?
```

Returns **([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | null)**

## read_use_type

Reads the namespace type declaration

```ebnf
use_type ::= (T_FUNCTION | T_CONST)?
```

Returns **([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | null)** Possible values : function, const

## resolve_special_chars

Unescape special chars

## read_scalar

```ebnf
 scalar ::= T_MAGIC_CONST
      | T_LNUMBER | T_DNUMBER
      | T_START_HEREDOC T_ENCAPSED_AND_WHITESPACE? T_END_HEREDOC
      | '"' encaps_list '"'
      | T_START_HEREDOC encaps_list T_END_HEREDOC
      | namespace_name (T_DOUBLE_COLON T_STRING)?
```

## read_dereferencable

Handles the dereferencing

## read_encapsed_string_item

Reads and extracts an encapsed item

```ebnf
encapsed_string_item ::= T_ENCAPSED_AND_WHITESPACE
 | T_DOLLAR_OPEN_CURLY_BRACES expr '}'
 | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '}'
 | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '[' expr ']' '}'
 | T_CURLY_OPEN variable '}'
 | variable
 | variable '[' expr ']'
 | variable T_OBJECT_OPERATOR T_STRING
```

Returns **([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable | Expr | Lookup)**

## read_encapsed_string

Reads an encapsed string

## get_magic_constant

Constant token

## read_top_statements

reading a list of top statements (helper for top_statement\*)

```ebnf
 top_statements ::= top_statement*
```

## read_top_statement

reading a top statement

```ebnf
 top_statement ::=
      namespace | function | class
      | interface | trait
      | use_statements | const_list
      | statement
```

## read_inner_statements

reads a list of simple inner statements (helper for inner_statement\*)

```ebnf
 inner_statements ::= inner_statement*
```

## read_const_list

Reads a list of constants declaration

```ebnf
  const_list ::= T_CONST T_STRING '=' expr (',' T_STRING '=' expr)* ';'
```

## read_declare_list

Reads a list of constants declaration

```ebnf
  declare_list ::= T_STRING '=' expr (',' T_STRING '=' expr)*
```

## read_inner_statement

reads a simple inner statement

```ebnf
 inner_statement ::= '{' inner_statements '}' | token
```

## read_statement

Reads statements

## read_code_block

```ebnf
 code_block ::= '{' (inner_statements | top_statements) '}'
```

## read_switch

Reads a switch statement

```ebnf
 switch ::= T_SWITCH '(' expr ')' switch_case_list
```

Returns **Switch**

## read_switch_case_list

```ebnf
 switch_case_list ::= '{' ';'? case_list* '}' | ':' ';'? case_list* T_ENDSWITCH ';'
```

## read_case_list

```ebnf
  case_list ::= ((T_CASE expr) | T_DEFAULT) (':' | ';') inner_statement*
```

## read_try

```ebnf
 try ::= T_TRY '{' inner_statement* '}'
         (
             T_CATCH '(' namespace_name variable ')' '{'  inner_statement* '}'
         )*
         (T_FINALLY '{' inner_statement* '}')?
```

Returns **Try**

## read_short_form

Reads a short form of tokens

**Parameters**

* `token` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The ending token

Returns **Block**

## read_list

Helper : reads a list of tokens / sample : T_STRING ',' T_STRING ...

```ebnf
list ::= separator? ( item separator )* item
```

## read_name_list

Reads a list of names separated by a comma

```ebnf
name_list ::= namespace (',' namespace)*
```

Sample code :

```php
<?php class foo extends bar, baz { }
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Identifier>**

## read_variable_declarations

Reads a list of variables declarations

```ebnf
variable_declaration ::= T_VARIABLE ('=' expr)?*
variable_declarations ::= variable_declaration (',' variable_declaration)*
```

Sample code :

```php
<?php class foo extends bar, baz { }
```

Returns **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Variable> | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Assign>)** Returns an array composed by a list of variables, or
assign values

## read_variable

Reads a variable

```ebnf
  variable ::= &? ...complex @todo
```

Some samples of parsed code :

```php
 &$var                      // simple var
 $var                      // simple var
 classname::CONST_NAME     // dynamic class name with const retrieval
 foo()                     // function call
 $var->func()->property    // chained calls
```

## read_encaps_var_offset

<https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1231>

## read_reference_variable

```ebnf
 reference_variable ::=  simple_variable ('[' OFFSET ']')* | '{' EXPR '}'
```

<code>
 $foo[123];      // foo is an array ==> gets its entry
 $foo{1};        // foo is a string ==> get the 2nd char offset
 ${'foo'}[123];  // get the dynamic var $foo
 $foo[123]{1};   // gets the 2nd char from the 123 array entry
</code>

## read_simple_variable

```ebnf
 simple_variable ::= T_VARIABLE | '$' '{' expr '}' | '$' simple_variable
```
