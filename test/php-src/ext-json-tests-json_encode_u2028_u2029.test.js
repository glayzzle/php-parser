// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_encode_u2028_u2029.phpt
  it("json_encode() tests for U+2028, U+2029", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_encode(array(\"a\\xC3\\xA1b\")));\nvar_dump(json_encode(array(\"a\\xC3\\xA1b\"), JSON_UNESCAPED_UNICODE));\nvar_dump(json_encode(\"a\\xE2\\x80\\xA7b\"));\nvar_dump(json_encode(\"a\\xE2\\x80\\xA7b\", JSON_UNESCAPED_UNICODE));\nvar_dump(json_encode(\"a\\xE2\\x80\\xA8b\"));\nvar_dump(json_encode(\"a\\xE2\\x80\\xA8b\", JSON_UNESCAPED_UNICODE));\nvar_dump(json_encode(\"a\\xE2\\x80\\xA8b\", JSON_UNESCAPED_LINE_TERMINATORS));\nvar_dump(json_encode(\"a\\xE2\\x80\\xA8b\", JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_LINE_TERMINATORS));\nvar_dump(json_encode(\"a\\xE2\\x80\\xA9b\"));\nvar_dump(json_encode(\"a\\xE2\\x80\\xA9b\", JSON_UNESCAPED_UNICODE));\nvar_dump(json_encode(\"a\\xE2\\x80\\xA9b\", JSON_UNESCAPED_LINE_TERMINATORS));\nvar_dump(json_encode(\"a\\xE2\\x80\\xA9b\", JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_LINE_TERMINATORS));\nvar_dump(json_encode(\"a\\xE2\\x80\\xAAb\"));\nvar_dump(json_encode(\"a\\xE2\\x80\\xAAb\", JSON_UNESCAPED_UNICODE));\n?>")).toMatchSnapshot();
  });
});
