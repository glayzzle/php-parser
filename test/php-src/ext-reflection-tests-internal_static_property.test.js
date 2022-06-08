// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/internal_static_property.phpt
  it("ReflectionProperty::get/setValue() on internal static property", function () {
    expect(parser.parseCode("<?php\n$rp = new ReflectionProperty('_ZendTestClass', '_StaticProp');\n$rp->setValue(42);\nvar_dump($rp->getValue());\n?>")).toMatchSnapshot();
  });
});
