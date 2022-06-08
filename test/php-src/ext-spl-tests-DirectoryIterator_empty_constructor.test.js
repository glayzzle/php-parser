// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/DirectoryIterator_empty_constructor.phpt
  it("DirectoryIterator: Test empty value to DirectoryIterator constructor", function () {
    expect(parser.parseCode("<?php\ntry {\n    $it = new DirectoryIterator(\"\");\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
