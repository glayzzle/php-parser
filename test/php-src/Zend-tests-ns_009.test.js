// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_009.phpt
  it("009: __NAMESPACE__ constant and runtime names (php name)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n}\n$x = __NAMESPACE__ . \"\\\\foo\";\necho get_class(new $x),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
