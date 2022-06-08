// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_062.phpt
  it("Closure $this unbinding deprecation", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function method() {\n        echo \"instance scoped, non-static, \\$this used\\n\";\n        $fn = function() {\n            var_dump($this);\n        };\n        $fn->bindTo(null);\n        echo \"instance scoped, static, \\$this used\\n\";\n        $fn = static function() {\n            var_dump($this);\n        };\n        $fn->bindTo(null);\n        echo \"instance scoped, non-static, \\$this not used\\n\";\n        $fn = function() {\n            var_dump($notThis);\n        };\n        $fn->bindTo(null);\n    }\n    public static function staticMethod() {\n        echo \"static scoped, non-static, \\$this used\\n\";\n        $fn = function() {\n            var_dump($this);\n        };\n        $fn->bindTo(null);\n        echo \"static scoped, static, \\$this used\\n\";\n        $fn = static function() {\n            var_dump($this);\n        };\n        $fn->bindTo(null);\n        echo \"static scoped, static, \\$this not used\\n\";\n        $fn = function() {\n            var_dump($notThis);\n        };\n        $fn->bindTo(null);\n    }\n}\n(new Test)->method();\nTest::staticMethod();\n?>")).toMatchSnapshot();
  });
});
