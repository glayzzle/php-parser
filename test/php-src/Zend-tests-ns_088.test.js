// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_088.phpt
  it("Nested group use statements syntax error", function () {
    expect(() => parser.parseCode("<?php\nnamespace Fiz\\Biz\\Buz {\n    use Foo\\Bar\\Baz\\{\n        A,\n        B {\n            C\n            D,\n            E\n        }\n    };\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
