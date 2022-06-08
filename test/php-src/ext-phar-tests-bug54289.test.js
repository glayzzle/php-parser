// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug54289.phpt
  it("Bug #54289 Phar::extractTo() does not accept specific directories to be extracted", function () {
    expect(parser.parseCode("<?php\n// put our test fixtures into a far\n$base  = __DIR__.DIRECTORY_SEPARATOR.'bug54289'.DIRECTORY_SEPARATOR;\n$inDir = $base.'in';\n$phar  = $base.'test.phar';\n$pharA = new Phar($phar);\n$pharA->buildFromDirectory($inDir);\n// we should be able to pull out a directory that's there, but none that share\n// the same prefix\n$outDir = $base.'out';\n$pharB = new Phar($phar);\n$pharB->extractTo($outDir, 'dirA/', true);\nvar_dump(file_exists($outDir.DIRECTORY_SEPARATOR.'dirA'.DIRECTORY_SEPARATOR.'fileA'));\nvar_dump(file_exists($outDir.DIRECTORY_SEPARATOR.'dirA'.DIRECTORY_SEPARATOR.'fileB'));\nvar_dump(is_dir($outDir.DIRECTORY_SEPARATOR.'dirAB'));\n// should also not be able to pull out non-existent ones\ntry {\n  $pharB->extractTo($outDir, 'dirX/', true);\n  echo 'failed to throw expected exception';\n} catch (PharException $ex) {\n}\n// should also not be able to pull out /, because paths are not \"rooted\" that way\ntry {\n  $pharB->extractTo($outDir, '/', true);\n  echo 'failed to throw expected exception';\n} catch (PharException $ex) {\n}\n// should be able to do by array, too\n$pharB = new Phar($phar);\n$pharB->extractTo($outDir, [ 'dirA/', 'dirAB/' ], true);\n// but not an array with a bad member in it\ntry {\n  $pharB = new Phar($phar);\n  $pharB->extractTo($outDir, [ 'dirA/', 'dirX/' ], true);\n  echo 'failed to throw expected exception';\n} catch (PharException $ex) {\n}\necho 'done';\n?>")).toMatchSnapshot();
  });
});
