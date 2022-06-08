// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug71995.phpt
  it("Bug #71995 (Returning the same var twice from __sleep() produces broken serialized data)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $b;\n    public function __construct() {\n        $this->b = new StdClass();\n    }\n    public  function __sleep() {\n        return array(\"b\", \"b\");\n    }\n}\n$a = new A();\n$s = serialize($a);\nvar_dump($s);\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});
