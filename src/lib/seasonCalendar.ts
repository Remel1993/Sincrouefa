export type Slot = "FINDE" | "MITAD" | "UNICO";

export type Competicion = "LIGA" | "CHAMPIONS" | "EUROPA_LEAGUE" | "MUNDIAL";

export interface Fixture {
  id: string;
  competicion: Competicion;
  ronda: string;          // ej: "Jornada 5", "Octavos IDA", "Final"
  slot: Slot;
  esPartido: boolean;     // false para milestones (sorteo, cierre de mercado, fin de liga)
  title?: string;
  desc?: string;
  leagueMatchday?: number; // Número de jornada de liga si aplica (1..38)
  europeanRound?: string;  // Ronda europea si aplica ("GRUPOS_1", "OCTAVOS_IDA", etc.)
}

export interface SemanaCalendario {
  weekIndex: number;      // 1-42
  mes: string;
  fixtures: Fixture[];
}

export const SEASON_CALENDAR_42_WEEKS: SemanaCalendario[] = [
  {
    weekIndex: 1,
    mes: "Agosto",
    fixtures: [
      {
        id: "w1-preseason",
        competicion: "LIGA",
        ronda: "Pretemporada",
        slot: "FINDE",
        esPartido: false,
        title: "Puesta a Punto de Pretemporada",
        desc: "Preparación física, táctica y ensamblaje del plantel para la nueva temporada."
      }
    ]
  },
  {
    weekIndex: 2,
    mes: "Agosto",
    fixtures: [
      {
        id: "w2-uefa-draw",
        competicion: "CHAMPIONS",
        ronda: "Sorteo Europeo UEFA",
        slot: "MITAD",
        esPartido: false,
        title: "Sorteo Fase de Grupos UEFA",
        desc: "Definición de los grupos de Champions League y cruces continentales."
      }
    ]
  },
  {
    weekIndex: 3,
    mes: "Agosto",
    fixtures: [
      {
        id: "w3-league-j1",
        competicion: "LIGA",
        ronda: "Jornada 1",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 1,
        title: "Debut Liguero · Jornada 1",
        desc: "Arranque oficial de la temporada en las ligas nacionales europeas."
      }
    ]
  },
  {
    weekIndex: 4,
    mes: "Agosto",
    fixtures: [
      {
        id: "w4-league-j2",
        competicion: "LIGA",
        ronda: "Jornada 2",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 2,
        title: "Liga · Jornada 2",
        desc: "Segunda fecha del campeonato doméstico."
      }
    ]
  },
  {
    weekIndex: 5,
    mes: "Septiembre",
    fixtures: [
      {
        id: "w5-league-j3",
        competicion: "LIGA",
        ronda: "Jornada 3",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 3,
        title: "Liga · Jornada 3",
        desc: "Tercera fecha de liga regular."
      },
      {
        id: "w5-wc-j1",
        competicion: "MUNDIAL",
        ronda: "Fase de Grupos — J1",
        slot: "MITAD",
        esPartido: true,
        title: "Copa del Mundo · Grupos J1 (Ventana FIFA)",
        desc: "Primera fecha oficial de selecciones nacionales en la fase de grupos."
      }
    ]
  },
  {
    weekIndex: 6,
    mes: "Septiembre",
    fixtures: [
      {
        id: "w6-league-j4",
        competicion: "LIGA",
        ronda: "Jornada 4",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 4,
        title: "Liga · Jornada 4",
        desc: "Cuarta fecha de liga."
      }
    ]
  },
  {
    weekIndex: 7,
    mes: "Septiembre",
    fixtures: [
      {
        id: "w7-league-j5",
        competicion: "LIGA",
        ronda: "Jornada 5",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 5,
        title: "Liga · Jornada 5",
        desc: "Quinta fecha de liga regular."
      },
      {
        id: "w7-cl-j1",
        competicion: "CHAMPIONS",
        ronda: "Fase de Grupos — J1",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "GRUPOS_1",
        title: "Champions League · Grupos J1",
        desc: "Arranque de la fase de grupos de UEFA Champions League."
      },
      {
        id: "w7-el-info",
        competicion: "EUROPA_LEAGUE",
        ronda: "Seguimiento de Liga",
        slot: "MITAD",
        esPartido: false,
        title: "Europa League · Seguimiento Clasificación",
        desc: "Los puestos 5º al 8º de cada liga regular obtendrán billete a Dieciseisavos de UEL."
      }
    ]
  },
  {
    weekIndex: 8,
    mes: "Septiembre",
    fixtures: [
      {
        id: "w8-league-j6",
        competicion: "LIGA",
        ronda: "Jornada 6",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 6,
        title: "Liga · Jornada 6",
        desc: "Sexta fecha de liga."
      }
    ]
  },
  {
    weekIndex: 9,
    mes: "Octubre",
    fixtures: [
      {
        id: "w9-league-j7",
        competicion: "LIGA",
        ronda: "Jornada 7",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 7,
        title: "Liga · Jornada 7",
        desc: "Séptima fecha de liga."
      },
      {
        id: "w9-cl-j2",
        competicion: "CHAMPIONS",
        ronda: "Fase de Grupos — J2",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "GRUPOS_2",
        title: "Champions League · Grupos J2",
        desc: "Segunda jornada de la fase de grupos de UCL."
      },
      {
        id: "w9-el-info",
        competicion: "EUROPA_LEAGUE",
        ronda: "Seguimiento de Liga",
        slot: "MITAD",
        esPartido: false,
        title: "Europa League · Seguimiento Clasificación",
        desc: "Seguimiento de las plazas de acceso 5º al 8º para la 1ª eliminatoria."
      }
    ]
  },
  {
    weekIndex: 10,
    mes: "Octubre",
    fixtures: [
      {
        id: "w10-league-j8",
        competicion: "LIGA",
        ronda: "Jornada 8",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 8,
        title: "Liga · Jornada 8",
        desc: "Octava fecha de liga."
      }
    ]
  },
  {
    weekIndex: 11,
    mes: "Octubre",
    fixtures: [
      {
        id: "w11-league-j9",
        competicion: "LIGA",
        ronda: "Jornada 9",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 9,
        title: "Liga · Jornada 9",
        desc: "Novena fecha de liga."
      },
      {
        id: "w11-cl-j3",
        competicion: "CHAMPIONS",
        ronda: "Fase de Grupos — J3",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "GRUPOS_3",
        title: "Champions League · Grupos J3",
        desc: "Tercera jornada de la fase de grupos de UCL."
      },
      {
        id: "w11-el-info",
        competicion: "EUROPA_LEAGUE",
        ronda: "Seguimiento de Liga",
        slot: "MITAD",
        esPartido: false,
        title: "Europa League · Seguimiento Clasificación",
        desc: "Seguimiento de la carrera por los billetes a Dieciseisavos de UEL."
      }
    ]
  },
  {
    weekIndex: 12,
    mes: "Octubre",
    fixtures: [
      {
        id: "w12-league-j10",
        competicion: "LIGA",
        ronda: "Jornada 10",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 10,
        title: "Liga · Jornada 10",
        desc: "Décima fecha de liga."
      }
    ]
  },
  {
    weekIndex: 13,
    mes: "Noviembre",
    fixtures: [
      {
        id: "w13-league-j11",
        competicion: "LIGA",
        ronda: "Jornada 11",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 11,
        title: "Liga · Jornada 11",
        desc: "Undécima fecha de liga."
      },
      {
        id: "w13-wc-j2",
        competicion: "MUNDIAL",
        ronda: "Fase de Grupos — J2",
        slot: "MITAD",
        esPartido: true,
        title: "Copa del Mundo · Grupos J2 (Ventana FIFA)",
        desc: "Segunda fecha oficial de grupos para las selecciones nacionales."
      }
    ]
  },
  {
    weekIndex: 14,
    mes: "Noviembre",
    fixtures: [
      {
        id: "w14-league-j12",
        competicion: "LIGA",
        ronda: "Jornada 12",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 12,
        title: "Liga · Jornada 12",
        desc: "Duodécima fecha de liga."
      },
      {
        id: "w14-cl-j4",
        competicion: "CHAMPIONS",
        ronda: "Fase de Grupos — J4",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "GRUPOS_4",
        title: "Champions League · Grupos J4",
        desc: "Cuarta fecha de fase de grupos UCL."
      },
      {
        id: "w14-el-info",
        competicion: "EUROPA_LEAGUE",
        ronda: "Seguimiento de Liga",
        slot: "MITAD",
        esPartido: false,
        title: "Europa League · Seguimiento Clasificación",
        desc: "Evolución de la tabla para las 16 plazas de liga europea."
      }
    ]
  },
  {
    weekIndex: 15,
    mes: "Noviembre",
    fixtures: [
      {
        id: "w15-league-j13",
        competicion: "LIGA",
        ronda: "Jornada 13",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 13,
        title: "Liga · Jornada 13",
        desc: "Decimotercera fecha de liga."
      }
    ]
  },
  {
    weekIndex: 16,
    mes: "Noviembre",
    fixtures: [
      {
        id: "w16-league-j14",
        competicion: "LIGA",
        ronda: "Jornada 14",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 14,
        title: "Liga · Jornada 14",
        desc: "Decimocuarta fecha de liga."
      },
      {
        id: "w16-cl-j5",
        competicion: "CHAMPIONS",
        ronda: "Fase de Grupos — J5",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "GRUPOS_5",
        title: "Champions League · Grupos J5",
        desc: "Quinta fecha de fase de grupos UCL."
      },
      {
        id: "w16-el-info",
        competicion: "EUROPA_LEAGUE",
        ronda: "Seguimiento de Liga",
        slot: "MITAD",
        esPartido: false,
        title: "Europa League · Seguimiento Clasificación",
        desc: "Penúltima fecha previa a la resolución de grupos de Champions."
      }
    ]
  },
  {
    weekIndex: 17,
    mes: "Diciembre",
    fixtures: [
      {
        id: "w17-league-j15",
        competicion: "LIGA",
        ronda: "Jornada 15",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 15,
        title: "Liga · Jornada 15",
        desc: "Decimoquinta fecha de liga."
      }
    ]
  },
  {
    weekIndex: 18,
    mes: "Diciembre",
    fixtures: [
      {
        id: "w18-league-j16",
        competicion: "LIGA",
        ronda: "Jornada 16",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 16,
        title: "Liga · Jornada 16",
        desc: "Decimosexta fecha de liga."
      },
      {
        id: "w18-cl-j6",
        competicion: "CHAMPIONS",
        ronda: "Fase de Grupos — J6 (Cierre)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "GRUPOS_6",
        title: "Champions League · Grupos J6 (Cierre)",
        desc: "Última fecha de grupos: clasificados a octavos UCL y repescados a UEL."
      },
      {
        id: "w18-el-repesca-info",
        competicion: "EUROPA_LEAGUE",
        ronda: "Definición de Repescados UCL",
        slot: "MITAD",
        esPartido: false,
        title: "Europa League · Repescados de Champions",
        desc: "Los 8 terceros de Champions League aseguran plaza directa en Octavos de UEL."
      }
    ]
  },
  {
    weekIndex: 19,
    mes: "Diciembre",
    fixtures: [
      {
        id: "w19-league-j17",
        competicion: "LIGA",
        ronda: "Jornada 17",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 17,
        title: "Liga · Jornada 17",
        desc: "Decimoséptima fecha de liga."
      }
    ]
  },
  {
    weekIndex: 20,
    mes: "Diciembre",
    fixtures: [
      {
        id: "w20-league-j18",
        competicion: "LIGA",
        ronda: "Jornada 18",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 18,
        title: "Liga · Jornada 18",
        desc: "Decimoctava fecha de liga."
      },
      {
        id: "w20-uefa-knockout-draw",
        competicion: "CHAMPIONS",
        ronda: "Sorteo Eliminatorias UEFA",
        slot: "MITAD",
        esPartido: false,
        title: "Sorteo de Cruces Eliminatorios",
        desc: "Sorteo de Octavos de Champions League y Dieciseisavos de Europa League."
      }
    ]
  },
  {
    weekIndex: 21,
    mes: "Enero",
    fixtures: [
      {
        id: "w21-league-j19",
        competicion: "LIGA",
        ronda: "Jornada 19",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 19,
        title: "Liga · Jornada 19 (Fin de 1ª Vuelta)",
        desc: "Cierre de la primera mitad del campeonato liguero."
      },
      {
        id: "w21-wc-j3",
        competicion: "MUNDIAL",
        ronda: "Fase de Grupos — J3",
        slot: "MITAD",
        esPartido: true,
        title: "Copa del Mundo · Grupos J3 (Cierre de Grupos)",
        desc: "Última fecha de grupos de selecciones: definición de clasificados a Octavos de Final."
      }
    ]
  },
  {
    weekIndex: 22,
    mes: "Enero",
    fixtures: [
      {
        id: "w22-league-j20",
        competicion: "LIGA",
        ronda: "Jornada 20",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 20,
        title: "Liga · Jornada 20",
        desc: "Inicio de la segunda vuelta de liga."
      },
      {
        id: "w22-el-r32-ida",
        competicion: "EUROPA_LEAGUE",
        ronda: "Dieciseisavos (Ida)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "DIECISEISAVOS_IDA",
        title: "Europa League · Dieciseisavos IDA",
        desc: "Ida del play-off eliminatorio en UEL."
      }
    ]
  },
  {
    weekIndex: 23,
    mes: "Enero",
    fixtures: [
      {
        id: "w23-league-j21",
        competicion: "LIGA",
        ronda: "Jornada 21",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 21,
        title: "Liga · Jornada 21",
        desc: "Vigésimo primera fecha de liga."
      },
      {
        id: "w23-el-r32-vta",
        competicion: "EUROPA_LEAGUE",
        ronda: "Dieciseisavos (Vuelta)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "DIECISEISAVOS_VUELTA",
        title: "Europa League · Dieciseisavos VUELTA",
        desc: "Definición de clasificados a octavos de final de UEL."
      }
    ]
  },
  {
    weekIndex: 24,
    mes: "Enero",
    fixtures: [
      {
        id: "w24-league-j22",
        competicion: "LIGA",
        ronda: "Jornada 22",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 22,
        title: "Liga · Jornada 22",
        desc: "Vigésimo segunda fecha de liga."
      },
      {
        id: "w24-market-deadline",
        competicion: "LIGA",
        ronda: "Cierre de Mercado (31 enero)",
        slot: "MITAD",
        esPartido: false,
        title: "Deadline Day · Cierre de Mercado de Invierno",
        desc: "Último día del periodo de fichajes invernal."
      }
    ]
  },
  {
    weekIndex: 25,
    mes: "Febrero",
    fixtures: [
      {
        id: "w25-league-j23",
        competicion: "LIGA",
        ronda: "Jornada 23",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 23,
        title: "Liga · Jornada 23",
        desc: "Vigésimo tercera fecha de liga."
      },
      {
        id: "w25-cl-r16-ida",
        competicion: "CHAMPIONS",
        ronda: "Octavos (Ida)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "OCTAVOS_IDA",
        title: "Champions League · Octavos IDA",
        desc: "Ida de octavos de final de UCL."
      },
      {
        id: "w25-el-r16-ida",
        competicion: "EUROPA_LEAGUE",
        ronda: "Octavos (Ida)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "OCTAVOS_IDA",
        title: "Europa League · Octavos IDA",
        desc: "Ida de octavos de final de UEL."
      }
    ]
  },
  {
    weekIndex: 26,
    mes: "Febrero",
    fixtures: [
      {
        id: "w26-league-j24",
        competicion: "LIGA",
        ronda: "Jornada 24",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 24,
        title: "Liga · Jornada 24",
        desc: "Vigésimo cuarta fecha de liga."
      }
    ]
  },
  {
    weekIndex: 27,
    mes: "Febrero",
    fixtures: [
      {
        id: "w27-league-j25",
        competicion: "LIGA",
        ronda: "Jornada 25",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 25,
        title: "Liga · Jornada 25",
        desc: "Vigésimo quinta fecha de liga."
      },
      {
        id: "w27-cl-r16-vta",
        competicion: "CHAMPIONS",
        ronda: "Octavos (Vuelta)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "OCTAVOS_VUELTA",
        title: "Champions League · Octavos VUELTA",
        desc: "Vuelta de octavos de final de UCL: pase a cuartos."
      },
      {
        id: "w27-el-r16-vta",
        competicion: "EUROPA_LEAGUE",
        ronda: "Octavos (Vuelta)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "OCTAVOS_VUELTA",
        title: "Europa League · Octavos VUELTA",
        desc: "Vuelta de octavos de final de UEL: pase a cuartos."
      }
    ]
  },
  {
    weekIndex: 28,
    mes: "Febrero",
    fixtures: [
      {
        id: "w28-league-j26",
        competicion: "LIGA",
        ronda: "Jornada 26",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 26,
        title: "Liga · Jornada 26",
        desc: "Vigésimo sexta fecha de liga."
      }
    ]
  },
  {
    weekIndex: 29,
    mes: "Marzo",
    fixtures: [
      {
        id: "w29-league-j27",
        competicion: "LIGA",
        ronda: "Jornada 27",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 27,
        title: "Liga · Jornada 27",
        desc: "Vigésimo séptima fecha de liga."
      },
      {
        id: "w29-wc-r16",
        competicion: "MUNDIAL",
        ronda: "Octavos de Final",
        slot: "MITAD",
        esPartido: true,
        title: "Copa del Mundo · Octavos de Final",
        desc: "Inicio de las eliminatorias directas entre las 16 mejores selecciones del planeta."
      }
    ]
  },
  {
    weekIndex: 30,
    mes: "Marzo",
    fixtures: [
      {
        id: "w30-league-j28",
        competicion: "LIGA",
        ronda: "Jornada 28",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 28,
        title: "Liga · Jornada 28",
        desc: "Vigésimo octava fecha de liga."
      },
      {
        id: "w30-cl-qf-ida",
        competicion: "CHAMPIONS",
        ronda: "Cuartos (Ida)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "CUARTOS_IDA",
        title: "Champions League · Cuartos IDA",
        desc: "Ida de cuartos de final de UCL."
      },
      {
        id: "w30-el-qf-ida",
        competicion: "EUROPA_LEAGUE",
        ronda: "Cuartos (Ida)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "CUARTOS_IDA",
        title: "Europa League · Cuartos IDA",
        desc: "Ida de cuartos de final de UEL."
      }
    ]
  },
  {
    weekIndex: 31,
    mes: "Marzo",
    fixtures: [
      {
        id: "w31-league-j29",
        competicion: "LIGA",
        ronda: "Jornada 29",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 29,
        title: "Liga · Jornada 29",
        desc: "Vigésimo novena fecha de liga."
      },
      {
        id: "w31-rest-break",
        competicion: "LIGA",
        ronda: "Puesta a Punto de Primavera",
        slot: "MITAD",
        esPartido: false,
        title: "Descanso y Preparación de Recta Final",
        desc: "Planificación de cara a la recta final y definición de títulos."
      }
    ]
  },
  {
    weekIndex: 32,
    mes: "Marzo",
    fixtures: [
      {
        id: "w32-league-j30",
        competicion: "LIGA",
        ronda: "Jornada 30",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 30,
        title: "Liga · Jornada 30",
        desc: "Trigésima fecha de liga."
      },
      {
        id: "w32-cl-qf-vta",
        competicion: "CHAMPIONS",
        ronda: "Cuartos (Vuelta)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "CUARTOS_VUELTA",
        title: "Champions League · Cuartos VUELTA",
        desc: "Vuelta de cuartos de final de UCL: pase a semifinales."
      },
      {
        id: "w32-el-qf-vta",
        competicion: "EUROPA_LEAGUE",
        ronda: "Cuartos (Vuelta)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "CUARTOS_VUELTA",
        title: "Europa League · Cuartos VUELTA",
        desc: "Vuelta de cuartos de final de UEL: pase a semifinales."
      }
    ]
  },
  {
    weekIndex: 33,
    mes: "Abril",
    fixtures: [
      {
        id: "w33-league-j31",
        competicion: "LIGA",
        ronda: "Jornada 31",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 31,
        title: "Liga · Jornada 31",
        desc: "Trigésimo primera fecha de liga."
      }
    ]
  },
  {
    weekIndex: 34,
    mes: "Abril",
    fixtures: [
      {
        id: "w34-league-j32",
        competicion: "LIGA",
        ronda: "Jornada 32",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 32,
        title: "Liga · Jornada 32",
        desc: "Trigésimo segunda fecha de liga."
      },
      {
        id: "w34-cl-sf-ida",
        competicion: "CHAMPIONS",
        ronda: "Semifinal (Ida)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "SEMIFINAL_IDA",
        title: "Champions League · Semifinales IDA",
        desc: "Ida de semifinales de UCL."
      },
      {
        id: "w34-el-sf-ida",
        competicion: "EUROPA_LEAGUE",
        ronda: "Semifinal (Ida)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "SEMIFINAL_IDA",
        title: "Europa League · Semifinales IDA",
        desc: "Ida de semifinales de UEL."
      }
    ]
  },
  {
    weekIndex: 35,
    mes: "Abril",
    fixtures: [
      {
        id: "w35-league-j33",
        competicion: "LIGA",
        ronda: "Jornada 33",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 33,
        title: "Liga · Jornada 33",
        desc: "Trigésimo tercera fecha de liga."
      },
      {
        id: "w35-wc-qf",
        competicion: "MUNDIAL",
        ronda: "Cuartos de Final",
        slot: "MITAD",
        esPartido: true,
        title: "Copa del Mundo · Cuartos de Final",
        desc: "Las 8 selecciones supervivientes disputan el pase a semifinales."
      }
    ]
  },
  {
    weekIndex: 36,
    mes: "Abril",
    fixtures: [
      {
        id: "w36-league-j34",
        competicion: "LIGA",
        ronda: "Jornada 34",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 34,
        title: "Liga · Jornada 34",
        desc: "Trigésimo cuarta fecha de liga (definición en ligas de 18 clubes)."
      },
      {
        id: "w36-cl-sf-vta",
        competicion: "CHAMPIONS",
        ronda: "Semifinal (Vuelta)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "SEMIFINAL_VUELTA",
        title: "Champions League · Semifinales VUELTA",
        desc: "Vuelta de semifinales de UCL: pase a la gran final."
      },
      {
        id: "w36-el-sf-vta",
        competicion: "EUROPA_LEAGUE",
        ronda: "Semifinal (Vuelta)",
        slot: "MITAD",
        esPartido: true,
        europeanRound: "SEMIFINAL_VUELTA",
        title: "Europa League · Semifinales VUELTA",
        desc: "Vuelta de semifinales de UEL: pase a la gran final."
      }
    ]
  },
  {
    weekIndex: 37,
    mes: "Mayo",
    fixtures: [
      {
        id: "w37-league-j35",
        competicion: "LIGA",
        ronda: "Jornada 35",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 35,
        title: "Liga · Jornada 35",
        desc: "Trigésimo quinta fecha de liga."
      }
    ]
  },
  {
    weekIndex: 38,
    mes: "Mayo",
    fixtures: [
      {
        id: "w38-league-j36",
        competicion: "LIGA",
        ronda: "Jornada 36",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 36,
        title: "Liga · Jornada 36",
        desc: "Trigésimo sexta fecha de liga."
      }
    ]
  },
  {
    weekIndex: 39,
    mes: "Mayo",
    fixtures: [
      {
        id: "w39-league-j37",
        competicion: "LIGA",
        ronda: "Jornada 37",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 37,
        title: "Liga · Jornada 37",
        desc: "Penúltima fecha del campeonato liguero."
      },
      {
        id: "w39-el-final",
        competicion: "EUROPA_LEAGUE",
        ronda: "Gran Final",
        slot: "UNICO",
        esPartido: true,
        europeanRound: "FINAL",
        title: "Gran Final de UEFA Europa League",
        desc: "Partido definitivo por el trofeo continental de la UEFA Europa League."
      }
    ]
  },
  {
    weekIndex: 40,
    mes: "Mayo",
    fixtures: [
      {
        id: "w40-league-j38",
        competicion: "LIGA",
        ronda: "Jornada 38",
        slot: "FINDE",
        esPartido: true,
        leagueMatchday: 38,
        title: "Liga · Jornada 38 (Clausura)",
        desc: "Última fecha del campeonato liguero y coronación de campeones domésticos."
      },
      {
        id: "w40-league-end",
        competicion: "LIGA",
        ronda: "Fin de Liga Doméstica",
        slot: "MITAD",
        esPartido: false,
        title: "Clausura de Ligas Nacionales",
        desc: "Balance final de ascensos, descensos y clasificados a torneos UEFA."
      }
    ]
  },
  {
    weekIndex: 41,
    mes: "Junio",
    fixtures: [
      {
        id: "w41-cl-final",
        competicion: "CHAMPIONS",
        ronda: "Gran Final",
        slot: "UNICO",
        esPartido: true,
        europeanRound: "FINAL",
        title: "Gran Final de UEFA Champions League",
        desc: "La máxima final continental europea por la 'Orejona'."
      },
      {
        id: "w41-wc-sf",
        competicion: "MUNDIAL",
        ronda: "Semifinales",
        slot: "MITAD",
        esPartido: true,
        title: "Copa del Mundo · Semifinales",
        desc: "Duelos directos por el billete a la gran final mundial."
      }
    ]
  },
  {
    weekIndex: 42,
    mes: "Junio",
    fixtures: [
      {
        id: "w42-wc-final",
        competicion: "MUNDIAL",
        ronda: "Gran Final de la Copa del Mundo",
        slot: "UNICO",
        esPartido: true,
        title: "Gran Final de la Copa del Mundo FIFA",
        desc: "El partido definitivo del fútbol internacional: coronación de la selección campeona del mundo."
      },
      {
        id: "w42-financial-close",
        competicion: "LIGA",
        ronda: "Cierre Financiero y Renovaciones",
        slot: "MITAD",
        esPartido: false,
        title: "Cierre Financiero y Renovaciones",
        desc: "Balance fiscal anual, evaluación de objetivos y planificación de fichajes para el nuevo curso."
      }
    ]
  }
];

