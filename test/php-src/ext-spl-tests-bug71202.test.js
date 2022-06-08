// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug71202.phpt
  it("Bug #71202 (Autoload function registered by another not activated immediately)", function () {
    expect(parser.parseCode("<?php\nfunction inner_autoload ($name){\n    if ($name == 'A') {\n        class A {\n            function __construct(){\n                echo \"okey, \";\n            }\n        }\n    } else {\n        class B {\n            function __construct() {\n                die(\"error\");\n            }\n        }\n    }\n}\nspl_autoload_register(function ($name) {\n    if ($name == 'A') {\n        spl_autoload_register(\"inner_autoload\");\n    } else {\n        spl_autoload_unregister(\"inner_autoload\");\n    }\n});\n$c = new A();\ntry {\n    $c = new B();\n} catch (Error $e) {\n    echo \"done\";\n}\n?>")).toMatchSnapshot();
  });
});
