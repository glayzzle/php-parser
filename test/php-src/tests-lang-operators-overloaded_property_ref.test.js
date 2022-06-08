// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/overloaded_property_ref.phpt
  it("Operators on overloaded property reference", function () {
    expect(parser.parseCode("<?php\nclass C {\n    function __construct() { $this->bar = str_repeat(\"1\", 2); }\n    function &__get($x) { return $this->bar; }\n    function __set($x, $v) { $this->bar = $v; }\n}\n$x = new C;\nvar_dump(++$x->foo);\n$x = new C;\nvar_dump($x->foo++);\n$x = new C;\nvar_dump($x->foo += 2);\n?>")).toMatchSnapshot();
  });
});
