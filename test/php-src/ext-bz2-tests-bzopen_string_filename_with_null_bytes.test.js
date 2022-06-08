// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/bzopen_string_filename_with_null_bytes.phpt
  it("bzopen(): throw TypeError if filename contains null bytes", function () {
    expect(parser.parseCode("<?php\ntry {\n    bzopen(\"file\\0\", \"w\");\n} catch (TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    bzopen(\"file\\0\", \"r\");\n} catch (TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
