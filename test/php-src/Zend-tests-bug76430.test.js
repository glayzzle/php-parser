// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76430.phpt
  it("Bug #76430: __METHOD__ inconsistent outside of method", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    const X = __METHOD__;\n}\nfunction foo() {\n    class Bar {\n        const X = __METHOD__;\n    }\n}\nfoo();\nvar_dump(Foo::X);\nvar_dump(Bar::X);\n?>")).toMatchSnapshot();
  });
});
