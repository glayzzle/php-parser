// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug28822.phpt
  it("Bug #28822 (ArrayObject::offsetExists() works inverted)", function () {
    expect(parser.parseCode("<?php\n$array = new ArrayObject();\n$array->offsetSet('key', 'value');\nvar_dump($array->offsetExists('key'));\nvar_dump($array->offsetExists('nokey'));\n?>")).toMatchSnapshot();
  });
});
