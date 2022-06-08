// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_multicatch_001.phpt
  it("Parsing test", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/exceptions.inc';\ntry {\n    echo 'TRY' . PHP_EOL;\n} catch(Exception1 | Exception2 $e) {\n    echo 'Exception';\n} finally {\n    echo 'FINALLY' . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
