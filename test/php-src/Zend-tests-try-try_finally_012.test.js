// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_012.phpt
  it("Try finally (exception in \"return\" statement)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $x = 1;\n    public $y = 2;\n    function __destruct() {\n        throw new Exception();\n    }\n}\nfunction foo() {\n    foreach(new A() as $a) {\n        try {\n            return $a;\n        } catch (Exception $e) {\n            echo \"exception in foo\\n\";\n        } finally {\n            echo \"finally\\n\";\n        }\n    }\n}\ntry {\n    foo();\n} catch (Exception $e) {\n    echo \"exception in main\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
