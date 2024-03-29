var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function encode_base64(data)
{
	var out = "", c1, c2, c3, e1, e2, e3, e4;

	for (var i = 0; i < data.length; )
	{
		c1 = data.charCodeAt(i++);
		c2 = data.charCodeAt(i++);
		c3 = data.charCodeAt(i++);

		e1 = c1 >> 2;
		e2 = ((c1 & 3) << 4) + (c2 >> 4);
		e3 = ((c2 & 15) << 2) + (c3 >> 6);
		e4 = c3 & 63;

		if (isNaN(c2))
		{
			e3 = e4 = 64;
		}
		else if (isNaN(c3))
		{
			e4 = 64;
		}

		out += tab.charAt(e1) + tab.charAt(e2) + tab.charAt(e3) + tab.charAt(e4);
	}

	return out;
}

function decode_base64(data)
{
	var out = "", c1, c2, c3, e1, e2, e3, e4;

	for (var i = 0; i < data.length; )
	{
		e1 = tab.indexOf(data.charAt(i++));
		e2 = tab.indexOf(data.charAt(i++));
		e3 = tab.indexOf(data.charAt(i++));
		e4 = tab.indexOf(data.charAt(i++));

		c1 = (e1 << 2) + (e2 >> 4);
		c2 = ((e2 & 15) << 4) + (e3 >> 2);
		c3 = ((e3 & 3) << 6) + e4;

		out += String.fromCharCode(c1);

		if (e3 != 64)
		{
			out += String.fromCharCode(c2);
		}

		if (e4 != 64)
		{
			out += String.fromCharCode(c3);
		}
	}

	return out;

}

function XMLtoString(elem){

	var serialized;

	try
	{
		// XMLSerializer exists in current Mozilla browsers
		serializer = new XMLSerializer();
		serialized = serializer.serializeToString(elem);
	}
	catch (e)
	{
		// Internet Explorer has a different approach to serializing XML
		serialized = elem.xml;
	}

	return serialized;
}

