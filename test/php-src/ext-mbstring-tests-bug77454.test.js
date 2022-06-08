// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug77454.phpt
  it("Bug #77454: mb_scrub() silently truncates after a null byte", function () {
    expect(parser.parseCode("<?php\n$str = \"before\\0after\";\nfunction test($str, $enc) {\n    echo str_replace(\"\\0\", '\\0', mb_scrub($str, $enc)), \"\\n\";\n}\ntest($str, 'latin1');\ntest($str, 'utf-8');\ntest($str, 'ascii');\n?>")).toMatchSnapshot();
  });
});
