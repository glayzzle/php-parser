// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_011.phpt
  it("SPL: InfiniteIterator", function () {
    expect(parser.parseCode("<?php\necho \"===EmptyIterator===\\n\";\nforeach(new LimitIterator(new InfiniteIterator(new EmptyIterator()), 0, 3) as $key=>$val)\n{\n    echo \"$key=>$val\\n\";\n}\necho \"===InfiniteIterator===\\n\";\n$it = new ArrayIterator(array(0 => 'A', 1 => 'B', 2 => 'C', 3 => 'D'));\n$it = new InfiniteIterator($it);\n$it = new LimitIterator($it, 2, 5);\nforeach($it as $val=>$key)\n{\n    echo \"$val=>$key\\n\";\n}\necho \"===Infinite/LimitIterator===\\n\";\n$it = new ArrayIterator(array(0 => 'A', 1 => 'B', 2 => 'C', 3 => 'D'));\n$it = new LimitIterator($it, 1, 2);\n$it = new InfiniteIterator($it);\n$it = new LimitIterator($it, 2, 5);\nforeach($it as $val=>$key)\n{\n    echo \"$val=>$key\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
