// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug79188.phpt
  it("Bug #79188: Memory corruption in preg_replace/preg_replace_callback and unicode", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_replace(\"//u\", \"\", \"a\" . str_repeat(\"\\u{1f612}\", 10)));\nvar_dump(preg_replace_callback(\n    \"//u\", function() { return \"\"; }, \"a\" . str_repeat(\"\\u{1f612}\", 10)));\n?>")).toMatchSnapshot();
  });
});
