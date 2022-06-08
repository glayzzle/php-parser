// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/visibility_change.phpt
  it("Visibility can change in readonly property", function () {
    expect(parser.parseCode("<?php\nclass A {\n    protected readonly int $prop;\n    public function __construct() {\n        $this->prop = 42;\n    }\n}\nclass B extends A {\n    public readonly int $prop;\n}\n$a = new A();\ntry {\n    var_dump($a->prop);\n} catch (Error $error) {\n    echo $error->getMessage() . \"\\n\";\n}\n$b = new B();\nvar_dump($b->prop);\n?>")).toMatchSnapshot();
  });
});
