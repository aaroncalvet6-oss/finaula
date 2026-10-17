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
   Educación, BCE, INCIBE, AEPD, Policía Nacional y Guardia Civil. Por decisión del propietario
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
- **Descartado**: se comprobó y el dato no era correcto o no se puede afirmar así.

## Estado de la verificación (17/10/2026)

Desde el entorno de desarrollo **no se puede abrir ninguna de las fuentes**, ni las oficiales
(boe.es, sede.agenciatributaria.gob.es, seg-social.es, bde.es, cnmv.es) ni las secundarias
(loentiendo.com, elnotario.es, asepeyo.es): la política de red del entorno las bloquea. Las
verificaciones de esta tabla las ha hecho **el propietario del proyecto**, que comunicó los enlaces
y las fechas el 17/10/2026. Donde no indicó fecha de consulta, pone «no indicada».

| Estado | Datos |
| --- | --- |
| Verificado (oficial) | F-06, F-12, F-14, F-16, F-17 |
| Verificado (texto legal) | F-01, F-02, F-04, F-07, F-09, F-10 |
| Verificado (mutua colaboradora) | F-13 |
| Pendiente | F-03, F-05, F-08, F-11, F-15, F-18, F-19, F-20, F-21, F-22, F-23, F-30 a F-35 |

Consecuencias:

- El **curso 1** («Fundamentos del dinero») no depende de ningún dato legal o fiscal. Se puede
  publicar. Los datos F-30 a F-35 lo enriquecerían, pero no se usan hasta que estén verificados.
- El **curso 2** («Tu primer sueldo») sigue bloqueado: solo la lección 2.3 tiene todos sus datos
  verificados. Las lecciones 2.1, 2.2, 2.4 y 2.5 todavía citan datos pendientes.

Los enlaces con anclaje de artículo del BOE (`#a6`, `#a14`…) siguen el formato de los textos
consolidados del BOE, pero no se han podido abrir.

## Datos del curso 2 · Tu primer sueldo

En la columna «Dónde comprobarlo», los datos verificados llevan la fuente usada para verificarlos.