export const getSemanaCalendario = (weekIndex: number): SemanaCalendario | undefined => {
  return SEASON_CALENDAR_42_WEEKS.find(w => w.weekIndex === weekIndex);
};

export const getTotalCalendarWeeks = (): number => 42;

export const getLeagueMatchdayForWeek = (weekIndex: number): number | null => {
  const week = getSemanaCalendario(weekIndex);
  if (!week) return null;
  const leagueFix = week.fixtures.find(f => f.competicion === "LIGA" && f.esPartido && f.leagueMatchday !== undefined);
  return leagueFix?.leagueMatchday ?? null;
};

export const getWeekForLeagueMatchday = (matchday: number): number => {
  if (matchday <= 0) return 1;
  if (matchday > 38) return 42;
  const week = SEASON_CALENDAR_42_WEEKS.find(w => 
    w.fixtures.some(f => f.competicion === "LIGA" && f.esPartido && f.leagueMatchday === matchday)
  );
  return week ? week.weekIndex : Math.min(42, Math.max(1, matchday));
};

// Semanas oficiales con fechas de UEFA Champions League (Sorteos y Rondas)
export const CHAMPIONS_DRAW_WEEKS = [2, 20];
export const CHAMPIONS_MATCH_WEEKS = [7, 9, 11, 14, 16, 18, 25, 27, 30, 32, 34, 36, 41];
export const CHAMPIONS_CALENDAR_WEEKS = [2, 7, 9, 11, 14, 16, 18, 20, 25, 27, 30, 32, 34, 36, 41];

