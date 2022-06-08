// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/warning_during_heredoc_scan_ahead.phpt
  it("No warnings should be thrown during heredoc scan-ahead", function () {
    expect(parser.parseCode("<?php\n<<<TEST\n\\400\n${\"\\400\"}\nTEST;\n?>")).toMatchSnapshot();
  });
});
