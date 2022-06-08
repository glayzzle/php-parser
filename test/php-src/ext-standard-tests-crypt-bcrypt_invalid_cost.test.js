// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/crypt/bcrypt_invalid_cost.phpt
  it("Test BCRYPT with invalid cost", function () {
    expect(parser.parseCode("<?php\nvar_dump(crypt(\"test\", \"$2a$4$1234567891234567891234567\"));\nvar_dump(crypt(\"test\", \"$2a$00$1234567891234567891234567\"));\nvar_dump(crypt(\"test\", \"$2a$01$1234567891234567891234567\"));\nvar_dump(crypt(\"test\", \"$2a$02$1234567891234567891234567\"));\nvar_dump(crypt(\"test\", \"$2a$03$1234567891234567891234567\"));\nvar_dump(crypt(\"test\", \"$2a$32$1234567891234567891234567\"));\nvar_dump(crypt(\"test\", \"$2a$40$1234567891234567891234567\"));\n?>")).toMatchSnapshot();
  });
});
