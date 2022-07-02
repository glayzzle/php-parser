// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_093.phpt
  it("Group use declarations and whitespace nuances", function () {
    expect(parser.parseCode("<?php\n// should not throw syntax errors\nuse Foo\\Bar     \\{ A };\nuse Foo\\Bar\\    { B };\nuse Foo\\Bar\n\\{\n    C\n};\nuse Foo\\Bar\\\n{\n    D\n};\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
