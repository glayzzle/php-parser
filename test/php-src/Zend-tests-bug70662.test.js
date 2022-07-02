// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70662.phpt
  it("Bug #70662: Duplicate array key via undefined index error handler", function () {
    expect(parser.parseCode("<?php\n$a = [];\nset_error_handler(function() use(&$a) {\n    $a['b'] = 2;\n});\n$a['b'] += 1;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
