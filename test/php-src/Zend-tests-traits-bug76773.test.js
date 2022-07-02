// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug76773.phpt
  it("Bug #76773 (Traits used on the parent are ignored for child classes)", function () {
    expect(parser.parseCode("<?php\ntrait MyTrait\n{\n    public function hello()\n    {\n        echo __CLASS__, \"\\n\";\n        if (\\is_callable(array('parent', __FUNCTION__))) {\n            parent::hello();\n        }\n    }\n}\nclass ParentClass\n{\n    use MyTrait;\n}\nclass ChildClass extends ParentClass\n{\n    use MyTrait;\n}\n$c = new ChildClass();\n$c->hello();\n?>")).toMatchSnapshot();
  });
});
