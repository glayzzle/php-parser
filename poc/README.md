The idea is to batch the update of the parser by syncing with php source.

# Goals / Requisites :

1. Avoid updating by hand lexer or grammar
2. Avoid forking PHP files (just keep them in sync)
3. Having exactly the same behavior (precedence, expression parsing, error messages)
4. Have a decent parsing speed

## PHP Parser from nikic 

First approach was to use the repository https://github.com/nikic/PHP-Parser/tree/master/grammar

It will fail as it depends on php tokenizer launched from the php runtime, and it's too specific to the php runtime plateform.

## PHP src files

Second approch (in progress) is to :

- [x] Download grammar from PHP src
- [ ] Automate C specific code
- [ ] Inject javascript code
- [ ] Generate lexer & grammar files
- [ ] Generate files with JISON

Lexer Problems :
1. Stripping bison not supported tags - should be fine, but needs maintenance on future upgrades (breaks 1 pre-requisite)
2. Stripping C code - can be done but demands reimplementation (break 3 pre-requisite)

Grammar Problems :
@todo