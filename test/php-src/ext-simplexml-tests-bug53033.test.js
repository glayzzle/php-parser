// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug53033.phpt
  it("Bug #53033: Mathematical operations convert objects to integers", function () {
    expect(parser.parseCode("<?php\n$x = simplexml_load_string('<x>2.5</x>');\nvar_dump($x*1);\n// type of other operand is irrelevant\nvar_dump($x*1.0);\n// strings behave differently\n$y = '2.5';\nvar_dump($y*1);\nvar_dump((string)$x*1);\n?>")).toMatchSnapshot();
  });
});
