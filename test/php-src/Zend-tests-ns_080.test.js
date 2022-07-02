// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_080.phpt
  it("080: bracketed namespaces and __HALT_COMPILER();", function () {
    expect(parser.parseCode("<?php\nnamespace foo {\necho \"hi\\n\";\n}\n__HALT_COMPILER();\nnamespace unprocessed {\necho \"should not echo\\n\";\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
