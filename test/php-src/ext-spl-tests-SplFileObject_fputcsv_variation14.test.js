// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fputcsv_variation14.phpt
  it("Test fputcsv() : usage variations - with enclosure & delimiter of two chars", function () {
    expect(parser.parseCode("<?php\n/* Testing fputcsv() to write to a file when default enclosure value and delimiter\n   of two chars is provided and file is opened in read only mode */\necho \"*** Testing fputcsv() : with enclosure & delimiter of two chars and file opened in read mode ***\\n\";\n$fo = new SplFileObject(__DIR__ . '/SplFileObject_fputcsv_variation14.csv', 'w');\ntry {\n    var_dump($fo->fputcsv(array('water', 'fruit'), ',,', '\"\"'));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nunset($fo);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
