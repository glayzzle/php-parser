// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_exchangeArray_basic2.phpt
  it("SPL: ArrayObject::exchangeArray() with various object arguments", function () {
    expect(parser.parseCode("<?php\necho \"--> exchangeArray(array):\\n\";\n$ao = new ArrayObject();\n$ao->exchangeArray(array('key'=>'original'));\nvar_dump($ao['key']);\nvar_dump($ao);\necho \"\\n--> exchangeArray(normal object):\\n\";\n$obj = new stdClass;\n$obj->key = 'normal object prop';\n$ao->exchangeArray($obj);\nvar_dump($ao['key']);\nvar_dump($ao);\necho \"\\n--> exchangeArray(ArrayObject):\\n\";\n$obj = new ArrayObject(array('key'=>'ArrayObject element'));\n$ao->exchangeArray($obj);\nvar_dump($ao['key']);\nvar_dump($ao);\necho \"\\n--> exchangeArray(ArrayIterator):\\n\";\n$obj = new ArrayIterator(array('key'=>'ArrayIterator element'));\n$ao->exchangeArray($obj);\nvar_dump($ao['key']);\nvar_dump($ao);\necho \"\\n--> exchangeArray(nested ArrayObject):\\n\";\n$obj = new ArrayObject(new ArrayObject(array('key'=>'nested ArrayObject element')));\n$ao->exchangeArray($obj);\nvar_dump($ao['key']);\nvar_dump($ao);\n?>")).toMatchSnapshot();
  });
});
