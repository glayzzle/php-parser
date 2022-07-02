// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug27457.phpt
  it("Bug #27457 (Problem with strtr() and translation array)", function () {
    expect(parser.parseCode("<?php\n    $test = \"Dot in brackets [.]\\n\";\n    echo $test;\n    $test = strtr($test, array('.' => '0'));\n    echo $test;\n    $test = strtr($test, array('0' => '.'));\n    echo $test;\n    $test = strtr($test, '.', '0');\n    echo $test;\n    $test = strtr($test, '0', '.');\n    echo $test;\n?>")).toMatchSnapshot();
  });
});
