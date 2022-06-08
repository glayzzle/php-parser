// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug51866.phpt
  it("Bug #51866 (Lenient parsing with parseFromFormat)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$tests = array(\n    array( 'Y-m-d',   '2001-11-29 13:20:01' ),\n    array( 'Y-m-d+',  '2001-11-29 13:20:01' ),\n    array( 'Y-m-d +', '2001-11-29 13:20:01' ),\n    array( 'Y-m-d+',  '2001-11-29' ),\n    array( 'Y-m-d +', '2001-11-29' ),\n    array( 'Y-m-d +', '2001-11-29 ' ),\n);\nforeach( $tests as $test )\n{\n    list($format, $str) = $test;\n    var_dump($format, $str);\n    $d = DateTime::createFromFormat($format, $str);\n    var_dump($d);\n    var_dump(DateTime::getLastErrors());\n    echo \"\\n\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
