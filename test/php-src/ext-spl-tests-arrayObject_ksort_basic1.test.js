// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_ksort_basic1.phpt
  it("SPL: Test ArrayObject::ksort() function : basic functionality with array based store", function () {
    expect(parser.parseCode("<?php\n/* Sort the entries by key.\n * Source code: ext/spl/spl_array.c\n * Alias to functions:\n */\necho \"*** Testing ArrayObject::ksort() : basic functionality ***\\n\";\n$ao1 = new ArrayObject(array(4,2,3));\n$ao2 = new ArrayObject(array('b'=>4,'a'=>2,'q'=>3, 99=>'x'));\nvar_dump($ao1->ksort());\nvar_dump($ao1);\ntry {\n    var_dump($ao2->ksort('blah'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($ao2);\nvar_dump($ao2->ksort(SORT_STRING));\nvar_dump($ao2);\n?>")).toMatchSnapshot();
  });
});
