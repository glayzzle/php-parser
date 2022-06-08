// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug71838.phpt
  it("Bug #71839: Deserializing serialized SPLObjectStorage-Object can't access properties in PHP", function () {
    expect(parser.parseCode("<?php\nclass A extends SplObjectStorage {\n    protected $a = null;\n    public function __construct() {\n        $this->a = '123';\n    }\n    public function getA() {\n        return $this->a;\n    }\n}\n$serialized = serialize(new A());\n$obj = unserialize($serialized);\nvar_dump($obj->getA());\n?>")).toMatchSnapshot();
  });
});