// Semanas oficiales con fechas de UEFA Europa League (Sorteo, Dieciseisavos, Octavos, Cuartos, Semis, Final)
export const EUROPA_LEAGUE_DRAW_WEEKS = [20];
export const EUROPA_LEAGUE_MATCH_WEEKS = [22, 23, 25, 27, 30, 32, 34, 36, 39];
export const EUROPA_LEAGUE_CALENDAR_WEEKS = [20, 22, 23, 25, 27, 30, 32, 34, 36, 39];

export const isChampionsWeek = (weekIndex: number): boolean => {
  return CHAMPIONS_CALENDAR_WEEKS.includes(weekIndex);
};

export const isChampionsDrawWeek = (weekIndex: number): boolean => {
  return CHAMPIONS_DRAW_WEEKS.includes(weekIndex);
};

export const isChampionsMatchWeek = (weekIndex: number): boolean => {
  return CHAMPIONS_MATCH_WEEKS.includes(weekIndex);
};

export const isEuropaLeagueWeek = (weekIndex: number): boolean => {
  return EUROPA_LEAGUE_CALENDAR_WEEKS.includes(weekIndex);
};

export const isEuropaLeagueDrawWeek = (weekIndex: number): boolean => {
  return EUROPA_LEAGUE_DRAW_WEEKS.includes(weekIndex);
};

