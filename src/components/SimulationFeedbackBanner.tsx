import React from 'react';
import {
  X,
  TrendingUp,
  TrendingDown,
  Target,
  Sparkles,
  Award,
  AlertTriangle,
  CheckCircle,
  Flame,
  Star,
  Eye,
  ShieldCheck,
  Trophy,
  Globe
} from 'lucide-react';
import { motion } from 'motion/react';

export interface SimulationFeedback {
  isChampions?: boolean;
  isEuropaLeague?: boolean;
  isUel?: boolean;
  isSimultaneous?: boolean;
  phaseLabel?: string;
  headline?: string;
  summary?: string;
  matchday?: number;
  homeName?: string;
  awayName?: string;
  scoreH?: number;
  scoreA?: number;
  myGf?: number;
  myGa?: number;
  result?: 'W' | 'D' | 'L' | string;
  posBefore?: number;
  posAfter?: number;
  posDelta?: number;
  expectedPos?: number;
  targetPos?: number;
  tier?: number;
  div?: number;
  repDelta?: number;
  repGained?: number;
  peDelta?: number;
  peGained?: number;
  matchPeGained?: number;
  trainingPeGained?: number;
  trainingResult?: any;
  rivalName?: string;
  isHome?: boolean;
  cleanSheet?: boolean;
  isGesta?: boolean;
  bonusPE?: number;
  bonusRep?: number;
  injuryOccurred?: boolean;
  immunityWeeks?: number;
  leagueMatch?: {
    rivalName?: string;
    homeName?: string;
    awayName?: string;
    scoreH?: number;
    scoreA?: number;
    isHome?: boolean;
    myGf?: number;
    myGa?: number;
    result?: string;
    posBefore?: number;
    posAfter?: number;
    peGained?: number;
    repGained?: number;
  };
  clMatch?: {
    rivalName?: string;
    homeName?: string;
    awayName?: string;
    scoreH?: number;
    scoreA?: number;
    isHome?: boolean;
    myGf?: number;
    myGa?: number;
    result?: string;
    phase?: string;
    peGained?: number;
    repGained?: number;
  };
  uelMatch?: {
    rivalName?: string;
    homeName?: string;
    awayName?: string;
    scoreH?: number;
    scoreA?: number;
    isHome?: boolean;
    myGf?: number;
    myGa?: number;
    result?: string;
    phase?: string;
    peGained?: number;
    repGained?: number;
  };
}

interface SimulationFeedbackBannerProps {
  feedback: SimulationFeedback;
  onDismiss?: () => void;
}

