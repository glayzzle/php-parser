// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug40770.phpt
  it("Bug #40770 (Apache child exits when PHP memory limit reached)", function () {
    expect(parser.parseCode("<?php\nini_set('display_errors',true);\n$mb=148;\n$var = '';\nfor ($i=0; $i<=$mb; $i++) {\n        $var.= str_repeat('a',1*1024*1024);\n}\n?>")).toMatchSnapshot();
  });
});
