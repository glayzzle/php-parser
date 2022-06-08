// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_setFlags_basic2.phpt
  it("SPL: Ensure access to non-visible properties falls back to dimension access with ArrayObject::ARRAY_AS_PROPS.", function () {
    expect(parser.parseCode("<?php\nclass C extends ArrayObject {\n    private $x = 'secret';\n    static function go($c) {\n      var_dump($c->x);\n    }\n}\n$c = new C(array('x'=>'public'));\n$c->setFlags(ArrayObject::ARRAY_AS_PROPS);\nC::go($c);\nvar_dump($c->x);\n$c->setFlags(0);\nC::go($c);\nvar_dump($c->x);\n?>")).toMatchSnapshot();
  });
});
