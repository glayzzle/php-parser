// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_load_error6.phpt
  it("Test DOMDocument::load() with invalid paths", function () {
    expect(parser.parseCode("<?php\n// create dom document\n$dom = new DOMDocument();\ntry {\n    $dom->load(\"\");\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $dom->load(\"/path/with/\\0/byte\");\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n// Path is too long\nvar_dump($dom->load(str_repeat(\" \", PHP_MAXPATHLEN + 1)));\n?>")).toMatchSnapshot();
  });
});
