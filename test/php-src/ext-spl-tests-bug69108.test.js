// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug69108.phpt
  it("Bug #69108 (\"Segmentation fault\" when (de)serializing SplObjectStorage)", function () {
    expect(parser.parseCode("<?php\n$a = array();\n$b = new SplObjectStorage();\nfor ($i = 10000; $i > 0; $i--) {\n        $object = new StdClass();\n            $a[] = $object;\n            $b->attach($object);\n}\n$c = serialize(array($a, $b));\n$d = unserialize($c);\nunset($d);\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
