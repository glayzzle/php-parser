// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_heap_iteration_error.phpt
  it("SPL: Attempt to corrupt the heap while iterating", function () {
    expect(parser.parseCode("<?php\nclass ext_heap extends SplMaxHeap {\n  public $fail = false;\n  public function compare($val1,$val2): int {\n    if ($this->fail)\n      throw new Exception('Corrupting heap',99);\n    return 0;\n  }\n}\n$h = new ext_heap();\n$h->insert(array('foobar'));\n$h->insert(array('foobar1'));\n$h->insert(array('foobar2'));\ntry {\n  $h->fail=true;\n  foreach ($h as $value) {};\n  echo \"I should have raised an exception here\";\n} catch (Exception $e) {\n  if ($e->getCode()!=99) echo \"Unexpected exception\";\n}\nvar_dump($h);\n?>")).toMatchSnapshot();
  });
});
