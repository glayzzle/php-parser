// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mbregex_stack_limit2.phpt
  it("Test oniguruma stack limit", function () {
    expect(parser.parseCode("<?php\nfunction mb_trim( $string, $chars = \"\", $chars_array = array() )\n{\n    for( $x=0; $x<iconv_strlen( $chars ); $x++ ) $chars_array[] = preg_quote( iconv_substr( $chars, $x, 1 ) );\n    $encoded_char_list = implode( \"|\", array_merge( array( \"\\s\",\"\\t\",\"\\n\",\"\\r\", \"\\0\", \"\\x0B\" ), $chars_array ) );\n    $string = mb_ereg_replace( \"^($encoded_char_list)*\", \"\", $string );\n    $string = mb_ereg_replace( \"($encoded_char_list)*$\", \"\", $string );\n    return $string;\n}\nini_set('mbstring.regex_stack_limit', 10000);\nvar_dump(mb_trim(str_repeat(' ', 10000)));\necho 'OK';\n?>")).toMatchSnapshot();
  });
});
