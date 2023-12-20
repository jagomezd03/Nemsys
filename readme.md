# Nemsys
***
### Primera semana
---
#### Primer dia
Se decide inclinar por el uso del framework Bootstrap para el diseño front end de la pagina. Se decide usar un dashboard con widgets personalidos por usuario como añadido de personalizacion de la app, ademas de un sistema de seleccion de idioma.
>  Se estudiara en fases finales, la viabilidad de un modo oscuro, y se prevee que en las fases de testeo se solicite a los usuarios si manifiestan la necesidad de una version para mobile
**Rack Interactivo**
Se decidio implementar un rack default con los siete dias inmediatos incluyendo el actual, esto para evitar un overflow del rack, aunque en dado caso se decidio añadir un filtro de fechas(Proximo a implementarse) en un intervalo maximo de 30 dias. La tabla tendra un ancho maximo del 80% de la pantalla. Aunque se elijan mas dias que los que la tabla esta diseñada para verse, se implemento que la tabla se contenga el en la caja diseñada alrededor de ella y con esto convertirla en slider para mas comodidad del usuario

Se han establecido 6 estados de cuarto hasta el momento
* Libre (Verde)
* Ocupada (Rojo)
* Bloqueo por Mantenimiento (Amarillo "Color provisional")
* Bloqueo Administrativo (Amarillo "Color provisional")
* Limpieza (Azul Claro)
* Reserva (Negro "Color provisional")
con los que se estableceran filtros los cuales se aplicaran en el rack al igual que el rango de fechas que es opcional

En cuanto al diseño principal se dan dos opciones
1. Sidebar: Barra Lateral que se mantendra siempre en el diseño y se podra abrir mediante un toggler
2. Navbar: Barra en la parte superior que se mantendra en su sitio, y cuando desaparezca de la visual del usuario quedara en una posicion fixed
---