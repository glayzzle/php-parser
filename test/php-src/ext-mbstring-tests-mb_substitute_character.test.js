// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_substitute_character.phpt
  it("mb_substitute_character()", function () {
    expect(parser.parseCode("<?php\n// Note: It does not return TRUE/FALSE for setting char\nvar_dump(mb_substitute_character(0x3044));\nvar_dump(mb_substitute_character());\nvar_dump(bin2hex(mb_convert_encoding(\"\\xe2\\x99\\xa0\\xe3\\x81\\x82\", \"CP932\", \"UTF-8\")));\nvar_dump(mb_substitute_character('long'));\nvar_dump(mb_substitute_character());\nvar_dump(bin2hex(mb_convert_encoding(\"\\xe2\\x99\\xa0\\xe3\\x81\\x82\", \"CP932\", \"UTF-8\")));\nvar_dump(mb_substitute_character('none'));\nvar_dump(mb_substitute_character());\nvar_dump(bin2hex(mb_convert_encoding(\"\\xe2\\x99\\xa0\\xe3\\x81\\x82\", \"CP932\", \"UTF-8\")));\nvar_dump(mb_substitute_character('entity'));\nvar_dump(mb_substitute_character());\nvar_dump(bin2hex(mb_convert_encoding(\"\\xe2\\x99\\xa0\\xe3\\x81\\x82\", \"CP932\", \"UTF-8\")));\ntry {\n    var_dump(mb_substitute_character('BAD_NAME'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
