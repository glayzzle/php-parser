// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug40398.phpt
  it("Bug #40398 (parent and self callback functions erroneously called statically)", function () {
    expect(parser.parseCode("<?php\nclass Base\n{\n    function __construct($msg)\n    {\n        echo __METHOD__ . \"($msg)\\n\";\n    }\n}\nclass Derived_1 extends Base\n{\n    public function __construct()\n    {\n        $args = func_get_args();\n        call_user_func_array(array($this, 'Base::__construct'), $args);\n    }\n}\nclass Derived_2 extends Base\n{\n    public function __construct()\n    {\n        $args = func_get_args();\n        call_user_func_array(array($this, 'parent::__construct'), $args);\n    }\n}\nclass Derived_3 extends Base\n{\n    public function __construct()\n    {\n        $args = func_get_args();\n        call_user_func_array('Base::__construct', $args);\n    }\n}\nclass Derived_4 extends Base\n{\n    public function __construct()\n    {\n        $args = func_get_args();\n        call_user_func_array('parent::__construct', $args);\n    }\n}\nclass Derived_5 extends Base\n{\n    public function __construct()\n    {\n        $args = func_get_args();\n        call_user_func_array(array('Base', '__construct'), $args);\n    }\n}\nclass Derived_6 extends Base\n{\n    public function __construct()\n    {\n        $args = func_get_args();\n        call_user_func_array(array('parent', '__construct'), $args);\n    }\n}\nnew Derived_1('1');\nnew Derived_2('2');\nnew Derived_3('3');\nnew Derived_4('4');\nnew Derived_5('5');\nnew Derived_6('6');\n?>")).toMatchSnapshot();
  });
});
