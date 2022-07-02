// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_018.phpt
  it("018: __NAMESPACE__ constant and runtime names (ns name)", function () {
    expect(parser.parseCode("<?php\nnamespace test;\nfunction foo() {\n    return __FUNCTION__;\n}\n$x = __NAMESPACE__ . \"\\\\foo\";\necho $x(),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
