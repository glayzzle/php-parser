// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug43941.phpt
  it("Bug #43941 (json_encode() invalid UTF-8)", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_encode(\"abc\"));\nvar_dump(json_encode(\"ab\\xE0\"));\nvar_dump(json_encode(\"ab\\xE0\", JSON_PARTIAL_OUTPUT_ON_ERROR));\nvar_dump(json_encode(array(\"ab\\xE0\", \"ab\\xE0c\", \"abc\"), JSON_PARTIAL_OUTPUT_ON_ERROR));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
