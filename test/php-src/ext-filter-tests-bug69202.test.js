// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug69202.phpt
  it("Bug #69202 (FILTER_FLAG_STRIP_BACKTICK ignored unless other flags are used)", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"``a`b`c``\", FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_BACKTICK));\nvar_dump(filter_var(\"``a`b`c``\", FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_BACKTICK));\nvar_dump(filter_var(\"``a`b`c``\", FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_HIGH | FILTER_FLAG_STRIP_BACKTICK));\nvar_dump(filter_var(\"``a`b`c``\", FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_HIGH));\n?>")).toMatchSnapshot();
  });
});
