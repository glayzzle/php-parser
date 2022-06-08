// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug52681.phpt
  it("Bug #52681 (mb_send_mail() appends an extra MIME-Version header)", function () {
    expect(parser.parseCode("<?php\n$to = 'example@example.com';\n$headers = 'MIME-Version: 2.0';\nmb_send_mail($to, mb_language(), \"test\", $headers);\n?>")).toMatchSnapshot();
  });
});
