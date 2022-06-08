// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_042.phpt
  it("SPL: AppendIterator and its ArrayIterator", function () {
    expect(parser.parseCode("<?php\nfunction test_error_handler($errno, $msg, $filename, $linenum)\n{\n    echo \"Error $msg in $filename on line $linenum\\n\";\n    return true;\n}\nset_error_handler('test_error_handler');\n$it = new AppendIterator;\ntry {\n    $it->append(array());\n} catch (Error $e) {\n    test_error_handler($e->getCode(), $e->getMessage(), $e->getFile(), $e->getLine());\n}\n$it->append(new ArrayIterator(array(1)));\n$it->append(new ArrayIterator(array(21, 22)));\nvar_dump($it->getArrayIterator());\n$it->append(new ArrayIterator(array(31, 32, 33)));\nvar_dump($it->getArrayIterator());\n$idx = 0;\nforeach($it as $k => $v)\n{\n    echo '===' . $idx++ . \"===\\n\";\n    var_dump($it->getIteratorIndex());\n    var_dump($k);\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
