// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug68546.phpt
  it("Bug #68546 (json_decode() Fatal error: Cannot access property started with '\\0')", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_decode('{\"key\": {\"\\u0000\": \"aa\"}}'));\nvar_dump(json_last_error() === JSON_ERROR_INVALID_PROPERTY_NAME);\nvar_dump(json_decode('[{\"key1\": 0, \"\\u0000\": 1}]'));\nvar_dump(json_last_error() === JSON_ERROR_INVALID_PROPERTY_NAME);\nvar_dump(json_last_error_msg());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
