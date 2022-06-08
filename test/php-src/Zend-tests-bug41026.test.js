// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41026.phpt
  it("Bug #41026 (segfault when calling \"self::method()\" in shutdown functions)", function () {
    expect(parser.parseCode("<?php\nclass try_class\n{\n    static public function main ()\n    {\n        register_shutdown_function (array (\"self\", \"on_shutdown\"));\n    }\n    static public function on_shutdown ()\n    {\n        printf (\"CHECKPOINT\\n\");\n    }\n}\ntry_class::main ();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
