// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_004.phpt
  it("Try finally (without catch/finally block)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n   try {\n        echo \"3\";\n   }\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
