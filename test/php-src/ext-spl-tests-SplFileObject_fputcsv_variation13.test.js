// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fputcsv_variation13.phpt
  it("Test fputcsv() : usage variations - with default enclosure & delimiter of two chars", function () {
    expect(parser.parseCode("<?php\n/* Testing fputcsv() to write to a file when default enclosure value and delimiter\n   of two chars is provided */\necho \"*** Testing fputcsv() : with default enclosure & delimiter of two chars ***\\n\";\n$fo = new SplFileObject(__DIR__ . '/SplFileObject_fputcsv_variation13.csv', 'w');\ntry {\n    var_dump($fo->fputcsv(array('water', 'fruit'), ',,', '\"'));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nunset($fo);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
