// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/crypt/bcrypt_invalid_algorithm.phpt
  it("Test BCRYPT with invalid algorithm", function () {
    expect(parser.parseCode("<?php\nvar_dump(crypt(\"test\", \"$23$04$1234567890123456789012345\"));\nvar_dump(crypt(\"test\", \"$20$04$1234567890123456789012345\"));\nvar_dump(crypt(\"test\", \"$2g$04$1234567890123456789012345\"));\n?>")).toMatchSnapshot();
  });
});
