// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68118.phpt
  it("Bug #68118: $a->foo .= 'test'; can leave $a->foo undefined", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function() {\n    $obj = new stdClass;\n    $obj->test = 'meow';\n    return true;\n});\n$a = new stdClass;\n$a->undefined .= 'test';\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
