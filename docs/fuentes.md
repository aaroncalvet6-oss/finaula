# Fuentes oficiales · registro de datos

Aquí está cada dato legal o fiscal que usa (o quiere usar) una lección de Finaula, con su fuente
oficial, el enlace exacto, la fecha de consulta y su estado. Los identificadores `F-xx` son los que
cita [`temario.md`](./temario.md) y, desde la fase 4, `src/content/facts.ts`.

## Reglas

1. **Qué es un dato.** Cuenta como dato todo lo que dependa de una ley, de un organismo o de una
   cifra oficial: edades, porcentajes, plazos, límites, obligaciones, derechos, nombres de leyes y
   qué hace cada organismo. No son datos los conceptos generales que se explican con ejemplos
   inventados (qué es un presupuesto, el coste de oportunidad, cómo se calcula un interés
   compuesto, qué es una estafa por SMS).
2. **Fuente oficial siempre que se pueda.** BOE, Agencia Tributaria, Seguridad Social, SEPE,
   Ministerio de Trabajo, INE, Banco de España (y su Portal del Cliente Bancario), CNMV, Finanzas
   para Todos, Fondo de Garantía de Depósitos, Ministerio de Consumo, CNMC, Ministerio de
   Educación, BCE, INCIBE, AEPD, Policía Nacional, Guardia Civil, Ministerio del Interior y La
   Moncloa. Por decisión del propietario
   (17/10/2026) también valen dos excepciones: una reproducción literal del texto legal publicada
   en otra web, y la tabla de una mutua colaboradora con la Seguridad Social. En los dos casos la
   lección cita y enlaza la fuente oficial (el BOE o seg-social.es), nunca la web secundaria.
3. **Comprobación propia.** La lista de enlaces de `aaroncalvet6-oss/monedo/docs/fuentes.md` se ha
   usado solo para saber dónde buscar. Ningún dato se da por bueno porque aparezca allí.
4. **Cifras anuales.** Si un dato cambia cada año (columna «Anual»: sí), la lección explica el
   concepto y enlaza la página oficial. La cifra no aparece en la lección.
5. **Un dato que no está en un estado «Verificado» no se usa en ninguna lección.** Un curso con alguna
   lección que dependa de un dato pendiente no se publica. Un test lo comprobará desde la fase 4.

## Estados

- **Verificado (oficial)**: comprobado en la página oficial enlazada, en la fecha indicada.
- **Verificado (texto legal)**: comprobado en una reproducción literal del texto legal. La lección
  cita y enlaza el BOE.
- **Verificado (mutua colaboradora)**: comprobado en la tabla de una mutua colaboradora con la
  Seguridad Social. Sus cifras son solo referencia interna y no aparecen en las lecciones.
- **Pendiente**: no se ha podido abrir la fuente oficial. El enlace es el sitio donde hay que
  comprobarlo. No se usa.
- **Descartado**: se comprobó y el dato no era correcto o no se puede afirmar así, o se decidió no usarlo.

## Estado de la verificación (26/10/2026)

Desde el entorno de desarrollo **no se puede abrir ninguna de las fuentes**, ni las oficiales
(boe.es, sede.agenciatributaria.gob.es, seg-social.es, bde.es, cnmv.es) ni las secundarias
(loentiendo.com, elnotario.es, asepeyo.es): la política de red del entorno las bloquea. Las
verificaciones de esta tabla las ha hecho **el propietario del proyecto**, que comunicó los enlaces
y las fechas el 17/10/2026 (la de F-06, el 19/10/2026; las de la tanda 1 de los cursos 3 y 4, el
26/10/2026).

| Estado | Datos |
| --- | --- |
| Verificado (oficial) | F-06, F-08, F-12, F-14, F-15, F-16, F-17, F-18, F-19, F-20, F-21, F-22, F-23, F-31, F-32, F-34, F-35, F-40, F-47, F-49, F-50, F-51 |
| Verificado (texto legal) | F-01, F-02, F-03, F-04, F-05, F-07, F-09, F-10, F-11, F-52 |
| Verificado (mutua colaboradora) | F-13 |
| Pendiente (no se usan) | F-28, F-29, F-30, F-33, F-41 a F-46, F-48 y F-53 a F-81 (salvo F-79 y F-80) |
| Descartado | F-79, F-80 |

Consecuencias:

