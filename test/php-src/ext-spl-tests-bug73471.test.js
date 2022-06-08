// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug73471.phpt
  it("Bug #73471 PHP freezes with AppendIterator", function () {
    expect(parser.parseCode("<?php\n$iterator = new \\AppendIterator();\n$events = new \\ArrayIterator([1,2,3,4,5]);\n$events2 = new \\ArrayIterator(['a', 'b', 'c']);\n$iterator->append($events);\nforeach($events as $event){}\n$iterator->append($events2);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
