// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug32226.phpt
  it("Bug #32226 (SEGV with exception handler on non existing instance)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n        public function __construct()\n        {\n                set_exception_handler(array($this, 'EH'));\n                throw new Exception();\n        }\n        public function EH()\n        {\n                restore_exception_handler();\n                throw new Exception();\n        }\n}\ntry\n{\n$a = new A();\n}\ncatch(Exception $e)\n{\n    echo \"Caught\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
