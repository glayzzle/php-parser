// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug41567.phpt
  it("Bug #41567 (json_encode() double conversion is inconsistent with PHP)", function () {
    expect(parser.parseCode("<?php\n$a = json_encode(123456789.12345);\nvar_dump(json_decode($a));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
