// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/observer_008.phpt
  it("SPL: SplObjectStorage addAll/removeAll", function () {
    expect(parser.parseCode("<?php\nclass A extends SplObjectStorage { }\n$o1 = new StdClass;\n$o2 = new StdClass;\n$o3 = new StdClass;\n$a = new A;\n$a->attach($o1);\n$a->attach($o2);\n$b = new SplObjectStorage();\n$b->attach($o2);\n$b->attach($o3);\n$a->addAll($b);\nvar_dump($a->count());\n$a->detach($o3);\nvar_dump($a->count());\n$a->removeAll($b);\nvar_dump($a->count());\n?>")).toMatchSnapshot();
  });
});
