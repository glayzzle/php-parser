// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug71606.phpt
  it("Bug #71606 (Segmentation fault mb_strcut + mb_list_encodings)", function () {
    expect(parser.parseCode("<?php\necho mb_strcut('&quot;', 0, 0, 'HTML-ENTITIES');\necho 'DONE', PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
