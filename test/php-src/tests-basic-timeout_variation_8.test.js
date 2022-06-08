// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/timeout_variation_8.phpt
  it("Timeout within foreach loop", function () {
    expect(parser.parseCode("<?php\nset_time_limit(1);\nforeach (new InfiniteIterator(new ArrayIterator([1])) as $i) {\n}\n?>\nnever reached here")).toMatchSnapshot();
  });
});
