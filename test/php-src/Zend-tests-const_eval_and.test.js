// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/const_eval_and.phpt
  it("Incorrect constant evaluation of and/or (OSS-Fuzz #19255)", function () {
    expect(parser.parseCode("<?php\nconst C = 0 && __namespace__;\nvar_dump(C);\n?>")).toMatchSnapshot();
  });
});
