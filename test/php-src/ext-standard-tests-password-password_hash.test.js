// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/password_hash.phpt
  it("Test normal operation of password_hash()", function () {
    expect(parser.parseCode("<?php\n//-=-=-=-\nvar_dump(strlen(password_hash(\"foo\", PASSWORD_BCRYPT)));\n$algos = [\n  PASSWORD_BCRYPT,\n  '2y',\n  1,\n];\nforeach ($algos as $algo) {\n  $hash = password_hash(\"foo\", $algo);\n  var_dump($hash === crypt(\"foo\", $hash));\n}\necho \"OK!\";\n?>")).toMatchSnapshot();
  });
});
