// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/bug_50558.phpt
  it("Bug #50558 - Broken object model when extending tidy", function () {
    expect(parser.parseCode("<?php\nclass MyTidy extends tidy\n{\n            // foo\n}\nfunction doSomething(MyTidy $o)\n{\n            var_dump($o);\n}\n$o = new MyTidy();\nvar_dump($o instanceof MyTidy);\ndoSomething($o);\n?>")).toMatchSnapshot();
  });
});
