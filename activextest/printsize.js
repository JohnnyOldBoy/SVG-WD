function setPrintSize()
{
	var lhPage = window.document.lhPage.getSVGDocument();
	var lhSvgNode = lhPage.getElementsByTagName("svg")[0];
	lhSvgNode.setAttribute("width",595 );
	lhSvgNode.setAttribute("height",841);
	var lhVBox = 	lhSvgNode.getAttribute("viewBox");
	var lhVBoxNums = lhVBox.split(" ");
	lhVBoxNums[0] = "0";
	lhVBox = lhVBoxNums[0] + " " + lhVBoxNums[1] + " " + lhVBoxNums[2] + " " + lhVBoxNums[3];
	lhSvgNode.setAttribute("viewBox",lhVBox);

	var rhPage = window.document.rhPage.getSVGDocument();
	var rhSvgNode = rhPage.getElementsByTagName("svg")[0];
	rhSvgNode.setAttribute("width",595 );
	rhSvgNode.setAttribute("height",841);
	var rhVBox = 	rhSvgNode.getAttribute("viewBox");
	var lhVBoxNums = rhVBox.split(" ");
	lhVBoxNums[0] = lhVBoxNums[2];
	rhVBox = lhVBoxNums[0] + " " + lhVBoxNums[1] + " " + lhVBoxNums[2] + " " + lhVBoxNums[3];
	rhSvgNode.setAttribute("viewBox",rhVBox);

}