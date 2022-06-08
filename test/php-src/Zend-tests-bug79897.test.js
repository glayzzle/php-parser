// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79897.phpt
  it("bug79897: Promoted constructor params with attribs cause crash", function () {
    expect(parser.parseCode("<?php\n#[Attribute]\nclass B {\n    public function __construct($value)\n    {\n    }\n}\nclass A {\n    public function __construct(\n        #[B(12, X)] public $b\n    )\n    {\n    }\n}\nconst X = 42;\nvar_dump((new ReflectionParameter(['A', '__construct'], 'b'))->getAttributes()[0]->getArguments());\nvar_dump((new ReflectionProperty('A', 'b'))->getAttributes()[0]->getArguments());\n?>")).toMatchSnapshot();
  });
});
