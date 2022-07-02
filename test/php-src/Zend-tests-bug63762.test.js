// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63762.phpt
  it("Bug #63762 - Sigsegv when Exception::$trace is changed by user", function () {
    expect(parser.parseCode("<?php\n$e = new Exception();\n$ref = new ReflectionProperty($e, 'trace');\necho \"Array of NULL:\\n\";\n$ref->setValue($e, array(NULL));\nvar_dump($e->getTraceAsString());\necho \"\\nArray of empty array:\\n\";\n$ref->setValue($e, array(array()));\nvar_dump($e->getTraceAsString());\necho \"\\nArray of array of NULL values:\\n\";\n$ref->setValue($e, array(array(\n    'file'  => NULL,\n    'line'  => NULL,\n    'class' => NULL,\n    'type'  => NULL,\n    'function' => NULL,\n    'args'  => NULL\n)));\nvar_dump($e->getTraceAsString());\n?>")).toMatchSnapshot();
  });
});
