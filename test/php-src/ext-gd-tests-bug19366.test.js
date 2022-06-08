// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug19366.phpt
  it("Bug #19366 (gdimagefill() function crashes (fixed in bundled libgd))", function () {
    expect(parser.parseCode("<?php\necho \"Alive: create image\\n\";\n$width = 50;\n$height = 100;\n$ImHandle = imagecreate($width,$height);\necho \"Alive: Define colors\\n\";\n$MyBlue = imagecolorAllocate($ImHandle, 0, 0, 255);\n$MyRed = imagecolorAllocate($ImHandle, 255, 0, 0);\n$MyWhite = imagecolorAllocate($ImHandle, 255, 255, 255);\n$MyBlack = imagecolorAllocate($ImHandle, 0, 0, 0);\necho \"Alive: Draw\\n\";\nImageFill($ImHandle,0,0,$MyBlack);\nImageLine($ImHandle,20,20,180,20,$MyWhite);\nImageLine($ImHandle,20,20,20,70,$MyBlue);\nImageLine($ImHandle,20,70,180,70,$MyRed);\nImageLine($ImHandle,180,20,180,45,$MyWhite);\nImageLine($ImHandle,180,70,180,45,$MyRed);\nImageLine($ImHandle,20,20,100,45,$MyBlue);\nImageLine($ImHandle,20,70,100,45,$MyBlue);\nImageLine($ImHandle,100,45,180,45,$MyRed);\nImageFill($ImHandle,21,45,$MyBlue);\nImageFill($ImHandle,100,69,$MyRed);\nImageFill($ImHandle,100,21,$MyWhite);\necho \"Alive: ImageString\\n\";\nImageString($ImHandle,4,40,75,\"Czech Republic\",$MyWhite);\necho \"Alive: Send to browser\\n\";\n//Header(\"Content-type: image/PNG\");\n//ImagePNG($ImHandle);\necho \"Alive: Free resources\\n\";\nimagedestroy($ImHandle);\necho \"Alive: Done\\n\";\n?>")).toMatchSnapshot();
  });
});
