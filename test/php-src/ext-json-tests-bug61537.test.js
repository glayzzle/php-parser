// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug61537.phpt
  it("Bug #61537 (json_encode() incorrectly truncates/discards information)", function () {
    expect(parser.parseCode("<?php\n$invalid_utf8 = \"\\x9f\";\nvar_dump(json_encode($invalid_utf8));\nvar_dump(json_last_error(), json_last_error_msg());\nvar_dump(json_encode($invalid_utf8, JSON_PARTIAL_OUTPUT_ON_ERROR));\nvar_dump(json_last_error(), json_last_error_msg());\necho \"\\n\";\n$invalid_utf8 = \"an invalid sequen\\xce in the middle of a string\";\nvar_dump(json_encode($invalid_utf8));\nvar_dump(json_last_error(), json_last_error_msg());\nvar_dump(json_encode($invalid_utf8, JSON_PARTIAL_OUTPUT_ON_ERROR));\nvar_dump(json_last_error(), json_last_error_msg());\n?>")).toMatchSnapshot();
  });
});
