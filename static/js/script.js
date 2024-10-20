$(document).ready(function() {
    $('.selector').click(function() {
        if ($(this).next(".sectionContents").hasClass("mshide")) {
            $(this).next(".sectionContents").removeClass("mshide");
            $(this).find("span").text("─ ");
        }
        else {
            $(this).next(".sectionContents").addClass("mshide");
            $(this).find("span").text("▼");
        }
    });
});