// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug46031.phpt
  it("Bug #46031 (Segfault in AppendIterator::next)", function () {
    expect(parser.parseCode("<?php\n$x = new AppendIterator();\nvar_dump($x->next());\n?>")).toMatchSnapshot();
  });
});
