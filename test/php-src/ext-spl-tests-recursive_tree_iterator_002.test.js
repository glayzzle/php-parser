// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursive_tree_iterator_002.phpt
  it("SPL: RecursiveTreeIterator(void)", function () {
    expect(parser.parseCode("<?php\ntry {\n    new RecursiveTreeIterator();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
