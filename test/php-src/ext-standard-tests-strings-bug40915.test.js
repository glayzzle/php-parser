// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug40915.phpt
  it("Bug #40915 (addcslashes unexpected behavior with binary input)", function () {
    expect(parser.parseCode("<?php\n$str = \"a\\000z\";\nvar_dump(addslashes($str));\nvar_dump(addcslashes($str, \"\"));\nvar_dump(addcslashes($str, \"\\000z\"));\nvar_dump(addcslashes($str, \"z\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
