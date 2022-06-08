// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72854.phpt
  it("Bug #72854: PHP Crashes on duplicate destructor call", function () {
    expect(parser.parseCode("<?php\nfunction get() {\n    $t = new stdClass;\n    $t->prop = $t;\n    return $t;\n}\n$i = 42;\nget()->prop =& $i;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
