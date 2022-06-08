// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_005.phpt
  it("Try finally (with long goto)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n   try {\n   } finally {\n      goto label;\n   }\nlabel:\n   return 1;\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
