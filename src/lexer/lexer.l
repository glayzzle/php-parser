/* lexical grammar, rewrite from zend_language_scanner.l (PHP 5.5) */

LNUM                [0-9]+
DNUM                ([0-9]*"."[0-9]+)|([0-9]+"."[0-9]*)
EXPONENT_DNUM       (({LNUM}|{DNUM})[eE][+-]?{LNUM})
HNUM                "0x"[0-9a-fA-F]+
BNUM                "0b"[01]+
LABEL               [a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*
WHITESPACE          [ \n\r\t]+
TABS_AND_SPACES     [ \t]*
TOKENS              [;:,.\[\]()|^&+-\/*=%!~$<>?@]
ANY_CHAR            [^]
NEWLINE             (\r\n|\n|\r)

%x ST_IN_SCRIPTING
%x ST_VAR_OFFSET
%x ST_VAR_OFFSET
%x ST_LOOKING_FOR_PROPERTY
%x ST_DOUBLE_QUOTES
%x ST_BACKQUOTE
%x ST_HEREDOC
%x ST_END_HEREDOC
%x ST_NOWDOC
%x ST_LOOKING_FOR_VARNAME

%options case-insensitive

%%

@import 'lexer/initial.l'
@import 'lexer/php_strings.l'
@import 'lexer/php_main.l'
@import 'lexer/php_constants.l'
@import 'lexer/php_mixed.l'
@import 'lexer/php_numbers.l'
@import 'lexer/php_comments.l'

<ST_IN_SCRIPTING>{TOKENS} {
	return yytext;
}

<ST_IN_SCRIPTING,ST_VAR_OFFSET>{ANY_CHAR} {
  this.reject();
}
