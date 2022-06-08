// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_009.phpt
  it("Try finally (with for continue)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n    for($i = 0; $i < 5; $i++) {\n        do {\n            try {\n                try {\n                } finally {\n                }\n            } catch (Exception $e) {\n            } finally {\n              continue;\n            }\n        } while (0);\n    }\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
