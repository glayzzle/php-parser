// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursive_tree_iterator_008.phpt
  it("SPL: RecursiveTreeIterator::setPrefixPart()", function () {
    expect(parser.parseCode("<?php\n$ary = array(\n    \"a\" => array(\"b\"),\n    \"c\" => array(\"d\"),\n);\n$it = new RecursiveArrayIterator($ary);\n$it = new RecursiveTreeIterator($it);\nfor($i = 0; $i < 6; ++$i) {\n    $it->setPrefixPart($i, $i);\n}\nforeach($it as $k => $v) {\n    echo \"[$k] => $v\\n\";\n}\ntry {\n    $it->setPrefixPart(-1, \"\");\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    $it->setPrefixPart(6, \"\");\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
