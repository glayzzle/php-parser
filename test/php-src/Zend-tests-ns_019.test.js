// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_019.phpt
  it("019: __NAMESPACE__ constant and runtime names (php name)", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    return __FUNCTION__;\n}\n$x = __NAMESPACE__ . \"\\\\foo\";\necho $x(),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
