// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug71412.phpt
  it("Bug#71412 ArrayIterator reflection parameter info", function () {
    expect(parser.parseCode("<?php\necho (new ReflectionMethod('ArrayIterator', '__construct'));\n?>")).toMatchSnapshot();
  });
});
