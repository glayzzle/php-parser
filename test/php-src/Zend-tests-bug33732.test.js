// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33732.phpt
  it("Bug #33732 (Wrong behavior of constants in class and interface extending)", function () {
    expect(parser.parseCode("<?php\ninterface iA {\n  const cA = \"const of iA\\n\";\n}\nclass A implements iA {\n}\nclass B extends A implements iA {\n}\necho iA::cA;\necho A::cA;\necho B::cA;\ninterface iA2 {\n    const cA = \"const of iA2\\n\";\n}\ninterface iB2 extends iA2 {\n}\nclass A2 implements iA2 {\n}\nclass B2 extends A2 implements iA2 {\n}\necho iA2::cA;\necho A2::cA;\necho iB2::cA;\necho B2::cA;\n?>")).toMatchSnapshot();
  });
});
