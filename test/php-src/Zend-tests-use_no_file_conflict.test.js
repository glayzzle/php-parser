// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_no_file_conflict.phpt
  it("Use conflicts should not occur across files", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/use_no_file_conflict_1.inc';\nrequire __DIR__ . '/use_no_file_conflict_2.inc';\n?>\n===DONE===")).toMatchSnapshot();
  });
});
