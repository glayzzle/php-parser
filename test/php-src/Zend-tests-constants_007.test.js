// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants_007.phpt
  it("Testing const names", function () {
    expect(parser.parseCode("<?php\nconst a = 'a';\nconst A = 'b';\nclass a {\n    const a = 'c';\n    const A = 'd';\n}\nvar_dump(a, A, a::a, a::A);\n?>")).toMatchSnapshot();
  });
});