- El **curso 1** («Fundamentos del dinero») no depende de ningún dato legal o fiscal. Los datos
  F-30 y F-33 lo enriquecerían, pero no se usan hasta que estén verificados.
- El **curso 2** («Tu primer sueldo») tiene verificados todos los datos que citan sus lecciones
  (F-01 a F-23). Se puede publicar.
- El **curso 4** («Que no te estafen») tiene verificados todos sus datos (F-31, F-32, F-35, F-49
  a F-52). Se puede publicar.
- El **curso 3** («Bancos, tarjetas y pagos digitales») tiene verificados F-34 y F-47, pero le
  faltan F-30, F-41 a F-46 y F-48. Sigue en borrador.

Los enlaces con anclaje de artículo del BOE (`#a6`, `#a14`…) siguen el formato de los textos
consolidados del BOE, pero no se han podido abrir.

## Datos del curso 2 · Tu primer sueldo

En la columna «Dónde comprobarlo», los datos verificados llevan la fuente usada para verificarlos.

| ID | Lección | Dato que se quiere afirmar | Anual | Dónde comprobarlo (enlace exacto) | Fecha de consulta | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| F-01 | 2.1 | La edad mínima general para trabajar es 16 años | no | BOE · Estatuto de los Trabajadores (RDLeg 2/2015), art. 6: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 (texto literal en https://loentiendo.com/articulo-6-del-estatuto-de-los-trabajadores/) | 11/10/2026 | Verificado (texto legal) |
| F-02 | 2.1 | Entre 16 y 18 años, si no estás emancipado, necesitas el consentimiento de tus padres o tutores para firmar un contrato de trabajo | no | BOE · Estatuto de los Trabajadores, art. 7: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 (texto literal en https://loentiendo.com/articulo-7-del-estatuto-de-los-trabajadores/) | 11/10/2026 | Verificado (texto legal) |
| F-03 | 2.1 | Los menores de 16 solo pueden intervenir en espectáculos públicos, en casos excepcionales y con autorización por escrito de la autoridad laboral | no | BOE · Estatuto de los Trabajadores, art. 6.4: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 (texto literal en https://loentiendo.com/articulo-6-del-estatuto-de-los-trabajadores/) | 17/10/2026 | Verificado (texto legal) |
| F-04 | 2.1 | Los menores de 18 no pueden hacer trabajo nocturno, horas extra ni trabajos peligrosos | no | BOE · Estatuto de los Trabajadores, art. 6: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 (texto literal en https://loentiendo.com/articulo-6-del-estatuto-de-los-trabajadores/) | 11/10/2026 | Verificado (texto legal) |
| F-05 | 2.1 | Los menores de 18 no pueden hacer más de 8 horas diarias de trabajo efectivo, incluida la formación (art. 34.3); si la jornada continuada pasa de 4 horas y media, tienen derecho a un descanso mínimo de 30 minutos (art. 34.4). El descanso semanal de los menores (art. 37) no está verificado y no se usa | no | BOE · Estatuto de los Trabajadores, art. 34: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 (texto literal en https://iberley.es/legislacion/articulo-34-estatuto-trabajadores) | 17/10/2026 | Verificado (texto legal) |
| F-06 | 2.1 | Un contrato puede ser indefinido (sin fecha de fin) o temporal (con fecha de fin). La lección solo explica eso y enlaza al Estatuto para el detalle | no | BOE · Estatuto de los Trabajadores: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 | 17/10/2026 | Verificado (oficial) |
| F-07 | 2.1, 2.2 | Puede pactarse un periodo de prueba, durante el cual cualquiera de las dos partes puede terminar la relación. Máximo: 6 meses para técnicos titulados y 2 meses para el resto (3 en empresas de menos de 25 trabajadores); 1 mes en contratos temporales de hasta 6 meses | no | BOE · Estatuto de los Trabajadores, art. 14: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 (texto literal en https://loentiendo.com/articulo-14-del-estatuto-de-los-trabajadores/) | 12/10/2026 | Verificado (texto legal) |
| F-08 | 2.1 | La solicitud de alta en la Seguridad Social tiene que presentarse antes de que empieces a trabajar | no | Tesorería General de la Seguridad Social, folleto oficial: https://www.seg-social.es/descarga/es/387 | 17/10/2026 | Verificado (oficial) |
| F-09 | 2.2, 2.3 | Hay dos pagas extra al año, una en Navidad y otra cuando fije el convenio; solo se reparten (prorratean) en las 12 mensualidades si lo acuerda el convenio | no | BOE · Estatuto de los Trabajadores, art. 31: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 (texto literal en https://loentiendo.com/el-articulo-31-del-estatuto-pagas-extraordinarias/) | 12/10/2026 | Verificado (texto legal) |
| F-10 | 2.2, 2.3 | El recibo de salarios (nómina) tiene un modelo oficial con devengos, deducciones y «líquido total a percibir» | no | BOE · Orden ESS/2098/2014, BOE núm. 273, de 11/11/2014: https://www.boe.es/buscar/doc.php?id=BOE-A-2014-11637 (texto reproducido en https://legado.elnotario.es/images/pdf/LEST-N58-14-OrdenESS-20982014.pdf) | 12/10/2026 | Verificado (texto legal) |
| F-11 | 2.2, 2.4 | La acción protectora de la Seguridad Social incluye, entre otras, asistencia sanitaria, incapacidad temporal (baja por enfermedad), nacimiento y cuidado de menor, desempleo y jubilación. Las lecciones solo mencionan prestaciones de esta lista | no | BOE · Ley General de la Seguridad Social (RDLeg 8/2015), art. 42.1: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11724 (texto en https://www.uma.es/media/tinyimages/file/RDL_8_2015_LGSS.pdf) | 17/10/2026 | Verificado (texto legal) |
| F-12 | 2.2, 2.4 | La retención de IRPF que te descuentan en la nómina es un pago a cuenta (un adelanto) de tu impuesto anual, que se descuenta en la declaración | no | AEAT, manual práctico Renta 2025, cuota diferencial: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c18-cuota-liquida-resultante-autoliquidacion/cuota-diferencial.html | 12/10/2026 | Verificado (oficial) |
| F-13 | 2.3, 2.4 | Además de lo que te descuentan a ti, la empresa también cotiza por ti, y su parte es mayor que la tuya (la lección no da porcentajes) | sí | Asepeyo (mutua colaboradora con la Seguridad Social), bases y tipos de cotización 2026: https://www.asepeyo.es/wp-content/uploads/Bases-tipos-cotizacion-2026-ES.pdf. Cifras solo como referencia interna. Enlace oficial para la lección: https://www.seg-social.es/ | 12/10/2026 | Verificado (mutua colaboradora) |
| F-14 | 2.4, 2.5 | En contratos de duración inferior a un año, la retención de IRPF no puede ser menor del 2 % | no | BOE · Real Decreto 31/2023 (BOE-A-2023-2023), que da la redacción del art. 86.2 del Reglamento del IRPF: https://boe.es/boe/dias/2023/01/25/pdfs/BOE-A-2023-2023.pdf | 12/10/2026 | Verificado (oficial) |
| F-15 | 2.4 | El informe de vida laboral lo emite gratis la Tesorería General de la Seguridad Social, recoge los periodos en que has estado de alta y se obtiene por internet o en la app Import@ss | no | La Moncloa, nota de prensa de 16/09/2024: https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/inclusion/Paginas/2024/solicitar-informe-vida-laboral-online.aspx | 17/10/2026 | Verificado (oficial) |
| F-16 | 2.4 | El IRPF es progresivo y va por tramos (escala estatal más escala autonómica): cada tipo se aplica solo a la parte de la base que cae en su tramo. La lección no da tramos ni tipos reales | sí | AEAT, manual práctico Renta 2025, gravamen estatal: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c15-calculo-impuesto-determinacion-cuotas-integras/gravamen-base-liquidable-general/gravamen-estatal.html y gravamen autonómico: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c15-calculo-impuesto-determinacion-cuotas-integras/gravamen-base-liquidable-general/gravamen-autonomico.html | 12/10/2026 | Verificado (oficial) |
| F-17 | 2.4, 2.5 | En la declaración, a lo que te toca pagar se le restan las retenciones ya pagadas (pagos a cuenta); la diferencia sale a pagar o a devolver (cuota diferencial) | no | AEAT, manual práctico Renta 2025, cuota diferencial: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c18-cuota-liquida-resultante-autoliquidacion/cuota-diferencial.html | 12/10/2026 | Verificado (oficial) |
| F-18 | 2.5 | La declaración se presenta una vez al año, en una campaña sobre los ingresos del año anterior. Las fechas cambian cada año: la lección no las da y enlaza la fuente | sí | Agencia Tributaria, nota de prensa de inicio de la campaña de Renta 2025: https://sede.agenciatributaria.gob.es/static_files/Sede/Actualidad/Notas_prensa/2026/NP_Inicio_Campana_renta_2025.pdf | 11/10/2026 | Verificado (oficial) |
| F-19 | 2.5 | Estar obligado a declarar depende de cuánto ganes y de cuántos pagadores tengas (la lección no da límites; enlaza la fuente) | sí | AEAT, manual práctico Renta 2025, delimitación de la obligación de declarar: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c01-campana-declaracion-renta/quienes-estan-obligados-presentar-declaracion-irpf/delimitacion-obligacion-declarar-irpf.html | 17/10/2026 | Verificado (oficial) |
| F-20 | 2.5 | Aunque no estés obligado, puedes presentar la declaración para pedir que te devuelvan lo retenido | no | AEAT, manual práctico Renta 2025, delimitación de la obligación de declarar: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c01-campana-declaracion-renta/quienes-estan-obligados-presentar-declaracion-irpf/delimitacion-obligacion-declarar-irpf.html | 17/10/2026 | Verificado (oficial) |
| F-21 | 2.5 | Con ingresos de trabajo bajos (como un trabajo de verano), el impuesto suele quedar en 0 € gracias a la reducción por obtención de rendimientos del trabajo y al mínimo del contribuyente, y se devuelve toda la retención (la lección no da cifras) | sí | AEAT, reducción por obtención de rendimientos del trabajo: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-ayuda-presentacion/irpf-2025/7-cumplimentacion-irpf/7_1-rendimientos-trabajo-personal/7_1_6-reduccion-obtencion-rendimientos-trabajo.html · AEAT, mínimo del contribuyente: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c14-adecuacion-impuesto-circunstancias-personales/minimo-contribuyente.html | 11/10/2026 | Verificado (oficial) |
| F-22 | 2.5 | Tus padres pueden aplicar en su declaración un mínimo por descendientes por ti, que pueden perder si tú ganas por encima de cierto límite o presentas tu propia declaración por encima de otro (la lección no da límites) | sí | AEAT, mínimo por descendientes, concepto y requisitos: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c14-adecuacion-impuesto-circunstancias-personales/minimo-descendientes/concepto-requisitos-descendientes.html | 11/10/2026 | Verificado (oficial) |
| F-23 | 2.5 | La declaración se hace en Renta Web, y para entrar puedes identificarte con Cl@ve, con un número de referencia o con certificado digital. Por indicación del propietario, las lecciones no usan la palabra «borrador» | no | Agencia Tributaria, nota de prensa de inicio de la campaña de Renta 2025: https://sede.agenciatributaria.gob.es/static_files/Sede/Actualidad/Notas_prensa/2026/NP_Inicio_Campana_renta_2025.pdf | 11/10/2026 | Verificado (oficial) |

## Datos de la portada

| ID | Dónde | Dato | Anual | Dónde comprobarlo (enlace exacto) | Fecha de consulta | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| F-40 | Portada | PISA 2022, competencia financiera, alumnos de 15 años: en España el 17,1 % no alcanza el nivel básico (nivel 2) y solo el 4,7 % llega al nivel más alto, frente al 10,6 % de media de la OCDE | no | INEE (Ministerio de Educación, Formación Profesional y Deportes), informe PISA 2022 de competencia financiera: https://www.educacionfpydeportes.gob.es/inee/gl/dam/jcr:e66d3044-4c8b-42a5-9504-0a79975aa4c3/r2-1.pdf | 19/10/2026 | Verificado (oficial) |

## Datos del curso 4 · Que no te estafen

Verificados por el propietario el 26/10/2026. Las fechas entre paréntesis son las de publicación de la página.

| ID | Lección | Dato | Anual | Dónde comprobarlo (enlace exacto) | Fecha de consulta | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| F-49 | 4.2 | Tu banco nunca te pedirá tus contraseñas o claves completas, ni por correo ni por SMS. Y no necesita ningún código tuyo para cancelar una operación: si te lo piden por teléfono, sospecha | no | Banco de España, suplantación de SMS y del identificador de llamadas: https://clientebancario.bde.es/pcb/es/blog/suplantacion-de-sms-y-del-identificador-de-llamadas.html · Banco de España, guía de consejos para prevenir el fraude en operaciones bancarias: https://clientebancario.bde.es/f/webcb/RCL/ActualidadEducacionFinanciera/Iniciativas/GuiaConsejosprevenirfraudeoperacionesbancariasaccesible.pdf | 26/10/2026 | Verificado (oficial) |
| F-50 | 4.2 | Los SMS y las llamadas pueden mostrar un número o un nombre falsos, aunque parezcan los de tu banco («spoofing») | no | Banco de España, suplantación de SMS y del identificador de llamadas: https://clientebancario.bde.es/pcb/es/blog/suplantacion-de-sms-y-del-identificador-de-llamadas.html | 26/10/2026 | Verificado (oficial) |
| F-51 | 4.3 | Con el «Bizum inverso», al aceptar una solicitud de dinero estás enviando dinero, no recibiéndolo | no | Banco de España, estafas por Bizum: https://clientebancario.bde.es/pcb/es/blog/estafas-por-bizum.html | 26/10/2026 | Verificado (oficial) |
| F-35 | 4.4 | La CNMV publica advertencias sobre entidades que ofrecen inversiones sin estar autorizadas, y registros oficiales para comprobar si una entidad lo está | no | CNMV, advertencias: https://www.cnmv.es/portal/Advertencias | 26/10/2026 | Verificado (oficial) |
| F-52 | 4.4 | Crear, dirigir o promocionar un plan de venta piramidal es desleal por engañoso en cualquier circunstancia | no | BOE, Ley 3/1991 de Competencia Desleal, art. 24: https://www.boe.es/buscar/act.php?id=BOE-A-1991-628#a24 · Texto literal comprobado en: https://papelea.com/es/leyes/ley-de-competencia-desleal/capitulo-iii | 26/10/2026 | Verificado (texto legal) |
| F-32 | 4.5 | Las «mulas de dinero» son, en muchos casos, responsables de un delito de blanqueo de capitales, y las captan con falsas ofertas de trabajo en redes sociales | no | Ministerio del Interior, acción global contra el blanqueo de capitales a través de mulas de dinero (05/12/2022): https://www.interior.gob.es/opencms/es/detalle/articulo/La-Policia-Nacional-detiene-a-52-personas-en-Espana-en-el-marco-de-una-accion-global-contra-el-blanqueo-de-capitales-a-traves-de-mulas-de-dinero/ | 26/10/2026 | Verificado (oficial) |
| F-31 | 4.5 | El 017 de INCIBE es gratuito y confidencial (también por WhatsApp, en el 900 116 117) y te asesora, pero no sirve para denunciar. Las estafas se denuncian ante la policía: Policía Nacional, Guardia Civil o, en tu comunidad, Mossos d'Esquadra o Ertzaintza | no | La Moncloa, el teléfono 017 de ayuda en ciberseguridad (14/07/2026): https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/transformacion-digital-y-funcion-publica/Paginas/2026/140726-telefono-017-ayuda-ciberseguridad.aspx | 26/10/2026 | Verificado (oficial) |

## Datos del curso 3 · Bancos, tarjetas y pagos digitales (borrador)

El curso está escrito en `src/content/drafts/` y no se publica hasta que todos sus datos estén verificados.

| ID | Lección | Dato | Anual | Dónde comprobarlo (enlace) | Fecha de consulta | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| F-41 | 3.2 | Un menor puede tener una cuenta a su nombre, pero la abren y la gestionan sus padres o tutores hasta que tenga capacidad para contratar (en la práctica, cada banco fija sus condiciones) | no | Banco de España · Portal del Cliente Bancario: https://clientebancario.bde.es/ · BOE · Código Civil (capacidad del menor, arts. 162 y 322): https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763 | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-42 | 3.2 | Existe la cuenta de pago básica: cualquier persona que resida legalmente en la UE tiene derecho a ella y sus comisiones tienen un límite (la lección no da la cifra) | sí | BOE · Real Decreto-ley 19/2017 de cuentas de pago básicas (buscar en https://www.boe.es/) · Banco de España: https://clientebancario.bde.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-43 | 3.2 | El banco tiene que informarte de las comisiones antes de contratar y avisarte con antelación si las cambia | no | BOE · Orden EHA/2899/2011 de transparencia bancaria: https://www.boe.es/buscar/act.php?id=BOE-A-2011-16804 · Banco de España: https://clientebancario.bde.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-48 | 3.3 | Para contratar una tarjeta de crédito hace falta capacidad para obligarte por un préstamo; un menor no emancipado no puede hacerlo por sí solo | no | BOE · Código Civil, arts. 322 y 1263: https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763 · Banco de España: https://clientebancario.bde.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-30 | 3.3 | Si pierdes la tarjeta o te la roban y hay pagos que no autorizaste, tu responsabilidad tiene un límite legal (salvo fraude o negligencia grave), siempre que avises a tu banco sin demora | no | BOE · Real Decreto-ley 19/2018 de servicios de pago, arts. 41 y 46: https://www.boe.es/buscar/act.php?id=BOE-A-2018-16036 · Banco de España, Portal del Cliente Bancario: https://clientebancario.bde.es/ | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-44 | 3.3 | Tienes un plazo máximo para comunicar al banco una operación que no autorizaste (la lección explica que hay que hacerlo cuanto antes y enlaza el plazo) | no | BOE · Real Decreto-ley 19/2018, art. 43: https://www.boe.es/buscar/act.php?id=BOE-A-2018-16036 | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-45 | 3.4 | En los pagos por internet el banco debe aplicar una autenticación reforzada (por ejemplo, un código en el móvil además de la tarjeta) | no | BOE · Real Decreto-ley 19/2018, art. 68: https://www.boe.es/buscar/act.php?id=BOE-A-2018-16036 · Banco de España: https://clientebancario.bde.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-46 | 3.4 | Las transferencias inmediatas en euros deben ofrecerse en la UE y el banco debe comprobar que el nombre del beneficiario coincide con el IBAN antes de enviarla | no | EUR-Lex · Reglamento (UE) 2024/886: https://eur-lex.europa.eu/eli/reg/2024/886/oj · Banco de España: https://clientebancario.bde.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-34 | 3.5 | El Fondo de Garantía de Depósitos protege el dinero depositado en un banco hasta 100.000 € por titular y entidad | no | Banco de España, ¿cuánto cubre el FGD?: https://clientebancario.bde.es/pcb/es/blog/cuanto-cubre-el-fgd-.html | 26/10/2026 | Verificado (oficial) |
| F-47 | 3.5 | Para reclamar a un banco, primero es obligatorio reclamar a su servicio de atención al cliente; si no estás de acuerdo o no contesta en plazo (15 días hábiles en servicios de pago, un mes en el resto para consumidores), puedes acudir al Banco de España | no | Banco de España, cómo presentar una reclamación: https://clientebancario.bde.es/pcb/es/menu-horizontal/podemosayudarte/consultasreclama/comorealizarrecl/ | 26/10/2026 | Verificado (oficial) |

## Datos que enriquecerían el curso 1 (no se usan)

El curso 1 funciona sin ellos. Si se verifican, se pueden añadir como «dato clave» o enlace.

| ID | Lección | Dato | Anual | Dónde comprobarlo (enlace exacto) | Fecha de consulta | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| F-33 | 1.6 | En España, la inflación se mide con el IPC, que elabora el INE | no | INE · Índice de Precios de Consumo: https://www.ine.es/ | 16/10/2026 (no se pudo abrir) | Pendiente |

## Datos de los cursos 5 a 10 (pendientes, no se usan)

Se listan por tandas en [`temario.md`](./temario.md).

| ID | Lección | Dato | Anual | Dónde comprobarlo (enlace) | Fecha de consulta | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| F-53 | 5.1 | Cuando una tienda anuncia una rebaja, el precio anterior que muestra debe ser el más bajo que aplicó en los 30 días previos | no | BOE · Ley 7/1996 de Ordenación del Comercio Minorista, art. 20: https://www.boe.es/buscar/act.php?id=BOE-A-1996-1072 · Ministerio de Consumo: https://www.consumo.gob.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-28 | 5.2 | En las compras a distancia (internet, teléfono) tienes 14 días naturales para desistir sin dar explicaciones | no | BOE · Ley General de Consumidores (RDLeg 1/2007), arts. 102 a 104: https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555 | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-54 | 5.2 | Hay excepciones al desistimiento: por ejemplo, productos personalizados o contenido digital que ya has empezado a descargar con tu consentimiento | no | BOE · Ley General de Consumidores, art. 103: https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555 | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-29 | 5.3 | Los productos nuevos tienen una garantía legal de 3 años desde la entrega | no | BOE · Ley General de Consumidores, art. 120 y siguientes: https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555 · Ministerio de Consumo: https://www.consumo.gob.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-55 | 5.3 | Una tienda física no está obligada a devolverte el dinero si el producto no tiene defectos, salvo que lo ofrezca en su política | no | Ministerio de Consumo: https://www.consumo.gob.es/ · BOE · Ley General de Consumidores: https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555 | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-56 | 5.4 | Darte de baja de un servicio debe ser al menos tan fácil como darte de alta, y por el mismo medio | no | BOE · Ley General de Consumidores, art. 62.3: https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555 | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-57 | 5.4 | «Compra ahora, paga después» y pagar a plazos son formas de crédito (la lección explica cuándo se aplican las normas de crédito al consumo) | no | Banco de España: https://clientebancario.bde.es/ · BOE · Ley 16/2011 de contratos de crédito al consumo: https://www.boe.es/buscar/act.php?id=BOE-A-2011-11032 | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-58 | 5.5 | La publicidad en redes, también la de influencers, tiene que identificarse claramente como publicidad | no | BOE · Ley 13/2022 General de Comunicación Audiovisual y su desarrollo para usuarios de especial relevancia: https://www.boe.es/ · CNMC: https://www.cnmc.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-59 | 5.5 | Puedes reclamar con una hoja de reclamaciones en la tienda, ante los servicios de consumo de tu comunidad autónoma y, si la empresa está adherida, en el arbitraje de consumo | no | Ministerio de Consumo · reclamaciones y arbitraje de consumo: https://www.consumo.gob.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-60 | 6.2 | La TAE incluye el tipo de interés y los gastos y comisiones del préstamo, y sirve para comparar ofertas | no | Banco de España · Portal del Cliente Bancario: https://clientebancario.bde.es/ · BOE · Ley 16/2011, art. 32: https://www.boe.es/buscar/act.php?id=BOE-A-2011-11032 | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-61 | 6.3 | Las tarjetas revolving tienen obligaciones de información reforzadas: el banco debe explicar cuánto tardarías en pagar la deuda con el pago mínimo | no | BOE · Orden ETD/699/2020 de crédito revolvente: https://www.boe.es/ · Banco de España: https://clientebancario.bde.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-62 | 6.4 | En un crédito al consumo tienes 14 días naturales para desistir sin dar explicaciones | no | BOE · Ley 16/2011 de contratos de crédito al consumo, art. 28: https://www.boe.es/buscar/act.php?id=BOE-A-2011-11032 | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-63 | 6.4 | Un menor no emancipado no puede pedir un préstamo a su nombre | no | BOE · Código Civil, arts. 322 y 1263: https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763 | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-64 | 6.5 | Para incluirte en un fichero de morosos la deuda debe ser cierta, vencida y exigible, y antes deben avisarte; hay un importe mínimo y un plazo máximo de permanencia | no | BOE · Ley Orgánica 3/2018 de Protección de Datos, art. 20: https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673 · AEPD: https://www.aepd.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-65 | 7.3 | Antes de invertir en un fondo tienen que darte un documento con sus datos fundamentales, que incluye los costes y el nivel de riesgo | no | CNMV · guías del inversor: https://www.cnmv.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-66 | 7.3 | Antes de venderte algunos productos de inversión, la entidad debe evaluar si son adecuados para ti (test de conveniencia o de idoneidad) | no | CNMV · guías del inversor: https://www.cnmv.es/ · BOE · Ley 6/2023 de los Mercados de Valores: https://www.boe.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-67 | 7.5 | Los proveedores de servicios de criptoactivos en la UE necesitan autorización según el Reglamento MiCA | no | EUR-Lex · Reglamento (UE) 2023/1114 (MiCA): https://eur-lex.europa.eu/eli/reg/2023/1114/oj · CNMV: https://www.cnmv.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-68 | 7.5 | La publicidad de criptoactivos en España debe incluir advertencias sobre sus riesgos | no | CNMV · Circular 1/2022 sobre publicidad de criptoactivos: https://www.cnmv.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-69 | 8.3 | El Banco Central Europeo decide los tipos de interés oficiales de la zona del euro y su objetivo es una inflación del 2 % a medio plazo | no | BCE: https://www.ecb.europa.eu/ · Banco de España: https://www.bde.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-70 | 8.4 | El paro se mide con la Encuesta de Población Activa (EPA) del INE; una persona parada es la que no tiene trabajo, lo busca y está disponible para trabajar | no | INE · Encuesta de Población Activa: https://www.ine.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-71 | 8.5 | El PIB mide el valor de todo lo que produce un país en un periodo, y en España lo calcula el INE | no | INE · Contabilidad Nacional: https://www.ine.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-72 | 9.1 | La Constitución establece que todos contribuyen a sostener el gasto público según su capacidad económica, con un sistema tributario justo y progresivo | no | BOE · Constitución Española, art. 31: https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229 | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-73 | 9.2 | El IVA se paga al comprar bienes y servicios y tiene un tipo general y tipos reducidos (la lección no da los porcentajes) | sí | BOE · Ley 37/1992 del IVA: https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740 · Agencia Tributaria: https://sede.agenciatributaria.gob.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-74 | 9.3 | Además del IRPF y el IVA hay otros impuestos, como el IBI (sobre los inmuebles, municipal) o los impuestos especiales (alcohol, tabaco, carburantes) | no | Agencia Tributaria: https://sede.agenciatributaria.gob.es/ · BOE · Ley Reguladora de las Haciendas Locales: https://www.boe.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-75 | 9.4 | Las pensiones contributivas se financian sobre todo con las cotizaciones de quienes trabajan hoy (sistema de reparto) | no | Seguridad Social: https://www.seg-social.es/ · BOE · Ley General de la Seguridad Social: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11724 | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-76 | 9.5 | Pagar o cobrar «en negro» deja sin contrato ni cotización a quien trabaja y sin garantías a quien compra | no | Agencia Tributaria: https://sede.agenciatributaria.gob.es/ · Seguridad Social: https://www.seg-social.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-77 | 10.2 | Vender objetos usados por menos de lo que te costaron no genera impuesto a pagar; si ganas dinero con la venta, puede tributar (la lección no da cifras) | sí | Agencia Tributaria · ganancias y pérdidas patrimoniales: https://sede.agenciatributaria.gob.es/ · BOE · Ley del IRPF: https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764 | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-78 | 10.2 | Las plataformas digitales de venta informan a Hacienda de quienes venden a través de ellas por encima de ciertos umbrales (DAC7) | no | Agencia Tributaria · obligaciones de información de plataformas: https://sede.agenciatributaria.gob.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |
| F-79 | 10.3 | Cuándo hay que darse de alta como autónomo (trabajo por cuenta propia habitual) y qué edad hace falta | no | Seguridad Social · Régimen Especial de Trabajadores Autónomos: https://www.seg-social.es/ · BOE · Estatuto de los Trabajadores, art. 7: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 | 20/10/2026 (no se pudo abrir) | Descartado (la lección 10.3 solo remite a consultar con la familia, la Seguridad Social o un gestor) |
| F-80 | 10.3 | Antes de empezar una actividad económica hay que darse de alta en el censo de Hacienda | no | Agencia Tributaria · censo de empresarios, profesionales y retenedores: https://sede.agenciatributaria.gob.es/ | 20/10/2026 (no se pudo abrir) | Descartado (la lección 10.3 solo remite a consultar con la familia, la Seguridad Social o un gestor) |
| F-81 | 10.4 | Los ingresos de los creadores de contenido (publicidad, colaboraciones, regalos de marcas) tributan como rendimientos de una actividad económica | sí | Agencia Tributaria: https://sede.agenciatributaria.gob.es/ | 20/10/2026 (no se pudo abrir) | Pendiente |

## Cómo verificar un dato (para quien lo compruebe)

1. Abre el enlace oficial y busca el texto que respalda el dato.
2. Si el dato coincide, pásame el enlace exacto (con el anclaje del artículo si es el BOE) y la fecha.
   Lo marco como «Verificado (oficial)».
3. Si el dato no coincide o hay matices, dime qué dice la fuente. Corrijo la lección o lo marco como
   «Descartado».