| ID | Lección | Dato que se quiere afirmar | Anual | Dónde comprobarlo (enlace exacto) | Fecha de consulta | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| F-01 | 2.1 | La edad mínima general para trabajar es 16 años | no | BOE · Estatuto de los Trabajadores (RDLeg 2/2015), art. 6: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 (texto literal en https://loentiendo.com/articulo-6-del-estatuto-de-los-trabajadores/) | 11/10/2026 | Verificado (texto legal) |
| F-02 | 2.1 | Entre 16 y 18 años, si no estás emancipado, necesitas el consentimiento de tus padres o tutores para firmar un contrato de trabajo | no | BOE · Estatuto de los Trabajadores, art. 7: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 (texto literal en https://loentiendo.com/articulo-7-del-estatuto-de-los-trabajadores/) | 11/10/2026 | Verificado (texto legal) |
| F-03 | 2.1 | Los menores de 16 solo pueden trabajar en espectáculos públicos, y con autorización de la autoridad laboral | no | BOE · Estatuto de los Trabajadores, art. 6.4: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430#a6 | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-04 | 2.1 | Los menores de 18 no pueden hacer trabajo nocturno, horas extra ni trabajos peligrosos | no | BOE · Estatuto de los Trabajadores, art. 6: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 (texto literal en https://loentiendo.com/articulo-6-del-estatuto-de-los-trabajadores/) | 11/10/2026 | Verificado (texto legal) |
| F-05 | 2.1 | Los menores de 18 no pueden trabajar más de 8 horas de trabajo efectivo al día (contando la formación) y, si la jornada seguida pasa de 4 horas y media, tienen derecho a un descanso de al menos 30 minutos | no | BOE · Estatuto de los Trabajadores, art. 34.3: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430#a34 | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-06 | 2.1 | Un contrato puede ser indefinido (sin fecha de fin) o temporal (con fecha de fin). La lección solo explica eso y enlaza al Estatuto para el detalle | no | BOE · Estatuto de los Trabajadores: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 | no indicada | Verificado (oficial) |
| F-07 | 2.1, 2.2 | Puede pactarse un periodo de prueba, durante el cual cualquiera de las dos partes puede terminar la relación. Máximo: 6 meses para técnicos titulados y 2 meses para el resto (3 en empresas de menos de 25 trabajadores); 1 mes en contratos temporales de hasta 6 meses | no | BOE · Estatuto de los Trabajadores, art. 14: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 (texto literal en https://loentiendo.com/articulo-14-del-estatuto-de-los-trabajadores/) | 12/10/2026 | Verificado (texto legal) |
| F-08 | 2.1 | La empresa tiene que dar de alta al trabajador en la Seguridad Social antes de que empiece a trabajar | no | BOE · Ley General de la Seguridad Social (RDLeg 8/2015), art. 16: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11724#a16 · Seguridad Social: https://www.seg-social.es/ | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-09 | 2.2, 2.3 | Hay dos pagas extra al año, una en Navidad y otra cuando fije el convenio; solo se reparten (prorratean) en las 12 mensualidades si lo acuerda el convenio | no | BOE · Estatuto de los Trabajadores, art. 31: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 (texto literal en https://loentiendo.com/el-articulo-31-del-estatuto-pagas-extraordinarias/) | 12/10/2026 | Verificado (texto legal) |
| F-10 | 2.2, 2.3 | El recibo de salarios (nómina) tiene un modelo oficial con devengos, deducciones y «líquido total a percibir» | no | BOE · Orden ESS/2098/2014, BOE núm. 273, de 11/11/2014: https://www.boe.es/buscar/doc.php?id=BOE-A-2014-11637 (texto reproducido en https://legado.elnotario.es/images/pdf/LEST-N58-14-OrdenESS-20982014.pdf) | 12/10/2026 | Verificado (texto legal) |
| F-11 | 2.2, 2.4 | Cotizar a la Seguridad Social da derecho a prestaciones como la jubilación, la incapacidad temporal (baja por enfermedad) o el desempleo | no | Seguridad Social · prestaciones: https://www.seg-social.es/ · SEPE (desempleo): https://www.sepe.es/ · BOE · LGSS, art. 42: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11724#a42 | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-12 | 2.2, 2.4 | La retención de IRPF que te descuentan en la nómina es un pago a cuenta (un adelanto) de tu impuesto anual, que se descuenta en la declaración | no | AEAT, manual práctico Renta 2025, cuota diferencial: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c18-cuota-liquida-resultante-autoliquidacion/cuota-diferencial.html | no indicada | Verificado (oficial) |
| F-13 | 2.3, 2.4 | Además de lo que te descuentan a ti, la empresa también cotiza por ti, y su parte es mayor que la tuya (la lección no da porcentajes) | sí | Asepeyo (mutua colaboradora con la Seguridad Social), bases y tipos de cotización 2026: https://www.asepeyo.es/wp-content/uploads/Bases-tipos-cotizacion-2026-ES.pdf. Cifras solo como referencia interna. Enlace oficial para la lección: https://www.seg-social.es/ | 12/10/2026 | Verificado (mutua colaboradora) |
| F-14 | 2.4, 2.5 | En contratos de duración inferior a un año, la retención de IRPF no puede ser menor del 2 % | no | BOE · Real Decreto 31/2023 (BOE-A-2023-2023), que da la redacción del art. 86.2 del Reglamento del IRPF: https://boe.es/boe/dias/2023/01/25/pdfs/BOE-A-2023-2023.pdf | 12/10/2026 | Verificado (oficial) |
| F-15 | 2.4 | Puedes consultar tus días cotizados en el informe de vida laboral de la Seguridad Social | no | Seguridad Social · sede electrónica, informe de vida laboral: https://sede.seg-social.gob.es/ | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-16 | 2.4 | El IRPF es progresivo y va por tramos (escala estatal más escala autonómica): cada tipo se aplica solo a la parte de la base que cae en su tramo. La lección no da tramos ni tipos reales | sí | AEAT, manual práctico Renta 2025, gravamen estatal: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c15-calculo-impuesto-determinacion-cuotas-integras/gravamen-base-liquidable-general/gravamen-estatal.html y gravamen autonómico: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c15-calculo-impuesto-determinacion-cuotas-integras/gravamen-base-liquidable-general/gravamen-autonomico.html | 12/10/2026 | Verificado (oficial) |
| F-17 | 2.4, 2.5 | En la declaración, a lo que te toca pagar se le restan las retenciones ya pagadas (pagos a cuenta); la diferencia sale a pagar o a devolver (cuota diferencial) | no | AEAT, manual práctico Renta 2025, cuota diferencial: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c18-cuota-liquida-resultante-autoliquidacion/cuota-diferencial.html | no indicada | Verificado (oficial) |
| F-18 | 2.5 | La declaración se presenta una vez al año, en una campaña de primavera sobre los ingresos del año anterior (las fechas cambian cada año; la lección enlaza el calendario) | sí | Agencia Tributaria · campaña de Renta: https://sede.agenciatributaria.gob.es/ | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-19 | 2.5 | Estar obligado a declarar depende de cuánto ganes y de cuántos pagadores tengas (la lección no da límites; enlaza la fuente) | sí | BOE · Ley 35/2006, art. 96: https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764#a96 · AEAT, obligados a declarar: https://sede.agenciatributaria.gob.es/Sede/Ayuda/25Presentacion/100/2.html | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-20 | 2.5 | Aunque no estés obligado, puedes presentar la declaración, por ejemplo para pedir que te devuelvan lo retenido | no | AEAT, obligados a declarar: https://sede.agenciatributaria.gob.es/Sede/Ayuda/25Presentacion/100/2.html | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-21 | 2.5 | Con ingresos de trabajo bajos (como un trabajo de verano), el impuesto suele quedar en 0 € gracias a la reducción por rendimientos del trabajo y al mínimo personal, y se devuelve toda la retención (la lección no da cifras) | sí | BOE · Ley 35/2006, arts. 20 y 57: https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764#a20 · AEAT, reducción por rendimientos del trabajo: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-ayuda-presentacion/irpf-2025/7-cumplimentacion-irpf/7_1-rendimientos-trabajo-personal/7_1_6-reduccion-obtencion-rendimientos-trabajo.html · AEAT, mínimo del contribuyente: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c14-adecuacion-impuesto-circunstancias-personales/minimo-contribuyente.html | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-22 | 2.5 | Tus padres pueden aplicar en su declaración un mínimo por descendientes por ti, que pueden perder si tú ganas por encima de cierto límite o presentas tu propia declaración por encima de otro (la lección no da límites) | sí | BOE · Ley 35/2006, art. 58: https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764#a58 · AEAT, mínimo por descendientes: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c14-adecuacion-impuesto-circunstancias-personales/minimo-descendientes/concepto-requisitos-descendientes.html | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-23 | 2.5 | La declaración se hace en Renta Web a partir de un borrador que prepara la Agencia Tributaria, y para entrar puedes identificarte con Cl@ve, con un número de referencia o con certificado digital | no | Agencia Tributaria · Renta Web y formas de identificación: https://sede.agenciatributaria.gob.es/ | 16/10/2026 (no se pudo abrir) | Pendiente |

## Datos que enriquecerían el curso 1 (no se usan)

El curso 1 funciona sin ellos. Si se verifican, se pueden añadir como «dato clave» o enlace.

| ID | Lección | Dato | Anual | Dónde comprobarlo (enlace exacto) | Fecha de consulta | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| F-30 | 1.5 | Si pierdes la tarjeta o te la roban y hay pagos que no autorizaste, tu responsabilidad tiene un límite legal (salvo fraude o negligencia grave), siempre que avises a tu banco sin demora | no | BOE · Real Decreto-ley 19/2018 de servicios de pago, arts. 41 y 46: https://www.boe.es/buscar/act.php?id=BOE-A-2018-16036 · Banco de España, Portal del Cliente Bancario: https://clientebancario.bde.es/ | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-31 | 1.5 | Dónde pedir ayuda ante una estafa digital (línea de ayuda de INCIBE) y dónde denunciar (Policía Nacional y Guardia Civil) | no | INCIBE: https://www.incibe.es/ · Policía Nacional: https://www.policia.es/ · Guardia Civil: https://www.guardiacivil.es/ | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-32 | 1.5 | Prestar tu cuenta para mover dinero de otra persona («mula de dinero») puede ser delito | no | BOE · Código Penal: https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444 · Policía Nacional: https://www.policia.es/ | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-33 | 1.6 | En España, la inflación se mide con el IPC, que elabora el INE | no | INE · Índice de Precios de Consumo: https://www.ine.es/ | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-34 | 1.6 | El Fondo de Garantía de Depósitos protege el dinero depositado en los bancos hasta un importe máximo por titular y entidad | no | BOE · RD 2606/1996: https://www.boe.es/buscar/act.php?id=BOE-A-1996-27971 · FGD: https://www.fgd.es/ | 16/10/2026 (no se pudo abrir) | Pendiente |
| F-35 | 1.6 | Advertencias oficiales sobre entidades que ofrecen inversiones sin autorización | no | CNMV · advertencias sobre entidades no autorizadas: https://www.cnmv.es/ | 16/10/2026 (no se pudo abrir) | Pendiente |

## Cómo verificar un dato (para quien lo compruebe)

1. Abre el enlace oficial y busca el texto que respalda el dato.
2. Si el dato coincide, pásame el enlace exacto (con el anclaje del artículo si es el BOE) y la fecha.
   Lo marco como «Verificado (oficial)».
3. Si el dato no coincide o hay matices, dime qué dice la fuente. Corrijo la lección o lo marco como
   «Descartado».
