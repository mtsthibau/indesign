/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var projetosController = {
    projetos: [], //Projetos Data
    data: {},
    setDataProjects: function () {

        //Carrega Dados
        this.data = projetosDataController.data;

        //Renderiza HTML
        this.mountProjetosHtml();

        //Registra eventos 
        this.registerEvents();
    },
    mountProjetosHtml: function () {

        var html = "";

        for (var i = 0; i < this.data.length; i++) {
            html += "<div class='col-md-4 col-sm-6 portfolio-item'>" +
                    "<a class='portfolio-link' id='" + this.data[i].Id + "'>" +
                    "<div class='portfolio-hover'>" +
                    "<div class='portfolio-hover-content'>" +
                    "<i class='fa fa-plus fa-3x'></i>" +
                    "</div>" +
                    "</div>" +
                    "<img src='" + this.data[i].FotoPrincipal + "' class='img-responsive' alt='' height='150' width='370'>" +
                    "</a>" +
                    "<div class='portfolio-caption'>" +
                    "<h4>" + this.data[i].Titulo + "</h4>" +
                    "<p class='text-muted'>" + this.data[i].Subtitulo + "</p>" +
                    "</div>" +
                    "</div>";
        }

        $("#containerProjetoItem").html(html);
    },
    setMotalsInfoProject: function (projetoSelected) {
        var projeto = null;
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].Id === projetoSelected) {
                projeto = this.data[i];
                break;
            }
        }

        var fotos = "<ul class='bxslider'>";
        for (var j = 0; j < projeto.Fotos.length; j++) {
            fotos += "<li><img src='" + projeto.Fotos[j] + "' class='img-responsive'/></li>";
        }
        fotos += "</ul>";

        var html = "<div class='container'>" +
                "<div class='row'>" +
                "<div class='col-lg-8 col-lg-offset-2'>" +
                "<div class='modal-body'>" +
                "<h2>" + projeto.Titulo + "</h2>" +
                "<p class='item-intro text-muted'>" + projeto.Subtitulo + "</p>" +
                fotos +
                "<p>" +
                "</p>" +
                "<p>" + projeto.Descricao + "</p>" +
                "<button type='button' class='btn btn-primary' data-dismiss='modal'>" +
                "<i class='fa fa-times'></i> Fechar</button>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>";

        $('#containerModal').html(html);

    },
    registerEvents: function () {

        $(document).on('click', '.portfolio-link', function (e) {
            e.EventImmediateStopPropagation;
            var id = $(this).attr("id");
            id = parseInt(id);
            projetosController.setMotalsInfoProject(id);

            $("#projetoModal").modal("show");
            $('.bxslider').bxSlider({
                infiniteLoop: true,
                hideControlOnEnd: false,
                slideWidth: 1000
            });

            $(".bx-viewport").css("height", "460");
            $(".bx-viewport li").css("max-width", "100%");
            $(".bx-viewport li").css("width", "700");
        });
    }
};