// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_003.phpt
  it("Try finally (call sequence test)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n   try {\n      echo \"1\";\n      try {\n        echo \"2\";\n        throw new Exception(\"ex\");\n      } finally {\n        echo \"3\";\n      }\n   } finally {\n      echo \"4\";\n   }\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
