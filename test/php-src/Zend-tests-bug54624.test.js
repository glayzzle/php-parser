// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug54624.phpt
  it("Bug #54624 (class_alias and type hint)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    function foo(A $param) {\n    }\n}\nclass_alias('A', 'AliasA');\neval('\n    class B extends A\n    {\n        function foo(AliasA $param) {\n        }\n    }\n');\necho \"DONE\\n\";\n?>")).toMatchSnapshot();
  });
});
