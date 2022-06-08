// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_call_string_002.phpt
  it("Indirect call with empty class and/or method name.", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    public static function __callStatic($method, array $args)\n    {\n        var_dump($method);\n    }\n}\n// Test call using array syntax\n$callback = ['TestClass', ''];\n$callback();\n// Test call using Class::method syntax.\n$callback = 'TestClass::';\n$callback();\n// Test array syntax with empty class name\n$callback = ['', 'method'];\ntry {\n    $callback();\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n// Test Class::method syntax with empty class name\n$callback = '::method';\ntry {\n    $callback();\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n// Test array syntax with empty class and method name\n$callback = ['', ''];\ntry {\n    $callback();\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n// Test Class::method syntax with empty class and method name\n$callback = '::';\ntry {\n    $callback();\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n// Test string ending in single colon\n$callback = 'Class:';\ntry {\n    $callback();\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n// Test string beginning in single colon\n$callback = ':method';\ntry {\n    $callback();\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n// Test single colon\n$callback = ':';\ntry {\n    $callback();\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
