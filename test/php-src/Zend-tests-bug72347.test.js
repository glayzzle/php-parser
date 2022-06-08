// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72347.phpt
  it("Bug #72347 (VERIFY_RETURN type casts visible in finally)", function () {
    expect(parser.parseCode("<?php\nfunction test() : int {\n    $d = 1.5;\n    try {\n        return $d;\n    } finally {\n        var_dump($d);\n    }\n}\nvar_dump(test());\n?>")).toMatchSnapshot();
  });
});
