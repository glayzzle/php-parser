// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/DirectoryIterator_uninitialized.phpt
  it("Using an uninitialized DirectoryIterator", function () {
    expect(parser.parseCode("<?php\nclass MyDirectoryIterator extends DirectoryIterator {\n    public function __construct() {}\n}\n$it = new MyDirectoryIterator;\ntry {\n    $it->key();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
