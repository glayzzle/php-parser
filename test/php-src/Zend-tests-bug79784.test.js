// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79784.phpt
  it("Bug #79784: Use after free if changing array during undef var during array write fetch", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function () {\n    $GLOBALS['a'] = null;\n});\n$a[$c] = 'x' ;\nvar_dump($a);\n$a[$c] .= 'x' ;\nvar_dump($a);\n$a[$c][$c] = 'x' ;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
