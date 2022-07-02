// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_016.phpt
  it("Object serialization / unserialization: circular object with rc=1", function () {
    expect(parser.parseCode("<?php\n$t=new stdClass;\n$t->y=$t;\n$y=(array)$t;\nunset($t);\nvar_dump($y);\n$s=serialize($y);\nvar_dump($s);\n$x=unserialize($s);\nvar_dump($x);\nvaR_dump(serialize($x));\n?>")).toMatchSnapshot();
  });
});
