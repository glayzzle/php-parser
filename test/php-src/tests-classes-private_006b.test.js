// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/private_006b.phpt
  it("ZE2 A private method can be overwritten in a second derived class", function () {
    expect(parser.parseCode("<?php\nclass first {\n    private function show() {\n        echo \"Call show()\\n\";\n    }\n    public function do_show() {\n        $this->show();\n    }\n}\n$t1 = new first();\n$t1->do_show();\nclass second extends first {\n}\n//$t2 = new second();\n//$t2->do_show();\nclass third extends second {\n    private function show() {\n        echo \"Call show()\\n\";\n    }\n}\n$t3 = new third();\n$t3->do_show();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
