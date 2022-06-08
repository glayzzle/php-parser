// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug50052.phpt
  it("Bug #50052 (Different Hashes on Windows and Linux on wrong Salt size)", function () {
    expect(parser.parseCode("<?php\n$salt = '$1$f+uslYF01$';\n$password = 'test';\necho $salt . \"\\n\";\necho crypt($password,$salt) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
