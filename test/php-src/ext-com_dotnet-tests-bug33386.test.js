// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug33386.phpt
  it("Bug #33386 (ScriptControl only sees last function of class)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass twoFuncs {\n    public function func1() { echo \" func one\\n\"; }\n    public function func2() { echo \" func two\\n\"; }\n}\ntry {\n    $ciTF = new twoFuncs;\n    $oScript = new COM(\"MSScriptControl.ScriptControl\");\n    $oScript->Language = \"VBScript\";\n    $oScript->AddObject (\"tfA\", $ciTF, true);\n    foreach (array(1,2) as $i) {\n        $oScript->ExecuteStatement (\"tfA.func$i\");\n        $oScript->ExecuteStatement (\"func$i\");\n    }\n    $oScript->AddObject (\"tfB\", $ciTF);\n    foreach (array(1,2) as $i) {\n        $oScript->ExecuteStatement (\"tfB.func$i\");\n    }\n} catch (Exception $e) {\n    print $e;\n}\n?>")).toMatchSnapshot();
  });
});
