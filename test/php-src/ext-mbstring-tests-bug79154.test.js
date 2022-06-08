// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug79154.phpt
  it("Bug 79154 (mb_convert_encoding() can modify $from_encoding)", function () {
    expect(parser.parseCode("<?php\nclass Utf8Encoding\n{\n    public function __toString()\n    {\n        return 'UTF-8';\n    }\n}\n$utf8encoding = new Utf8Encoding();\n$encodings = [$utf8encoding];\nvar_dump($encodings);\nmb_convert_encoding('foo', 'UTF-8', $encodings);\nvar_dump($encodings);\n?>")).toMatchSnapshot();
  });
});
