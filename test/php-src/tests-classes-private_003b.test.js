// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/private_003b.phpt
  it("ZE2 A private method cannot be called in a derived class", function () {
    expect(parser.parseCode("<?php\nclass pass {\n    private function show() {\n        echo \"Call show()\\n\";\n    }\n    protected function good() {\n        $this->show();\n    }\n}\nclass fail extends pass {\n    public function ok() {\n        $this->good();\n    }\n    public function not_ok() {\n        $this->show();\n    }\n}\n$t = new fail();\n$t->ok();\n$t->not_ok(); // calling a private function\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
