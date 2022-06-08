// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug45622b.phpt
  it("Ensure fix to bug45622 doesn't cause __isset() to be called when ArrayObject::ARRAY_AS_PROPS is used.", function () {
    expect(parser.parseCode("<?php\nclass UsesMagic extends ArrayObject {\n    function __get($n)     {  echo \"In \" . __METHOD__ . \"!\\n\"; }\n    function __set($n, $v) {  echo \"In \" . __METHOD__ . \"!\\n\"; }\n    function __isset($n)   {  echo \"In \" . __METHOD__ . \"!\\n\"; }\n    function __unset($n)   {  echo \"In \" . __METHOD__ . \"!\\n\"; }\n}\n$ao = new UsesMagic(array(), ArrayObject::ARRAY_AS_PROPS);\necho \"Doesn't trigger __get.\\n\";\necho $ao->prop1;\necho \"Doesn't trigger __set.\\n\";\n$ao->prop2 = 'foo';\necho \"Doesn't trigger __unset.\\n\";\nunset($ao->prop3);\necho \"Shouldn't trigger __isset.\\n\";\nisset($ao->prop4);\n?>")).toMatchSnapshot();
  });
});
