// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78396.phpt
  it("Bug #78396: Second file_put_contents in Shutdown hangs script", function () {
    expect(parser.parseCode("<?php\nregister_shutdown_function(function () {\n    file_put_contents(__DIR__ . '/bug78396.txt', '1', FILE_APPEND | LOCK_EX);\n    file_put_contents(__DIR__ . '/bug78396.txt', '2', FILE_APPEND | LOCK_EX);\n    echo \"Done\\n\";\n});\n?>")).toMatchSnapshot();
  });
});
