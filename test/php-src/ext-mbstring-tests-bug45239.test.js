// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug45239.phpt
  it("Bug #45239 (encoding detector hangs with mbstring.strict_detection enabled)", function () {
    expect(parser.parseCode("<?php\nmb_internal_encoding(\"utf-8\");\nmb_parse_str(\"a=%fc\", $dummy);\nvar_dump(mb_http_input());\n?>")).toMatchSnapshot();
  });
});
