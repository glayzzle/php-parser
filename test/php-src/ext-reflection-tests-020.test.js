// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/020.phpt
  it("ReflectionObject::hasProperty", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public    $p1;\n    protected $p2;\n    private   $p3;\n    function __isset($name) {\n        var_dump($name);\n        return false;\n    }\n}\n$obj = new ReflectionObject(new Foo());\nvar_dump($obj->hasProperty(\"p1\"));\nvar_dump($obj->hasProperty(\"p2\"));\nvar_dump($obj->hasProperty(\"p3\"));\nvar_dump($obj->hasProperty(\"p4\"));\n?>")).toMatchSnapshot();
  });
});
