// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_override_getIterator.phpt
  it("SPL: FixedArray: overriding getIterator()", function () {
    expect(parser.parseCode("<?php\nclass A extends SplFixedArray\n{\n  public function getIterator(): Iterator\n  {\n    $iterator = parent::getIterator();\n    while ($iterator->valid()) {\n      echo \"In A: key={$iterator->key()} value={$iterator->current()}\\n\";\n      yield $iterator->key() => $iterator->current();\n      $iterator->next();\n    }\n  }\n}\necho \"==SplFixedArray instance==\\n\";\n$a = new SplFixedArray(3);\n$a[0] = \"a\";\n$a[1] = \"b\";\n$a[2] = \"c\";\nforeach ($a as $k => $v) {\n  echo \"$k => $v\\n\";\n}\necho \"==Subclass instance==\\n\";\n$a = new A(3);\n$a[0] = \"d\";\n$a[1] = \"e\";\n$a[2] = \"f\";\nforeach ($a as $k => $v) {\n  echo \"$k => $v\\n\";\n}")).toMatchSnapshot();
  });
});
