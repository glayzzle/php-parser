// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug36037.phpt
  it("Bug #36037 (heredoc adds extra line number)", function () {
    expect(parser.parseCode("<?php\necho __LINE__, \"\\n\";\n$x=<<<XXX\n123\nYYY;\nXXX;\necho __LINE__, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
