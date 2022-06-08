// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/doubleclose.phpt
  it("close() called twice", function () {
    expect(parser.parseCode("<?php\necho \"Procedural\\n\";\n$zip = zip_open(__DIR__ . '/test.zip');\nif (!is_resource($zip)) {\n    die(\"Failure\");\n}\nvar_dump(zip_close($zip));\ntry {\n    var_dump(zip_close($zip));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Object\\n\";\n$zip = new ZipArchive();\nif (!$zip->open(__DIR__ . '/test.zip')) {\n    die('Failure');\n}\nif ($zip->status == ZIPARCHIVE::ER_OK) {\n    var_dump($zip->close());\n    try {\n        $zip->close();\n    } catch (ValueError $err) {\n        echo $err->getMessage(), PHP_EOL;\n    }\n} else {\n    die(\"Failure\");\n}\n?>\nDone")).toMatchSnapshot();
  });
});
