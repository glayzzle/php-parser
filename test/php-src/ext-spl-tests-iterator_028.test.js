// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_028.phpt
  it("SPL: RecursiveIteratorIterator and setMaxDepth()", function () {
    expect(parser.parseCode("<?php\n$ar = array(1, 2, array(31, 32, array(331, array(3321, array(33221)))), 4);\n$it = new RecursiveIteratorIterator(new RecursiveArrayIterator($ar));\necho \"===?===\\n\";\nvar_dump($it->getMaxDepth());\nforeach($it as $v) echo $it->getDepth() . \": $v\\n\";\necho \"===2===\\n\";\n$it->setMaxDepth(2);\nvar_dump($it->getMaxDepth());\nforeach($it as $v) echo $it->getDepth() . \": $v\\n\";\necho \"===X===\\n\";\n$it->setMaxDepth();\nvar_dump($it->getMaxDepth());\nforeach($it as $v) echo $it->getDepth() . \": $v\\n\";\necho \"===3===\\n\";\n$it->setMaxDepth(3);\nvar_dump($it->getMaxDepth());\nforeach($it as $v) echo $it->getDepth() . \": $v\\n\";\necho \"===5===\\n\";\n$it->setMaxDepth(5);\nvar_dump($it->getMaxDepth());\nforeach($it as $v) echo $it->getDepth() . \": $v\\n\";\necho \"===0===\\n\";\n$it->setMaxDepth(0);\nvar_dump($it->getMaxDepth());\nforeach($it as $v) echo $it->getDepth() . \": $v\\n\";\necho \"===-1===\\n\";\n$it->setMaxDepth(-1);\nvar_dump($it->getMaxDepth());\n$it->setMaxDepth(4);\ntry {\n    $it->setMaxDepth(-2);\n} catch(\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump($it->getMaxDepth());\n?>")).toMatchSnapshot();
  });
});
