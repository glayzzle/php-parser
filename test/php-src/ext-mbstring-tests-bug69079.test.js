// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug69079.phpt
  it("Bug #69079 (enhancement for mb_substitute_character)", function () {
    expect(parser.parseCode("<?php\nmb_internal_encoding('UTF-8');\nvar_dump(mb_substitute_character(0x1F600));\nvar_dump(bin2hex(mb_scrub(\"\\xff\")));\nmb_substitute_character(0x3f); // Reset to '?', as the next call will fail\ntry {\n    var_dump(mb_substitute_character(0xD800)); // Surrogate (illegal)\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(bin2hex(mb_scrub(\"\\xff\")));\nmb_internal_encoding('EUC-JP-2004');\nmb_substitute_character(0x63); // Reset to '?', as the next call will fail\ntry {\n    mb_substitute_character(0x8fa1ef); // EUC-JP-2004 encoding of U+50AA (illegal)\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(bin2hex(mb_scrub(\"\\x8d\")));\nmb_substitute_character(0x50aa);\nvar_dump(bin2hex(mb_scrub(\"\\x8d\")));\n?>")).toMatchSnapshot();
  });
});
