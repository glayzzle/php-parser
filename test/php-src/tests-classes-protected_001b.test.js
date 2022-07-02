// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/protected_001b.phpt
  it("ZE2 A protected method can only be called inside the class", function () {
    expect(parser.parseCode("<?php\nclass pass {\n    protected function fail() {\n        echo \"Call fail()\\n\";\n    }\n    public function good() {\n        $this->fail();\n    }\n}\n$t = new pass();\n$t->good();\n$t->fail();// must fail because we are calling from outside of class pass\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
