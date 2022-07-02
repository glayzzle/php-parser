// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60573_2.phpt
  it("Bug #60573 (type hinting with \"self\" keyword causes weird errors) -- variation 2", function () {
    expect(parser.parseCode("<?php\nclass Foo1 {\npublic function setSelf(self $s) { }\n}\nclass Bar1 extends Foo1 {\npublic function setSelf(parent $s) { }\n}\nclass Foo2 {\npublic function setSelf(Foo2 $s) { }\n}\nclass Bar2 extends Foo2 {\npublic function setSelf(parent $s) { }\n}\nclass Base {\n}\nclass Foo3 extends Base{\npublic function setSelf(parent $s) { }\n}\nclass Bar3 extends Foo3 {\npublic function setSelf(Base $s) { }\n}\nclass Foo4 {\npublic function setSelf(self $s) { }\n}\nclass Foo5 extends Base {\npublic function setSelf(parent $s) { }\n}\nclass Bar5 extends Foo5 {\npublic function setSelf(parent $s) { }\n}\n?>")).toMatchSnapshot();
  });
});
