# Releases

## 3.0.0-prerelease.9 : (2019-08-15)
- #291 : Incorrect parsing of backslash-prefixed use declarations
- #278 : 3.0 - Confusing commentsBlocks references
- #256 : invalid ast for multiple properties 
- #255 : better ast for `constant` node 
- #250 : Leading comments are treated as trailing comments to the previous function body
- #248 : broken ast for `$$$$$`
- #247 : invalid ast for `silent`
- #246 : `resolution` for `classreference` doesn't work properly for `FULL_QUALIFIED_NAME` 
- #242 : feat: improve `Declare` node and introduce `DeclareDirective` node 
- #199 : [bug] comment location overlaps with node location for `static` node
- #192 : [bug] encapsed and staticlookup
- #180 : bug in parser with single function
- #174 : Don't output `null` for last element in `list/array` 
- #128 : Don't have curly for propertylookup in offset 

## 3.0.0-prerelease.8 : (2019-01-07)
 - #243 : Regression in prerelease 7 with echo
 - #239 : [bug] call should be in ExpressionStatement
 - #235 : invalid ast for `self` and `parent`
 - #234 : regression with parens in `3.0.0-prerelease.7`
 - #230 : `resolvePrecedence` break location for `bin` nodes
 - #207 : [feature] use `identifier` for `class/interface/trait` name 
 - #202 : [bug] comment position in lookup
 - #194 : [feature] implement trailingComments on nodes 
 - #185 : [bug] parens and staticlookup
 - #182 : strange with parens, staticlookup and offsetlookup
 - #181 : strange with parens and unary
 - #172 : cast precedence
 - #167 : staticlookup is broken with curly

## 3.0.0-prerelease.7 : (2018-11-10)
 - #220 : regression in `rc-6`
 - #210 : [bug] invalid ast for `const` enhancement
 - #204 : [bug] invalid start offset encapsed AST bug
 - #201 : [bug] curly in staticlookup bug
 - #175 : impossible detect curly in `encapsed` AST enhancement
 - #165 : declare doesn't support inline nodes investigating

Many thanks to @evilebottnawi for his help

## 3.0.0-prerelease.6 : (2018-10-21)
 - impl #196 : identifier for function/method name
 - fix #183 : `static` parsed as constref
 - fix #188 : `constref` vs `identifier`
 - fix #113 : Unhandled native identifiers

## 3.0.0-alpha3 : (2018-08-15)
 - fix #168 : End location of `if` without semicolon
 - impl #147 : Node informations about Binary and unicode strings
 - impl #83 : Adding full support for PHP 7.2
 - fix #122 : Detect foreach bad syntax
 - impl #152 : Improve tests with JEST
 - fix #164 : Fixing some location issues (partial)

## 3.0.0-alpha2 : (2018-04-14)
 - fix #137 : Bug with parsing `list`
 - fix #149 : Binary cast: isDoubleQuote incorrect
 - fix #150 : strange ast with list
 - fix #151 : Declare inside if

## 3.0.0-alpha1 : (2018-04-11)
 - https://github.com/glayzzle/php-parser/milestone/10
 - many fixes
 - changed the way comments are handled
 - add a new `raw` property on some nodes

## 2.2.0 : (2017-12-27)
- Impl #108 : add an option to disable PHP7 support
- Fix #107 : fix T_DOUBLE_COLON handler
- Fix #106 : infinite loops from lexer (unput)
- Fix #105 : T_DOLLAR_OPEN_CURLY_BRACES handles now expressions
- PR #102 : Normalize the way type casts are defined
- Fix #103 : Fix critical cast to null confusion

## 2.1.0 : (2017-11-01)
- Impl #91 & #92 : Functions support reserved names (PHP7)
- Fix #89 : parsing methods can use Buffers or Strings

## 2.0.7 : (2017-09-03)
- Fix #86 : bug on Object properties usage in PHP like `__proto__`, or `constructor`
- Fix #84 : remove null statements from bodies

## 2.0.6 : (2017-07-16)

- Fix precedence between bin, retif, unary
- Fix precedence with assign

## 2.0.4 : (2017-07-09)

- Fix AST errors on suppressErrors
- Add curly boolean on variable node (for `${bar}` syntax)
- Implement the static closure flag, ex: `$c = static function() {};`

## 2.0.0 : (2017-03-04)

- Update AST for operators, unify bin/bool/coalesce nodes
- Fix nested block usage on function bodies
- Avoid initial $ on variables
- Shell nodes are now exposed by encapsed nodes only
- Typescript definition file
- Avoid identifier nodes on namespaces & use statements
- Fix precedence on bin, unary, retif nodes
- Fix ending position on functions/methods/closures
- Fix lexer unput at the end of the file (infinite loops)
- Add encapsed node (type=offset) on dynamic offsets
- Implement annonymous class arguments
- Fix missing first char on encapsed T_STRING_VARNAME

## 1.0.0 : (2017-01-03)

- All nodes are now converted to objects
- Bruteforce tests are in a separate project
- Improved tests with mocha
- Many syntax fixes
- Tests over a silent error mode
- Release of a complete AST documentation

## 0.1.5 : (2016-12-27)

> The 0.1.x version starts to be deprecated

- Fix closure use token
- Improve silent errors handler
- Pass PHP7 tests
- Update class, traits, interface declarations
- Many syntax fixes

## 0.1.4 : (2016-12-12)

- Move from static instances to instanciated objects in order to fully handle
promises
- Fix the silentLexer
- Fix the debug output mode
- Add positions on `expr->set`

## Older releases

* 0.1.3  : add comments nodes, add a browser version and improved parser stability
* 0.1.0  : major release, rewriting of the lexer and many bug fixes
* 0.0.10 : bugfixes and php7 implementation
* 0.0.9  : const (value as expr) bugfix
* 0.0.8  : all tokens are passed on ZF2 (many fixes)
* 0.0.7  : isset, unset, try, catch, finally, fix T_STATIC, fix T_NEW with a dynamic var name, improve tests
* 0.0.6  : Improve tests, implements arrays & new statements
* 0.0.5  : Implement traits
