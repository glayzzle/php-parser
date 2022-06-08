// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_iterator_apply_error.phpt
  it("SPL: Error: iterator_apply when an iterator method (eg rewind) throws exception", function () {
    expect(parser.parseCode("<?php\nclass MyArrayIterator extends ArrayIterator {\n    public function rewind(): void {\n        throw new Exception('Make the iterator break');\n    }\n}\nfunction test() {}\n$it = new MyArrayIterator(array(1, 21, 22));\ntry {\n    $res = iterator_apply($it, 'test');\n} catch (Exception $e) {\n    echo $e->getMessage();\n}\n?>\n<?php exit(0); ?>")).toMatchSnapshot();
  });
});
