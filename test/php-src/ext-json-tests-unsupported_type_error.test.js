// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/unsupported_type_error.phpt
  it("An error is thrown when an unsupported type is encoded", function () {
    expect(parser.parseCode("<?php\n$resource = fopen(__FILE__, \"r\");\nvar_dump($resource);\nvar_dump(json_encode($resource));\nvar_dump(json_last_error(), json_last_error_msg());\nvar_dump(json_encode($resource, JSON_PARTIAL_OUTPUT_ON_ERROR));\nvar_dump(json_last_error(), json_last_error_msg());\n?>")).toMatchSnapshot();
  });
});
