$(document).ready(function() {
    /*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/
    $('#modal-send').click(function () {
        // собираем данные с формы
        let user_name = $('#name-modal').val();
        let user_email = $('#email-modal').val();
        // let user_tel   = $('#tel-desktop').val();
        let text_comment = $('#message-modal').val();
        // отправляем данные
        $.ajax({
            url: "contact.php",
            type: "post",
            data: {
                "name": user_name,
                "email": user_email,
                // "phone": user_tel,
                "message": text_comment
            },
            error: function () {
                $("#erconts").html("Произошла ошибка!");
            },
            success: function (result) {
                /* В случае удачной обработки и отправки выполнится следующий код*/
                $('#name-modal').val('');
                // $('#tel-desktop').val('');
                $('#email-modal').val('');
                $('#message-modal').val('');
                // displayModal('modal','flex');
            }
        });
    });
})