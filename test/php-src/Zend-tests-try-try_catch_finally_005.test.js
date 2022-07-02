// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_catch_finally_005.phpt
  it("Try catch finally (break / cont in try block)", function () {
    expect(parser.parseCode("<?php\nfor ($i = 0;  $i < 100 ; $i ++) {\n    try {\n        break;\n    } finally {\n        var_dump(\"break\");\n    }\n}\nfor ($i = 0;  $i < 2; $i ++) {\n    try {\n        continue;\n    } finally {\n        var_dump(\"continue1\");\n    }\n}\nfor ($i = 0;  $i < 3; $i ++) {\n    try {\n        try {\n            continue;\n        } finally {\n            var_dump(\"continue2\");\n            if ($i == 1) {\n                throw new Exception(\"continue exception\");\n            }\n        }\n    } catch (Exception $e) {\n       var_dump(\"cactched\");\n    }  finally {\n       var_dump(\"finally\");\n    }\n}\n?>")).toMatchSnapshot();
  });
});
