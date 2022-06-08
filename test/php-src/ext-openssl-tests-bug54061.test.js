// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug54061.phpt
  it("Bug #54061 (Memory leak in openssl_decrypt)", function () {
    expect(parser.parseCode("<?php\n$data = \"jfdslkjvflsdkjvlkfjvlkjfvlkdm,4w 043920r 9234r 32904r 09243\nr7-89437 r892374 r894372 r894 7289r7 f  frwerfh i iurf iuryw uyrfouiwy ruy\n972439 8478942 yrhfjkdhls\";\n$pass = \"r23498rui324hjbnkj\";\n$cr = openssl_encrypt($data, 'des3', $pass, 0, '1qazxsw2');\n$dcr = openssl_decrypt($cr, 'des3', $pass, 0, '1qazxsw2');\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
