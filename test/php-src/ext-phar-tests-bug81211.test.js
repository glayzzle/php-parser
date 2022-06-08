// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug81211.phpt
  it("Bug #81211 (Symlinks are followed when creating PHAR archive)", function () {
    expect(parser.parseCode("<?php\nmkdir(__DIR__ . '/bug81211');\nmkdir(__DIR__ . '/bug81211/foobar');\nmkdir(__DIR__ . '/bug81211/foo');\nfile_put_contents(__DIR__ . '/bug81211/foobar/file', 'this file should NOT be included in the archive!');\nsymlink(__DIR__ . '/bug81211/foobar/file', __DIR__ . '/bug81211/foo/symlink');\n$archive = new PharData(__DIR__ . '/bug81211/archive.tar');\ntry {\n    $archive->buildFromDirectory(__DIR__ . '/bug81211/foo');\n} catch (UnexpectedValueException $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\ntry {\n    $archive->buildFromIterator(new RecursiveDirectoryIterator(__DIR__ . '/bug81211/foo', FilesystemIterator::SKIP_DOTS), __DIR__ . '/bug81211/foo');\n} catch (UnexpectedValueException $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
