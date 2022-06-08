// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/overloaded_prop_assign_op_refs.phpt
  it("Handling of assign-ops and incdecs on overloaded properties using &__get()", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    protected $a = 0;\n    protected $b = 0;\n    protected $c = 0;\n    public function &__get($name) {\n        echo \"get($name)\\n\";\n        return $this->$name;\n    }\n    public function __set($name, $value) {\n        echo \"set($name, $value)\\n\";\n    }\n}\n$test = new Test;\nvar_dump($test->a += 1);\nvar_dump($test->b++);\nvar_dump(++$test->c);\nvar_dump($test);\n?>")).toMatchSnapshot();
  });
});
