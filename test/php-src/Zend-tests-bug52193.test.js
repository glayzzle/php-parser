// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52193.phpt
  it("Bug #52193 (converting closure to array yields empty array)", function () {
    expect(parser.parseCode("<?php\nvar_dump((array) 1);\nvar_dump((array) NULL);\nvar_dump((array) new stdclass);\nvar_dump($h = (array) function () { return 2; });\nvar_dump($h[0]());\n$i = function () use (&$h) {\n    return $h;\n};\nvar_dump($x = (array)$i);\nvar_dump($y = $x[0]);\nvar_dump($y());\n$items = range(1, 5);\n$func = function(){ return 'just a test'; };\narray_splice($items, 0 , 4, $func);\nvar_dump($items);\n?>")).toMatchSnapshot();
  });
});
