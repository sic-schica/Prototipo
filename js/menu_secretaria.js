$(function(){
	$('#menu').prepend('<ul class="navbar-nav navbar-sidenav" id="exampleAccordion"><li class="nav-item"><a class="nav-link" href="index_secretaria.html"><i class="fa fa-fw fa-dashboard"/><span class="nav-link-text"> Dashboard</span></a></li><li class="nav-item"><a class="nav-link" href="consultar_procesos.html"><i class="fa fa-fw fa-cogs"/><span class="nav-link-text"> Consultar procesos</span></a></li><li class="nav-item" data-toggle="tooltip" data-placement="right" title="Secretaria"><a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseSecretaria" data-parent="#exampleAccordion"><i class="fa fa-fw fa-tty"/><span class="nav-link-text"> Procesos de Secretaría</span></a><ul class="sidenav-second-level collapse" id="collapseSecretaria"><li><a href="">Fijar en lista</a></li><li><a href="">Notificar por estado</a></li><li><a href="">Consultar numeración</a></li><li><a href="">Ingresar al despacho</a></li><li><a href="">Enviar a archivo</a></li></ul></li><li class="nav-item" data-toggle="tooltip" data-placement="right" title="Radicacion"><a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseRadicacion" data-parent="#exampleAccordion"><i class="fa fa-fw fa-file"/><span class="nav-link-text"> Radicación</span></a><ul class="sidenav-second-level collapse" id="collapseRadicacion"><li><a href="">Generar documento</a></li><li><a href="">Radicar</a></li></ul></li><li class="nav-item"><a class="nav-link" href=""><i class="fa fa-fw fa-wrench"/><span class="nav-link-text"> Configuración</span></a></li></ul>');
});