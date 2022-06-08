// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/internal_property_union_type.phpt
  it("Union type on internal property", function () {
    expect(parser.parseCode("<?php\n$rp = new ReflectionProperty(_ZendTestClass::class, 'classUnionProp');\n$rt = $rp->getType();\necho $rt, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
