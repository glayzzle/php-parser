// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_010.phpt
  it("SPL: EmptyIterator", function () {
    expect(parser.parseCode("<?php\necho \"===EmptyIterator===\\n\";\nforeach(new LimitIterator(new EmptyIterator(), 0, 3) as $key => $val)\n{\n    echo \"$key=>$val\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
