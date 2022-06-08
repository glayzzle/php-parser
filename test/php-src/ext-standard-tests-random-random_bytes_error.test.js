// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/random/random_bytes_error.phpt
  it("Test error operation of random_bytes()", function () {
    expect(parser.parseCode("<?php\n//-=-=-=-\ntry {\n    $bytes = random_bytes();\n} catch (TypeError $e) {\n    echo $e->getMessage().PHP_EOL;\n}\ntry {\n    $bytes = random_bytes(0);\n} catch (Error $e) {\n    echo $e->getMessage().PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
