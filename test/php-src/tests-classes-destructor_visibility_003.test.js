// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/destructor_visibility_003.phpt
  it("ZE2 Ensuring destructor visibility", function () {
    expect(parser.parseCode("<?php\nclass Base {\n    private function __destruct() {\n        echo __METHOD__ . \"\\n\";\n    }\n}\nclass Derived extends Base {\n    public function __destruct() {\n        echo __METHOD__ . \"\\n\";\n    }\n}\n$obj = new Derived;\nunset($obj); // Derived::__destruct is being called not Base::__destruct\n?>")).toMatchSnapshot();
  });
});
