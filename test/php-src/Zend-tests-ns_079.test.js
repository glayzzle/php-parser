// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_079.phpt
  it("079: nested namespaces", function () {
    expect(parser.parseCode("<?php\nnamespace foo {\n    namespace oops {\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
