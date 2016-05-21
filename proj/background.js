var width = 640;
var height = 360;

chrome.browserAction.onClicked.addListener(function(tab){
    var top = 0;
    var left = 0;

    chrome.windows.getCurrent(function(w) {
        if (w.top != 0) top = w.top;
        if (w.left != 0) left = w.left;

        chrome.windows.create({
            "type": "popup",
            "width": width,
            "height": height,
            "top": top + (screen.height - height) / 2,
            "left": left + (screen.width - width) / 2,

            "url":
                'https://twitter.com/intent/tweet'
                    + '?text=' + encodeURIComponent(tab.title)
                    + '&url=' + encodeURIComponent(tab.url)
        });
    });
});
