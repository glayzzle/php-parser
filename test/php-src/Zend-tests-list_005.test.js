// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_005.phpt
  it("Testing list() with several variables", function () {
    expect(parser.parseCode("<?php\n$str = \"foo\";\nlist($a, $b, $c) = $str;\nvar_dump($a, $b, $c);\nprint \"----\\n\";\n$int = 1;\nlist($a, $b, $c) = $int;\nvar_dump($a, $b, $c);\nprint \"----\\n\";\n$obj = new stdClass;\nlist($a, $b, $c) = $obj;\nvar_dump($a, $b, $c);\nprint \"----\\n\";\n$arr = array(1, 2, 3);\nlist($a, $b, $c) = $arr;\nvar_dump($a, $b, $c);\n?>")).toMatchSnapshot();
  });
});
