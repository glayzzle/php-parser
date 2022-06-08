// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_057.phpt
  it("SPL: ArrayIterator::__construct(void)", function () {
    expect(parser.parseCode("<?php\n/**\n * From Docs: Construct a new array iterator from anything that has a hash table.\n * NULL, NOTHING is not a hash table ;)\n */\nclass myArrayIterator extends ArrayIterator {\n}\ntry {\n    $it = new myArrayIterator();\n} catch (InvalidArgumentException $e) {\n    echo 'InvalidArgumentException thrown';\n}\necho 'no Exception thrown'\n?>")).toMatchSnapshot();
  });
});
