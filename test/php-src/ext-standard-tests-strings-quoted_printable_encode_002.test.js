// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/quoted_printable_encode_002.phpt
  it("quoted_printable_encode() tests - 2", function () {
    expect(parser.parseCode("<?php\n$s = str_repeat(\"\\0\", 200);\nvar_dump($d = quoted_printable_encode($s));\nvar_dump(quoted_printable_decode($d));\n$s = str_repeat(\"строка в юникоде\", 50);\nvar_dump($d = quoted_printable_encode($s));\nvar_dump(quoted_printable_decode($d));\nclass foo {\n    function __toString() {\n        return \"this is a foo\";\n    }\n}\n$o = new Foo;\nvar_dump(quoted_printable_encode($o));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
