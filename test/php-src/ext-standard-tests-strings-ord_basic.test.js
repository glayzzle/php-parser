// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/ord_basic.phpt
  it("Test ord() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ord() : basic functionality ***\\n\";\nvar_dump(ord(\"a\"));\nvar_dump(ord(\"z\"));\nvar_dump(ord(\"0\"));\nvar_dump(ord(\"9\"));\nvar_dump(ord(\"!\"));\nvar_dump(ord(\"*\"));\nvar_dump(ord(\"@\"));\nvar_dump(ord(\"\\n\"));\nvar_dump(ord(\"\\x0A\"));\nvar_dump(ord(\"\\xFF\"));\nvar_dump(ord(\"Hello\"));\n// Make sure all valid ascii chars round trip\nfor ($i = 0; $i < 255; $i++) {\n    if (ord(chr($i)) != $i) {\n        exit(\"TEST FAILED: $i does not round trip\\n\");\n    }\n}\n?>")).toMatchSnapshot();
  });
});
