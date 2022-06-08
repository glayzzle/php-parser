// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_buildfromiterator1.phpt
  it("Phar::buildFromIterator() readonly", function () {
    expect(parser.parseCode("<?php\n$phar = new Phar(__DIR__ . '/buildfromiterator1.phar');\ntry {\n    ini_set('phar.readonly', 1);\n    $phar->buildFromIterator(new ArrayIterator([]));\n} catch (Exception $e) {\n    var_dump(get_class($e));\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
