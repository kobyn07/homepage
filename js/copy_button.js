$(function () {
    document.queryCommandSupported("copy") && ($("div.prettyprint").before('<div class="div-sample-copy"><span class="btn-sample-copy">Copy</span></div>'), $(".btn-sample-copy").click(function () {
        window.getSelection().removeAllRanges();
        try {
            var e = document.createRange();
            e.selectNode($(this).parent().next("div.prettyprint").get()[0]), window.getSelection().addRange(e), document.execCommand("copy");
            $(this).notify("Success!", {
                className: "success",
                position: "top right",
                autoHideDelay: 1250,
                showDuration: 200,
                hideDuration: 300
            });
        } catch (o) {
            console.log(o)
        }
        window.getSelection().removeAllRanges()
    }))
});