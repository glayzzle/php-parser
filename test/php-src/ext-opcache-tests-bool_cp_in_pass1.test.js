// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bool_cp_in_pass1.phpt
  it("Incorrect constant propagation on BOOL in pass 1", function () {
    expect(parser.parseCode("<?php\nfunction test($foo) {\n    $bar = 0;\n    if ($bar === 1 && $foo && PHP_SAPI !== 'cgi') {\n        echo \"bar\\n\";\n    }\n    echo \"foo\\n\";\n}\ntest(1);\n?>")).toMatchSnapshot();
  });
});
