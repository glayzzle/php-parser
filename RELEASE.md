# Releases

## 2.1.0 : pending

- Fix AST errors on suppressErrors

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
