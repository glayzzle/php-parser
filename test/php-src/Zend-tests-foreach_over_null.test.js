// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_over_null.phpt
  it("foreach over null", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    foreach (null as $v) {\n        echo \"Foo\\n\";\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
