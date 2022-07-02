// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_022.phpt
  it("022: Name search priority (first look into import, then into current namespace and then for class)", function () {
    expect(parser.parseCode("<?php\nnamespace a\\b\\c;\nuse a\\b\\c as test;\nrequire \"ns_022.inc\";\nfunction foo() {\n    echo __FUNCTION__,\"\\n\";\n}\ntest\\foo();\n\\test::foo();\n?>")).toMatchSnapshot();
  });
});
