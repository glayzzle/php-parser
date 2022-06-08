// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76846.phpt
  it("Bug #76846: Segfault in shutdown function after memory limit error", function () {
    expect(parser.parseCode("<?php\nregister_shutdown_function(function() {\n    new stdClass;\n});\n$ary = [];\nwhile (true) {\n    $ary[] = new stdClass;\n}\n?>")).toMatchSnapshot();
  });
});
