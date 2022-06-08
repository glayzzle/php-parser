// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/class_implements_basic2.phpt
  it("SPL: Test class_implements() function : basic", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing class_implements() : basic ***\\n\";\ninterface foo { }\nclass fooImpl implements foo {}\ninterface bar { }\nclass barImpl implements bar {}\nclass foobarImpl implements foo, bar {}\nclass fooViaBarImpl extends barImpl implements foo {}\nclass fooExtended extends fooImpl {}\ns_var_dump(class_implements(new foobarImpl));\ns_var_dump(class_implements('foobarImpl'));\ns_var_dump(class_implements(new fooViaBarImpl));\ns_var_dump(class_implements('fooViaBarImpl'));\ns_var_dump(class_implements(new fooExtended));\ns_var_dump(class_implements('fooExtended'));\nfunction s_var_dump($arr) {\n   krsort($arr);\n   var_dump($arr);\n}\n?>")).toMatchSnapshot();
  });
});
