// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_014.phpt
  it("SPL: ArrayIterator::seek()", function () {
    expect(parser.parseCode("<?php\n$it = new ArrayIterator(range(0,10));\nvar_dump($it->count());\n$it->seek(5);\nvar_dump($it->current());\n$it->seek(4);\nvar_dump($it->current());\ntry\n{\n    $it->seek(-1);\n    var_dump($it->current());\n}\ncatch(Exception $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\ntry\n{\n    $it->seek(12);\n    var_dump($it->current());\n}\ncatch(Exception $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\n$pos = 0;\nforeach($it as $v)\n{\n    $it->seek($pos++);\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
