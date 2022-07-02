// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/offset_object.phpt
  it("accessing object dimension", function () {
    expect(parser.parseCode("<?php\n$object = new stdClass;\nvar_dump($object[1]);\n?>")).toMatchSnapshot();
  });
});
