// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48228.phpt
  it("Bug #48228 (crash when exception is thrown while passing function arguments)", function () {
    expect(parser.parseCode("<?php\nfunction do_throw() {\n    throw new Exception();\n}\nclass aa\n{\n    function check()\n    {\n    }\n    function dosome()\n    {\n        $this->check(do_throw());\n    }\n}\n$l_aa=new aa();\n$l_aa->dosome();\n?>")).toMatchSnapshot();
  });
});
