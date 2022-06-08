// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/private_004b.phpt
  it("ZE2 A private method cannot be called in a derived class", function () {
    expect(parser.parseCode("<?php\nclass pass {\n    private function show() {\n        echo \"Call show()\\n\";\n    }\n    public function do_show() {\n        $this->show();\n    }\n}\nclass fail extends pass {\n    function do_show() {\n        $this->show();\n    }\n}\n$t = new pass();\n$t->do_show();\n$t2 = new fail();\n$t2->do_show();\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
