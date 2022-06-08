// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_003.phpt
  it("SPL: class_parents() and class_implements()", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($cname) {\n    var_dump($cname);\n});\nclass a{}\nclass b extends a{}\nclass c extends b{}\nclass d{}\nvar_dump(class_parents(new c),\n         class_parents(\"c\"),\n         class_parents(new b),\n         class_parents(\"b\"),\n         class_parents(\"d\"),\n         class_parents(\"foo\", 0),\n         class_parents(\"foo\", 1)\n);\ninterface iface1{}\ninterface iface2{}\nclass f implements iface1, iface2{}\nvar_dump(class_implements(new a),\n         class_implements(\"a\"),\n         class_implements(\"aaa\"),\n         class_implements(\"bbb\", 0)\n);\n?>")).toMatchSnapshot();
  });
});
