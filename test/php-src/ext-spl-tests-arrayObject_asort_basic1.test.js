// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_asort_basic1.phpt
  it("SPL: Test ArrayObject::asort() function : basic functionality with array based store", function () {
    expect(parser.parseCode("<?php\n/* Sort the entries by values.\n * Source code: ext/spl/spl_array.c\n * Alias to functions:\n */\necho \"*** Testing ArrayObject::asort() : basic functionality ***\\n\";\n$ao1 = new ArrayObject(array(4,2,3));\n$ao2 = new ArrayObject(array('a'=>4,'b'=>2,'c'=>3));\nvar_dump($ao1->asort());\nvar_dump($ao1);\ntry {\n    var_dump($ao2->asort('blah'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($ao2);\nvar_dump($ao2->asort(SORT_NUMERIC));\nvar_dump($ao2);\n?>")).toMatchSnapshot();
  });
});
