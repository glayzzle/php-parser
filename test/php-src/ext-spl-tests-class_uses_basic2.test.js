// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/class_uses_basic2.phpt
  it("SPL: Test class_uses() function : basic", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing class_uses() : basic ***\\n\";\ntrait foo { }\nclass fooUser { use foo; }\ntrait bar { }\nclass barUser { use bar; }\nclass foobarUser { use foo, bar; }\n/** There is no semantics for traits in the inheritance chain.\n    Traits are flattened into a class, and that semantics is nothing\n    like a type, or interface, and thus, not propergated. */\nclass fooViaBarUser extends barUser { use foo; }\nclass fooExtended extends fooUser {}\ns_var_dump(class_uses(new foobarUser));\ns_var_dump(class_uses('foobarUser'));\ns_var_dump(class_uses(new fooViaBarUser));\ns_var_dump(class_uses('fooViaBarUser'));\ns_var_dump(class_uses(new fooExtended));\ns_var_dump(class_uses('fooExtended'));\nfunction s_var_dump($arr) {\n   krsort($arr);\n   var_dump($arr);\n}\n?>")).toMatchSnapshot();
  });
});
