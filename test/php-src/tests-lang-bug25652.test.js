// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug25652.phpt
  it("Bug #25652 (Calling Global functions dynamically fails from Class scope)", function () {
    expect(parser.parseCode("<?php\n    function testfunc ($var) {\n        echo \"testfunc $var\\n\";\n    }\n    class foo {\n        public $arr = array('testfunc');\n        function bar () {\n            $this->arr[0]('testvalue');\n        }\n    }\n    $a = new foo ();\n    $a->bar ();\n?>")).toMatchSnapshot();
  });
});
