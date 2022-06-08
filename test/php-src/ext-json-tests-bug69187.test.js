// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug69187.phpt
  it("Bug #69187 json_last_error return BC in PHP7", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_decode(FALSE));\nvar_dump(json_last_error());\nvar_dump(json_decode(\"\"));\nvar_dump(json_last_error());\nvar_dump(json_decode(0));\nvar_dump(json_last_error());\nvar_dump(json_decode(1));\nvar_dump(json_last_error());\nvar_dump(json_decode(TRUE));\nvar_dump(json_last_error());\njson_decode(\"\\xED\\xA0\\xB4\");\nvar_dump(json_last_error());\njson_decode(\"\\x00\");\nvar_dump(json_last_error());\njson_decode(\"\\\"\\xED\\xA0\\xB4\\\"\");\nvar_dump(json_last_error());\njson_decode(\"\\\"\\x00\\\"\");\nvar_dump(json_last_error());\n?>")).toMatchSnapshot();
  });
});
