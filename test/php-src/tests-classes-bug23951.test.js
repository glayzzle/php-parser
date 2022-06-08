// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/bug23951.phpt
  it("Bug #23951 (Defines not working in inherited classes)", function () {
    expect(parser.parseCode("<?php\ndefine('FOO1', 1);\ndefine('FOO2', 2);\nclass A {\n    public $a_var = array(FOO1=>'foo1_value', FOO2=>'foo2_value');\n}\nclass B extends A {\n    public $b_var = 'foo';\n}\n$a = new A;\n$b = new B;\nprint_r($a);\nprint_r($b->a_var);\nprint_r($b->b_var);\n?>")).toMatchSnapshot();
  });
});
