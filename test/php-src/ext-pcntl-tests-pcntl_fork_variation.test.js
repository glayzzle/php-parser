// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_fork_variation.phpt
  it("Test function pcntl_fork() by testing the process isolation in the forking hierarchy father -> son -> grandson where father can not knows his grandson", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing the process isolations between a process and its forks ***\\n\";\n$pid = pcntl_fork();\nif ($pid > 0) {\n  pcntl_wait($status);\n  echo \"father is $pid\\n\";\n  if (!isset($pid2))\n  {\n    echo \"father ($pid) doesn't know its grandsons\\n\";\n  }\n}\nelse\n{\n  echo \"son ($pid)\\n\";\n  $pid2 = pcntl_fork();\n  if ($pid2 > 0)\n  {\n    pcntl_wait($status2);\n    echo \"son is father of $pid2\\n\";\n  }\n  else\n  {\n    echo \"grandson ($pid2)\\n\";\n  }\n}\n?>")).toMatchSnapshot();
  });
});
