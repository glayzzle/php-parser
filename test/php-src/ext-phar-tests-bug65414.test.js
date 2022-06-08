// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug65414.phpt
  it("Bug #65414 Injection (A1) in .phar files magic .phar directory", function () {
    expect(parser.parseCode("<?php\n$phar = new \\Phar(__DIR__ . '/bug65414.phar', 0, 'bug65414.phar');\n$bads = [\n    '.phar/injected-1.txt',\n    '/.phar/injected-2.txt',\n    '//.phar/injected-3.txt',\n    '/.phar/',\n];\nforeach ($bads as $bad) {\n    echo $bad . ':';\n    try {\n        $phar->addFromString($bad, 'this content is injected');\n        echo 'Failed to throw expected exception';\n    } catch (BadMethodCallException $ex) {\n        echo $ex->getMessage() . PHP_EOL;\n    }\n}\necho 'done' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
