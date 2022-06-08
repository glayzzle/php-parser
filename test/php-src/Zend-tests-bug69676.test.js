// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69676.phpt
  it("Bug #69676: Resolution of self::FOO in class constants not correct", function () {
    expect(parser.parseCode("<?php\nclass A {\n    const myConst = \"const in A\";\n    const myDynConst = self::myConst;\n}\nclass B extends A {\n    const myConst = \"const in B\";\n}\nvar_dump(B::myDynConst);\nvar_dump(A::myDynConst);\n?>")).toMatchSnapshot();
  });
});
