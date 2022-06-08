// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_new_initializer.phpt
  it("ReflectionParameter::__toString() with new initializer", function () {
    expect(parser.parseCode("<?php\nfunction test(\n    $p1 = new stdClass,\n    $p2 = new SomeClass(new With, some: new Parameters)\n) {}\necho new ReflectionParameter('test', 'p1'), \"\\n\";\necho new ReflectionParameter('test', 'p2'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
