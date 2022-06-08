// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_062.phpt
  it("SPL: RecursiveIteratorIterator::__construct(void)", function () {
    expect(parser.parseCode("<?php\nclass myRecursiveIteratorIterator extends RecursiveIteratorIterator {\n}\ntry {\n    $it = new myRecursiveIteratorIterator();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
