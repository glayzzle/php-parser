// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_010.phpt
  it("SPL: FixedArray: Setting size", function () {
    expect(parser.parseCode("<?php\n$a = new SplFixedArray(0);\n$a = new SplFixedArray(3);\n$a[0] = 1;\n$a->setSize(2);\n$a->setSize(3);\n$a->setSize(0);\n$a = new SplFixedArray(0);\n$a->setSize(0);\nvar_dump($a->getSize());\n$a = new SplFixedArray(10);\n$a->setSize(10);\nvar_dump($a->getSize());\n$a = new SplFixedArray(1);\n$a->setSize(5);\nvar_dump($a->getSize());\n$a = new SplFixedArray(20);\n$a->setSize(3);\nvar_dump($a->getSize());\n$a = new SplFixedArray(3);\n$a[0] = \"test\";\n$a[1] = array(1,2,\"blah\");\n$a[2] = 1;\n$a[0] = \"test\";\n$a->setSize(0);\nvar_dump($a->getSize());\nprint \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
