// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/constructor_promotion.phpt
  it("Using Reflection on promoted properties", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $z;\n    public function __construct(\n        public int $x,\n        /** @SomeAnnotation() */\n        public string $y = \"123\",\n        string $z = \"abc\",\n    ) {}\n}\n$rc = new ReflectionClass(Test::class);\necho $rc, \"\\n\";\n$y = $rc->getProperty('y');\nvar_dump($y->isPromoted());\nvar_dump($y->getDocComment());\n$z = $rc->getProperty('z');\nvar_dump($z->isPromoted());\necho \"\\n\";\n$rp = new ReflectionParameter([Test::class, '__construct'], 'y');\nvar_dump($rp->isPromoted());\n$rp = new ReflectionParameter([Test::class, '__construct'], 'z');\nvar_dump($rp->isPromoted());\n?>")).toMatchSnapshot();
  });
});
