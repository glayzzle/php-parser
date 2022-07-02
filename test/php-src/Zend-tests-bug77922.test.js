// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77922.phpt
  it("Bug #77922: Double release of doc comment on inherited shadow property", function () {
    expect(parser.parseCode("<?php\nclass A {\n    /** Foo */\n    private $prop;\n}\nclass B extends A {\n}\nclass C extends B {\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
