// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/crypt_chars.phpt
  it("crypt() function - characters > 0x80", function () {
    expect(parser.parseCode("<?php\nvar_dump(crypt(\"À1234abcd\", \"99\"));\nvar_dump(crypt(\"À9234abcd\", \"99\"));\nvar_dump(crypt(\"À1234abcd\", \"_01234567\"));\nvar_dump(crypt(\"À9234abcd\", \"_01234567\"));\n?>")).toMatchSnapshot();
  });
});
