// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject___construct_basic5.phpt
  it("SPL: ArrayObject::__construct basic usage with ArrayObject::STD_PROP_LIST|ArrayObject::ARRAY_AS_PROPS. Currently fails on php.net due to bug 45622.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public $prop = 'C::prop.orig';\n}\nclass MyArrayObject extends ArrayObject {\n    public $prop = 'MyArrayObject::prop.orig';\n}\necho \"\\n--> Access prop on instance of ArrayObject with ArrayObject::STD_PROP_LIST|ArrayObject::ARRAY_AS_PROPS:\\n\";\n$c = new C;\n$ao = new ArrayObject($c, ArrayObject::STD_PROP_LIST|ArrayObject::ARRAY_AS_PROPS);\ntestAccess($c, $ao);\necho \"\\n--> Access prop on instance of MyArrayObject with ArrayObject::STD_PROP_LIST|ArrayObject::ARRAY_AS_PROPS:\\n\";\n$c = new C;\n$ao = new MyArrayObject($c, ArrayObject::STD_PROP_LIST|ArrayObject::ARRAY_AS_PROPS);\ntestAccess($c, $ao);\nfunction testAccess($c, $ao) {\n    echo \"  - Iteration:\\n\";\n    foreach ($ao as $key=>$value) {\n        echo \"      $key=>$value\\n\";\n    }\n    echo \"  - Read:\\n\";\n    @var_dump($ao->prop, $ao['prop']);\n    echo \"  - Write:\\n\";\n    $ao->prop = 'changed1';\n    $ao['prop'] = 'changed2';\n    var_dump($ao->prop, $ao['prop']);\n    echo \"  - Isset:\\n\";\n    var_dump(isset($ao->prop), isset($ao['prop']));\n    echo \"  - Unset:\\n\";\n    unset($ao->prop);\n    unset($ao['prop']);\n    var_dump($ao->prop, $ao['prop']);\n    echo \"  - After:\\n\";\n    var_dump($ao, $c);\n}\n?>")).toMatchSnapshot();
  });
});