export const isEuropaLeagueMatchWeek = (weekIndex: number): boolean => {
  return EUROPA_LEAGUE_MATCH_WEEKS.includes(weekIndex);
};

export const getNextChampionsWeek = (currentWeek: number): number | null => {
  const next = CHAMPIONS_CALENDAR_WEEKS.find(w => w > currentWeek);
  return next || (currentWeek >= 41 ? null : 41);
};

export const getNextChampionsMatchWeek = (currentWeek: number): number | null => {
  const next = CHAMPIONS_MATCH_WEEKS.find(w => w >= currentWeek);
  return next || (currentWeek >= 41 ? null : 41);
};

export const getNextEuropaLeagueWeek = (currentWeek: number): number | null => {
  const next = EUROPA_LEAGUE_CALENDAR_WEEKS.find(w => w > currentWeek);
  return next || (currentWeek >= 39 ? null : 39);
};

export const getNextEuropaLeagueMatchWeek = (currentWeek: number): number | null => {
  const next = EUROPA_LEAGUE_MATCH_WEEKS.find(w => w >= currentWeek);
  return next || (currentWeek >= 39 ? null : 39);
};

// Semanas oficiales con fechas de Copa del Mundo / Selecciones Nacionales (7 fechas)
export const WORLD_CUP_MATCH_WEEKS = [5, 13, 21, 29, 35, 41, 42];
export const WORLD_CUP_CALENDAR_WEEKS = [5, 13, 21, 29, 35, 41, 42];

