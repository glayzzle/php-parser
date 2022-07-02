// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constructor_args.phpt
  it("Different numbers of arguments in __construct()", function () {
    expect(parser.parseCode("<?php\ninterface foobar {\n    function __construct();\n}\nabstract class bar implements foobar {\n    public function __construct($x = 1) {\n    }\n}\nfinal class foo extends bar implements foobar {\n    public function __construct($x = 1, $y = 2) {\n    }\n}\nnew foo;\nprint \"ok!\";\n?>")).toMatchSnapshot();
  });
});
