// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closures/closure_instantiate.phpt
  it("Closures cannot be instantiated directly", function () {
    expect(parser.parseCode("<?php\ntry {\n    // Closures should be instantiatable using new\n    $x = new Closure();\n} catch (Exception $e) {\n    // Instantiating a closure is an error, not an exception, so we shouldn't see this\n    echo 'EXCEPTION: ', $e->getMessage();\n} catch (Throwable $e) {\n    // This is the message that we should see for a caught error\n    echo 'ERROR: ', $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
