// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug40899.phpt
  it("Bug #40899 (memory leak when nesting list())", function () {
    expect(parser.parseCode("<?php\nlist(list($a,$b),$c)=array(array('a','b'),'c');\necho \"$a$b$c\\n\";\n?>")).toMatchSnapshot();
  });
});
