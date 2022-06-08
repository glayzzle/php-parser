// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/bug81577.phpt
  it("Bug #81577: (Exceptions in interrupt handlers)", function () {
    expect(parser.parseCode("<?php\nclass C {\n\tpublic static $cond = 1;\n\tpublic static $a;\n}\nC::$a = [ C::$cond ]; // make countable zval\npcntl_async_signals(true);\npcntl_signal(SIGTERM, function ($signo) { throw new Exception(\"Signal\"); });\nfor ($i = 0; $i < 5; $i++) {\n\ttry {\n\t\tC::$a + C::$a;\n\t\tposix_kill(posix_getpid(), SIGTERM) + C::$cond;\n\t} catch (Throwable $ex) {\n\t\techo get_class($ex) , \" : \" , $ex->getMessage() , \"\\n\";\n\t}\n}\n?>")).toMatchSnapshot();
  });
});
