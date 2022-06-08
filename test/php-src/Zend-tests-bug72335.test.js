// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72335.phpt
  it("Misoptimize due to type narrowing", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $b = false;\n    $x = (1<<53)+1;\n    do {\n        $x = 1.0 * ($x - (1<<53));\n    } while ($b);\n    return $x;\n}\nvar_dump(test());\n?>")).toMatchSnapshot();
  });
});
