// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug49972.phpt
  it("Bug #49972 (AppendIterator undefined function crash)", function () {
    expect(parser.parseCode("<?php\n$iterator = new AppendIterator();\n$iterator->undefined();\n?>")).toMatchSnapshot();
  });
});
