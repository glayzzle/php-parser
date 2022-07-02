// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_001.phpt
  it("Try finally (basic test)", function () {
    expect(parser.parseCode("<?php\nfunction foo ($a) {\n   try {\n     throw new Exception(\"ex\");\n   } finally {\n     var_dump($a);\n   }\n}\nfoo(\"finally\");\n?>")).toMatchSnapshot();
  });
});
