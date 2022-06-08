// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_class_constants.phpt
  it("PDO OCI specific class constants", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\n$expected = [\n    'OCI_ATTR_CLIENT_INFO'        => true,\n    'OCI_ATTR_ACTION'             => true,\n    'OCI_ATTR_CLIENT_IDENTIFIER'  => true,\n    'OCI_ATTR_MODULE'             => true,\n    'OCI_ATTR_CALL_TIMEOUT'       => true,\n];\n$ref = new ReflectionClass('PDO');\n$constants = $ref->getConstants();\n$values = [];\nforeach ($constants as $name => $value) {\n    if (substr($name, 0, 8) == 'OCI_ATTR') {\n        if (!isset($values[$value])) {\n            $values[$value] = [$name];\n        } else {\n            $values[$value][] = $name;\n        }\n        if (isset($expected[$name])) {\n            unset($expected[$name]);\n            unset($constants[$name]);\n        }\n        } else {\n            unset($constants[$name]);\n        }\n}\nif (!empty($constants)) {\n    printf(\"[001] Dumping list of unexpected constants\\n\");\n    var_dump($constants);\n}\nif (!empty($expected)) {\n    printf(\"[002] Dumping list of missing constants\\n\");\n    var_dump($expected);\n}\nif (!empty($values)) {\n    foreach ($values as $value => $constants) {\n        if (count($constants) > 1) {\n            printf(\"[003] Several constants share the same value '%s'\\n\", $value);\n            var_dump($constants);\n        }\n    }\n}\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
