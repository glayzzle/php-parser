// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_multicatch_004.phpt
  it("Catch last exception in the multicatch", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/exceptions.inc';\ntry {\n    echo 'TRY' . PHP_EOL;\n    throw new Exception3;\n} catch(Exception1 | Exception2 | Exception3 $e) {\n    echo get_class($e) . PHP_EOL;\n} finally {\n    echo 'FINALLY' . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
