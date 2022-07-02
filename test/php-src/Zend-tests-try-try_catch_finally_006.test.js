// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_catch_finally_006.phpt
  it("Try catch finally (goto in try/catch block)", function () {
    expect(parser.parseCode("<?php\nfunction foo($ex = NULL) {\n    try {\n        try {\n            goto label;\n        } finally {\n            var_dump(\"finally1\");\n            if ($ex) throw $ex;\n        }\n    } catch (Exception $e) {\n       var_dump(\"caught\");\n       if ($ex) return \"return1\";\n    } finally {\n       var_dump(\"finally2\");\n    }\nlabel:\n   var_dump(\"label\");\n   return \"return2\";\n}\nvar_dump(foo());\nvar_dump(foo(new Exception()));\n?>")).toMatchSnapshot();
  });
});
