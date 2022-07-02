// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_unset_globals.phpt
  it("traverse an array and use its keys to unset GLOBALS", function () {
    expect(parser.parseCode("<?php\n$arr = array(\"a\" => 1, \"b\" => 2);\nforeach ($arr as $key => $val) {\n    unset($GLOBALS[$key]);\n}\nvar_dump($arr);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
