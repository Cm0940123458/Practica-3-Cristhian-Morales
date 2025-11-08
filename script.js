document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Oculta los mensajes de error anteriores
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            group.classList.remove('has-error');
            const errorMessage = group.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.textContent = '';
            }
        });

        let isValid = true;

        // Validar el campo de Nombre
        const nombreInput = document.getElementById('nombre');
        if (nombreInput.value.trim().length < 3) {
            showError(nombreInput, 'Por favor, ingrese un nombre con al menos 3 caracteres.');
            isValid = false;
        }

        // Validar el campo de Correo Electrónico
        const emailInput = document.getElementById('email');
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Por favor, ingrese su correo electrónico.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Por favor, ingrese un correo electrónico válido.');
            isValid = false;
        }

        // Validar el campo de Mensaje
        const mensajeInput = document.getElementById('mensaje');
        if (mensajeInput.value.trim() === '') {
            showError(mensajeInput, 'Por favor, ingrese un mensaje.');
            isValid = false;
        }

        if (isValid) {
            alert('Formulario enviado exitosamente!');
            form.reset();
        }
    });

    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add('has-error');
        const errorMessage = formGroup.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = message;
        }
    }

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});