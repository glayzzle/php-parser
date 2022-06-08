// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72215_3.phpt
  it("Bug #72215.3 (Wrong return value if var modified in finally)", function () {
    expect(parser.parseCode("<?php\nfunction &test() {\n    try {\n        return $a;\n    } finally {\n        $a = 2;\n    }\n}\nvar_dump(test());\n?>")).toMatchSnapshot();
  });
});
