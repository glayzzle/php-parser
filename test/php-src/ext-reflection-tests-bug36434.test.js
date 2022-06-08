// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug36434.phpt
  it("Reflection Bug #36434 (Properties from parent class fail to indetify their true origin)", function () {
    expect(parser.parseCode("<?php\nclass ancester\n{\n    public $ancester = 0;\n    function __construct()\n    {\n        return $this->ancester;\n    }\n}\nclass foo extends ancester\n{\n    public $bar = \"1\";\n    function __construct()\n    {\n        return $this->bar;\n    }\n}\n$r = new ReflectionClass('foo');\nforeach ($r->GetProperties() as $p)\n{\n    echo $p->getName(). \" \". $p->getDeclaringClass()->getName().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
