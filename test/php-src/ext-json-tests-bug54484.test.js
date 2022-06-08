// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug54484.phpt
  it("Bug #54484 (Empty string in json_decode doesn't reset json_last_error)", function () {
    expect(parser.parseCode("<?php\njson_decode('{\"test\":\"test\"}');\nvar_dump(json_last_error());\njson_decode(\"\");\nvar_dump(json_last_error());\njson_decode(\"invalid json\");\nvar_dump(json_last_error());\njson_decode(\"\\\"\\001 invalid json\\\"\");\nvar_dump(json_last_error());\njson_decode(\"\");\nvar_dump(json_last_error());\n?>")).toMatchSnapshot();
  });
});
