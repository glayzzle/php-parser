// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79934.phpt
  it("Bug #79934: CRLF-only line in heredoc causes parsing error", function () {
    expect(parser.parseCode("<?php\n// lines with only CRLF should not cause a parse error\neval(\"\\$s1 = <<<HEREDOC\\r\\n    a\\r\\n\\r\\n    b\\r\\n    HEREDOC;\");\nvar_dump(addcslashes($s1, \"\\r\\n\"));\n// lines with only a LF should not cause a parse error\neval(\"\\$s2 = <<<HEREDOC\\n    a\\n\\n    b\\n    HEREDOC;\");\nvar_dump(addcslashes($s2, \"\\n\"));\n// lines with only a CR should not cause a parse error\neval(\"\\$s3 = <<<HEREDOC\\r    a\\r\\r    b\\r    HEREDOC;\");\nvar_dump(addcslashes($s3, \"\\r\"));\n// lines with only whitespace should not cause a parse error\neval(\"\\$s4 = <<<HEREDOC\\r    a\\r\\n  \\r\\n    b\\r    HEREDOC;\");\nvar_dump(addcslashes($s4, \"\\n\\r\"));\n?>")).toMatchSnapshot();
  });
});
