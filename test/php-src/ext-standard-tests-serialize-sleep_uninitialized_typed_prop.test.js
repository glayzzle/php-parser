// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/sleep_uninitialized_typed_prop.phpt
  it("Referencing an uninitialized typed property in __sleep() should be skipped", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $x;\n    protected int $y;\n    private int $z;\n    public function __sleep() {\n        return ['x', 'y', 'z'];\n    }\n    public function __set($name, $val) {\n        $this->$name = $val;\n    }\n}\n$t = new Test;\nvar_dump(serialize($t));\nvar_dump(unserialize(serialize($t)) == $t);\n$t->x = 1;\nvar_dump(unserialize(serialize($t)) == $t);\n$t->y = 2;\nvar_dump(unserialize(serialize($t)) == $t);\n$t->z = 3;\nvar_dump(unserialize(serialize($t)) == $t);\nvar_dump($t);\n?>")).toMatchSnapshot();
  });
});
