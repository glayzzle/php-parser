// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_023.phpt
  it("Loop var dtor throwing exception during return inside try/catch inside finally", function () {
    expect(parser.parseCode("<?php\nclass Dtor {\n    public function __destruct() {\n        throw new Exception(2);\n    }\n}\nfunction test() {\n    try {\n        throw new Exception(1);\n    } finally {\n        try {\n            foreach ([new Dtor] as $v) {\n                unset($v);\n                return 42;\n            }\n        } catch (Exception $e) {\n        }\n    }\n}\ntry {\n    test();\n} catch (Exception $e) {\n    echo $e, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
