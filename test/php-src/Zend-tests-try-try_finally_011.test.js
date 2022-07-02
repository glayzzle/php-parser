// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_011.phpt
  it("Try finally (segfault with empty break)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n    try {\n        break;\n    } finally {\n    }\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
