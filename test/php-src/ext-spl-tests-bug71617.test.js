// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug71617.phpt
  it("Bug #71617: private properties lost when unserializing ArrayObject", function () {
    expect(parser.parseCode("<?php\nclass Test extends ArrayObject\n{\n    private $name = null;\n    public function __construct(array $input)\n    {\n        parent::__construct($input, ArrayObject::ARRAY_AS_PROPS);\n    }\n    public function setName($name)\n    {\n        $this->name = $name;\n        return $this;\n    }\n    public function getName()\n    {\n        return $this->name;\n    }\n}\n$test = new Test(['a' => 'a', 'b' => 'b']);\n$test->setName('ok');\n$ser = serialize($test);\n$unSer = unserialize($ser);\nvar_dump($unSer->getName());\nvar_dump($unSer);\n?>")).toMatchSnapshot();
  });
});
