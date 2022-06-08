// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/empty_pattern.phpt
  it("Check for empty pattern", function () {
    expect(parser.parseCode("<?php\ntry {\n    mb_ereg_search_init(\"\",\"\",\"\");\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nmb_split(\"\",\"\");\ntry {\n    mb_ereg_search_regs();\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
