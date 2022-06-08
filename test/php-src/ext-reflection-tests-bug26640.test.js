// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug26640.phpt
  it("Reflection Bug #26640 (__autoload() not invoked by Reflection classes)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($c) {\n    class autoload_class\n    {\n        public function __construct()\n        {\n            print \"autoload success\\n\";\n        }\n    }\n});\n$a = new ReflectionClass('autoload_class');\nif (is_object($a)) {\n    echo \"OK\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
