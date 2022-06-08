// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33171.phpt
  it("Bug #33171 (foreach enumerates private fields declared in base classes)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    private $c = \"A's c\";\n}\nclass B extends A\n{\n    private $c = \"B's c\";\n    public function go()\n    {\n        foreach ($this as $key => $val)\n        {\n            echo \"$key => $val\\n\";\n        }\n    }\n};\n$x = new B;\n$x->go();\n?>")).toMatchSnapshot();
  });
});
