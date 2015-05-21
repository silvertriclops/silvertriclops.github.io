function FindProxyForURL(url, host) {
	
	var regexpr = /\.mp4+/i
	if (regexpr.test(url))
		return "PROXY 10.0.0.170:3129; DIRECT";
	
	return "DIRECT";
}