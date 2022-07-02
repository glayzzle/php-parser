// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/nested_method_calls.phpt
  it("Yield can be used in nested method calls", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function foo() {\n        echo \"Called A::foo\\n\";\n    }\n}\nclass B {\n    function foo() {\n        echo \"Called B::foo\\n\";\n    }\n}\nfunction gen($obj) {\n    $obj->foo($obj->foo(yield));\n}\n$g1 = gen(new A);\n$g1->current();\n$g2 = gen(new B);\n$g2->current();\n$g1->next();\n$g2->next();\n?>")).toMatchSnapshot();
  });
});
