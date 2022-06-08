// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_search_xxx.phpt
  it("mb_ereg_search() stuff", function () {
    expect(parser.parseCode("<?php\n    mb_regex_set_options( '' );\n    $encs = array( 'EUC-JP', 'Shift_JIS', 'SJIS', 'UTF-8' );\n    function test_search( $test_enc, $str, $look_for, $opt, $in_enc = 'EUC-JP' ) {\n        mb_regex_encoding( $test_enc );\n        $str = mb_convert_encoding( $str, $test_enc, $in_enc );\n        $look_for = mb_convert_encoding( $look_for, $test_enc, $in_enc );\n        mb_ereg_search_init( $str, $look_for, $opt );\n        while ( mb_ereg_search_pos() ) {\n            $regs = mb_ereg_search_getregs();\n            array_shift( $regs );\n            printf( \"(%s) (%d) %s\\n\", $test_enc, mb_ereg_search_getpos(), mb_convert_encoding( ( is_array( $regs ) ? implode( '-', $regs ): '' ), $in_enc, $test_enc ) );\n        }\n    }\n    function do_tests( $enc, $opt ) {\n        test_search( $enc, \"�ϡ� ����\\n\", ' (��?�ϡ�?)[[:space:]]', $opt );\n        test_search( $enc, 'abcde abdeabcf anvfabc odu abcd ', '(ab[a-z]+)', $opt );\n    }\n    foreach( $encs as $enc ) {\n        do_tests( $enc, '' );\n        do_tests( $enc, 'x' );\n    }\n?>")).toMatchSnapshot();
  });
});