export const isWorldCupWeek = (weekIndex: number): boolean => {
  return WORLD_CUP_CALENDAR_WEEKS.includes(weekIndex);
};

export const isWorldCupMatchWeek = (weekIndex: number): boolean => {
  return WORLD_CUP_MATCH_WEEKS.includes(weekIndex);
};

export const getNextWorldCupWeek = (currentWeek: number): number | null => {
  const next = WORLD_CUP_CALENDAR_WEEKS.find(w => w > currentWeek);
  return next || (currentWeek >= 42 ? null : 42);
};

export const getNextWorldCupMatchWeek = (currentWeek: number): number | null => {
  const next = WORLD_CUP_MATCH_WEEKS.find(w => w >= currentWeek);
  return next || (currentWeek >= 42 ? null : 42);
};

export const getWcRoundName = (roundIndex: number): string => {
  switch (roundIndex) {
    case 1: return "Fase de Grupos (J1)";
    case 2: return "Fase de Grupos (J2)";
    case 3: return "Fase de Grupos (J3)";
    case 4: return "Octavos de Final";
    case 5: return "Cuartos de Final";
    case 6: return "Semifinales";
    case 7: return "Gran Final y 3º Puesto";
    default: return "Copa del Mundo";
  }
};

export const getClRoundName = (roundIndex: number): string => {
  switch (roundIndex) {
    case 1: return "Fase de Grupos (J1)";
    case 2: return "Fase de Grupos (J2)";
    case 3: return "Fase de Grupos (J3)";
    case 4: return "Fase de Grupos (J4)";
    case 5: return "Fase de Grupos (J5)";
    case 6: return "Fase de Grupos (J6 - Cierre)";
    case 7: return "Octavos de Final (Ida)";
    case 8: return "Octavos de Final (Vuelta)";
    case 9: return "Cuartos de Final (Ida)";
    case 10: return "Cuartos de Final (Vuelta)";
    case 11: return "Semifinales (Ida)";
    case 12: return "Semifinales (Vuelta)";
    case 13: return "Gran Final";
    default: return "Champions League";
  }
};

