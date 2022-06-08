// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64677.phpt
  it("Bug #64677 (execution operator `` stealing surrounding arguments)", function () {
    expect(parser.parseCode("<?PHP\nclass cat {\n    public function show_output($prepend, $output = '') {\n    }\n}\n$cat = new cat();\n$cat->show_output('Files: ', trim((string) `cd .`)); // this gives invalid args to shell_exec\n$cat->show_output('Files: ', `cd .`); // this causes a segmentation fault\n$cat->show_output(`cd .`); // this causes a segmentation fault\nfunction show_outputa($prepend, $output) {\n    echo \"Okey\";\n}\nshow_outputa('Files: ', `cd .`); // this works as expected\n?>")).toMatchSnapshot();
  });
});
