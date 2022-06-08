// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_017.phpt
  it("Exception during break 2 with multiple try/catch", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $a = 1;\n    public $b = 2;\n    public function __destruct() {\n        throw new Exception;\n    }\n}\nfunction foo() {\n    foreach ([0] as $_) {\n        try {\n            foreach (new A as $value) {\n                try {\n                    break 2;\n                } catch (Exception $e) {\n                    echo \"catch1\\n\";\n                } finally {\n                    echo \"finally1\\n\";\n                }\n            }\n        } catch (Exception $e) {\n            echo \"catch2\\n\";\n        } finally {\n            echo \"finally2\\n\";\n        }\n    }\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
