// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/gh8063-003.phpt
  it("Bug GH-8063 (Opcache breaks autoloading after E_COMPILE_ERROR) 003", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class) {\n    printf(\"Autoloading %s\\n\", $class);\n    include __DIR__.DIRECTORY_SEPARATOR.'gh8063'.DIRECTORY_SEPARATOR.$class.'.inc';\n});\nregister_shutdown_function(function () {\n    new Bar();\n    new Baz();\n    print \"Finished\\n\";\n});\nnew BadClass2();")).toMatchSnapshot();
  });
});
