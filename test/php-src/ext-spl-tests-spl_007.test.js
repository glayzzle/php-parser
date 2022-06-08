// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_007.phpt
  it("SPL: iterator_apply() with callback using __call()", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __call($name, $params) {\n        echo \"Called $name.\\n\";\n        return true;\n    }\n}\n$it = new ArrayIterator(array(1, 2, 3));\niterator_apply($it, array(new Foo, \"foobar\"));\n?>")).toMatchSnapshot();
  });
});
