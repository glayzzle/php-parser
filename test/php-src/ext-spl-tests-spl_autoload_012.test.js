// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_012.phpt
  it("SPL: spl_autoload() capturing multiple Exceptions in __autoload", function () {
    expect(parser.parseCode("<?php\nfunction autoload_first($name)\n{\n  echo __METHOD__ . \"\\n\";\n  throw new Exception('first');\n}\nfunction autoload_second($name)\n{\n  echo __METHOD__ . \"\\n\";\n  throw new Exception('second');\n}\nspl_autoload_register('autoload_first');\nspl_autoload_register('autoload_second');\ntry {\n    class_exists('ThisClassDoesNotExist');\n} catch(Exception $e) {\n    do {\n        echo $e->getMessage().\"\\n\";\n    } while($e = $e->getPrevious());\n}\ntry {\n    new ThisClassDoesNotExist;\n} catch(Exception $e) {\n    do {\n        echo $e->getMessage().\"\\n\";\n    } while($e = $e->getPrevious());\n}\nclass_exists('ThisClassDoesNotExist');\n?>\n===DONE===")).toMatchSnapshot();
  });
});
