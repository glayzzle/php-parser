// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/regression_005.phpt
  it("Test possible constant naming regression on procedural scope", function () {
    expect(() => parser.parseCode("<?php\nclass Obj\n{\n    const return = 'yep';\n}\nconst return = 'nope';\n?>")).toThrowErrorMatchingSnapshot();
  });
});
