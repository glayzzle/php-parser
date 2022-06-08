// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strstr2.phpt
  it("strstr() - New parameter: before_needle", function () {
    expect(parser.parseCode("<?php\n$email  = 'aexample.com';\nvar_dump(strstr($email, '@'));\nvar_dump(strstr($email, '@', 1));\n$email  = 'a@example.com';\nvar_dump(strstr($email, '@'));\nvar_dump(strstr($email, '@', 1));\n$email  = 'asdfasdfas@e';\nvar_dump(strstr($email, '@'));\nvar_dump(strstr($email, '@', 1));\n$email  = '@';\nvar_dump(strstr($email, '@'));\nvar_dump(strstr($email, '@', 1));\n$email  = 'eE@fF';\nvar_dump(strstr($email, 'e'));\nvar_dump(strstr($email, 'e', 1));\nvar_dump(strstr($email, 'E'));\nvar_dump(strstr($email, 'E', 1));\nvar_dump(strstr('', ' ', ''));\n?>")).toMatchSnapshot();
  });
});
