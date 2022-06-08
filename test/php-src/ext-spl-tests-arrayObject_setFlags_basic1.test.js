// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_setFlags_basic1.phpt
  it("SPL: ArrayObject::setFlags basic usage with ArrayObject::ARRAY_AS_PROPS. Currently fails on php.net due to bug 45622.", function () {
    expect(parser.parseCode("<?php\nclass C extends ArrayObject {\n    public $p = 'object property';\n}\nfunction access_p($ao) {\n  // isset\n  var_dump(isset($ao->p));\n  // read\n  var_dump($ao->p);\n  // write\n  $ao->p = $ao->p . '.changed';\n  var_dump($ao->p);\n}\n$ao = new C(array('p'=>'array element'));\n$ao->setFlags(ArrayObject::ARRAY_AS_PROPS);\necho \"\\n--> Access the real property:\\n\";\naccess_p($ao);\necho \"\\n--> Remove the real property and access the array element:\\n\";\nunset($ao->p);\naccess_p($ao);\necho \"\\n--> Remove the array element and try access again:\\n\";\nunset($ao->p);\naccess_p($ao);\n?>")).toMatchSnapshot();
  });
});