export const getUelRoundName = (roundIndex: number): string => {
  switch (roundIndex) {
    case 1: return "Dieciseisavos (Ida)";
    case 2: return "Dieciseisavos (Vuelta)";
    case 3: return "Octavos de Final (Ida)";
    case 4: return "Octavos de Final (Vuelta)";
    case 5: return "Cuartos de Final (Ida)";
    case 6: return "Cuartos de Final (Vuelta)";
    case 7: return "Semifinales (Ida)";
    case 8: return "Semifinales (Vuelta)";
    case 9: return "Gran Final";
    default: return "Europa League";
  }
};

export const getExpectedCupMatchdayForWeek = (compId: string, week: number): number | null => {
  if (compId === 'C1') {
    const clMap: Record<number, number> = {
      7: 1, 9: 2, 11: 3, 14: 4, 16: 5, 18: 6,
      25: 7, 27: 8, 30: 9, 32: 10, 34: 11, 36: 12, 41: 13
    };
    return clMap[week] ?? null;
  }
  if (compId === 'C3') {
    const uelMap: Record<number, number> = {
      22: 1, 23: 2, 25: 3, 27: 4, 30: 5, 32: 6, 34: 7, 36: 8, 39: 9
    };
    return uelMap[week] ?? null;
  }
  if (compId === 'C2') {
    const wcMap: Record<number, number> = {
      5: 1, 13: 2, 21: 3, 29: 4, 35: 5, 41: 6, 42: 7
    };
    return wcMap[week] ?? null;
  }
  return null;
};

export interface CompetitionWeekStatus {
  isScheduledThisWeek: boolean;
  canPlayOrSimulate: boolean;
  reason: 'IN_WEEK' | 'OFF_WEEK' | 'WAITING_CALENDAR' | 'SEASON_COMPLETED' | 'WAITING_REPESCADOS' | 'PRESEASON';
  title: string;
  badge: string;
  badgeColor: 'emerald' | 'amber' | 'blue' | 'red' | 'slate';
  message: string;
  scheduledRoundName: string;
  currentWeek: number;
  targetWeek: number | null;
  compType: 'league' | 'champions' | 'europa' | 'worldcup';
}

