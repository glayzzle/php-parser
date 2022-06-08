// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug20169.phpt
  it("Bug #20169 (implode() clobbers first argument)", function () {
    expect(parser.parseCode("<?php\n    @set_time_limit(5);\n    $delimiter = \"|\";\n    echo \"delimiter: $delimiter\\n\";\n    implode($delimiter, array(\"foo\", \"bar\"));\n    echo \"delimiter: $delimiter\\n\";\n?>")).toMatchSnapshot();
  });
});
