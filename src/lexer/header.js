// DEFINE LONG SIZE
if (process.arch == 'x64') {
  var SIZEOF_LONG = 8;
  var MAX_LENGTH_OF_LONG = 20;
  var long_min_digits = "9223372036854775808";
} else {
  var SIZEOF_LONG = 4;
  var MAX_LENGTH_OF_LONG = 11;
  var long_min_digits = "2147483648";
}

// check if is a 
var IS_LABEL_START = function(c) {
  return (
    c >= 'a' && c <= 'z'
  ) || (
    c >= 'A' && c <= 'Z'
  ) || (
    c == '_' || c >= 0x7F
  );
};

// escapes chars
var scan_escape_string = function(str) {
  return str;
};

// consume the specified length on the lexer
var consume = function(lexer, size) {
  if (size < 1) return false;
  var ch, i;
  // counting lines
  for(i = 0; i < size; i++) {
    ch = lexer._input[i];
    if (ch == '\n' || ch == '\r') {
      lexer.yylineno++;
      lexer.yylloc.last_line++;
      lexer.yylloc.last_column = 0;
      if (ch == '\r' && lexer._input[++i] == '\n') continue; // windows style
    } else {
      lexer.yylloc.last_column++;
    }
  }
  // update offsets
  if (lexer.options.ranges) lexer.yylloc.range[1] += size;
  lexer.yyleng += size;
  lexer.offset += size;
  // update texts
  ch = lexer._input.substring(0, size);
  lexer.yytext += ch;
  lexer.match += ch;
  lexer.matched += ch;
  lexer._input = lexer._input.slice(size);
  return ch;
};
