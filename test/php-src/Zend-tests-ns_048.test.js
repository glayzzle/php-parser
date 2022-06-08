// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_048.phpt
  it("048: __NAMESPACE__ constant and runtime names (ns name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nconst FOO = 0;\nvar_dump(constant(__NAMESPACE__ . \"\\\\FOO\"));\n?>")).toMatchSnapshot();
  });
});
