// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/password_default.phpt
  it("Test that the value of PASSWORD_DEFAULT matches PASSWORD_BCRYPT", function () {
    expect(parser.parseCode("<?php\necho PASSWORD_DEFAULT . \"\\n\";\necho PASSWORD_BCRYPT . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
