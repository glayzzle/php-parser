// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg.phpt
  it("mb_ereg()", function () {
    expect(parser.parseCode("<?php\n    mb_regex_set_options( '' );\n    $encs = array( 'EUC-JP', 'Shift_JIS', 'SJIS', 'UTF-8' );\n    function test_ereg( $test_enc, $pat, $str, $in_enc = 'EUC-JP' ) {\n        mb_regex_encoding( $test_enc );\n        $pat = mb_convert_encoding( $pat, $test_enc, $in_enc );\n        $str = mb_convert_encoding( $str, $test_enc, $in_enc );\n        printf( \"(%d)%s\\n\", mb_ereg( $pat, $str, $reg ), ( is_array( $reg )? bin2hex(mb_convert_encoding( implode( ' ', $reg ), $in_enc, $test_enc )) : '' ) );\n    }\n    function do_tests( $enc ) {\n        test_ereg( $enc, 'abc ([a-z]+) ([a-z]+) ([a-z]+)$', \"abc def ghi jkl\" );\n        $pat = '([��-��]+) ([ ��-��]+)([��-��]+) ([��-��]+)$';\n        test_ereg( $enc, $pat, '���� ������ ������ ����' );\n        test_ereg( $enc, $pat, '��������� ������ ���� ���' );\n    }\n    foreach( $encs as $enc ) {\n        do_tests( $enc );\n    }\n?>")).toMatchSnapshot();
  });
});