export const SimulationFeedbackBanner: React.FC<SimulationFeedbackBannerProps> = ({
  feedback,
  onDismiss
}) => {
  if (!feedback) return null;

  const result = feedback.result;
  const peGained = feedback.peDelta ?? feedback.peGained ?? 0;
  const repGained = feedback.repDelta ?? feedback.repGained ?? 0;
  const posBefore = feedback.posBefore;
  const posAfter = feedback.posAfter;
  const posDiff = (typeof posBefore === 'number' && typeof posAfter === 'number') ? posBefore - posAfter : 0;

  const isContinentalOnly = !feedback.isSimultaneous && Boolean(feedback.isChampions || feedback.isEuropaLeague || feedback.isUel);
  const continentalName = feedback.isChampions ? 'UEFA Champions League' : 'UEFA Europa League';

  const targetPos = feedback.targetPos ?? 10;
  const expectedPos = feedback.expectedPos ?? 10;

  // Preparar lista unificada de partidos disputados / simulados (para liga, Champions o Europa League)
  const matchesToDisplay: any[] = [];

  if (feedback.leagueMatch) {
    const isHome = feedback.leagueMatch.isHome ?? feedback.isHome ?? true;
    const rival = feedback.leagueMatch.rivalName || feedback.rivalName || 'Rival';
    const hName = feedback.leagueMatch.homeName || (isHome ? 'Tu Equipo' : rival);
    const aName = feedback.leagueMatch.awayName || (isHome ? rival : 'Tu Equipo');
    const sH = feedback.leagueMatch.scoreH !== undefined ? feedback.leagueMatch.scoreH : (isHome ? (feedback.leagueMatch.myGf ?? 0) : (feedback.leagueMatch.myGa ?? 0));
    const sA = feedback.leagueMatch.scoreA !== undefined ? feedback.leagueMatch.scoreA : (isHome ? (feedback.leagueMatch.myGa ?? 0) : (feedback.leagueMatch.myGf ?? 0));
    matchesToDisplay.push({
      id: 'league',
      compType: 'league' as const,
      compTitle: '🏆 Liga Regular',
      phaseOrDay: feedback.matchday ? `Jornada ${feedback.matchday}` : undefined,
      homeName: hName,
      awayName: aName,
      scoreH: sH,
      scoreA: sA,
      isHome,
      result: feedback.leagueMatch.result || feedback.result || (sH === sA ? 'D' : (isHome ? (sH > sA ? 'W' : 'L') : (sA > sH ? 'W' : 'L'))),
      posBefore: feedback.leagueMatch.posBefore ?? feedback.posBefore,
      posAfter: feedback.leagueMatch.posAfter ?? feedback.posAfter,
      peGained: feedback.leagueMatch.peGained ?? feedback.peDelta ?? feedback.peGained,
      repGained: feedback.leagueMatch.repGained ?? feedback.repDelta ?? feedback.repGained,
      theme: 'emerald' as const
    });
  }

  if (feedback.clMatch) {
    const isHome = feedback.clMatch.isHome ?? feedback.isHome ?? true;
    const rival = feedback.clMatch.rivalName || feedback.rivalName || 'Rival Europeo';
    const hName = feedback.clMatch.homeName || (isHome ? 'Tu Equipo' : rival);
    const aName = feedback.clMatch.awayName || (isHome ? rival : 'Tu Equipo');
    const sH = feedback.clMatch.scoreH !== undefined ? feedback.clMatch.scoreH : (isHome ? (feedback.clMatch.myGf ?? 0) : (feedback.clMatch.myGa ?? 0));
    const sA = feedback.clMatch.scoreA !== undefined ? feedback.clMatch.scoreA : (isHome ? (feedback.clMatch.myGa ?? 0) : (feedback.clMatch.myGf ?? 0));
    matchesToDisplay.push({
      id: 'cl',
      compType: 'cl' as const,
      compTitle: '⭐ Champions League',
      phaseOrDay: feedback.clMatch.phase || feedback.phaseLabel || 'Eliminatoria',
      homeName: hName,
      awayName: aName,
      scoreH: sH,
      scoreA: sA,
      isHome,
      result: feedback.clMatch.result || feedback.result || (sH === sA ? 'D' : (isHome ? (sH > sA ? 'W' : 'L') : (sA > sH ? 'W' : 'L'))),
      posBefore: undefined,
      posAfter: undefined,
      peGained: feedback.clMatch.peGained,
      repGained: feedback.clMatch.repGained,
      theme: 'blue' as const
    });
  }

  if (feedback.uelMatch) {
    const isHome = feedback.uelMatch.isHome ?? feedback.isHome ?? true;
    const rival = feedback.uelMatch.rivalName || feedback.rivalName || 'Rival Europeo';
    const hName = feedback.uelMatch.homeName || (isHome ? 'Tu Equipo' : rival);
    const aName = feedback.uelMatch.awayName || (isHome ? rival : 'Tu Equipo');
    const sH = feedback.uelMatch.scoreH !== undefined ? feedback.uelMatch.scoreH : (isHome ? (feedback.uelMatch.myGf ?? 0) : (feedback.uelMatch.myGa ?? 0));
    const sA = feedback.uelMatch.scoreA !== undefined ? feedback.uelMatch.scoreA : (isHome ? (feedback.uelMatch.myGa ?? 0) : (feedback.uelMatch.myGf ?? 0));
    matchesToDisplay.push({
      id: 'uel',
      compType: 'uel' as const,
      compTitle: '🟠 Europa League',
      phaseOrDay: feedback.uelMatch.phase || feedback.phaseLabel || 'Eliminatoria',
      homeName: hName,
      awayName: aName,
      scoreH: sH,
      scoreA: sA,
      isHome,
      result: feedback.uelMatch.result || feedback.result || (sH === sA ? 'D' : (isHome ? (sH > sA ? 'W' : 'L') : (sA > sH ? 'W' : 'L'))),
      posBefore: undefined,
      posAfter: undefined,
      peGained: feedback.uelMatch.peGained,
      repGained: feedback.uelMatch.repGained,
      theme: 'amber' as const
    });
  }

  // Fallback si no vinieron objetos anidados de competición pero sí datos directos de un partido individual
  if (matchesToDisplay.length === 0 && (feedback.rivalName || feedback.homeName || feedback.myGf !== undefined)) {
    const isCl = Boolean(feedback.isChampions);
    const isUel = Boolean(feedback.isEuropaLeague || feedback.isUel);
    const isHome = feedback.isHome ?? true;
    const rival = feedback.rivalName || 'Rival';
    const hName = feedback.homeName || (isHome ? 'Tu Equipo' : rival);
    const aName = feedback.awayName || (isHome ? rival : 'Tu Equipo');
    const sH = feedback.scoreH !== undefined ? feedback.scoreH : (isHome ? (feedback.myGf ?? 0) : (feedback.myGa ?? 0));
    const sA = feedback.scoreA !== undefined ? feedback.scoreA : (isHome ? (feedback.myGa ?? 0) : (feedback.myGf ?? 0));
    matchesToDisplay.push({
      id: isCl ? 'cl' : isUel ? 'uel' : 'league',
      compType: isCl ? ('cl' as const) : isUel ? ('uel' as const) : ('league' as const),
      compTitle: isCl ? '⭐ Champions League' : isUel ? '🟠 Europa League' : '🏆 Liga Regular',
      phaseOrDay: isCl || isUel ? (feedback.phaseLabel || 'Eliminatoria') : (feedback.matchday ? `Jornada ${feedback.matchday}` : undefined),
      homeName: hName,
      awayName: aName,
      scoreH: sH,
      scoreA: sA,
      isHome,
      result: feedback.result || (sH === sA ? 'D' : (isHome ? (sH > sA ? 'W' : 'L') : (sA > sH ? 'W' : 'L'))),
      posBefore: feedback.posBefore,
      posAfter: feedback.posAfter,
      peGained: feedback.peGained ?? feedback.peDelta,
      repGained: feedback.repGained ?? feedback.repDelta,
      theme: isCl ? ('blue' as const) : isUel ? ('amber' as const) : ('emerald' as const)
    });
  }

  // Evaluación creativa de seguridad en el puesto y confianza de la directiva
  let boardStatus = {
    label: 'Objetivo en Curso',
    riskTag: 'Puesto Seguro',
    colorText: 'text-emerald-300',
    colorBg: 'bg-emerald-500/20 border-emerald-500/40',
    icon: CheckCircle
  };

  if (isContinentalOnly) {
    if (result === 'W') {
      boardStatus = {
        label: 'Prestigio Europeo',
        riskTag: 'Directiva Encantada ⭐',
        colorText: 'text-blue-300',
        colorBg: 'bg-blue-500/20 border-blue-500/40',
        icon: Star
      };
    } else if (result === 'D') {
      boardStatus = {
        label: 'Opciones Vivas',
        riskTag: 'En Competencia',
        colorText: 'text-amber-300',
        colorBg: 'bg-amber-500/20 border-amber-500/40',
        icon: ShieldCheck
      };
    } else {
      boardStatus = {
        label: 'Revés Continental',
        riskTag: 'Exigencia Máxima',
        colorText: 'text-rose-300',
        colorBg: 'bg-rose-500/20 border-rose-500/40',
        icon: AlertTriangle
      };
    }
  } else if (posAfter !== undefined && typeof posAfter === 'number') {
    const diffToTarget = posAfter - targetPos; // <= 0 significa dentro del objetivo
    const diffToExpected = expectedPos - posAfter; // >= 0 significa mejor de lo previsto por plantilla

    if (posAfter <= targetPos) {
      if (posAfter === 1) {
        boardStatus = {
          label: 'Líder de la Competición 🏆',
          riskTag: 'Directiva Encantada 🌟',
          colorText: 'text-emerald-300',
          colorBg: 'bg-emerald-500/25 border-emerald-500/50',
          icon: Sparkles
        };
      } else if (targetPos === 1) {
        boardStatus = {
          label: `A ${diffToTarget} puesto${diffToTarget > 1 ? 's' : ''} de la cima`,
          riskTag: 'Puesto Seguro ✅',
          colorText: 'text-emerald-300',
          colorBg: 'bg-emerald-500/20 border-emerald-500/40',
          icon: CheckCircle
        };
      } else if (diffToExpected >= 4) {
        boardStatus = {
          label: 'Superando Expectativas',
          riskTag: 'Directiva Encantada 🌟',
          colorText: 'text-emerald-300',
          colorBg: 'bg-emerald-500/25 border-emerald-500/50',
          icon: Sparkles
        };
      } else {
        boardStatus = {
          label: `En Objetivo (Top ${targetPos})`,
          riskTag: 'Puesto Seguro ✅',
          colorText: 'text-emerald-300',
          colorBg: 'bg-emerald-500/20 border-emerald-500/40',
          icon: CheckCircle
        };
      }
    } else {
      if (diffToTarget <= 2 && diffToExpected >= -2) {
        boardStatus = {
          label: `A ${diffToTarget} puesto${diffToTarget > 1 ? 's' : ''} de meta`,
          riskTag: 'Bajo Observación 👀',
          colorText: 'text-amber-300',
          colorBg: 'bg-amber-500/20 border-amber-500/40',
          icon: Eye
        };
      } else if (diffToTarget <= 5 || diffToExpected >= -4) {
        boardStatus = {
          label: 'Fuera de Objetivos',
          riskTag: 'Despido Probable ⚠️',
          colorText: 'text-orange-400',
          colorBg: 'bg-orange-500/20 border-orange-500/40',
          icon: AlertTriangle
        };
      } else {
        boardStatus = {
          label: 'Zona Crítica',
          riskTag: 'Ultimátum Directiva 🔥',
          colorText: 'text-rose-400',
          colorBg: 'bg-rose-600/30 border-rose-500/60',
          icon: Flame
        };
      }
    }
  }

  const StatusIcon = boardStatus.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      className="relative overflow-hidden rounded-2xl p-3 sm:p-3.5 border border-white/15 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 shadow-xl backdrop-blur-md space-y-2.5"
    >
      {/* 1. Barra Superior Compacta */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap min-w-0">
          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg bg-slate-800 text-slate-200 border border-white/10 shrink-0">
            {feedback.isSimultaneous
              ? `⚡ Semana ${feedback.matchday ?? ''} · Resultados Simultáneos`
              : feedback.isChampions
              ? 'Champions League'
              : (feedback.isEuropaLeague || feedback.isUel)
              ? 'UEFA Europa League'
              : `Jornada ${feedback.matchday ?? ''}`}
          </span>

          {/* Badge de Seguridad en el Puesto y Directiva */}
          <span className={`inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-sm ${boardStatus.colorBg} ${boardStatus.colorText}`}>
            <StatusIcon className="w-3 h-3 shrink-0" />
            <span>{boardStatus.riskTag}</span>
          </span>
        </div>

        {onDismiss && (
          <button
            onClick={onDismiss}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            title="Cerrar"
            aria-label="Cerrar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Tarjetas de partidos disputados / simulados (fieles tanto en jornada individual como en semana simultánea) */}
      {matchesToDisplay.length > 0 && (
        <div className={`grid gap-2 text-xs ${matchesToDisplay.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
          {matchesToDisplay.map((m) => {
            const isWin = m.result === 'W';
            const isDraw = m.result === 'D';
            const themeBorder = m.theme === 'blue'
              ? 'border-blue-500/30 bg-blue-950/20'
              : m.theme === 'amber'
              ? 'border-amber-500/30 bg-amber-950/20'
              : 'border-emerald-500/30 bg-emerald-950/20';

            const badgeBg = m.theme === 'blue' ? 'text-blue-400' : m.theme === 'amber' ? 'text-amber-400' : 'text-emerald-400';

            return (
              <div key={m.id} className={`${themeBorder} border rounded-xl p-2.5 space-y-1.5`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className={`text-[8.5px] font-black uppercase tracking-widest ${badgeBg}`}>
                      {m.compTitle}
                    </span>
                    {m.phaseOrDay && (
                      <span className="text-[8px] font-bold text-slate-400 truncate">
                        · {m.phaseOrDay}
                      </span>
                    )}
                  </div>
                  <span className={`text-[8.5px] font-black px-2 py-0.5 rounded-full uppercase shrink-0 ${
                    isWin ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40' :
                    isDraw ? 'bg-amber-500/30 text-amber-300 border border-amber-500/40' :
                    'bg-rose-500/30 text-rose-300 border border-rose-500/40'
                  }`}>
                    {isWin ? 'Victoria' : isDraw ? 'Empate' : 'Derrota'}
                  </span>
                </div>

                {/* Marcador fiel: Local vs Visitante */}
                <div className="bg-black/40 rounded-lg p-2 border border-white/5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 min-w-0 flex-1">
                    <span className={`text-[11px] font-black truncate ${m.isHome ? 'text-amber-300' : 'text-white'}`}>
                      {m.homeName}
                    </span>
                    {m.isHome && (
                      <span className="text-[7.5px] font-bold text-amber-400/90 uppercase px-1 rounded bg-amber-400/15 shrink-0">
                        Casa
                      </span>
                    )}
                  </div>

                  <div className="shrink-0 px-2.5 py-0.5 bg-black/60 rounded-md border border-white/10 font-mono text-sm font-black italic tabular-nums tracking-wider text-white">
                    <span className={m.scoreH > m.scoreA ? 'text-emerald-400' : m.scoreH < m.scoreA ? 'text-rose-400' : 'text-amber-400'}>
                      {m.scoreH}
                    </span>
                    <span className="text-slate-500 mx-1">-</span>
                    <span className={m.scoreA > m.scoreH ? 'text-emerald-400' : m.scoreA < m.scoreH ? 'text-rose-400' : 'text-amber-400'}>
                      {m.scoreA}
                    </span>
                  </div>

                  <div className="flex items-center justify-end gap-1.5 min-w-0 flex-1 text-right">
                    {!m.isHome && (
                      <span className="text-[7.5px] font-bold text-amber-400/90 uppercase px-1 rounded bg-amber-400/15 shrink-0">
                        Fuera
                      </span>
                    )}
                    <span className={`text-[11px] font-black truncate ${!m.isHome ? 'text-amber-300' : 'text-white'}`}>
                      {m.awayName}
                    </span>
                  </div>
                </div>

                {/* Metadatos adicionales de liga o torneo */}
                <div className="flex items-center justify-between text-[9px] text-slate-300 font-bold pt-0.5">
                  {m.posAfter !== undefined ? (
                    <p className="truncate">
                      Puesto liga: <span className="text-white font-black">{m.posAfter}º</span>
                      {m.posBefore !== undefined && m.posBefore !== m.posAfter && (
                        <span className={m.posBefore > m.posAfter ? ' text-emerald-400 font-black' : ' text-rose-400 font-black'}>
                          {' '}({m.posBefore > m.posAfter ? '▲ sube desde' : '▼ cae desde'} {m.posBefore}º)
                        </span>
                      )}
                      {m.posBefore !== undefined && m.posBefore === m.posAfter && (
                        <span className="text-sky-300"> (= mantiene puesto)</span>
                      )}
                    </p>
                  ) : (
                    <p className="text-slate-400 truncate">
                      {m.compType === 'cl' ? '⭐ Competición Champions League al día' : '🟠 Competición Europa League al día'}
                    </p>
                  )}

                  {(m.peGained !== undefined || m.repGained !== undefined) && (
                    <span className="text-[8.5px] font-black text-amber-300/90 shrink-0 ml-2">
                      {m.peGained !== undefined ? `+${m.peGained} PE` : ''}
                      {m.repGained !== undefined ? ` · ${m.repGained > 0 ? `+${m.repGained}` : m.repGained} Rep` : ''}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 2. Cuadrícula Compacta de 3 Columnas Fundamentales */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
        {/* Columna A: Efecto en Tabla / Torneo Continental */}
        <div className="bg-black/40 rounded-xl p-2 border border-white/5 flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-slate-800/80 border border-white/10 shrink-0">
            {isContinentalOnly ? (
              <Trophy className="w-3.5 h-3.5 text-blue-400" />
            ) : posDiff > 0 ? (
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            ) : posDiff < 0 ? (
              <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
            ) : (
              <Target className="w-3.5 h-3.5 text-sky-400" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
              {isContinentalOnly ? 'Torneo Continental' : 'Efecto en Tabla'}
            </p>
            <p className="font-black text-[11px] leading-tight text-white truncate">
              {isContinentalOnly ? (
                <span className={feedback.isChampions ? 'text-blue-300' : 'text-amber-300'}>
                  {feedback.phaseLabel || continentalName}
                </span>
              ) : (typeof posBefore === 'number' && typeof posAfter === 'number') ? (
                posDiff > 0 ? (
                  <span className="text-emerald-400">▲ +{posDiff} ({posBefore}º➔{posAfter}º)</span>
                ) : posDiff < 0 ? (
                  <span className="text-rose-400">▼ -{Math.abs(posDiff)} ({posBefore}º➔{posAfter}º)</span>
                ) : (
                  <span className="text-sky-300">= Mantiene {posAfter}º</span>
                )
              ) : typeof posAfter === 'number' ? (
                <span className="text-sky-300">Posición: {posAfter}º</span>
              ) : typeof posBefore === 'number' ? (
                <span className="text-sky-300">Posición: {posBefore}º</span>
              ) : (
                <span className="text-slate-400">Sin variación</span>
              )}
            </p>
          </div>
        </div>

        {/* Columna B: Estado del Objetivo Directivo */}
        <div className="bg-black/40 rounded-xl p-2 border border-white/5 flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-slate-800/80 border border-white/10 shrink-0">
            <Target className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
              {isContinentalOnly ? 'Objetivo Europeo' : 'Objetivo Temporada'}
            </p>
            <p className="font-black text-[11px] leading-tight text-slate-200 truncate">
              {isContinentalOnly ? (
                <span className="text-amber-300">Prestigio Continental</span>
              ) : (
                <span>{boardStatus.label}</span>
              )}
            </p>
          </div>
        </div>

        {/* Columna C: Balance de PE y Reputación */}
        <div className="bg-black/40 rounded-xl p-2 border border-white/5 flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-slate-800/80 border border-white/10 shrink-0">
            <Award className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">Balance Obtenido</p>
            <p className="font-black text-[11px] leading-tight flex items-center gap-1.5 truncate">
              <span className="text-amber-300">+{peGained} PE</span>
              <span className="text-slate-500">·</span>
              <span className={repGained > 0 ? 'text-emerald-400' : repGained < 0 ? 'text-rose-400' : 'text-slate-300'}>
                {repGained > 0 ? `+${repGained}` : `${repGained}`} Rep
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 3. Diagnóstico Breve del Mánager (Completo, sin cortes) */}
      {feedback.summary && (
        <div className="bg-black/30 rounded-xl p-2.5 border border-white/5">
          <p className="text-[11px] font-medium text-slate-200 leading-relaxed whitespace-pre-line">
            💬 {feedback.summary}
          </p>
        </div>
      )}
    </motion.div>
  );
};
