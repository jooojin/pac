function FindProxyForURL(url, host) {
    // No proxy by default.
    var ProxyConfig = "DIRECT";
    
    if (shExpMatch(url, "*stats.dyninno.net*")) {
        // Requested domain matches, let's use the proxy.
        ProxyConfig = "PROXY 212.44.138.60:3129";
    }

    if (shExpMatch(url, "*looker*")) {
        ProxyConfig = "PROXY 212.44.138.60:3129";
    }

    return ProxyConfig;
    
}
