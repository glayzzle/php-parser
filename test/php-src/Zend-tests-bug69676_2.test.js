// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69676_2.phpt
  it("Bug #69676: Resolution of self::FOO in class constants not correct (variation)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    const A = 'Foo::A';\n    const B = self::A . ' and ' . self::C;\n    const C = 'Foo::C';\n}\nclass Bar extends Foo {\n    const A = 'Bar::A';\n    const C = 'Bar::C';\n}\nvar_dump(Bar::B);\n?>")).toMatchSnapshot();
  });
});
