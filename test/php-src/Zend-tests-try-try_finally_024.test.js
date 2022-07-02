// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_024.phpt
  it("Exception in finally inside finally following try/catch containing throwing try/finally", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    try {\n        throw new Exception(1);\n    } finally {\n        try {\n            try {\n            } finally {\n                throw new Exception(2);\n            }\n        } catch (Exception $e) {}\n        try {\n        } finally {\n            throw new Exception(3);\n        }\n    }\n}\ntry {\n    test();\n} catch (Exception $e) {\n    echo $e, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
