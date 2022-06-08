// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug39001.phpt
  it("Bug #39001 (ReflectionProperty returns incorrect declaring class for protected properties)", function () {
    expect(parser.parseCode("<?php\nclass Meta {\n}\nclass CParent extends Meta {\n    public $publicVar;\n    protected $protectedVar;\n}\nclass Child extends CParent {\n}\n$r = new ReflectionClass('Child');\nvar_dump($r->getProperty('publicVar')->getDeclaringClass()->getName());\nvar_dump($r->getProperty('protectedVar')->getDeclaringClass()->getName());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
