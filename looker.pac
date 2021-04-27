function FindProxyForURL( url, host ) {
    // Default to using no proxy.
    //var ProxyConfig = "DIRECT";
    var ProxyConfig = "SOCKS5 127.0.0.1:12345";

    if (dnsDomainIs(host, "stats.dyninno.net")) {
        // Requested domain matches, let's use the proxy.
        ProxyConfig = "SOCKS5 127.0.0.1:12345";
    }

    if (shExpMatch(url, "*looker*")) {
      ProxyConfig = "SOCKS5 127.0.0.1:12345";
    }

    return ProxyConfig;
}
