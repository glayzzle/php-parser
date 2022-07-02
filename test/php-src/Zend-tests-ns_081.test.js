// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_081.phpt
  it("081: bracketed namespace with nested unbracketed namespace", function () {
    expect(parser.parseCode("<?php\nnamespace foo {\nuse \\foo;\nclass bar {\n    function __construct() {echo __METHOD__,\"\\n\";}\n}\nnew foo;\nnew bar;\nnamespace oops;\nclass foo {\n    function __construct() {echo __METHOD__,\"\\n\";}\n}\nuse foo\\bar as foo1;\nnew foo1;\nnew foo;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
