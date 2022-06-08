// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_032.phpt
  it("SPL: LimitIterator::getPosition()", function () {
    expect(parser.parseCode("<?php\n$it = new LimitIterator(new ArrayIterator(array(1,2,3,4)), 1, 2);\nforeach($it as $k=>$v)\n{\n    echo \"$k=>$v\\n\";\n    var_dump($it->getPosition());\n}\ntry\n{\n    $it->seek(0);\n}\ncatch(OutOfBoundsException $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\n$it->seek(2);\nvar_dump($it->current());\ntry\n{\n    $it->seek(3);\n}\ncatch(OutOfBoundsException $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\n$it->next();\nvar_dump($it->valid());\n?>")).toMatchSnapshot();
  });
});
