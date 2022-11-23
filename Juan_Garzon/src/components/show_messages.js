export function show_message(message, type = 'Success'){
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: type === 'Success' ? "gray" : "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}