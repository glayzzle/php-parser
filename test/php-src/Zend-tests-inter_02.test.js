// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/inter_02.phpt
  it("Namespace constant as value default", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nerror_reporting(E_ALL);\ninterface foo {\n    const foo = 2;\n}\nfunction foo($x = \\foo\\foo::foo) {\n    var_dump($x);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
