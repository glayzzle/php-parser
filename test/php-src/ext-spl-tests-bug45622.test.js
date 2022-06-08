// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug45622.phpt
  it("SPL: Bug #45622 (isset($arrayObject->p) misbehaves with ArrayObject::ARRAY_AS_PROPS set", function () {
    expect(parser.parseCode("<?php\nclass C extends ArrayObject {\n    public $p = 'object property';\n}\n$ao = new C(array('p'=>'array element'));\n$ao->setFlags(ArrayObject::ARRAY_AS_PROPS);\necho \"\\n--> Access the real property:\\n\";\nvar_dump(isset($ao->p));\nvar_dump($ao->p);\necho \"\\n--> Remove the real property and access the array element:\\n\";\nunset($ao->p);\nvar_dump(isset($ao->p));\nvar_dump($ao->p);\necho \"\\n--> Remove the array element and try access again:\\n\";\nunset($ao->p);\nvar_dump(isset($ao->p));\nvar_dump($ao->p);\necho \"\\n--> Re-add the real property:\\n\";\n$ao->p = 'object property';\nvar_dump(isset($ao->p));\nvar_dump($ao->p);\n?>")).toMatchSnapshot();
  });
});
