// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/observer_005.phpt
  it("SPL: SplObjectStorage serialization & visibility", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    public    $def = 24;\n    public    $pub = 25;\n    protected $pro = 26;\n    private   $pri = 27;\n    public function __construct($pub = 42, $pro = 43, $pri = 44)\n    {\n        $this->pub = $pub;\n        $this->pro = $pro;\n        $this->pri = $pri;\n    }\n}\nclass ExtTestClass\n{\n}\nclass MyStorage extends SplObjectStorage\n{\n    public    $def = 24;\n    public    $pub = 25;\n    protected $pro = 26;\n    private   $pri = 27;\n    public function __construct($pub = 52, $pro = 53, $pri = 54)\n    {\n        $this->pub = $pub;\n        $this->pro = $pro;\n        $this->pri = $pri;\n    }\n}\nclass ExtStorage extends MyStorage\n{\n}\n$storage = new MyStorage(1,2,3);\nforeach(array(array(4,5,6),array(7,8,9)) as $value)\n{\n     $storage->attach(new TestClass($value[0], $value[1], $value[2]));\n}\nvar_dump(count($storage));\nforeach($storage as $object)\n{\n    var_dump($object);\n}\nvar_dump($storage);\nvar_dump(serialize($storage));\necho \"===UNSERIALIZE===\\n\";\n$storage2 = unserialize(serialize($storage));\nvar_dump(count($storage2));\nforeach($storage2 as $object)\n{\n    var_dump($object);\n}\nvar_dump($storage2);\n?>")).toMatchSnapshot();
  });
});
