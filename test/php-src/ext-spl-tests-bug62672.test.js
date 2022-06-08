// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug62672.phpt
  it("Bug #62672 (Error on serialize of ArrayObject)", function () {
    expect(parser.parseCode("<?php\nclass ObjA\n{\n    private $_varA;\n    public function __construct(Iterator $source)\n    {\n        $this->_varA = $source;\n    }\n}\nclass ObjB extends ObjA\n{\n    private $_varB;\n    public function __construct(ArrayObject $keys)\n    {\n        $this->_varB = $keys;\n        parent::__construct($keys->getIterator());\n    }\n}\n$obj = new ObjB(new ArrayObject());\nvar_dump($obj == unserialize(serialize($obj)));\n?>")).toMatchSnapshot();
  });
});
