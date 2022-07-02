// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_catch_finally_007.phpt
  it("Try catch finally (goto in try/catch block)", function () {
    expect(parser.parseCode("<?php\nfunction foo($ret = FALSE) {\n    try {\n        try {\n            do {\n                goto label;\n            } while(0);\n            foreach (array() as $val) {\n                continue;\n            }\n        } finally {\n            var_dump(\"finally1\");\n            throw new Exception(\"exception\");\n        }\n    } catch (Exception $e) {\n        goto local;\nlocal:\n        var_dump(\"caught\");\n        if ($ret) return \"return\";\n    } finally {\n       var_dump(\"finally2\");\n    }\nlabel:\n   var_dump(\"label\");\n}\nvar_dump(foo());\nvar_dump(foo(true));\n?>")).toMatchSnapshot();
  });
});
