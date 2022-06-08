// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug53071.phpt
  it("Bug #53071 (Usage of SPLObjectStorage defeats gc_collect_cycles)", function () {
    expect(parser.parseCode("<?php\ngc_enable();\nclass myClass\n{\n    public $member;\n}\nfunction LimitedScope()\n{\n    $myA = new myClass();\n    $myB = new SplObjectStorage();\n    $myC = new myClass();\n    $myC->member = $myA; // myC has a reference to myA\n    $myB->Attach($myC);  // myB attaches myC\n    $myA->member = $myB; // myA has myB, comleting the cycle\n}\nLimitedScope();\nvar_dump(gc_collect_cycles());\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
