// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug68567.phpt
  it("Bug #68567 JSON_PARTIAL_OUTPUT_ON_ERROR can result in JSON with null key", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_encode(array(\"\\x80\" => 1), JSON_PARTIAL_OUTPUT_ON_ERROR));\n?>")).toMatchSnapshot();
  });
});
