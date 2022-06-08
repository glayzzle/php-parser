// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug55305.phpt
  it("Bug #55305 (ref lost: 1st ref instantiated in class def, 2nd ref made w/o instantiating)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n  var $foo = \"test\";\n}\n$f = new Foo();\n$f->bar =& $f->foo;\nvar_dump($f->foo);\nvar_dump($f->bar);\n?>")).toMatchSnapshot();
  });
});
