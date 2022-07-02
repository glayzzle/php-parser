// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug22836.phpt
  it("Bug #22836 (returning references to NULL)", function () {
    expect(parser.parseCode("<?php\nfunction &f()\n{\n    $x = \"foo\";\n    var_dump($x);\n    print \"'$x'\\n\";\n    return ($a);\n}\nfor ($i = 0; $i < 8; $i++) {\n    $h =& f();\n}\n?>")).toMatchSnapshot();
  });
});
