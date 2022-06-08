// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_setopt_CURLOPT_READFUNCTION.phpt
  it("cURL option CURLOPT_READFUNCTION", function () {
    expect(parser.parseCode("<?php\nfunction custom_readfunction($oCurl, $hReadHandle, $iMaxOut)\n{\n  $sData = fread($hReadHandle,$iMaxOut-10); # -10 to have space to add \"custom:\"\n  if (!empty($sData))\n  {\n    $sData = \"custom:\".$sData;\n  }\n  return $sData;\n}\n$sFileBase  = __DIR__.DIRECTORY_SEPARATOR.'curl_opt_CURLOPT_READFUNCTION';\n$sReadFile  = $sFileBase.'_in.tmp';\n$sWriteFile = $sFileBase.'_out.tmp';\n$sWriteUrl  = 'file://'.$sWriteFile;\nfile_put_contents($sReadFile,'contents of tempfile');\n$hReadHandle = fopen($sReadFile, 'r');\n$oCurl = curl_init();\ncurl_setopt($oCurl, CURLOPT_URL,          $sWriteUrl);\ncurl_setopt($oCurl, CURLOPT_UPLOAD,       1);\ncurl_setopt($oCurl, CURLOPT_READFUNCTION, \"custom_readfunction\" );\ncurl_setopt($oCurl, CURLOPT_INFILE,       $hReadHandle );\ncurl_exec($oCurl);\ncurl_close($oCurl);\nfclose ($hReadHandle);\n$sOutput = file_get_contents($sWriteFile);\nvar_dump($sOutput);\n?>")).toMatchSnapshot();
  });
});
