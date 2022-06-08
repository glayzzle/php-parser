// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/ssa_bug_011.phpt
  it("Wrong assertion", function () {
    expect(parser.parseCode("<?php\nfunction foo($transitions) {\n    foreach ($transitions as $transition) {\n        if (isEmpty()) {\n            continue;\n        }\n    }\n}\n?>\nOK")).toMatchSnapshot();
  });
});
