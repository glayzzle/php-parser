// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_mime_encode.phpt
  it("iconv_mime_encode()", function () {
    expect(parser.parseCode("<?php\nfunction my_error_handler($errno, $errmsg, $filename, $linenum)\n{\n    echo \"$errno: $errmsg\\n\";\n}\nset_error_handler('my_error_handler');\n$preference = array(\n    \"scheme\" => \"B\",\n    \"output-charset\" => \"ISO-2022-JP\",\n    \"input-charset\" => \"EUC-JP\",\n    \"line-break-chars\" => \"\\n\"\n);\nfor ($line_len= 0; $line_len < 80; ++$line_len) {\n    print \"-------- line length=$line_len\\n\";\n    $preference[\"line-length\"] = $line_len;\n    $result = iconv_mime_encode(\"From\", \"����ץ�ʸ���󥵥�ץ�ʸ�������ܸ�ƥ�����\", $preference);\n    var_dump($result);\n    if ($result !== false) {\n                $max = max(array_map(\"strlen\", explode(\"\\n\", $result)));\n        print \"-------- \";\n        var_dump(($max <= $line_len));\n    } else {\n        print \"-------- \\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
