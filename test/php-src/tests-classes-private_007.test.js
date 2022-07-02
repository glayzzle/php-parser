// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/private_007.phpt
  it("ZE2 A derived class does not know about privates of ancestors", function () {
    expect(parser.parseCode("<?php\nclass Bar {\n    public static function pub() {\n        Bar::priv();\n    }\n    private static function priv()\t{\n        echo \"Bar::priv()\\n\";\n    }\n}\nclass Foo extends Bar {\n    public static function priv()\t{\n        echo \"Foo::priv()\\n\";\n    }\n}\nFoo::pub();\nFoo::priv();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
