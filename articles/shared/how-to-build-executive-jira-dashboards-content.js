"use strict";

window.JIRA_DASHBOARD_ARTICLE = {
  "en": {
    "lang": "en",
    "title": "How to Build Executive Jira Dashboards That Support Better Delivery Decisions",
    "description": "Learn how to build executive Jira dashboards that communicate progress, predictability, flow, quality, dependencies, risks, and decisions.",
    "category": "Executive Reporting",
    "hero": "How to Build Executive Jira Dashboards",
    "highlight": "That Support Better Delivery Decisions",
    "intro": [
      "Jira contains extensive operational data, but issue counts and sprint charts are rarely enough for executive decision-making.",
      "A useful executive dashboard translates delivery activity into a concise view of progress, predictability, flow, quality, dependencies, and risk."
    ],
    "sections": [
      {
        "title": "Why executive dashboards often fail",
        "paragraphs": [
          "Many dashboards are designed around the gadgets available in Jira instead of the decisions leadership needs to make.",
          "They fail when they show too much detail, use inconsistent definitions, or report metrics without explaining the required action."
        ],
        "cards": [
          [
            "Too much operational detail",
            "Executives do not need every status transition and assignee change."
          ],
          [
            "No clear narrative",
            "Charts are displayed without connecting progress, risk, and dependencies."
          ],
          [
            "Metrics without definitions",
            "Velocity, completion, and predictability are often interpreted differently."
          ],
          [
            "No decision focus",
            "The report explains what happened but not what leadership needs to do."
          ]
        ]
      },
      {
        "title": "The three questions every dashboard should answer",
        "list": [
          "Are we delivering what was planned?",
          "What is putting delivery at risk?",
          "What decision, support, or escalation is required?"
        ]
      },
      {
        "title": "Recommended dashboard structure",
        "cards": [
          [
            "1. Executive summary",
            "Summarize overall status, delivery confidence, material changes, and major risks."
          ],
          [
            "2. Scope and progress",
            "Show baseline scope, added scope, completed scope, remaining scope, and completion percentage."
          ],
          [
            "3. Predictability",
            "Present throughput, Lead Time, Cycle Time, and percentile trends."
          ],
          [
            "4. Flow health",
            "Show WIP, aging items, blocked time, and bottleneck statuses."
          ],
          [
            "5. Quality",
            "Include defects created, resolved, escaped defects, and release-quality trends."
          ],
          [
            "6. Dependencies and decisions",
            "List dependency owners, due dates, impact, and leadership actions required."
          ]
        ]
      },
      {
        "title": "Core metrics to include",
        "table": {
          "headers": [
            "Metric",
            "What it shows",
            "Executive use"
          ],
          "rows": [
            [
              "Planned vs completed scope",
              "Execution against commitment",
              "Assess progress against plan"
            ],
            [
              "Added scope",
              "Work introduced after commitment",
              "Explain changes to completion or timeline"
            ],
            [
              "Throughput",
              "Items completed over time",
              "Evaluate delivery capacity and trend"
            ],
            [
              "Lead Time",
              "Time from demand to delivery",
              "Understand customer waiting time"
            ],
            [
              "Cycle Time",
              "Time from start to completion",
              "Evaluate execution speed"
            ],
            [
              "WIP",
              "Work currently in progress",
              "Detect overloading and flow risk"
            ],
            [
              "Work-item age",
              "Age of unfinished work",
              "Identify likely delays"
            ],
            [
              "Blocked time",
              "Time work cannot progress",
              "Expose impediments and dependencies"
            ],
            [
              "Defect trend",
              "Quality demand over time",
              "Assess rework and release risk"
            ],
            [
              "Delivery confidence",
              "Probability or confidence range",
              "Set realistic expectations"
            ]
          ]
        }
      },
      {
        "title": "Metrics that require context",
        "cards": [
          [
            "Velocity",
            "Useful for internal planning, but unsuitable for team comparison or productivity claims."
          ],
          [
            "Story points completed",
            "Shows estimated scope, not value, time, or customer impact."
          ],
          [
            "Average Lead Time",
            "Can be distorted by outliers. Pair it with median and percentiles."
          ],
          [
            "Completion percentage",
            "Must state whether it uses baseline, current, or total scope."
          ],
          [
            "Defect count",
            "Needs severity, origin, release context, and trend."
          ],
          [
            "RAG status",
            "Must be supported by objective criteria and short commentary."
          ]
        ]
      },
      {
        "title": "How to write useful commentary",
        "paragraphs": [
          "Leadership should not have to infer why a metric changed.",
          "Use a consistent pattern: what changed, why it changed, delivery impact, mitigation, and decision required."
        ]
      },
      {
        "title": "Example dashboard layout",
        "list": [
          "Top row: overall status, delivery confidence, completion, and critical risks.",
          "Second row: planned versus completed scope, added scope, and throughput.",
          "Third row: Lead Time, Cycle Time, WIP, and aging work.",
          "Fourth row: quality, blocked work, and dependency status.",
          "Final section: risks, required decisions, owners, and next review date."
        ]
      },
      {
        "title": "Common implementation mistakes",
        "list": [
          "Using too many charts on one page.",
          "Mixing different metric definitions across teams.",
          "Comparing velocity or story points between teams.",
          "Showing completion without explaining added scope.",
          "Using averages without medians or percentiles.",
          "Reporting metrics without owners or follow-up actions.",
          "Relying on fragile manual data preparation."
        ]
      },
      {
        "title": "Governance and update cadence",
        "paragraphs": [
          "Metric definitions, data sources, refresh frequency, and ownership should be documented.",
          "Weekly reviews may require operational freshness, while monthly reporting should emphasize trends, changes, and decisions."
        ]
      },
      {
        "title": "Conclusion",
        "paragraphs": [
          "An executive Jira dashboard should convert operational data into a clear management narrative.",
          "The goal is not to display more data, but to make delivery status, uncertainty, risk, and required leadership action easier to understand."
        ]
      }
    ],
    "related": [
      [
        "Lead Time vs Cycle Time: What Engineering Leaders Should Track",
        "/articles/en/lead-time-vs-cycle-time.html"
      ],
      [
        "Why Velocity Alone Doesn't Predict Delivery",
        "/articles/en/why-velocity-alone-does-not-predict-delivery.html"
      ]
    ],
    "ctaTitle": "Need an executive Jira dashboard that supports decisions?",
    "ctaText": "LS AgileWorks can help structure Jira data, delivery metrics, dashboard governance, and executive reporting.",
    "ctaButton": "Book a conversation",
    "back": "Back to insights",
    "copyright": "© 2026 LS AgileWorks. All rights reserved."
  },
  "pt": {
    "lang": "pt-BR",
    "title": "Como Construir Dashboards Executivos no Jira para Melhorar Decisões de Entrega",
    "description": "Aprenda como construir dashboards executivos no Jira que comuniquem progresso, previsibilidade, fluxo, qualidade, dependências, riscos e decisões.",
    "category": "Relatórios Executivos",
    "hero": "Como Construir Dashboards Executivos no Jira",
    "highlight": "Para Melhorar Decisões de Entrega",
    "intro": [
      "O Jira concentra uma grande quantidade de dados operacionais, mas contagens de issues e gráficos de sprint raramente são suficientes para decisões executivas.",
      "Um bom dashboard executivo traduz a atividade de entrega em uma visão concisa de progresso, previsibilidade, fluxo, qualidade, dependências e risco."
    ],
    "sections": [
      {
        "title": "Por que dashboards executivos costumam falhar",
        "paragraphs": [
          "Muitos dashboards são construídos com base nos gadgets disponíveis no Jira, e não nas decisões que a liderança precisa tomar.",
          "Eles falham quando mostram detalhe demais, usam definições inconsistentes ou apresentam métricas sem explicar a ação necessária."
        ],
        "cards": [
          [
            "Excesso de detalhe operacional",
            "Executivos não precisam acompanhar cada transição de status ou alteração de responsável."
          ],
          [
            "Ausência de narrativa",
            "Os gráficos aparecem sem conectar progresso, risco e dependências."
          ],
          [
            "Métricas sem definição",
            "Velocity, completude e previsibilidade são frequentemente interpretadas de formas diferentes."
          ],
          [
            "Sem foco em decisão",
            "O relatório explica o que aconteceu, mas não o que a liderança precisa fazer."
          ]
        ]
      },
      {
        "title": "As três perguntas que todo dashboard deve responder",
        "list": [
          "Estamos entregando o que foi planejado?",
          "O que está colocando a entrega em risco?",
          "Qual decisão, apoio ou escalonamento é necessário?"
        ]
      },
      {
        "title": "Estrutura recomendada do dashboard",
        "cards": [
          [
            "1. Resumo executivo",
            "Resuma status geral, confiança da entrega, mudanças relevantes e principais riscos."
          ],
          [
            "2. Escopo e progresso",
            "Mostre escopo inicial, adicionado, concluído, restante e percentual de conclusão."
          ],
          [
            "3. Previsibilidade",
            "Apresente throughput, Lead Time, Cycle Time e tendências de percentis."
          ],
          [
            "4. Saúde do fluxo",
            "Mostre WIP, idade dos itens, tempo bloqueado e gargalos por status."
          ],
          [
            "5. Qualidade",
            "Inclua defeitos criados, resolvidos, escapes e tendências de qualidade de release."
          ],
          [
            "6. Dependências e decisões",
            "Liste responsáveis, datas, impacto e ações necessárias da liderança."
          ]
        ]
      },
      {
        "title": "Métricas essenciais para incluir",
        "table": {
          "headers": [
            "Métrica",
            "O que mostra",
            "Uso executivo"
          ],
          "rows": [
            [
              "Escopo planejado vs concluído",
              "Execução contra o compromisso",
              "Avaliar progresso contra o plano"
            ],
            [
              "Escopo adicionado",
              "Trabalho incluído após o compromisso",
              "Explicar mudanças de completude ou prazo"
            ],
            [
              "Throughput",
              "Itens concluídos ao longo do tempo",
              "Avaliar capacidade e tendência"
            ],
            [
              "Lead Time",
              "Tempo da demanda até a entrega",
              "Entender a espera do cliente"
            ],
            [
              "Cycle Time",
              "Tempo do início até a conclusão",
              "Avaliar velocidade de execução"
            ],
            [
              "WIP",
              "Trabalho atualmente em andamento",
              "Detectar sobrecarga e risco de fluxo"
            ],
            [
              "Idade dos itens",
              "Idade do trabalho não concluído",
              "Identificar atrasos prováveis"
            ],
            [
              "Tempo bloqueado",
              "Tempo em que o trabalho não progride",
              "Expor impedimentos e dependências"
            ],
            [
              "Tendência de defeitos",
              "Demanda de qualidade ao longo do tempo",
              "Avaliar retrabalho e risco de release"
            ],
            [
              "Confiança de entrega",
              "Faixa de probabilidade ou confiança",
              "Definir expectativas realistas"
            ]
          ]
        }
      },
      {
        "title": "Métricas que exigem contexto",
        "cards": [
          [
            "Velocity",
            "Útil para planejamento interno, mas inadequada para comparar times ou provar produtividade."
          ],
          [
            "Story points concluídos",
            "Mostram escopo estimado, não valor, tempo ou impacto ao cliente."
          ],
          [
            "Lead Time médio",
            "Pode ser distorcido por outliers. Use também mediana e percentis."
          ],
          [
            "Percentual de conclusão",
            "Deve declarar se usa escopo inicial, atual ou total."
          ],
          [
            "Quantidade de defeitos",
            "Precisa de severidade, origem, contexto de release e tendência."
          ],
          [
            "Status RAG",
            "Deve ser sustentado por critérios objetivos e comentário curto."
          ]
        ]
      },
      {
        "title": "Como escrever comentários úteis",
        "paragraphs": [
          "A liderança não deve precisar deduzir por que uma métrica mudou.",
          "Use um padrão consistente: o que mudou, por que mudou, impacto na entrega, mitigação e decisão necessária."
        ]
      },
      {
        "title": "Exemplo de organização do dashboard",
        "list": [
          "Primeira linha: status geral, confiança da entrega, completude e riscos críticos.",
          "Segunda linha: escopo planejado versus concluído, escopo adicionado e throughput.",
          "Terceira linha: Lead Time, Cycle Time, WIP e idade dos itens.",
          "Quarta linha: qualidade, trabalho bloqueado e status das dependências.",
          "Seção final: riscos, decisões necessárias, responsáveis e próxima revisão."
        ]
      },
      {
        "title": "Erros comuns de implementação",
        "list": [
          "Usar gráficos demais em uma única página.",
          "Misturar definições diferentes entre times.",
          "Comparar velocity ou story points entre equipes.",
          "Mostrar completude sem explicar o escopo adicionado.",
          "Usar médias sem mediana ou percentis.",
          "Reportar métricas sem responsável ou acompanhamento.",
          "Depender de preparação manual e frágil dos dados."
        ]
      },
      {
        "title": "Governança e frequência de atualização",
        "paragraphs": [
          "Definições, fontes de dados, frequência de atualização e responsabilidades devem estar documentadas.",
          "Revisões semanais podem exigir dados operacionais recentes, enquanto relatórios mensais devem enfatizar tendências, mudanças e decisões."
        ]
      },
      {
        "title": "Conclusão",
        "paragraphs": [
          "Um dashboard executivo no Jira deve transformar dados operacionais em uma narrativa clara de gestão.",
          "O objetivo não é mostrar mais dados, mas facilitar a compreensão do status da entrega, incertezas, riscos e ações necessárias da liderança."
        ]
      }
    ],
    "related": [
      [
        "Lead Time vs Cycle Time: O Que Líderes de Engenharia Devem Acompanhar",
        "/articles/pt/lead-time-vs-cycle-time.html"
      ],
      [
        "Por Que a Velocity Sozinha Não Prevê Entregas",
        "/articles/pt/por-que-velocidade-sozinha-nao-preve-entregas.html"
      ]
    ],
    "ctaTitle": "Precisa de um dashboard executivo no Jira que apoie decisões?",
    "ctaText": "A LS AgileWorks pode ajudar a estruturar dados do Jira, métricas de entrega, governança de dashboards e relatórios executivos.",
    "ctaButton": "Agendar uma conversa",
    "back": "Voltar para conteúdos",
    "copyright": "© 2026 LS AgileWorks. Todos os direitos reservados."
  },
  "es": {
    "lang": "es",
    "title": "Cómo Construir Dashboards Ejecutivos en Jira para Mejorar las Decisiones de Entrega",
    "description": "Aprende a construir dashboards ejecutivos en Jira que comuniquen progreso, previsibilidad, flujo, calidad, dependencias, riesgos y decisiones.",
    "category": "Reportes Ejecutivos",
    "hero": "Cómo Construir Dashboards Ejecutivos en Jira",
    "highlight": "Para Mejorar las Decisiones de Entrega",
    "intro": [
      "Jira contiene una gran cantidad de datos operativos, pero los conteos de issues y los gráficos de sprint rara vez son suficientes para decisiones ejecutivas.",
      "Un buen dashboard ejecutivo traduce la actividad de entrega en una visión concisa de progreso, previsibilidad, flujo, calidad, dependencias y riesgo."
    ],
    "sections": [
      {
        "title": "Por qué suelen fallar los dashboards ejecutivos",
        "paragraphs": [
          "Muchos dashboards se construyen con base en los gadgets disponibles en Jira y no en las decisiones que necesita tomar el liderazgo.",
          "Fallan cuando muestran demasiado detalle, utilizan definiciones inconsistentes o presentan métricas sin explicar la acción requerida."
        ],
        "cards": [
          [
            "Demasiado detalle operativo",
            "Los ejecutivos no necesitan seguir cada transición de estado o cambio de responsable."
          ],
          [
            "Falta de narrativa",
            "Los gráficos aparecen sin conectar progreso, riesgo y dependencias."
          ],
          [
            "Métricas sin definición",
            "Velocidad, completitud y previsibilidad suelen interpretarse de maneras distintas."
          ],
          [
            "Sin foco en decisiones",
            "El reporte explica lo ocurrido, pero no lo que debe hacer el liderazgo."
          ]
        ]
      },
      {
        "title": "Las tres preguntas que todo dashboard debe responder",
        "list": [
          "¿Estamos entregando lo que fue planificado?",
          "¿Qué está poniendo en riesgo la entrega?",
          "¿Qué decisión, apoyo o escalamiento es necesario?"
        ]
      },
      {
        "title": "Estructura recomendada del dashboard",
        "cards": [
          [
            "1. Resumen ejecutivo",
            "Resume el estado general, la confianza de entrega, los cambios relevantes y los riesgos principales."
          ],
          [
            "2. Alcance y progreso",
            "Muestra alcance inicial, añadido, completado, restante y porcentaje de finalización."
          ],
          [
            "3. Previsibilidad",
            "Presenta throughput, Lead Time, Cycle Time y tendencias de percentiles."
          ],
          [
            "4. Salud del flujo",
            "Muestra WIP, edad de los elementos, tiempo bloqueado y cuellos de botella."
          ],
          [
            "5. Calidad",
            "Incluye defectos creados, resueltos, escapes y tendencias de calidad de release."
          ],
          [
            "6. Dependencias y decisiones",
            "Lista responsables, fechas, impacto y acciones necesarias del liderazgo."
          ]
        ]
      },
      {
        "title": "Métricas esenciales",
        "table": {
          "headers": [
            "Métrica",
            "Qué muestra",
            "Uso ejecutivo"
          ],
          "rows": [
            [
              "Alcance planificado vs completado",
              "Ejecución frente al compromiso",
              "Evaluar progreso frente al plan"
            ],
            [
              "Alcance añadido",
              "Trabajo incorporado después del compromiso",
              "Explicar cambios en completitud o fecha"
            ],
            [
              "Throughput",
              "Elementos completados a lo largo del tiempo",
              "Evaluar capacidad y tendencia"
            ],
            [
              "Lead Time",
              "Tiempo desde la demanda hasta la entrega",
              "Comprender la espera del cliente"
            ],
            [
              "Cycle Time",
              "Tiempo desde el inicio hasta la finalización",
              "Evaluar rapidez de ejecución"
            ],
            [
              "WIP",
              "Trabajo actualmente en curso",
              "Detectar sobrecarga y riesgo de flujo"
            ],
            [
              "Edad de los elementos",
              "Edad del trabajo no terminado",
              "Identificar retrasos probables"
            ],
            [
              "Tiempo bloqueado",
              "Tiempo durante el cual el trabajo no progresa",
              "Exponer impedimentos y dependencias"
            ],
            [
              "Tendencia de defectos",
              "Demanda de calidad a lo largo del tiempo",
              "Evaluar retrabajo y riesgo de release"
            ],
            [
              "Confianza de entrega",
              "Rango de probabilidad o confianza",
              "Definir expectativas realistas"
            ]
          ]
        }
      },
      {
        "title": "Métricas que requieren contexto",
        "cards": [
          [
            "Velocidad",
            "Útil para la planificación interna, pero inadecuada para comparar equipos o demostrar productividad."
          ],
          [
            "Story points completados",
            "Muestran alcance estimado, no valor, tiempo o impacto al cliente."
          ],
          [
            "Lead Time promedio",
            "Puede distorsionarse por outliers. Usa también mediana y percentiles."
          ],
          [
            "Porcentaje de finalización",
            "Debe indicar si utiliza alcance inicial, actual o total."
          ],
          [
            "Cantidad de defectos",
            "Necesita severidad, origen, contexto de release y tendencia."
          ],
          [
            "Estado RAG",
            "Debe apoyarse en criterios objetivos y un comentario breve."
          ]
        ]
      },
      {
        "title": "Cómo escribir comentarios útiles",
        "paragraphs": [
          "El liderazgo no debería tener que deducir por qué cambió una métrica.",
          "Usa un patrón consistente: qué cambió, por qué cambió, impacto en la entrega, mitigación y decisión necesaria."
        ]
      },
      {
        "title": "Ejemplo de organización del dashboard",
        "list": [
          "Primera fila: estado general, confianza de entrega, completitud y riesgos críticos.",
          "Segunda fila: alcance planificado frente a completado, alcance añadido y throughput.",
          "Tercera fila: Lead Time, Cycle Time, WIP y edad de los elementos.",
          "Cuarta fila: calidad, trabajo bloqueado y estado de dependencias.",
          "Sección final: riesgos, decisiones necesarias, responsables y próxima revisión."
        ]
      },
      {
        "title": "Errores comunes de implementación",
        "list": [
          "Usar demasiados gráficos en una sola página.",
          "Mezclar definiciones diferentes entre equipos.",
          "Comparar velocidad o story points entre equipos.",
          "Mostrar completitud sin explicar el alcance añadido.",
          "Usar promedios sin mediana o percentiles.",
          "Reportar métricas sin responsable o seguimiento.",
          "Depender de preparación manual y frágil de los datos."
        ]
      },
      {
        "title": "Gobernanza y frecuencia de actualización",
        "paragraphs": [
          "Las definiciones, fuentes de datos, frecuencia de actualización y responsabilidades deben documentarse.",
          "Las revisiones semanales pueden requerir datos operativos recientes, mientras que los reportes mensuales deben enfatizar tendencias, cambios y decisiones."
        ]
      },
      {
        "title": "Conclusión",
        "paragraphs": [
          "Un dashboard ejecutivo en Jira debe transformar datos operativos en una narrativa clara de gestión.",
          "El objetivo no es mostrar más datos, sino facilitar la comprensión del estado de la entrega, las incertidumbres, los riesgos y las acciones necesarias."
        ]
      }
    ],
    "related": [
      [
        "Lead Time vs Cycle Time: Qué Deben Monitorear los Líderes de Ingeniería",
        "/articles/es/lead-time-vs-cycle-time.html"
      ],
      [
        "Por Qué la Velocidad por Sí Sola No Predice la Entrega",
        "/articles/es/por-que-la-velocidad-por-si-sola-no-predice-la-entrega.html"
      ]
    ],
    "ctaTitle": "¿Necesitas un dashboard ejecutivo en Jira que apoye decisiones?",
    "ctaText": "LS AgileWorks puede ayudarte a estructurar datos de Jira, métricas de entrega, gobernanza de dashboards y reportes ejecutivos.",
    "ctaButton": "Agendar una conversación",
    "back": "Volver al contenido",
    "copyright": "© 2026 LS AgileWorks. Todos los derechos reservados."
  }
};
