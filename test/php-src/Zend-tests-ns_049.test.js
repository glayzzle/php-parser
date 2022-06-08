// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_049.phpt
  it("049: __NAMESPACE__ constant and runtime names (php name)", function () {
    expect(parser.parseCode("<?php\nconst FOO = 0;\nvar_dump(constant(__NAMESPACE__ . \"\\\\FOO\"));\n?>")).toMatchSnapshot();
  });
});
