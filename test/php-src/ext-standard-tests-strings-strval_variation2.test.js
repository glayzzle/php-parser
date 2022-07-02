// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strval_variation2.phpt
  it("Test strval() function : usage variations  - Pass all valid char codes", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strval() : usage variations  - Pass all valid char codes ***\\n\";\n$s0 = \"\\x00\\x01\\x02\\x03\\x04\\x05\\x06\\x07\\x08\\x09\\x0a\\x0b\\x0c\\x0d\\x0e\\x0f\";\n$s1 = \"\\x10\\x11\\x12\\x13\\x14\\x15\\x16\\x17\\x18\\x19\\x1a\\x1b\\x1c\\x1d\\x1e\\x1f\";\n$s2 = \"\\x20\\x21\\x22\\x23\\x24\\x25\\x26\\x27\\x28\\x29\\x2a\\x2b\\x2c\\x2d\\x2e\\x2f\";\n$s3 = \"\\x30\\x31\\x32\\x33\\x34\\x35\\x36\\x37\\x38\\x39\\x3a\\x3b\\x3c\\x3d\\x3e\\x3f\";\n$s4 = \"\\x40\\x41\\x42\\x43\\x44\\x45\\x46\\x47\\x48\\x49\\x4a\\x4b\\x4c\\x4d\\x4e\\x4f\";\n$s5 = \"\\x50\\x51\\x52\\x53\\x54\\x55\\x56\\x57\\x58\\x59\\x5a\\x5b\\x5c\\x5d\\x5e\\x5f\";\n$s6 = \"\\x60\\x61\\x62\\x63\\x64\\x65\\x66\\x67\\x68\\x69\\x6a\\x6b\\x6c\\x6d\\x6e\\x6f\";\n$s7 = \"\\x70\\x71\\x72\\x73\\x74\\x75\\x76\\x77\\x78\\x79\\x7a\\x7b\\x7c\\x7d\\x7e\\x7f\";\n$s8 = \"\\x80\\x81\\x82\\x83\\x84\\x85\\x86\\x87\\x88\\x89\\x8a\\x8b\\x8c\\x8d\\x8e\\x8f\";\n$s9 = \"\\x90\\x91\\x92\\x93\\x94\\x95\\x96\\x97\\x98\\x99\\x9a\\x9b\\x9c\\x9d\\x9e\\x9f\";\n$sa = \"\\xa0\\xa1\\xa2\\xa3\\xa4\\xa5\\xa6\\xa7\\xa8\\xa9\\xaa\\xab\\xac\\xad\\xae\\xaf\";\n$sb = \"\\xb0\\xb1\\xb2\\xb3\\xb4\\xb5\\xb6\\xb7\\xb8\\xb9\\xba\\xbb\\xbc\\xbd\\xbe\\xbf\";\n$sc = \"\\xc0\\xc1\\xc2\\xc3\\xc4\\xc5\\xc6\\xc7\\xc8\\xc9\\xca\\xcb\\xcc\\xcd\\xce\\xcf\";\n$sd = \"\\xd0\\xd1\\xd2\\xd3\\xd4\\xd5\\xd6\\xd7\\xd8\\xd9\\xda\\xdb\\xdc\\xdd\\xde\\xdf\";\n$se = \"\\xe0\\xe1\\xe2\\xe3\\xe4\\xe5\\xe6\\xe7\\xe8\\xe9\\xea\\xeb\\xec\\xed\\xee\\xef\";\n$sf = \"\\xf0\\xf1\\xf2\\xf3\\xf4\\xf5\\xf6\\xf7\\xf8\\xf9\\xfa\\xfb\\xfc\\xfd\\xfe\\xff\";\necho bin2hex(strval($s0));\necho \"\\n\";\necho bin2hex(strval($s1));\necho \"\\n\";\necho bin2hex(strval($s2));\necho \"\\n\";\necho bin2hex(strval($s3));\necho \"\\n\";\necho bin2hex(strval($s4));\necho \"\\n\";\necho bin2hex(strval($s5));\necho \"\\n\";\necho bin2hex(strval($s6));\necho \"\\n\";\necho bin2hex(strval($s7));\necho \"\\n\";\necho bin2hex(strval($s8));\necho \"\\n\";\necho bin2hex(strval($s9));\necho \"\\n\";\necho bin2hex(strval($sa));\necho \"\\n\";\necho bin2hex(strval($sb));\necho \"\\n\";\necho bin2hex(strval($sc));\necho \"\\n\";\necho bin2hex(strval($sd));\necho \"\\n\";\necho bin2hex(strval($se));\necho \"\\n\";\necho bin2hex(strval($sf));\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
