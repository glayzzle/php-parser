// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/crypt_blowfish_variation1.phpt
  it("Test Blowfish crypt() with invalid rounds", function () {
    expect(parser.parseCode("<?php\n$salts = array('32' => '$2a$32$CCCCCCCCCCCCCCCCCCCCCC$',\n               '33' => '$2a$33$CCCCCCCCCCCCCCCCCCCCCC$',\n               '34' => '$2a$34$CCCCCCCCCCCCCCCCCCCCCC$',\n               '35' => '$2a$35$CCCCCCCCCCCCCCCCCCCCCC$',\n               '36' => '$2a$36$CCCCCCCCCCCCCCCCCCCCCC$',\n               '37' => '$2a$37$CCCCCCCCCCCCCCCCCCCCCC$',\n               '38' => '$2a$38$CCCCCCCCCCCCCCCCCCCCCC$',);\nforeach($salts as $i=>$salt) {\n  $crypt = crypt('U*U', $salt);\n  if ($crypt === '*0' || $crypt === '*1') {\n    echo \"$i. OK\\n\";\n  } else {\n    echo \"$i. Not OK\\n\";\n  }\n}\n?>")).toMatchSnapshot();
  });
});
