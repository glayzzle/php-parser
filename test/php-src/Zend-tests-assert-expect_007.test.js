// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_007.phpt
  it("test compiled reason", function () {
    expect(parser.parseCode("<?php\n$next = 1;\n$data = array(\n    \"key\" => \"X-HTTP \",\n    \"value\" => \"testing\"\n);\nclass HeaderMalfunctionError extends AssertionError {}\nassert (preg_match(\"~^([a-zA-Z0-9-]+)$~\", $data[\"key\"]), new HeaderMalfunctionError(\"malformed key found at {$next} \\\"{$data[\"key\"]}\\\"\"));\n?>")).toMatchSnapshot();
  });
});
