// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stristr2.phpt
  it("stristr() - New parameter: before_needle", function () {
    expect(parser.parseCode("<?php\n$email  = 'AbcCdEfGh';\nvar_dump(stristr($email, 'c'));\nvar_dump(stristr($email, 'c', 1));\n$email  = 'AbCdeEfGh';\nvar_dump(stristr($email, 'E'));\nvar_dump(stristr($email, 'E', 1));\n$email  = 'wazAbCdeEfGh';\nvar_dump(stristr($email, 97));\nvar_dump(stristr($email, 97, 1));\n?>")).toMatchSnapshot();
  });
});
