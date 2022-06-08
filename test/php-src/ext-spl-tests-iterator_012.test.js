// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_012.phpt
  it("SPL: NoRewindIterator", function () {
    expect(parser.parseCode("<?php\necho \"===Current===\\n\";\n$it = new NoRewindIterator(new ArrayIterator(array(0 => 'A', 1 => 'B', 2 => 'C')));\necho $it->key() . '=>' . $it->current() . \"\\n\";\necho \"===Next===\\n\";\n$it->next();\necho \"===Foreach===\\n\";\nforeach($it as $key=>$val)\n{\n    echo \"$key=>$val\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
