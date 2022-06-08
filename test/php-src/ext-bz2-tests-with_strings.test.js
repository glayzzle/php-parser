// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/with_strings.phpt
  it("BZ2 with strings", function () {
    expect(parser.parseCode("<?php\n# This FAILS\n$blaat = <<<HEREDOC\nThis is some random data\nHEREDOC;\n# This Works: (so, is heredoc related)\n#$blaat= 'This is some random data';\n$blaat2 = bzdecompress(bzcompress($blaat));\nvar_dump($blaat === $blaat2);\n?>")).toMatchSnapshot();
  });
});
