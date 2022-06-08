// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/async_signals_2.phpt
  it("Async signals in zend_call_function", function () {
    expect(parser.parseCode("<?php\npcntl_async_signals(1);\npcntl_signal(SIGALRM, function($signo) {\n    throw new Exception(\"Alarm!\");\n});\npcntl_alarm(1);\ntry {\n    array_map(\n        'time_nanosleep',\n        array_fill(0, 360, 1),\n        array_fill(0, 360, 0)\n    );\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
