// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/incdec_undef.phpt
  it("Inc/dec undef var with error handler", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($_, $m) {\n    echo \"$m\\n\";\n    unset($GLOBALS['x']);\n});\nvar_dump($x--);\nunset($x);\nvar_dump($x++);\nunset($x);\nvar_dump(--$x);\nunset($x);\nvar_dump(++$x);\n?>")).toMatchSnapshot();
  });
});
