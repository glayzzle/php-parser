// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug78804.phpt
  it("Bug #78804: Segmentation fault in Locale::filterMatches", function () {
    expect(parser.parseCode("<?php\nif (Locale::filterMatches('en-US', 'und', true)) {\n    echo 'Matches';\n} else {\n    echo 'Not matches';\n}\n?>")).toMatchSnapshot();
  });
});
