// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug35817.phpt
  it("Bug #35817 (unpack() does not decode odd number of hexadecimal values)", function () {
    expect(parser.parseCode("<?php\n$a = pack(\"H3\",\"181\");\n$b = unpack(\"H3\", $a);\nvar_dump($b);\n$a = pack(\"H2\",\"18\");\n$b = unpack(\"H2\", $a);\nvar_dump($b);\n$a = pack(\"H\",\"1\");\n$b = unpack(\"H\", $a);\nvar_dump($b);\n?>")).toMatchSnapshot();
  });
});
