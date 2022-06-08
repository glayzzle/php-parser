// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug79987.phpt
  it("Bug #79987 (Memory leak in SplFileInfo because of missing zend_restore_error_handling())", function () {
    expect(parser.parseCode("<?php\nclass BadSplFileInfo extends SplFileInfo {\n    public function __construct() {\n    }\n}\n$x = new BadSplFileInfo();\nset_error_handler(function ($type, $msg, $file, $line, $context = []) {\n    echo \"ops\\n\";\n});\ntry {\n    var_dump($x->getLinkTarget());\n} catch (Throwable $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($x->getFilename());\n} catch (Throwable $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($x->getExtension());\n} catch (Throwable $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($x->getBasename());\n} catch (Throwable $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
