// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_split.phpt
  it("mb_split()", function () {
    expect(parser.parseCode("<?php\n    mb_regex_set_options( '' );\n    mb_regex_encoding( 'EUC-JP' );\n    function verify_split( $spliton, $str, $count = 0 )\n    {\n        $result1 = mb_split( $spliton, $str, $count );\n        $result2 = preg_split( \"/$spliton/\", $str, $count );\n        if ( $result1 == $result2 ) {\n            print \"ok\\n\";\n        } else {\n            print count($result1).'-'.count($result2).\"\\n\";\n        }\n    }\n    var_dump( mb_split( \" \", \"a b c d e f g\" )\n              == mb_split( \"[[:space:]]\", \"a\\nb\\tc\\nd e f g\" ) );\n    for ( $i = 1; $i < 5; ++$i ) {\n        verify_split( \" \", \"a\\tb\\tc\\td   e\\tf g\", $i );\n    }\n    for ( $i = 1; $i < 5; ++$i ) {\n        verify_split( \"\\xa1\\xa1+\", \"\\xa1\\xa1\\xa1\\xa2\\xa2\\xa1\\xa1\\xa1\\xa1\\xa1\\xa1\\xa2\\xa2\\xa1\\xa1\\xa1\", $i );\n    }\n?>")).toMatchSnapshot();
  });
});
