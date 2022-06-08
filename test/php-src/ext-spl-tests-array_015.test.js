// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_015.phpt
  it("SPL: ArrayIterator::next() with internal arrays", function () {
    expect(parser.parseCode("<?php\n$ar = new ArrayObject();\n$ar[0] = 1;\n$ar[1] = 2;\n$ar[2] = 3;\n$ar[3] = 4;\n$ar[4] = 5;\nvar_dump($ar);\n$it = $ar->getIterator();\n$ar->offsetUnset($it->key());\n$it->next();\nvar_dump($it->current());\nvar_dump($ar);\nforeach($it as $k => $v)\n{\n    $ar->offsetUnset($k+1);\n    echo \"$k=>$v\\n\";\n}\nvar_dump($ar);\nforeach($it as $k => $v)\n{\n    $ar->offsetUnset($k);\n    echo \"$k=>$v\\n\";\n}\nvar_dump($ar);\n?>")).toMatchSnapshot();
  });
});
