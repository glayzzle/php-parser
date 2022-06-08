// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/no_class_const_propagation_in_closures.phpt
  it("self:: class constants should not be propagated into closures, due to scope rebinding", function () {
    expect(parser.parseCode("<?php\nclass A {\n    const C = 'A::C';\n    public function f() {\n        return function() {\n            return self::C;\n        };\n    }\n}\nclass B {\n    const C = 'B::C';\n}\n$f = (new A)->f();\nvar_dump($f->bindTo(new B, 'B')());\n?>")).toMatchSnapshot();
  });
});
