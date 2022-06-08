// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace_callback_fatal_error_leak.phpt
  it("preg_replace_callback() should not leak persistent memory on fatal error", function () {
    expect(parser.parseCode("<?php\nfunction test() {}\npreg_replace_callback('/a/', function($matches) {\n    preg_replace_callback('/x/', function($matches) {\n        function test() {} // Trigger a fatal error.\n        return 'y';\n    }, 'x');\n    return 'b';\n}, 'a');\n?>")).toMatchSnapshot();
  });
});
