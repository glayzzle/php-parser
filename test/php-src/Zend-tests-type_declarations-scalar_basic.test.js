// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_basic.phpt
  it("Scalar type basics", function () {
    expect(parser.parseCode("<?php\n$errnames = [\n    E_NOTICE => 'E_NOTICE',\n    E_WARNING => 'E_WARNING',\n    E_DEPRECATED => 'E_DEPRECATED'\n];\nset_error_handler(function (int $errno, string $errmsg, string $file, int $line) use ($errnames) {\n    echo \"$errnames[$errno]: $errmsg on line $line\\n\";\n    return true;\n});\n$functions = [\n    'int' => function (int $i) { return $i; },\n    'float' => function (float $f) { return $f; },\n    'string' => function (string $s) { return $s; },\n    'bool' => function (bool $b) { return $b; }\n];\nclass StringCapable implements Stringable {\n    public function __toString() {\n        return \"foobar\";\n    }\n}\n$values = [\n    1,\n    \"1\",\n    1.0,\n    1.5,\n    \"1a\",\n    \"a\",\n    \"\",\n    PHP_INT_MAX,\n    NAN,\n    TRUE,\n    FALSE,\n    NULL,\n    [],\n    new StdClass,\n    new StringCapable,\n    fopen(\"data:text/plain,foobar\", \"r\")\n];\nforeach ($functions as $type => $function) {\n    echo PHP_EOL, \"Testing '$type' type:\", PHP_EOL;\n    foreach ($values as $value) {\n        echo PHP_EOL . \"*** Trying \";\n        var_dump($value);\n        try {\n            var_dump($function($value));\n        } catch (\\TypeError $e) {\n            echo \"*** Caught \" . $e->getMessage() . PHP_EOL;\n        }\n    }\n}\necho PHP_EOL . \"Done\";\n?>")).toMatchSnapshot();
  });
});
