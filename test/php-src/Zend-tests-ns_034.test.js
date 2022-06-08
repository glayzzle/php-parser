// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_034.phpt
  it("034: Support for namespaces in compile-time constant reference", function () {
    expect(parser.parseCode("<?php\nnamespace A;\nuse A as B;\nclass Foo {\n    const C = \"ok\\n\";\n}\nfunction f1($x=Foo::C) {\n    echo $x;\n}\nfunction f2($x=B\\Foo::C) {\n    echo $x;\n}\nfunction f3($x=\\A\\Foo::C) {\n    echo $x;\n}\necho Foo::C;\necho B\\Foo::C;\necho \\A\\Foo::C;\nf1();\nf2();\nf3();\n?>")).toMatchSnapshot();
  });
});
