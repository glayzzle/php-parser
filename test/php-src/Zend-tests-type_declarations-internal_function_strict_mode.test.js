// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/internal_function_strict_mode.phpt
  it("Scalar type - internal function strict mode", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\necho \"*** Trying Ord With Integer\" . PHP_EOL;\ntry {\n    var_dump(ord(1));\n} catch (TypeError $e) {\n    echo \"*** Caught \" . $e->getMessage() . PHP_EOL;\n}\necho \"*** Trying Array Map With Invalid Callback\" . PHP_EOL;\ntry {\n    array_map([null, \"bar\"], []);\n} catch (TypeError $e) {\n    echo \"*** Caught \" . $e->getMessage() . PHP_EOL;\n}\necho \"*** Trying Strlen With Float\" . PHP_EOL;\ntry {\n    var_dump(strlen(1.5));\n} catch (TypeError $e) {\n    echo \"*** Caught \" . $e->getMessage() . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
