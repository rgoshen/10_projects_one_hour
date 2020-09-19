$(document).ready(() => {
  const bgColorClass = [
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-danger",
    "bg-warning",
    "bg-info",
    "bg-light",
    "bg-dark",
  ];
  let index = 0;

  $("#bgColor").click(() => {
    if (index === bgColorClass.length) {
      $("body").removeClass(bgColorClass[index - 1]);
      index = 0;
    }

    if ($("body").hasClass(bgColorClass[index - 1])) {
      $("body").removeClass(bgColorClass[index - 1]);
    }

    $("body").addClass(bgColorClass[index]);

    if (index === 7) {
      $("body").addClass("text-light");
      $("#nav-bar").removeClass("navbar-light");
      $("#nav-bar").addClass("navbar-dark");
    } else {
      $("body").removeClass("text-light");
      $("#nav-bar").removeClass("navbar-dark");
      $("#nav-bar").addClass("navbar-light");
    }

    index++;
  });
});
