// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/observer_006.phpt
  it("SPL: SplObjectStorage with accociatied information", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    public $test = 25;\n    public function __construct($test = 42)\n    {\n        $this->test = $test;\n    }\n}\nclass MyStorage extends SplObjectStorage\n{\n    public $bla = 25;\n    public function __construct($bla = 26)\n    {\n        $this->bla = $bla;\n    }\n}\n$storage = new MyStorage();\nforeach(array(1=>\"foo\",2=>42) as $key => $value)\n{\n     $storage->attach(new TestClass($key), $value);\n}\nvar_dump(count($storage));\nforeach($storage as $object)\n{\n    var_dump($object->test);\n}\nvar_dump($storage);\nvar_dump(serialize($storage));\necho \"===UNSERIALIZE===\\n\";\n$storage2 = unserialize(serialize($storage));\nvar_dump(count($storage2));\nforeach($storage2 as $object)\n{\n    var_dump($object->test);\n}\nvar_dump($storage2);\n$storage->attach(new TestClass(3), new stdClass);\n$storage->attach(new TestClass(4), new TestClass(5));\necho \"===UNSERIALIZE2===\\n\";\nvar_dump(unserialize(serialize($storage)));\n$storage->rewind();\n$storage->next();\nvar_dump($storage->key());\nvar_dump($storage->current());\nvar_dump($storage->getInfo());\n$storage->setInfo(\"bar\");\nvar_dump($storage->getInfo());\necho \"===UNSERIALIZE3===\\n\";\nvar_dump(unserialize(serialize($storage)));\n$storage->rewind();\n$storage->next();\n$storage->next();\nvar_dump($storage->key());\nvar_dump($storage->current());\n$storage->attach($storage->current(), \"replaced\");\necho \"===UNSERIALIZE4===\\n\";\nvar_dump(unserialize(serialize($storage)));\n?>")).toMatchSnapshot();
  });
});
