// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_rfork_nowait.phpt
  it("Test function pcntl_rfork() with no wait flag.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test by with child not reporting to the parent ***\\n\";\n$pid = pcntl_rfork(RFNOWAIT|RFTSIGZMB,SIGUSR1);\nif ($pid > 0) {\n\tvar_dump($pid);\n} else {\n\tvar_dump($pid);\n  sleep(2); // as the child does not wait so we see its \"pid\"\n}\n?>")).toMatchSnapshot();
  });
});