export const getCompetitionWeekStatus = (
  comp: any,
  currentWeek: number,
  isDiv2: boolean = false,
  allComps?: Record<string, any>
): CompetitionWeekStatus => {
  const actualComp = (typeof comp === 'string' && allComps) ? (allComps[comp] || { id: comp }) : (comp || {});
  const compId = typeof comp === 'string' ? comp : (actualComp?.id || '');
  const isLeague = actualComp?.type === 'league' || compId?.startsWith('L');
  const isWC = compId === 'C2' || Boolean(actualComp?.isWorldCup) || actualComp?.name?.toLowerCase().includes('mundial') || actualComp?.name?.toLowerCase().includes('world cup');
  const isCL = compId === 'C1' || actualComp?.name?.toLowerCase().includes('champions');
  const isUEL = compId === 'C3' || actualComp?.name?.toLowerCase().includes('europa');

  if (isLeague) {
    const teams = isDiv2 ? (actualComp?.teams2 || []) : (actualComp?.teams || []);
    const matchday = isDiv2 ? (actualComp?.matchday2 || 0) : (actualComp?.matchday || 0);
    const totalMatchdays = teams.length > 0 ? (teams.length - 1) * 2 : 38;
    const isFinished = matchday >= totalMatchdays;

    if (isFinished) {
      return {
        isScheduledThisWeek: false,
        canPlayOrSimulate: false,
        reason: 'SEASON_COMPLETED',
        title: 'Temporada Regular Finalizada',
        badge: '🏆 TEMPORADA CONCLUIDA',
        badgeColor: 'slate',
        message: `La liga regular ${isDiv2 ? '(2ª Div)' : '(1ª Div)'} ha disputado todas sus jornadas oficiales (${totalMatchdays}/${totalMatchdays}).`,
        scheduledRoundName: 'Liga Finalizada',
        currentWeek,
        targetWeek: null,
        compType: 'league'
      };
    }

    if (currentWeek < 3) {
      return {
        isScheduledThisWeek: false,
        canPlayOrSimulate: false,
        reason: 'PRESEASON',
        title: 'Semanas de Pretemporada y Sorteo Europeo',
        badge: '⏳ PRETEMPORADA OFICIAL',
        badgeColor: 'amber',
        message: 'Las ligas domésticas no disputan encuentros oficiales en las Semanas 1 y 2 de pretemporada y sorteos UEFA. El debut liguero (Jornada 1) está programado para la Semana 3.',
        scheduledRoundName: 'Jornada 1',
        currentWeek,
        targetWeek: 3,
        compType: 'league'
      };
    }

    const nextMd = matchday + 1;
    const targetWeekForNextMd = getWeekForLeagueMatchday(nextMd);
    const scheduledLeagueMdThisWeek = getLeagueMatchdayForWeek(currentWeek);

    if (scheduledLeagueMdThisWeek !== null && nextMd <= scheduledLeagueMdThisWeek) {
      return {
        isScheduledThisWeek: true,
        canPlayOrSimulate: true,
        reason: 'IN_WEEK',
        title: `Jornada ${nextMd} · Semana ${currentWeek}`,
        badge: '🟢 JORNADA OFICIAL PROGRAMADA',
        badgeColor: 'emerald',
        message: `La Jornada ${nextMd} está programada en el calendario oficial para disputarse en la Semana ${currentWeek}.`,
        scheduledRoundName: `Jornada ${nextMd}`,
        currentWeek,
        targetWeek: currentWeek,
        compType: 'league'
      };
    }

    if (currentWeek < targetWeekForNextMd) {
      return {
        isScheduledThisWeek: false,
        canPlayOrSimulate: false,
        reason: 'WAITING_CALENDAR',
        title: `Sin partidos de Liga en Semana ${currentWeek}`,
        badge: `⏸️ PRÓXIMA FECHA: SEMANA ${targetWeekForNextMd}`,
        badgeColor: 'amber',
        message: `Esta liga ya disputó su partido correspondiente a la Semana ${currentWeek} (Jornada ${matchday}). La Jornada ${nextMd} se jugará en la Semana ${targetWeekForNextMd}. Avanza la temporada desde el Hub para continuar.`,
        scheduledRoundName: `Jornada ${nextMd}`,
        currentWeek,
        targetWeek: targetWeekForNextMd,
        compType: 'league'
      };
    }

    return {
      isScheduledThisWeek: false,
      canPlayOrSimulate: false,
      reason: 'OFF_WEEK',
      title: `Semana ${currentWeek} · Sin Jornada de Liga`,
      badge: '⏸️ SEMANA SIN PARTIDOS DE LIGA',
      badgeColor: 'amber',
      message: `La Semana ${currentWeek} no tiene jornadas de liga doméstica programadas (reservada para torneos continentales y selecciones).`,
      scheduledRoundName: `Jornada ${nextMd}`,
      currentWeek,
      targetWeek: targetWeekForNextMd,
      compType: 'league'
    };
  }

  if (isCL) {
    const isFinished = actualComp?.phase === 'Terminado' || (actualComp?.bracket?.Final && actualComp?.bracket?.Final?.sh !== null && actualComp?.bracket?.Final?.sh !== undefined);
    if (isFinished) {
      return {
        isScheduledThisWeek: false,
        canPlayOrSimulate: false,
        reason: 'SEASON_COMPLETED',
        title: 'UEFA Champions League Concluida',
        badge: '🏆 OREJONA CONCLUIDA',
        badgeColor: 'slate',
        message: 'La máxima competición continental europea ha coronado a su campeón.',
        scheduledRoundName: 'Final Concluida',
        currentWeek,
        targetWeek: null,
        compType: 'champions'
      };
    }

    const roundIndex = (actualComp?.matchday || 0) + 1;
    const targetWeek = CHAMPIONS_MATCH_WEEKS[roundIndex - 1] || 41;
    const roundName = getClRoundName(roundIndex);

    if (currentWeek === targetWeek) {
      return {
        isScheduledThisWeek: true,
        canPlayOrSimulate: true,
        reason: 'IN_WEEK',
        title: `UEFA Champions League · ${roundName}`,
        badge: '🟢 FECHA EUROPEA OFICIAL',
        badgeColor: 'emerald',
        message: `Esta Semana ${currentWeek} está reservada en el calendario europeo para disputar la ${roundName} de la UEFA Champions League.`,
        scheduledRoundName: roundName,
        currentWeek,
        targetWeek,
        compType: 'champions'
      };
    }

    return {
      isScheduledThisWeek: false,
      canPlayOrSimulate: false,
      reason: 'OFF_WEEK',
      title: 'Semana sin partidos de Champions League',
      badge: `⏸️ PRÓXIMA FECHA UCL: SEMANA ${targetWeek}`,
      badgeColor: 'blue',
      message: `No hay partidos de UEFA Champions League en la Semana ${currentWeek}. La siguiente cita europea (${roundName}) se disputará en la Semana ${targetWeek}. Disputa las jornadas de liga y avanza el calendario desde el Hub.`,
      scheduledRoundName: roundName,
      currentWeek,
      targetWeek,
      compType: 'champions'
    };
  }

  if (isUEL) {
    const isFinished = actualComp?.phase === 'Terminado' || (actualComp?.bracket?.Final && actualComp?.bracket?.Final?.sh !== null && actualComp?.bracket?.Final?.sh !== undefined);
    if (isFinished) {
      return {
        isScheduledThisWeek: false,
        canPlayOrSimulate: false,
        reason: 'SEASON_COMPLETED',
        title: 'UEFA Europa League Concluida',
        badge: '🏆 TROFEO UEL CONCLUIDO',
        badgeColor: 'slate',
        message: 'La UEFA Europa League ha coronado a su campeón.',
        scheduledRoundName: 'Final Concluida',
        currentWeek,
        targetWeek: null,
        compType: 'europa'
      };
    }

    const c1 = allComps ? allComps['C1'] : null;
    const isC1Done = !c1 || c1.phase !== 'groups' || (c1.matchday || 0) >= 6;
    if (actualComp?.phase !== 'Dieciseisavos' && !isC1Done) {
      return {
        isScheduledThisWeek: false,
        canPlayOrSimulate: false,
        reason: 'WAITING_REPESCADOS',
        title: 'Esperando Repescados de Champions League',
        badge: '⏳ ESPERANDO GRUPOS UCL (SEM. 18)',
        badgeColor: 'amber',
        message: 'Los Octavos de Final de Europa League requieren la resolución de la Fase de Grupos de Champions League (Semana 18) para recibir a los 8 clubes repescados (3.ºs de grupo). Los Octavos se disputarán en la Semana 25 (Ida).',
        scheduledRoundName: 'Octavos de Final (Ida)',
        currentWeek,
        targetWeek: 25,
        compType: 'europa'
      };
    }

    const roundIndex = (actualComp?.matchday || 0) + 1;
    const targetWeek = EUROPA_LEAGUE_MATCH_WEEKS[roundIndex - 1] || 39;
    const roundName = getUelRoundName(roundIndex);

    if (currentWeek === targetWeek) {
      return {
        isScheduledThisWeek: true,
        canPlayOrSimulate: true,
        reason: 'IN_WEEK',
        title: `UEFA Europa League · ${roundName}`,
        badge: '🟢 FECHA EUROPEA OFICIAL',
        badgeColor: 'emerald',
        message: `Esta Semana ${currentWeek} está reservada en el calendario europeo para disputar la ${roundName} de la UEFA Europa League.`,
        scheduledRoundName: roundName,
        currentWeek,
        targetWeek,
        compType: 'europa'
      };
    }

    return {
      isScheduledThisWeek: false,
      canPlayOrSimulate: false,
      reason: 'OFF_WEEK',
      title: 'Semana sin partidos de Europa League',
      badge: `⏸️ PRÓXIMA FECHA UEL: SEMANA ${targetWeek}`,
      badgeColor: 'amber',
      message: `No hay partidos de UEFA Europa League en la Semana ${currentWeek}. La siguiente cita (${roundName}) se disputará en la Semana ${targetWeek}. Avanza las semanas desde el Hub.`,
      scheduledRoundName: roundName,
      currentWeek,
      targetWeek,
      compType: 'europa'
    };
  }

  if (isWC) {
    const isFinished = actualComp?.phase === 'Terminado' || (actualComp?.bracket?.Final && actualComp?.bracket?.Final?.sh !== null && actualComp?.bracket?.Final?.sh !== undefined) || actualComp?.showWinner;
    if (isFinished) {
      return {
        isScheduledThisWeek: false,
        canPlayOrSimulate: false,
        reason: 'SEASON_COMPLETED',
        title: 'Copa del Mundo Concluida',
        badge: '🏆 SELECCIÓN CAMPEONA CORONADA',
        badgeColor: 'slate',
        message: 'La Copa del Mundo FIFA ha finalizado con la coronación de la selección campeona.',
        scheduledRoundName: 'Mundial Concluido',
        currentWeek,
        targetWeek: null,
        compType: 'worldcup'
      };
    }

    const roundName = actualComp?.phase === 'groups' ? `Jornada ${(actualComp?.matchday || 0) + 1}` : (actualComp?.phase || 'Fase Final');

    return {
      isScheduledThisWeek: true,
      canPlayOrSimulate: true,
      reason: 'IN_WEEK',
      title: `Copa del Mundo FIFA · ${roundName}`,
      badge: '🌍 TORNEO INDEPENDIENTE DE SELECCIONES',
      badgeColor: 'emerald',
      message: 'La Copa del Mundo es independiente: puedes jugar o simular jornadas libremente en cualquier momento.',
      scheduledRoundName: roundName,
      currentWeek,
      targetWeek: null,
      compType: 'worldcup'
    };
  }

  return {
    isScheduledThisWeek: true,
    canPlayOrSimulate: true,
    reason: 'IN_WEEK',
    title: 'Competición en Curso',
    badge: '🟢 EN JUEGO',
    badgeColor: 'emerald',
    message: 'Partidos listos para disputarse.',
    scheduledRoundName: 'Partidos Programados',
    currentWeek,
    targetWeek: currentWeek,
    compType: 'league'
  };
};
