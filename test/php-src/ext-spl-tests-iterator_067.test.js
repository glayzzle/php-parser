// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_067.phpt
  it("SPL: AppendIterator::__construct(void)", function () {
    expect(parser.parseCode("<?php\nclass myAppendIterator extends AppendIterator {}\ntry {\n    $it = new myAppendIterator();\n    echo \"no exception\";\n} catch (InvalidArgumentException $e) {\n    echo 'InvalidArgumentException thrown';\n}\n?>")).toMatchSnapshot();
  });
});
