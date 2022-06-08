// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_025.phpt
  it("Throw in try of try/finally inside catch", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    try {\n        throw new Exception(1);\n    } catch (Exception $e) {\n        try {\n            throw new Exception(2);\n        } finally {\n        }\n    }\n}\ntry {\n    test();\n} catch (Exception $e) {\n    echo $e, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
