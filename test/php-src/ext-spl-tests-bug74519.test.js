// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug74519.phpt
  it("Bug #74519 strange behavior of AppendIterator", function () {
    expect(parser.parseCode("<?php\n$iterator = new \\AppendIterator();\n$events = new \\ArrayIterator([1,2,3,4,5]);\n$iterator->append($events);\n$events->next();\nwhile($iterator->valid()) {\n    echo $iterator->current(), \"\\n\";\n    $iterator->next();\n}\n?>")).toMatchSnapshot();
  });
});
