var back_redirect_back_link = 'https://pay.kiwify.com.br/X9knpLb';

history.pushState({}, "", location.href);
history.pushState({}, "", location.href);

window.onpopstate = function() {
    setTimeout(function() {
        if (location.href.indexOf('#') == -1) {
            location.href = back_redirect_back_link + location.search;
        }
    }, 1);
};