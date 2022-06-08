// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug77298.phpt
  it("Bug #77298 (segfault occurs when add property to unserialized ArrayObject)", function () {
    expect(parser.parseCode("<?php\n$o = new ArrayObject();\n$o2 = unserialize(serialize($o));\n$o2[1]=123;\nvar_dump($o2);\n$o3 = new ArrayObject();\n$o3->unserialize($o->serialize());\n$o3['xm']=456;\nvar_dump($o3);\n?>")).toMatchSnapshot();
  });
});
