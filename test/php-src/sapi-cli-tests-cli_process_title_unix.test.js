// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/cli_process_title_unix.phpt
  it("Check cli_process_title support on Unix", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing setting the process title ***\\n\";\n$set_title = $original_title = uniqid(\"title\", true);\n$pid = getmypid();\nif (cli_set_process_title($original_title) === true)\n  echo \"Successfully set title\\n\";\n$ps_process_title_field = \"command\";\nif (strtoupper(substr(PHP_OS, 0, 3)) == \"AIX\")\n{\n  $ps_process_title_field = \"args\";\n}\n$ps_output = shell_exec(\"ps -p $pid -o $ps_process_title_field | tail -n 1\");\nif ($ps_output === null)\n{\n  echo \"ps failed\\n\";\n  die();\n}\n$loaded_title = trim($ps_output);\nif (strpos(strtoupper(substr(PHP_OS, 0, 13)), \"BSD\") !== false)\n{\n  // Fix up title for BSD\n  $set_title = \"php: $original_title (php)\";\n}\nif ($loaded_title == $set_title)\n  echo \"Successfully verified title using ps\\n\";\nelse\n  echo \"Actually loaded from ps: $loaded_title\\n\";\n$read_title = cli_get_process_title();\nif ($read_title == $original_title)\n  echo \"Successfully verified title using get\\n\";\nelse\n  echo \"Actually loaded from get: $read_title\\n\";\n?>")).toMatchSnapshot();
  });
});
