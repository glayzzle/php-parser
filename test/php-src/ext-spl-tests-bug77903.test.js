// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug77903.phpt
  it("Bug #77903: ArrayIterator stops iterating after offsetSet call", function () {
    expect(parser.parseCode("<?php\n$a = new ArrayIterator();\n$a->rewind();\nvar_dump($a->valid()); // false\nvar_dump($a->current()); // null\n$a->offsetSet(1,1);\nvar_dump($a->valid()); // true\nvar_dump($a->current()); // 1\n$a->next();\nvar_dump($a->valid()); // false\nvar_dump($a->current()); // null\n$a->offsetSet(4,4);\nvar_dump($a->valid()); // true\nvar_dump($a->current()); // 4\n$a->next();\nvar_dump($a->valid()); // false\nvar_dump($a->current()); // null\n$a->next();\nvar_dump($a->valid()); // false\nvar_dump($a->current()); // null\n$a->offsetSet(2,2);\nvar_dump($a->valid()); // true\nvar_dump($a->current()); // 2\n$a->next();\nvar_dump($a->valid()); // false\nvar_dump($a->current()); // null\n$a->next();\nvar_dump($a->valid()); // false\nvar_dump($a->current()); // null\n?>")).toMatchSnapshot();
  });
});
