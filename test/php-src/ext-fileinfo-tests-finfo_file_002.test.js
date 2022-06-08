// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_file_002.phpt
  it("finfo_file(): Testing mime types", function () {
    expect(parser.parseCode("<?php\n$fp = finfo_open(FILEINFO_MIME_TYPE);\n$results = array();\nforeach (glob(__DIR__ . \"/resources/*\") as $filename) {\n    if (is_file($filename)) {\n        $results[\"$filename\"] = finfo_file($fp, $filename);\n    }\n}\nksort($results);\nvar_dump($results);\n?>")).toMatchSnapshot();
  });
});
