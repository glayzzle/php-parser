// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/observer_003.phpt
  it("SPL: SplObjectStorage serialization", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    public $test = 25;\n    public function __construct($test = 42)\n    {\n        $this->test = $test;\n    }\n}\n$storage = new SplObjectStorage();\nforeach(array(1,\"2\",\"foo\",true) as $value)\n{\n     $storage->attach(new TestClass($value));\n}\nvar_dump(count($storage));\nforeach($storage as $object)\n{\n    var_dump($object->test);\n}\nvar_dump(serialize($storage));\necho \"===UNSERIALIZE===\\n\";\n$storage2 = unserialize(serialize($storage));\nvar_dump(count($storage2));\nforeach($storage2 as $object)\n{\n    var_dump($object->test);\n}\n?>")).toMatchSnapshot();
  });
});
