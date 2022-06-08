// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug29828.phpt
  it("Reflection Bug #29828 (Interfaces no longer work)", function () {
    expect(parser.parseCode("<?php\ninterface Bla\n{\n    function bla();\n}\nclass BlaMore implements Bla\n{\n    function bla()\n    {\n        echo \"Hello\\n\";\n    }\n}\n$r = new ReflectionClass('BlaMore');\nvar_dump(count($r->getMethods()));\nvar_dump($r->getMethod('bla')->isConstructor());\nvar_dump($r->getMethod('bla')->isAbstract());\n$o=new BlaMore;\n$o->bla();\n?>")).toMatchSnapshot();
  });
});
