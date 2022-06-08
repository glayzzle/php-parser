// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30889.phpt
  it("Bug #30889 (Conflict between __get/__set and ++ operator)", function () {
    expect(parser.parseCode("<?php\nclass overloaded\n{\n  private $values;\n  function __construct()\n  {\n    $this->values = array('a' => 0);\n  }\n  function __set($name, $value)\n  {\n    print \"set $name = $value ($name was \".$this->values[$name].\")\\n\";\n    $this->values[$name] = $value;\n  }\n  function __get($name)\n  {\n    print \"get $name (returns \".$this->values[$name].\")\\n\";\n    return $this->values[$name];\n  }\n}\n$test = new overloaded();\n$test->a++;     // __get(), then __set()\n++$test->a;\n?>")).toMatchSnapshot();
  });
});
