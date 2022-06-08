// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/016.phpt
  it("Test nullsafe in function argument", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $bar;\n}\nfunction set(&$ref, $value) {\n    $ref = $value;\n}\nfunction test($foo) {\n    try {\n        set($foo?->bar, 'bar');\n    } catch (Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        (strrev('tes'))($foo?->bar, 'bar2');\n    } catch (Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\ntest(null);\ntest(new Foo());\n?>")).toMatchSnapshot();
  });
});
