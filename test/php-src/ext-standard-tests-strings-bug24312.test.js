// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug24312.phpt
  it("Bug #24208 (base64_decode() not skipping 0xF0 - 0xFF)", function () {
    expect(parser.parseCode("<?php\n$data = str_repeat(\"a\", 100);\nfor ($i = 0xF0; $i < 0xFF + 1; $i++) {\n    $enc = chunk_split(base64_encode($data), 10, chr($i));\n    var_dump(base64_decode($enc));\n}\n?>")).toMatchSnapshot();
  });
});
