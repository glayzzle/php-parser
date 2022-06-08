// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug75231.phpt
  it("Bug #75231: ReflectionProperty#getValue() incorrectly works with inherited classes", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public $prop;\n    public function __construct()\n    {\n        $this->prop = 'prop';\n    }\n    public function method()\n    {\n        return 'method';\n    }\n}\nclass B extends A\n{\n}\nprint_r((new ReflectionMethod(B::class, 'method'))->invoke(new A()).PHP_EOL);\nprint_r((new ReflectionProperty(B::class, 'prop'))->getValue(new A()).PHP_EOL);\n?>")).toMatchSnapshot();
  });
});
