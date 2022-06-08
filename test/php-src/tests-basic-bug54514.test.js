// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug54514.phpt
  it("Req #54514 (Get php binary path during script execution)", function () {
    expect(parser.parseCode("<?php\nif(realpath(getenv('TEST_PHP_EXECUTABLE')) === realpath(PHP_BINARY)) {\n    echo \"done\";\n} else {\n    var_dump(getenv('TEST_PHP_EXECUTABLE'));\n    var_dump(PHP_BINARY);\n}\n?>")).toMatchSnapshot();
  });
});
