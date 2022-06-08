// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_exchangeArray_basic1.phpt
  it("SPL: ArrayObject::exchangeArray() and copy-on-write references", function () {
    expect(parser.parseCode("<?php\n$ao = new ArrayObject();\n$swapIn = array();\n$cowRef = $swapIn; // create a copy-on-write ref to $swapIn\n$ao->exchangeArray($swapIn);\n$ao['a'] = 'adding element to $ao';\n$swapIn['b'] = 'adding element to $swapIn';\n$ao['c'] = 'adding another element to $ao';\necho \"\\n--> swapIn:  \";\nvar_dump($swapIn);\necho \"\\n--> cowRef:  \";\nvar_dump($cowRef);\necho \"\\n--> ao:  \";\nvar_dump($ao);\n?>")).toMatchSnapshot();
  });
});
