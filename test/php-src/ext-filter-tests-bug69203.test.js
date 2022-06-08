// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug69203.phpt
  it("Bug #69203 (FILTER_FLAG_STRIP_HIGH doesn't strip ASCII 127)", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"\\x7f\", FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH));\nvar_dump(filter_var(\"\\x7f\", FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_HIGH));\nvar_dump(filter_var(\"\\x7f\", FILTER_SANITIZE_ENCODED, FILTER_FLAG_STRIP_HIGH));\nvar_dump(filter_var(\"\\x7f\", FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_STRIP_HIGH));\n?>")).toMatchSnapshot();
  });
});
