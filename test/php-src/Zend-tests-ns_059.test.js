// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_059.phpt
  it("059: Constant arrays", function () {
    expect(parser.parseCode("<?php\nconst C = array();\nvar_dump(C);\n?>")).toMatchSnapshot();
  });
});
