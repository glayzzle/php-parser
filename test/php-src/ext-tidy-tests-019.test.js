// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/019.phpt
  it("tidy_repair_*() and invalid parameters", function () {
    expect(parser.parseCode("<?php\n$l = 1;\n$s = \"\";\ntidy_repair_string($s, $l, $l);\ntidy_repair_string($s, $s, $s);\ntidy_repair_string($l, $l, $l);\ntry {\n    tidy_repair_file($s, $l, $l, $l);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    tidy_repair_file($s, $s, $s, $s);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntidy_repair_file($l, $l, $l ,$l); // This doesn't emit any warning, TODO look into\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
