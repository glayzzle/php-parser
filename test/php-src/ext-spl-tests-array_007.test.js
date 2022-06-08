// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_007.phpt
  it("SPL: ArrayObject/Iterator from IteratorAggregate", function () {
    expect(parser.parseCode("<?php\n// This test also needs to exclude the protected and private variables\n// since they cannot be accessed from the external object which iterates\n// them.\nclass test implements IteratorAggregate\n{\n    public    $pub = \"public\";\n    protected $pro = \"protected\";\n    private   $pri = \"private\";\n    function __construct()\n    {\n        $this->imp = \"implicit\";\n    }\n    function getIterator(): Traversable\n    {\n        $it = new ArrayObject($this);\n        return $it->getIterator();\n    }\n};\n$test = new test;\n$test->dyn = \"dynamic\";\nprint_r($test);\nprint_r($test->getIterator());\nforeach($test as $key => $val)\n{\n    echo \"$key => $val\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
