// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug74372.phpt
  it("Bug #74372: autoloading file with syntax error uses next autoloader, may hide parse error", function () {
    expect(() => parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    eval(\"ha ha ha\");\n});\nspl_autoload_register(function($class) {\n    echo \"Don't call me.\\n\";\n});\nnew Foo;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
