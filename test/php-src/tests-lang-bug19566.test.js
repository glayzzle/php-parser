// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug19566.phpt
  it("Bug #19566 (get_declared_classes() segfaults)", function () {
    expect(parser.parseCode("<?php\nclass foo {}\n$result = get_declared_classes();\nvar_dump(array_search('foo', $result));\n?>")).toMatchSnapshot();
  });
});
