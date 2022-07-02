// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_027.phpt
  it("Return in try with throw in finally, inside other finally", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    try {\n        throw new Exception(1);\n    } finally {\n        try {\n            return 42;\n        } finally {\n            throw new Exception(2);\n        }\n    }\n}\ntry {\n    test();\n} catch (Exception $e) {\n    echo $e, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
