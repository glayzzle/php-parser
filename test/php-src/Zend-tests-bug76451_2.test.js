// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76451_2.phpt
  it("Bug #76451: Aliases during inheritance type checks affected by opcache (variation)", function () {
    expect(parser.parseCode("<?php\nclass Foo {}\nclass_alias('Foo', 'Bar');\nrequire __DIR__ . '/bug76451_2.inc';\n?>\n===DONE===")).toMatchSnapshot();
  });
});
