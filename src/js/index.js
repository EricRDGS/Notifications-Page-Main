let notifications = document.querySelectorAll(".notification");
let spanNotifications = document.querySelectorAll("#new-span")
let newNotifications = document.querySelectorAll(".new");
let span = document.getElementById("notifications");
let links = document.querySelectorAll("a")

span.innerHTML = newNotifications.length

document.getElementById("mark").addEventListener("click", () => {
    notifications.forEach((notification, index) => {
        notifications[index].classList.remove('new');
        spanNotifications[index].classList.remove('new-notification')
    });

    newNotifications = document.querySelectorAll(".new");
    span.innerHTML = newNotifications.length;
});

links[0].addEventListener("click", () => {
    notifications[0].classList.remove('new');
    spanNotifications[0].classList.remove('new-notification')

    newNotifications = document.querySelectorAll(".new");
    span.innerHTML = newNotifications.length;
});

links[1].addEventListener("click", () => {
    notifications[0].classList.remove('new');
    spanNotifications[0].classList.remove('new-notification')

    newNotifications = document.querySelectorAll(".new");
    span.innerHTML = newNotifications.length;
});

links[2].addEventListener("click", () => {
    notifications[1].classList.remove('new');
    spanNotifications[1].classList.remove('new-notification')

    newNotifications = document.querySelectorAll(".new");
    span.innerHTML = newNotifications.length;
});

links[3].addEventListener("click", () => {
    notifications[2].classList.remove('new');
    spanNotifications[2].classList.remove('new-notification')

    newNotifications = document.querySelectorAll(".new");
    span.innerHTML = newNotifications.length;
});

links[4].addEventListener("click", () => {
    notifications[2].classList.remove('new');
    spanNotifications[2].classList.remove('new-notification')

    newNotifications = document.querySelectorAll(".new");
    span.innerHTML = newNotifications.length;
});

links[5].addEventListener("click", () => {
    notifications[3].classList.remove('new');
    spanNotifications[3].classList.remove('new-notification')

    newNotifications = document.querySelectorAll(".new");
    span.innerHTML = newNotifications.length;
});

links[6].addEventListener("click", () => {
    notifications[4].classList.remove('new');
    spanNotifications[4].classList.remove('new-notification')

    newNotifications = document.querySelectorAll(".new");
    span.innerHTML = newNotifications.length;
});

links[7].addEventListener("click", () => {
    notifications[4].classList.remove('new');
    spanNotifications[4].classList.remove('new-notification')

    newNotifications = document.querySelectorAll(".new");
    span.innerHTML = newNotifications.length;
});

links[8].addEventListener("click", () => {
    notifications[5].classList.remove('new');
    spanNotifications[5].classList.remove('new-notification')

    newNotifications = document.querySelectorAll(".new");
    span.innerHTML = newNotifications.length;
});

links[9].addEventListener("click", () => {
    notifications[5].classList.remove('new');
    spanNotifications[5].classList.remove('new-notification')

    newNotifications = document.querySelectorAll(".new");
    span.innerHTML = newNotifications.length;
});

links[10].addEventListener("click", () => {
    notifications[6].classList.remove('new');
    spanNotifications[6].classList.remove('new-notification')

    newNotifications = document.querySelectorAll(".new");
    span.innerHTML = newNotifications.length;
});

links[11].addEventListener("click", () => {
    notifications[6].classList.remove('new');
    spanNotifications[6].classList.remove('new-notification')

    newNotifications = document.querySelectorAll(".new");
    span.innerHTML = newNotifications.length;
});





