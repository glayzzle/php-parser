// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_implemented.phpt
  it("ZE2 An interface is inherited", function () {
    expect(parser.parseCode("<?php\ninterface if_a {\n    function f_a();\n}\ninterface if_b extends if_a {\n    function f_b();\n}\nclass base {\n    function _is_a($sub) {\n        echo 'is_a('.get_class($this).', '.$sub.') = '.(($this instanceof $sub) ? 'yes' : 'no').\"\\n\";\n    }\n    function test() {\n        echo $this->_is_a('base');\n        echo $this->_is_a('derived_a');\n        echo $this->_is_a('derived_b');\n        echo $this->_is_a('derived_c');\n        echo $this->_is_a('derived_d');\n        echo $this->_is_a('if_a');\n        echo $this->_is_a('if_b');\n        echo \"\\n\";\n    }\n}\nclass derived_a extends base implements if_a {\n    function f_a() {}\n}\nclass derived_b extends base implements if_a, if_b {\n    function f_a() {}\n    function f_b() {}\n}\nclass derived_c extends derived_a implements if_b {\n    function f_b() {}\n}\nclass derived_d extends derived_c {\n}\n$t = new base();\n$t->test();\n$t = new derived_a();\n$t->test();\n$t = new derived_b();\n$t->test();\n$t = new derived_c();\n$t->test();\n$t = new derived_d();\n$t->test();\n?>")).toMatchSnapshot();
  });
});
