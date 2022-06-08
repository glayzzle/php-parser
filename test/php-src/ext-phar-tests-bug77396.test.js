// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug77396.phpt
  it("Bug #77396 Relative filename exceeding maximum path length causes null pointer dereference.", function () {
    expect(parser.parseCode("<?php\n$path = '../' . str_repeat(\"x\", PHP_MAXPATHLEN) . '.tar';\ntry {\n    $phar = new PharData($path);\n} catch (UnexpectedValueException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
