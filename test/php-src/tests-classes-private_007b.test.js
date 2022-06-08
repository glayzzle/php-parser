// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/private_007b.phpt
  it("ZE2 A derived class does not know about privates of ancestors", function () {
    expect(parser.parseCode("<?php\nclass Bar {\n    public function pub() {\n        $this->priv();\n    }\n    private function priv()\t{\n        echo \"Bar::priv()\\n\";\n    }\n}\nclass Foo extends Bar {\n    public function priv()\t{\n        echo \"Foo::priv()\\n\";\n    }\n}\n$obj = new Foo();\n$obj->pub();\n$obj->priv();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
