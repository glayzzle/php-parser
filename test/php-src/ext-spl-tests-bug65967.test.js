// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug65967.phpt
  it("Bug #65967: SplObjectStorage contains corrupt member variables after garbage collection", function () {
    expect(parser.parseCode("<?php\n$objstore = new SplObjectStorage();\ngc_collect_cycles();\nvar_export($objstore);\n?>")).toMatchSnapshot();
  });
});
