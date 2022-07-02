// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33116.phpt
  it("Bug #33116 (crash when assigning class name to global variable in autoloader)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class) {\n  $GLOBALS['include'][] = $class;\n  eval(\"class DefClass{}\");\n});\n$a = new DefClass;\nprint_r($a);\nprint_r($GLOBALS['include']);\n?>")).toMatchSnapshot();
  });
});
