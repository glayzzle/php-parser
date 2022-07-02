// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unset_cv03.phpt
  it("unset() CV 3 (unset() global variable in included file)", function () {
    expect(parser.parseCode("<?php\n$x = \"ok\\n\";\necho $x;\ninclude \"unset.inc\";\necho $x;\n?>")).toMatchSnapshot();
  });
});
