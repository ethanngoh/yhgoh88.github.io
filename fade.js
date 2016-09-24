$(document).ready(function() {
    var uiActiveState = "ui-state-active";
    var fadeDuration = 100;
    var opacityMin = 0.5;
    var opacityMax = 1.0;

    /* Init Navigation link */
    var al = $("#aboutLink")
    if (!al.parent().hasClass(uiActiveState)) {
        al.fadeTo(fadeDuration, opacityMin);
    }

    /* Navigation link animations */
    $("#aboutLink").hover(function() {
        var al = $("#aboutLink")
        if (!al.parent().hasClass(uiActiveState)) {
            al.fadeTo(fadeDuration, opacityMin);
        }
    }, function() {
        var al = $("#aboutLink")
        if (!al.parent().hasClass(uiActiveState)) {
            al.fadeTo(fadeDuration, opacityMax);
        }
    });
    $("#resumeLink").hover(function() {
        var al = $("#resumeLink")
        if (!al.parent().hasClass(uiActiveState)) {
            al.fadeTo(fadeDuration, opacityMin);
        }
    }, function() {
        var al = $("#resumeLink")
        if (!al.parent().hasClass(uiActiveState)) {
            al.fadeTo(fadeDuration, opacityMax);
        }
    });
    $("#projectLink").hover(function() {
        var al = $("#projectLink")
        if (!al.parent().hasClass(uiActiveState)) {
            al.fadeTo(fadeDuration, opacityMin);
        }
    }, function() {
        var al = $("#projectLink")
        if (!al.parent().hasClass(uiActiveState)) {
            al.fadeTo(fadeDuration, opacityMax);
        }
    });
    $("#contactLink").hover(function() {
        var al = $("#contactLink")
        if (!al.parent().hasClass(uiActiveState)) {
            al.fadeTo(fadeDuration, opacityMin);
        }
    }, function() {
        var al = $("#contactLink")
        if (!al.parent().hasClass(uiActiveState)) {
            al.fadeTo(fadeDuration, opacityMax);
        }
    });

    /* Navigation tabbed content animations */
    $("#aboutLink").click(function() {
        $("#tabs li.ui-state-active a").fadeTo(fadeDuration, opacityMax);
        $("#aboutTab").fadeIn();
    });
    $("#resumeLink").click(function() {
        $("#tabs li.ui-state-active a").fadeTo(fadeDuration, opacityMax);
        $("#resumeTab").fadeIn();
    });
    $("#projectLink").click(function() {
        $("#tabs li.ui-state-active a").fadeTo(fadeDuration, opacityMax);
        $("#projectTab").fadeIn();
    });
    $("#contactLink").click(function() {
        $("#tabs li.ui-state-active a").fadeTo(fadeDuration, opacityMax);
        $("#contactTab").fadeIn();
    });

    /* Contact Image Links Animations */
    $("#facebook").hover(function() {
        $("#facebook img").fadeTo("fast", 1.0);
    }, function() {
        $("#facebook img").fadeTo("fast", 0.7);
    });

    $("#linkedin").hover(function() {
        $("#linkedin img").fadeTo("fast", 1.0);
    }, function() {
        $("#linkedin img").fadeTo("fast", 0.7);
    });

    $("#mail").hover(function() {
        $("#mail img").fadeTo("fast", 1.0);
    }, function() {
        $("#mail img").fadeTo("fast", 0.7);
    });


});
