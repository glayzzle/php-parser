// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug45139.phpt
  it("Bug #45139 (ReflectionProperty returns incorrect declaring class)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private $foo;\n}\nclass B extends A {\n    protected $bar;\n    private $baz;\n    private $quux;\n}\nclass C extends B {\n    public $foo;\n    private $baz;\n    protected $quux;\n}\n$rc = new ReflectionClass('C');\n$rp = $rc->getProperty('foo');\nvar_dump($rp->getDeclaringClass()->getName()); // c\n$rc = new ReflectionClass('A');\n$rp = $rc->getProperty('foo');\nvar_dump($rp->getDeclaringClass()->getName()); // A\n$rc = new ReflectionClass('B');\n$rp = $rc->getProperty('bar');\nvar_dump($rp->getDeclaringClass()->getName()); // B\n$rc = new ReflectionClass('C');\n$rp = $rc->getProperty('bar');\nvar_dump($rp->getDeclaringClass()->getName()); // B\n$rc = new ReflectionClass('C');\n$rp = $rc->getProperty('baz');\nvar_dump($rp->getDeclaringClass()->getName()); // C\n$rc = new ReflectionClass('B');\n$rp = $rc->getProperty('baz');\nvar_dump($rp->getDeclaringClass()->getName()); // B\n$rc = new ReflectionClass('C');\n$rp = $rc->getProperty('quux');\nvar_dump($rp->getDeclaringClass()->getName()); // C\n?>")).toMatchSnapshot();
  });
});
