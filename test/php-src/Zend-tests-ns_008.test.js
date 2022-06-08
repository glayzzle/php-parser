// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_008.phpt
  it("008: __NAMESPACE__ constant and runtime names (ns name)", function () {
    expect(parser.parseCode("<?php\nnamespace test;\nclass foo {\n}\n$x = __NAMESPACE__ . \"\\\\foo\";\necho get_class(new $x),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
