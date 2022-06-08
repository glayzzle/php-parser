// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/__set_data_corrupt.phpt
  it("ZE2 Data corruption in __set", function () {
    expect(parser.parseCode("<?php\n$f = 'c=\"foo\"';\nclass foo {\n        const foobar=1;\n        public $pp = array('t'=>null);\n        function bar() {\n                echo $this->t ='f';\n        }\n        function __get($prop)\n        {\n                return $this->pp[$prop];\n        }\n        function __set($prop, $val)\n        {\n                echo \"__set\";\n                $this->pp[$prop] = '';\n        }\n}\n$f = new foo;\n$f->bar();\n?>")).toMatchSnapshot();
  });
});
