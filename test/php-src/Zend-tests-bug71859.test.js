// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71859.phpt
  it("Bug #71859 (zend_objects_store_call_destructors operates on realloced memory, crashing)", function () {
    expect(parser.parseCode("<?php\nclass constructs_in_destructor {\n  public function __destruct() {\n    //We are now in zend_objects_store_call_destructors\n    //This causes a realloc in zend_objects_store_put\n    for ($i = 0; $i < 10000; ++$i) {\n      $GLOBALS[\"a$i\"] = new stdClass;\n    }\n    //Returns to zend_objects_store_call_destructors, to access freed memory.\n  }\n}\n$a = new constructs_in_destructor;\n//Create cycle so destructors are ran only in zend_objects_store_call_destructors\n$a->a = $a;\n// Create some objects so zend_objects_store_call_destructors has something\n// to do after constructs_in_destructor is destroyed.\nfor ($i = 0; $i < 200; ++$i) {\n  $GLOBALS[\"b$i\"] = new stdClass;\n}\n?>\nokey")).toMatchSnapshot();
  });
});
