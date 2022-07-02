// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_063.phpt
  it("063: Old-style constructors in namesapces (not supported!)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nclass Bar {\n    function Bar() {\n        echo \"ok\\n\";\n    }\n}\nnew Bar();\necho \"ok\\n\";")).toMatchSnapshot();
  });
});
