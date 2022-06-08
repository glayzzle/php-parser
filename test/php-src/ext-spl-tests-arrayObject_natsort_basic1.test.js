// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_natsort_basic1.phpt
  it("SPL: Test ArrayObject::natsort() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/* Sort the entries by values using \"natural order\" algorithm.\n * Source code: ext/spl/spl_array.c\n * Alias to functions:\n */\necho \"*** Testing ArrayObject::natsort() : basic functionality ***\\n\";\n$ao1 = new ArrayObject(array('boo10','boo1','boo2','boo22','BOO5'));\n$ao2 = new ArrayObject(array('a'=>'boo10','b'=>'boo1','c'=>'boo2','d'=>'boo22','e'=>'BOO5'));\nvar_dump($ao1->natsort());\nvar_dump($ao1);\ntry {\n    var_dump($ao2->natsort('blah'));\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($ao2);\n?>")).toMatchSnapshot();
  });
});
