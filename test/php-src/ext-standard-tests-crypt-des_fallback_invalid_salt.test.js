// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/crypt/des_fallback_invalid_salt.phpt
  it("Test DES with invalid fallback", function () {
    expect(parser.parseCode("<?php\nvar_dump(crypt(\"test\", \"$#\"));\nvar_dump(crypt(\"test\", \"$5zd$01\"));\n?>")).toMatchSnapshot();
  });
});
