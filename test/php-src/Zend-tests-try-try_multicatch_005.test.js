// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_multicatch_005.phpt
  it("Catch exception in the nested multicatch", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/exceptions.inc';\ntry {\n    try {\n        echo 'TRY' . PHP_EOL;\n        throw new Exception3;\n    } catch (Exception1 | Exception3 $e) {\n        echo get_class($e) . PHP_EOL;\n    }\n} catch(Exception2 | Exception3 $e) {\n    echo 'Should never be executed';\n} finally {\n    echo 'FINALLY' . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
