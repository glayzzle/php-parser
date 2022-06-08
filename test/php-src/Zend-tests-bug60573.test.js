// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60573.phpt
  it("Bug #60573 (type hinting with \"self\" keyword causes weird errors)", function () {
    expect(parser.parseCode("<?php\nclass Foo1 {\npublic function setSelf(self $s) { }\n}\nclass Bar1 extends Foo1 {\npublic function setSelf(parent $s) { }\n}\nclass Foo2 {\npublic function setSelf(Foo2 $s) { }\n}\nclass Bar2 extends Foo2 {\npublic function setSelf(parent $s) { }\n}\nclass Base {\n}\nclass Foo3 extends Base{\npublic function setSelf(parent $s) { }\n}\nclass Bar3 extends Foo3 {\npublic function setSelf(Base $s) { }\n}\nclass Foo4 {\npublic function setSelf(self $s) { }\n}\nclass Bar4 extends Foo4 {\npublic function setSelf(self $s) { }\n}\n?>")).toMatchSnapshot();
  });
});
