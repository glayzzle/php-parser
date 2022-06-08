// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursive_tree_iterator_003.phpt
  it("SPL: RecursiveTreeIterator(non-traversable)", function () {
    expect(parser.parseCode("<?php\ntry {\n    new RecursiveTreeIterator(new ArrayIterator(array()));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
