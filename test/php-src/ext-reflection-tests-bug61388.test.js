// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug61388.phpt
  it("ReflectionObject:getProperties() issues invalid reads when it get_properties returns a hash table with (inaccessible) dynamic numeric properties", function () {
    expect(parser.parseCode("<?php\n$x = new ArrayObject();\n$x[0] = 'test string 2';\n$x['test'] = 'test string 3';\n$reflObj = new ReflectionObject($x);\nprint_r($reflObj->getProperties(ReflectionProperty::IS_PUBLIC));\n$x = (object)array(\"a\", \"oo\" => \"b\");\n$reflObj = new ReflectionObject($x);\nprint_r($reflObj->getProperties(ReflectionProperty::IS_PUBLIC));\n?>")).toMatchSnapshot();
  });
});
