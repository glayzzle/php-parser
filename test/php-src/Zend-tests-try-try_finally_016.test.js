// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_016.phpt
  it("Exception during break 2", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $a = 1;\n    public $b = 2;\n    public function __destruct() {\n        throw new Exception;\n    }\n}\nfunction foo() {\n    foreach ([0] as $_) {\n        foreach (new A as $value) {\n            try {\n                break 2;\n            } catch (Exception $e) {\n                echo \"catch\\n\";\n            } finally {\n                echo \"finally\\n\";\n            }\n        }\n    }\n}\ntry {\n    foo();\n} catch (Exception $e) {\n    echo \"outer catch\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
