// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_preferred_mime_name.phpt
  it("mb_preferred_mime_name()", function () {
    expect(parser.parseCode("<?php\n// TODO: Add more encoding names\n$str = mb_preferred_mime_name('sjis-win');\necho \"$str\\n\";\n$str = mb_preferred_mime_name('SJIS');\necho \"$str\\n\";\n$str = mb_preferred_mime_name('EUC-JP');\necho \"$str\\n\";\n$str = mb_preferred_mime_name('UTF-8');\necho \"$str\\n\";\n$str = mb_preferred_mime_name('ISO-2022-JP');\necho \"$str\\n\";\n$str = mb_preferred_mime_name('JIS');\necho \"$str\\n\";\n$str = mb_preferred_mime_name('ISO-8859-1');\necho \"$str\\n\";\n$str = mb_preferred_mime_name('UCS2');\necho \"$str\\n\";\n$str = mb_preferred_mime_name('UCS4');\necho \"$str\\n\";\necho \"== INVALID PARAMETER ==\\n\";\n// Invalid encoding\ntry {\n    var_dump(mb_preferred_mime_name('BAD_NAME'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
