// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_038.phpt
  it("038: Name ambiguity (namespace name or internal class name)", function () {
    expect(parser.parseCode("<?php\nnamespace Exception;\nfunction foo() {\n  echo \"ok\\n\";\n}\n\\Exception\\foo();\n\\Exception::bar();\n?>")).toMatchSnapshot();
  });
});
