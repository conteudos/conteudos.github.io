function ber_doit() {
    setTimeout(function() {
        location.href = ber_settings.redirectURL;
    }, 1);
}
history.pushState({}, "", location.href),
    history.pushState({}, "", location.href),
    ber_settings.events.back &&
    (window.onpopstate = function() {
        ber_doit();
    }),
    ber_settings.events.exit_intent &&
    (window.onload = function() {
        jQuery(document).on("mouseleave", function(t) {
            t.clientY <= 0 && ber_doit();
        });
    });