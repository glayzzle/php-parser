// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_iterator_apply_error_001.phpt
  it("SPL: Error: iterator_apply when the callback throws an exception", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    throw new Exception('Broken callback');\n}\n$it = new RecursiveArrayIterator(array(1, 21, 22));\ntry {\n    iterator_apply($it, 'test');\n} catch (Exception $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
