// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug79099.phpt
  it("Bug #79099 (OOB read in php_strip_tags_ex)", function () {
    expect(parser.parseCode("<?php\nvar_dump(strip_tags(\"<?\\n\\\"\\n\"));\nvar_dump(strip_tags(\"<\\0\\n!\\n\"));\nvar_dump(strip_tags(\"<\\0\\n?\\n\"));\n?>")).toMatchSnapshot();
  });
});
