function change(event, element) {
    event.preventDefault(); // Prevent the default behavior of anchor tags to avoid page reload
    var sectionId = element.getAttribute("href").substring(1); // Get the id of the section to navigate
    var section = document.getElementById(sectionId);
    
    section.scrollIntoView({behavior: "smooth"}); // Scroll to the section smoothly
}

const a = document.querySelectorAll('.slider');
var counter = 0;

a.forEach((slider, index) => {
    slider.style.top = `${index * 100}%`;
});

const Previous = () => {
    counter--;
    if (counter < 0) {
        counter = a.length -1;
    }
    sliderrun();
};

const Next = () => {
    counter++;
    if (counter >= a.length) {
        counter = 0;
    }
    sliderrun();
};

const sliderrun = () => {
    a.forEach(slider => {
        slider.style.transform = `translateY(-${counter * 100}%)`;
    });
};

$(document).ready(function() {
    $("#search").focus(function() {
        $("#search").css("backgroundColor", "lightsalmon");
    });
    $("#search").blur(function() {
        $("#search").css("backgroundColor", "");
    });
    $("#search").keydown(function() {
        $("#search").css("backgroundColor", "lightyellow");
    });
    $("#search").keyup(function() {
        $("#search").css("backgroundColor", "lightcoral");
    });
});

var z = document.getElementById("thm");
var b = document.getElementById("pick");
var c = z.getElementsByTagName("img");
for (let i = 0; i < c.length; i++) {
    let d = c[i];
    d.addEventListener("click", function() {
        b.src = this.src;
    });
}
