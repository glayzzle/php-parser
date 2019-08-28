The idea is to batch the update of the parser by syncing with php source.

# Goals / Requisites :

- Avoid updating by hand lexer or grammar
- Avoid forking PHP files (just keep them in sync)
- Having exactly the same behavior (precedence, expression parsing, error messages)
- Have a decent parsing speed

## PHP Parser from nikic 

First approach was to use the repository https://github.com/nikic/PHP-Parser/tree/master/grammar

It will fail as it depends on php tokenizer launched from the php runtime, and it's too specific to the php runtime plateform.

## PHP src files

Second approch (in progress) is to :

- [ ] Download grammar from PHP src
- [ ] Automate C specific code
- [ ] Inject javascript code
- [ ] Generate lexer & grammar files
- [ ] Generate files with JISON
