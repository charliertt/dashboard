// Asegúrate de que Parsley esté inicializado
$('#registroForm').parsley().on('form:submit', function (e) {
    // Si la validación es exitosa, muestra SweetAlert
    Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Te has registrado correctamente.',
        confirmButtonText: 'Aceptar',
        timer: 3000,
        timerProgressBar: true,
    }).then(() => {
        // Redirigir a otra página (por ejemplo, al dashboard)
        window.location.href = "dashboard.html";
    });

    return false; // Evita que el formulario se envíe
});
