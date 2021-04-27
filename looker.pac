function FindProxyForURL( url, host ) {
    // No proxy by default.
    var ProxyConfig = "DIRECT";

    if (dnsDomainIs(host, "stats.dyninno.net")) {
        // Requested domain matches, let's use the proxy.
        ProxyConfig = "PROXY 212.44.138.60:3121";
    }

    if (shExpMatch(url, "*looker*")) {
        ProxyConfig = "PROXY 212.44.138.60:3121";
    }

    return ProxyConfig;
}
