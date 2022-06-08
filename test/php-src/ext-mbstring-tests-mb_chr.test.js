// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_chr.phpt
  it("mb_chr()", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    \"\\u{20bb7}\" === mb_chr(0x20bb7),\n    \"\\x8f\\xa1\\xef\" === mb_chr(0x50aa, \"EUC-JP-2004\"),\n    false === mb_chr(0xd800),\n    false === mb_chr(0x1f600, \"EUC-JP-2004\")\n);\n// Invalid\ntry {\n    var_dump( mb_chr(0xd800, \"typo\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( mb_chr(0xd800, \"pass\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( mb_chr(0xd800, \"jis\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( mb_chr(0xd800, \"cp50222\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( mb_chr(0xd800, \"utf-7\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nmb_internal_encoding(\"utf-7\");\ntry {\n    var_dump( mb_chr(0xd800) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
