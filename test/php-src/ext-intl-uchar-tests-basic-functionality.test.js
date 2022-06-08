// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/uchar/tests/basic-functionality.phpt
  it("IntlChar basic functionality", function () {
    expect(parser.parseCode("<?php\nfunction unicode_info($cp) {\n  $proplist = array(\n    IntlChar::PROPERTY_ALPHABETIC,\n  );\n  $methodList = array(\n    'isUAlphabetic',\n    'isUUppercase', 'isupper',\n    'isULowercase', 'islower',\n    'isUWhiteSpace', 'isWhitespace',\n    'istitle', 'isdigit', 'isalpha', 'isalnum',\n    'isxdigit', 'ispunct', 'ispunct', 'isgraph',\n    'isblank', 'isdefined', 'isspace', 'iscntrl',\n    'isMirrored', 'isIDStart', 'isIDPart',\n    'getBlockCode', 'charName',\n  );\n  $ncp = IntlChar::ord($cp);\n  printf(\"Codepoint U+%04x\\n\", $ncp);\n  foreach($proplist as $prop) {\n    printf(\"  hasBinaryProperty(%s): %s\\n\",\n      IntlChar::getPropertyName($prop),\n      IntlChar::hasBinaryProperty($cp, $prop) ? \"true\" : \"false\"\n    );\n  }\n  foreach($methodList as $method) {\n    echo \"  $method(): \";\n    var_dump(IntlChar::$method($cp));\n  }\n  echo \"  charAge(): \", implode('.', IntlChar::charAge($cp)), \"\\n\";\n  echo \"\\n\";\n}\nprintf(\"Codepoint range: %04x-%04x\\n\", IntlChar::CODEPOINT_MIN, IntlChar::CODEPOINT_MAX);\n$codepoints = array('P', 0xDF, 0x2603);\nforeach($codepoints as $cp) {\n  unicode_info($cp);\n}\necho \"Sample range of codepoints: U+2600-U+260F\\n\";\nIntlChar::enumCharNames(0x2600, 0x2610, function($cp, $nc, $name) {\n  printf(\"U+%04x %s\\n\", $cp, $name);\n});\necho \"RECYCLING SYMBOL FOR TYPE-1 PLASTICS => \";\nvar_dump(IntlChar::charFromName(\"RECYCLING SYMBOL FOR TYPE-1 PLASTICS\"));\n?>")).toMatchSnapshot();
  });
});
