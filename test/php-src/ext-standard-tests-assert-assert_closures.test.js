// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert_closures.phpt
  it("assert() - basic - accept closures as callback.", function () {
    expect(parser.parseCode("<?php\nassert_options(ASSERT_CALLBACK, function () { echo \"Hello World!\\n\"; });\nassert(0);\n?>")).toMatchSnapshot();
  });
});
