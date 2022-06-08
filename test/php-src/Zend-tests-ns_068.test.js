// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_068.phpt
  it("068: Code before namespace", function () {
    expect(parser.parseCode("<?php\necho __NAMESPACE__ . \"\\n\";\nnamespace foo;\necho __NAMESPACE__ . \"\\n\";\nnamespace bar;\necho __NAMESPACE__ . \"\\n\";\n?>\n===DONE===")).toMatchSnapshot();
  });
});
