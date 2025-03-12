export interface HistoriaEvento {
  año: number;
  titulo: string;
  descripcion: string;
  logro: string;
}

/**
 * Función que devuelve datos ficticios sobre la historia de la empresa
 * @returns Array de eventos históricos de la empresa
 */
export function getHistoriaData(): HistoriaEvento[] {
  return [
    {
      año: 2005,
      titulo: "Fundación de la empresa",
      descripcion: "Juan Martínez y Elena Rodríguez fundan la empresa con un pequeño equipo de 5 personas. Comienzan desarrollando soluciones de software a medida para pequeñas empresas locales.",
      logro: "Lanzamiento del primer producto propio, un sistema de gestión de inventario que revolucionó el mercado local."
    },
    {
      año: 2008,
      titulo: "Primera expansión",
      descripcion: "Tras tres años de crecimiento sostenido, la empresa se traslada a unas oficinas más grandes y duplica su plantilla. Se comienzan a atender clientes a nivel nacional.",
      logro: "Reconocimiento como 'Empresa Emergente del Año' por la Cámara de Comercio."
    },
    {
      año: 2010,
      titulo: "Internacionalización",
      descripcion: "Se establece la primera oficina internacional en Santiago de Chile, marcando el inicio de la expansión por Latinoamérica. Se desarrolla una nueva línea de productos orientados al sector financiero.",
      logro: "Firma del primer contrato multinacional con un importante banco con presencia en tres países."
    },
    {
      año: 2013,
      titulo: "Innovación tecnológica",
      descripcion: "La empresa realiza una importante inversión en investigación y desarrollo, creando un departamento dedicado exclusivamente a la innovación tecnológica.",
      logro: "Patente de un sistema revolucionario de análisis de datos en tiempo real para el sector retail."
    },
    {
      año: 2015,
      titulo: "Celebración del décimo aniversario",
      descripcion: "Al cumplir una década, la empresa ya cuenta con más de 50 empleados y oficinas en 3 países. Se lanza un ambicioso plan estratégico para los próximos cinco años.",
      logro: "Lanzamiento de la Fundación Empresarial para apoyar proyectos educativos en comunidades desfavorecidas."
    },
    {
      año: 2018,
      titulo: "Transformación digital",
      descripcion: "La empresa lidera la transformación digital de varias compañías Fortune 500, consolidándose como referente en el sector de la consultoría tecnológica.",
      logro: "Reconocimiento internacional como una de las 'Top 100 Empresas Innovadoras' según una prestigiosa revista de tecnología."
    },
    {
      año: 2020,
      titulo: "Adaptación en tiempos de crisis",
      descripcion: "Durante la pandemia global, la empresa demuestra su capacidad de adaptación implementando un modelo de trabajo 100% remoto y desarrollando soluciones específicas para ayudar a otras empresas en su digitalización acelerada.",
      logro: "Crecimiento del 30% en facturación a pesar de la crisis económica global."
    },
    {
      año: 2023,
      titulo: "Nueva era",
      descripcion: "Con más de 100 empleados y presencia en 5 países, la empresa redefine su misión y visión, centrándose en la sostenibilidad y el impacto social positivo de sus soluciones tecnológicas.",
      logro: "Certificación como empresa B Corp, reconociendo su compromiso con estándares sociales y ambientales."
    }
  ];
}
