// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_file_error.phpt
  it("Hash: hash_file() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing hash_file() : error conditions ***\\n\";\n// Set up file\n$filename = 'hash_file_error_example.txt';\nfile_put_contents( $filename, 'The quick brown fox jumped over the lazy dog.' );\n// hash_file() error tests\necho \"\\n-- Testing hash_file() function with an unknown algorithm --\\n\";\ntry {\n    hash_file('foobar', $filename);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing hash_file() function with a non-existent file --\\n\";\nvar_dump(hash_file('md5', 'nonexistent.txt'));\n?>")).toMatchSnapshot();
  });
});
