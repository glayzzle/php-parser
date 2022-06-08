// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/random/random_int_error.phpt
  it("Test error operation of random_int()", function () {
    expect(parser.parseCode("<?php\n//-=-=-=-\ntry {\n    $randomInt = random_int();\n} catch (TypeError $e) {\n    echo $e->getMessage().PHP_EOL;\n}\ntry {\n    $randomInt = random_int(42);\n} catch (TypeError $e) {\n    echo $e->getMessage().PHP_EOL;\n}\ntry {\n    $randomInt = random_int(42,0);\n} catch (Error $e) {\n    echo $e->getMessage().PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
