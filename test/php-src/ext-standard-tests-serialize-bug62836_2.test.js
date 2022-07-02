// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug62836_2.phpt
  it("Bug #62836 (Seg fault or broken object references on unserialize())", function () {
    expect(parser.parseCode("<?php\n$serialized_object='O:1:\"A\":4:{s:1:\"b\";O:1:\"B\":0:{}s:2:\"b1\";r:2;s:1:\"c\";O:1:\"B\":0:{}s:2:\"c1\";r:4;}';\nini_set('unserialize_callback_func','mycallback');\nfunction mycallback($classname) {\n    unserialize(\"i:4;\");\n    eval (\"class $classname {} \");\n}\nprint_r(unserialize($serialized_object));\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
