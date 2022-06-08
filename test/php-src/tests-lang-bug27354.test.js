// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug27354.phpt
  it("Bug #27354 (Modulus operator crashes PHP)", function () {
    expect(parser.parseCode("<?php\nvar_dump(-2147483647 % -1);\nvar_dump(-9_223_372_036_860_776_000 % -1); // Min value for 64bit int -1\nvar_dump(-2147483648 % -1);\nvar_dump(-2147483648 % -2);\n?>")).toMatchSnapshot();
  });
});
