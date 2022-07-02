// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_085.phpt
  it("085: bracketed namespace", function () {
    expect(parser.parseCode("<?php\nnamespace foo {\nuse \\foo;\nclass bar {\n    function __construct() {echo __METHOD__,\"\\n\";}\n}\nnew foo;\nnew bar;\n}\nnamespace {\nclass foo {\n    function __construct() {echo __METHOD__,\"\\n\";}\n}\nuse foo\\bar as foo1;\nnew foo1;\nnew foo;\necho \"===DONE===\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
