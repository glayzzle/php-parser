// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/bitwiseShiftRight_variationStr2.phpt
  it("Test >> operator : numbers as strings, simple", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ERROR);\nvar_dump(\"12\" >> \"0\");\nvar_dump(\"34\" >> \"1\");\nvar_dump(\"56\" >> \"2\");\n?>")).toMatchSnapshot();
  });
});
