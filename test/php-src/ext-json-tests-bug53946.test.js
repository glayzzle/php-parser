// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug53946.phpt
  it("bug #53946 (json_encode() with JSON_UNESCAPED_UNICODE)", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_encode(\"latin 1234 -/    russian мама мыла раму  specialchars \\x02   \\x08 \\n   U+1D11E >𝄞<\"));\nvar_dump(json_encode(\"latin 1234 -/    russian мама мыла раму  specialchars \\x02   \\x08 \\n   U+1D11E >𝄞<\", JSON_UNESCAPED_UNICODE));\nvar_dump(json_encode(\"ab\\xE0\"));\nvar_dump(json_encode(\"ab\\xE0\", JSON_UNESCAPED_UNICODE));\n?>")).toMatchSnapshot();
  });
});
