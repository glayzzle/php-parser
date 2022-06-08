// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/corrupt_001.phpt
  it("Phar: corrupted zip (count mismatch)", function () {
    expect(parser.parseCode("<?php\ntry {\n    new PharData(__DIR__ . '/files/count1.zip');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    new PharData(__DIR__ . '/files/count2.zip');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
