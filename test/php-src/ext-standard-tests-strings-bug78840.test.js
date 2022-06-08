// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug78840.phpt
  it("Bug #78840 (imploding $GLOBALS crashes)", function () {
    expect(parser.parseCode("<?php\n$glue = '';\n@implode($glue, $GLOBALS);\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
