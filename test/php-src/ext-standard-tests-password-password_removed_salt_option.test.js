// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/password_removed_salt_option.phpt
  it("Test removed support for explicit salt option", function () {
    expect(parser.parseCode("<?php\n//-=-=-=-\nvar_dump(strlen(password_hash(\"rasmuslerdorf\", PASSWORD_BCRYPT, array(\"cost\" => 7, \"salt\" => \"usesomesillystringforsalt\"))));\nvar_dump(strlen(password_hash(\"test\", PASSWORD_BCRYPT, array(\"salt\" => \"123456789012345678901\" . chr(0)))));\necho \"OK!\";\n?>")).toMatchSnapshot();
  });
});
