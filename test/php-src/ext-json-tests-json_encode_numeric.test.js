// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_encode_numeric.phpt
  it("Test json_encode() function with numeric flag", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    json_encode(\"1\", JSON_NUMERIC_CHECK),\n    json_encode(\"9.4324\", JSON_NUMERIC_CHECK),\n    json_encode(array(\"122321\", \"3232595.33423\"), JSON_NUMERIC_CHECK),\n    json_encode(\"1\"),\n    json_encode(\"9.4324\"),\n    json_encode(array(\"122321\", \"3232595.33423\"))\n);\n?>")).toMatchSnapshot();
  });
});
