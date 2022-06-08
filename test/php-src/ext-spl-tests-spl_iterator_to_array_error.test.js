// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_iterator_to_array_error.phpt
  it("SPL: Error: iterator_to_array when the current operation throws an exception", function () {
    expect(parser.parseCode("<?php\nclass MyArrayIterator extends ArrayIterator {\n    public function current(): mixed {\n        throw new Exception('Make the iterator break');\n    }\n}\n$it = new MyArrayIterator(array(4, 6, 2));\ntry {\n    // get keys\n    $ar = iterator_to_array($it);\n} catch (Exception $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\ntry {\n    // get values\n    $ar = iterator_to_array($it, false);\n} catch (Exception $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\n?>\n<?php exit(0); ?>")).toMatchSnapshot();
  });
});
