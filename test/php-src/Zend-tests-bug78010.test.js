// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78010.phpt
  it("Bug #78010: Segmentation fault during GC", function () {
    expect(parser.parseCode("<?php\nclass foo\n{\n    public function __construct()\n    {\n        $this->x = $this;\n        for ($i = 0; $i < 898; $i++) { //Will not trigger with <898\n            $obj = [new stdClass, new stdClass]; //This must have at least 2 elements\n            $this->y[] = $obj;\n        }\n    }\n}\nfor ($i = 0; $i < 2; ++$i) { //This must run >=2 (increasing the number of elements in the array *2 will not do)\n    $x = []; //This must be reset\n    foreach (array_fill(0, 389, 'x') as &$params) { //Will not trigger <389\n        $x[] = new foo;\n    }\n}\necho \"Completed\\n\";\n?>")).toMatchSnapshot();
  });
});
