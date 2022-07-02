// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/strict_nested.phpt
  it("Test nested function calls in strict_types=0 and strict_types=1 modes", function () {
    expect(parser.parseCode("<?php\nfunction takes_int(int $x) {\n    global $errored;\n    if ($errored) {\n        echo \"Failure!\", PHP_EOL;\n        $errored = FALSE;\n    } else {\n        echo \"Success!\", PHP_EOL;\n    }\n}\ndeclare(strict_types=1) {\n    function strict_calls_takes_int() {\n        takes_int(1.0); // should fail, strict mode\n    }\n    class StrictTakesIntCaller {\n        public function call() {\n            takes_int(1.0); // should fail, strict mode\n        }\n    }\n}\ndeclare(strict_types=0) {\n    function explicit_weak_calls_takes_int() {\n        takes_int(1.0); // should succeed, weak mode\n    }\n    class ExplicitWeakTakesIntCaller {\n        public function call() {\n            takes_int(1.0); // should succeed, weak mode\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
