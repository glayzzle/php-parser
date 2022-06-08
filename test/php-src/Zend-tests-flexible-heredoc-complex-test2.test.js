// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-complex-test2.phpt
  it("Flexible heredoc syntax complex test 2: interpolated nested heredocs\nwith the same delimiter name", function () {
    expect(parser.parseCode("<?php\n$a = 'b';\n${\"b\\nb\\n d\"} = 'b';\nvar_dump(<<<DOC1\n    a\n    ${<<<DOC1\n        b\n        ${<<<DOC1\n            a\n            DOC1}\n         d\n        DOC1\n    }\n    c\n    DOC1);\n?>")).toMatchSnapshot();
  });
});
