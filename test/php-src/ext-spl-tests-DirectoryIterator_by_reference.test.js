// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/DirectoryIterator_by_reference.phpt
  it("DirectoryIterator: test that you cannot use iterator with reference", function () {
    expect(parser.parseCode("<?php\n$it = new DirectoryIterator(__DIR__);\nforeach( $it as &$file ) {\n    echo $file . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
