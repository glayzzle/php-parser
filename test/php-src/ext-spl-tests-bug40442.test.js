// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug40442.phpt
  it("Bug #40442 (ArrayObject::offsetExists broke in 5.2.1, works in 5.2.0)", function () {
    expect(parser.parseCode("<?php\n$a = new ArrayObject();\n$a->offsetSet('property', 0);\nvar_dump($a->offsetExists('property'));\n?>")).toMatchSnapshot();
  });
});
