// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug75698.phpt
  it("Bug #75698: Using @ crashes php7.2-fpm", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n  $a = array(\"a\",\"b\",\"c\",\"b\");\n  $b = array();\n  foreach ($a as $c)\n    @$b[$c]++; // the @ is required to crash PHP 7.2.0\n  var_dump($b);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
