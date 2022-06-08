// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/weakrefs/weakrefs_001.phpt
  it("WeakReference", function () {
    expect(parser.parseCode("<?php\n$std = new stdClass;\ndebug_zval_dump($std);\n$wr = WeakReference::create($std);\n$wr2 = WeakReference::create($std);\ndebug_zval_dump($std);\nvar_dump($wr, $wr2);\ndebug_zval_dump($wr->get());\ndebug_zval_dump($wr2->get());\nunset($std);\ndebug_zval_dump($wr->get());\ndebug_zval_dump($wr2->get());\n?>")).toMatchSnapshot();
  });
});
