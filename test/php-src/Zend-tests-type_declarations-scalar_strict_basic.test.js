// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_strict_basic.phpt
  it("Strict scalar type basics", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\n$functions = [\n    'int' => function (int $i) { return $i; },\n    'float' => function (float $f) { return $f; },\n    'string' => function (string $s) { return $s; },\n    'bool' => function (bool $b) { return $b; }\n];\n$values = [\n    1,\n    1.0,\n    \"1\",\n    TRUE,\n    FALSE,\n    NULL,\n    [],\n    new StdClass,\n    fopen(\"data:text/plain,foobar\", \"r\")\n];\nfunction type($value) {\n    if (is_float($value)) {\n        return \"float\";\n    } else if (is_bool($value)) {\n        return $value ? \"true\" : \"false\";\n    } else if (is_null($value)) {\n        return \"null\";\n    } else {\n        return gettype($value);\n    }\n}\nforeach ($functions as $type => $function) {\n    echo PHP_EOL, \"Testing '$type' type:\", PHP_EOL;\n    foreach ($values as $value) {\n        $errored = false;\n        echo PHP_EOL . \"*** Trying \", type($value), \" value\", PHP_EOL;\n        try {\n            var_dump($function($value));\n        } catch (TypeError $e) {\n            echo \"*** Caught \" . $e->getMessage() . PHP_EOL;\n        }\n    }\n}\necho PHP_EOL . \"Done\";\n?>")).toMatchSnapshot();
  });
});
