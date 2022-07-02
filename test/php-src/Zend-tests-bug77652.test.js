// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77652.phpt
  it("Bug #77652: Anonymous classes can lose their interface information", function () {
    expect(parser.parseCode("<?php\ninterface I {}\nrequire __DIR__ . '/bug77652.inc';\n$data = require __DIR__ . '/bug77652.inc';\nprint_r(class_implements($data['I']()));\n?>")).toMatchSnapshot();
  });
});
