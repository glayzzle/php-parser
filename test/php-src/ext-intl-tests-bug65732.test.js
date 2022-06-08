// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug65732.phpt
  it("Bug #65732 (grapheme_*() is not Unicode compliant on CR LF sequence)", function () {
    expect(parser.parseCode("<?php\nvar_dump(grapheme_strlen(\"\\r\\n\"));\nvar_dump(grapheme_substr(implode(\"\\r\\n\", ['abc', 'def', 'ghi']), 5));\nvar_dump(grapheme_strrpos(\"a\\r\\nb\", 'b'));\n?>")).toMatchSnapshot();
  });
});
