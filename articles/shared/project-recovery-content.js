"use strict";

window.PROJECT_RECOVERY_ARTICLE = {
  "en": {
    "htmlLang": "en",
    "title": "How to Recover a Delayed Software Project: A Practical Guide for Engineering Leaders",
    "description": "A practical guide to recovering delayed software projects through diagnosis, scope control, WIP reduction, dependency management, forecasting, and executive communication.",
    "category": "Project Recovery",
    "heroTitle": "How to Recover a Delayed Software Project",
    "heroHighlight": "A Practical Guide for Engineering Leaders",
    "heroText": "Recovery starts by replacing outdated assumptions with evidence, focus, and disciplined execution.",
    "readingTime": "14-minute read",
    "intro": [
      "A delayed software project is not simply a project that missed a date. It is a delivery system whose original assumptions about scope, capacity, dependencies, complexity, or sequencing are no longer valid.",
      "Recovery requires more than a revised timeline. Leaders must understand the causes of delay, stabilize the system, reduce uncertainty, protect the critical path, and rebuild confidence with evidence."
    ],
    "frameworkTitle": "The LS AgileWorks Project Recovery Framework",
    "framework": [
      "Assess",
      "Stabilize",
      "Prioritize",
      "Execute",
      "Measure",
      "Recover",
      "Prevent"
    ],
    "sections": [
      {
        "title": "1. Recognize the warning signs",
        "paragraphs": [
          "Repeated sprint-goal failure, increasing Lead Time, unstable throughput, growing WIP, aging work, unresolved dependencies, continuous scope expansion, and declining stakeholder confidence indicate that the project needs structured recovery."
        ]
      },
      {
        "title": "2. Stop trying to recover through pressure alone",
        "paragraphs": [
          "Overtime, more meetings, and stronger pressure may increase visible activity, but they rarely correct the underlying system problem.",
          "Pressure without diagnosis often increases context switching, defects, rework, burnout, and optimistic reporting."
        ]
      },
      {
        "title": "3. Diagnose the real causes of delay",
        "paragraphs": [
          "Separate symptoms from causes. A missed date may result from scope growth, technical complexity, dependency failures, vendor delays, unclear requirements, infrastructure limitations, quality problems, or poor sequencing."
        ],
        "table": {
          "headers": [
            "Cause",
            "Typical symptom",
            "Recovery action"
          ],
          "rows": [
            [
              "Scope",
              "Backlog grows faster than completion",
              "Freeze non-critical additions and redefine minimum scope"
            ],
            [
              "Dependencies",
              "Items age while waiting",
              "Assign owners, due dates, impact, and escalation paths"
            ],
            [
              "Technical complexity",
              "Large items stay active too long",
              "Split work and isolate uncertainty"
            ],
            [
              "Quality",
              "Testing and rework consume capacity",
              "Stabilize defects and reduce parallel work"
            ],
            [
              "Planning",
              "Commitments exceed real capacity",
              "Reforecast with throughput and cycle-time data"
            ],
            [
              "Governance",
              "Priorities change continuously",
              "Create a controlled recovery backlog"
            ]
          ]
        }
      },
      {
        "title": "4. Freeze and rebaseline scope",
        "paragraphs": [
          "A recovery plan cannot succeed while scope continues to expand without control.",
          "Separate mandatory outcomes, high-value functionality, contractual needs, and optional work. Protect the critical path and remove non-essential scope from the recovery baseline."
        ]
      },
      {
        "title": "5. Identify the real critical path",
        "paragraphs": [
          "Not every delayed task delays the project. Map the sequence that directly controls completion, including architecture decisions, APIs, environments, approvals, security, testing, deployment, vendors, and release gates."
        ]
      },
      {
        "title": "6. Measure reality",
        "paragraphs": [
          "Velocity and percentage-complete statements are insufficient during recovery.",
          "Track Lead Time, Cycle Time, throughput, WIP, work-item age, blocked time, queue time, defect trend, scope change, and delivery confidence."
        ]
      },
      {
        "title": "7. Reduce WIP and finish before starting",
        "paragraphs": [
          "Delayed projects often contain too much active work. New items are started while older work waits for review, testing, approval, or dependency resolution.",
          "Reducing WIP improves focus, exposes bottlenecks, shortens feedback loops, and increases completion probability."
        ]
      },
      {
        "title": "8. Split work aggressively",
        "paragraphs": [
          "Large work items create uncertainty and hide progress. Break them into smaller, independently testable outcomes.",
          "Smaller items improve flow, reveal blockers earlier, reduce batch size, and create better forecasting data."
        ]
      },
      {
        "title": "9. Review dependencies daily",
        "paragraphs": [
          "A recovery dependency review should focus on what is blocked, who owns the next action, when it is due, what happens if it slips, and whether escalation is required."
        ]
      },
      {
        "title": "10. Rebuild the forecast using observed data",
        "paragraphs": [
          "Replace single-date optimism with ranges and explicit assumptions.",
          "Use recent throughput, cycle-time percentiles, remaining comparable work, dependency risk, and quality demand."
        ]
      },
      {
        "title": "11. Communicate with evidence",
        "paragraphs": [
          "Avoid statements such as 'we are almost done.' Communicate current scope, completed outcomes, remaining critical work, major risks, delivery range, mitigation actions, and decisions required."
        ]
      },
      {
        "title": "Recovery dashboard",
        "table": {
          "headers": [
            "Area",
            "Signal",
            "Leadership question"
          ],
          "rows": [
            [
              "Scope",
              "Baseline, added, completed, remaining",
              "Is scope under control?"
            ],
            [
              "Flow",
              "Throughput, WIP, aging, blocked time",
              "Is work moving or accumulating?"
            ],
            [
              "Predictability",
              "Percentiles and forecast range",
              "How confident is the timeline?"
            ],
            [
              "Quality",
              "Defects, rework, escaped defects",
              "Is recovery creating quality risk?"
            ],
            [
              "Dependencies",
              "Open, overdue, critical",
              "Where is intervention needed?"
            ],
            [
              "Decisions",
              "Approvals and trade-offs",
              "What must be decided now?"
            ]
          ]
        }
      },
      {
        "title": "Common recovery mistakes",
        "list": [
          "Adding developers before understanding the bottleneck.",
          "Increasing WIP to create the appearance of progress.",
          "Changing priorities every day.",
          "Keeping all original scope.",
          "Using velocity as the primary forecast.",
          "Hiding risks to protect confidence.",
          "Reporting only percentage complete.",
          "Leaving dependencies without owners.",
          "Treating overtime as a sustainable strategy."
        ]
      },
      {
        "title": "Recovery checklist",
        "list": [
          "Scope frozen and rebaselined.",
          "Critical path identified.",
          "Dependencies mapped with owners and dates.",
          "WIP limits established.",
          "Large work split.",
          "Blocked work visible.",
          "Recovery dashboard active.",
          "Forecast rebuilt using observed data.",
          "Stakeholders aligned on trade-offs.",
          "Exit criteria defined."
        ]
      },
      {
        "title": "Conclusion",
        "paragraphs": [
          "Delayed projects are recovered by changing the delivery system, not by repeating the same plan with more pressure.",
          "A disciplined recovery process creates transparency, reduces uncertainty, protects the critical path, and restores a delivery system that leadership can trust."
        ]
      }
    ],
    "related": [
      [
        "Lead Time vs Cycle Time",
        "/articles/en/lead-time-vs-cycle-time.html"
      ],
      [
        "Why Velocity Alone Doesn't Predict Delivery",
        "/articles/en/why-velocity-alone-does-not-predict-delivery.html"
      ],
      [
        "How to Build Executive Jira Dashboards",
        "/articles/en/how-to-build-executive-jira-dashboards.html"
      ],
      [
        "Common Jira Workflow Mistakes",
        "/articles/en/common-jira-workflow-mistakes-that-hide-delivery-risks.html"
      ]
    ],
    "ctaTitle": "Need help recovering a delayed software project?",
    "ctaText": "LS AgileWorks helps engineering organizations diagnose delivery problems, rebuild forecasts, control scope, manage dependencies, and restore predictability.",
    "ctaButton": "Book a recovery assessment",
    "back": "Back to insights",
    "copyright": "© 2026 LS AgileWorks. All rights reserved."
  },
  "pt": {
    "htmlLang": "pt-BR",
    "title": "Como Recuperar um Projeto de Software Atrasado: Um Guia Prático para Líderes de Engenharia",
    "description": "Guia prático para recuperar projetos de software atrasados com diagnóstico, controle de escopo, WIP, dependências, previsão e comunicação executiva.",
    "category": "Recuperação de Projetos",
    "heroTitle": "Como Recuperar um Projeto de Software Atrasado",
    "heroHighlight": "Um Guia Prático para Líderes de Engenharia",
    "heroText": "A recuperação começa substituindo premissas antigas por evidências, foco e execução disciplinada.",
    "readingTime": "14 minutos de leitura",
    "intro": [
      "Um projeto atrasado não é apenas um projeto que perdeu uma data. É um sistema de entrega cujas premissas sobre escopo, capacidade, dependências, complexidade ou sequência deixaram de ser válidas.",
      "A recuperação exige mais do que revisar o cronograma. A liderança precisa entender as causas, estabilizar o sistema, reduzir incertezas, proteger o caminho crítico e reconstruir confiança."
    ],
    "frameworkTitle": "Framework LS AgileWorks de Recuperação",
    "framework": [
      "Avaliar",
      "Estabilizar",
      "Priorizar",
      "Executar",
      "Medir",
      "Recuperar",
      "Prevenir"
    ],
    "sections": [
      {
        "title": "1. Reconheça os sinais de alerta",
        "paragraphs": [
          "Metas de sprint perdidas, Lead Time crescente, throughput instável, WIP alto, itens envelhecendo, dependências não resolvidas, aumento contínuo de escopo e perda de confiança indicam necessidade de recuperação estruturada."
        ]
      },
      {
        "title": "2. Pare de tentar recuperar apenas com pressão",
        "paragraphs": [
          "Horas extras, mais reuniões e maior cobrança podem aumentar a atividade visível, mas raramente corrigem o problema estrutural.",
          "Pressão sem diagnóstico aumenta troca de contexto, defeitos, retrabalho, desgaste e otimismo artificial."
        ]
      },
      {
        "title": "3. Diagnostique as causas reais",
        "paragraphs": [
          "Separe sintomas de causas. O atraso pode resultar de crescimento de escopo, complexidade técnica, falhas de dependência, fornecedores, requisitos pouco claros, infraestrutura, qualidade ou sequenciamento."
        ],
        "table": {
          "headers": [
            "Causa",
            "Sintoma típico",
            "Ação de recuperação"
          ],
          "rows": [
            [
              "Escopo",
              "Backlog cresce mais rápido que a conclusão",
              "Congelar adições não críticas e redefinir escopo mínimo"
            ],
            [
              "Dependências",
              "Itens envelhecem aguardando terceiros",
              "Definir responsáveis, datas, impacto e escalonamento"
            ],
            [
              "Complexidade técnica",
              "Itens grandes ficam ativos por muito tempo",
              "Dividir trabalho e isolar incertezas"
            ],
            [
              "Qualidade",
              "Testes e retrabalho consomem capacidade",
              "Estabilizar defeitos e reduzir paralelismo"
            ],
            [
              "Planejamento",
              "Compromissos excedem a capacidade",
              "Refazer previsão com throughput e Cycle Time"
            ],
            [
              "Governança",
              "Prioridades mudam continuamente",
              "Criar backlog controlado de recuperação"
            ]
          ]
        }
      },
      {
        "title": "4. Congele e reestabeleça o baseline de escopo",
        "paragraphs": [
          "Um plano de recuperação não funciona enquanto o escopo cresce sem controle.",
          "Separe resultados obrigatórios, alto valor, necessidades contratuais e trabalho opcional. Proteja o caminho crítico."
        ]
      },
      {
        "title": "5. Identifique o caminho crítico real",
        "paragraphs": [
          "Nem toda tarefa atrasada atrasa o projeto. Mapeie a sequência que controla a conclusão, incluindo arquitetura, APIs, ambientes, aprovações, segurança, testes, fornecedores, implantação e release."
        ]
      },
      {
        "title": "6. Meça a realidade",
        "paragraphs": [
          "Velocity e percentual concluído são insuficientes durante a recuperação.",
          "Acompanhe Lead Time, Cycle Time, throughput, WIP, idade, tempo bloqueado, fila, defeitos, mudança de escopo e confiança da entrega."
        ]
      },
      {
        "title": "7. Reduza WIP e termine antes de começar",
        "paragraphs": [
          "Projetos atrasados frequentemente possuem trabalho ativo demais.",
          "Reduzir WIP melhora foco, expõe gargalos, encurta feedback e aumenta a probabilidade de conclusão."
        ]
      },
      {
        "title": "8. Divida o trabalho agressivamente",
        "paragraphs": [
          "Itens grandes geram incerteza e escondem progresso. Divida-os em resultados menores e testáveis de forma independente.",
          "Itens menores melhoram o fluxo e criam dados melhores para previsão."
        ]
      },
      {
        "title": "9. Revise dependências diariamente",
        "paragraphs": [
          "A revisão deve focar no bloqueio, próxima ação, responsável, prazo, impacto do atraso e necessidade de escalonamento."
        ]
      },
      {
        "title": "10. Reconstrua a previsão com dados observados",
        "paragraphs": [
          "Substitua datas únicas e otimistas por faixas e premissas explícitas.",
          "Use throughput recente, percentis de Cycle Time, trabalho restante, risco de dependências e demanda de qualidade."
        ]
      },
      {
        "title": "11. Comunique com evidências",
        "paragraphs": [
          "Evite frases como 'estamos quase terminando'. Comunique escopo atual, resultados concluídos, trabalho crítico restante, riscos, faixa de entrega, mitigação e decisões necessárias."
        ]
      },
      {
        "title": "Dashboard de recuperação",
        "table": {
          "headers": [
            "Área",
            "Sinal",
            "Pergunta executiva"
          ],
          "rows": [
            [
              "Escopo",
              "Baseline, adicionado, concluído e restante",
              "O escopo está sob controle?"
            ],
            [
              "Fluxo",
              "Throughput, WIP, idade e bloqueios",
              "O trabalho está fluindo ou acumulando?"
            ],
            [
              "Previsibilidade",
              "Percentis e faixa de previsão",
              "Qual é a confiança no prazo?"
            ],
            [
              "Qualidade",
              "Defeitos, retrabalho e escapes",
              "A recuperação cria risco de qualidade?"
            ],
            [
              "Dependências",
              "Abertas, vencidas e críticas",
              "Onde a liderança precisa intervir?"
            ],
            [
              "Decisões",
              "Aprovações e trade-offs",
              "O que precisa ser decidido agora?"
            ]
          ]
        }
      },
      {
        "title": "Erros comuns na recuperação",
        "list": [
          "Adicionar desenvolvedores antes de entender o gargalo.",
          "Aumentar WIP para aparentar progresso.",
          "Mudar prioridades diariamente.",
          "Manter todo o escopo original.",
          "Usar velocity como previsão principal.",
          "Esconder riscos.",
          "Reportar apenas percentual concluído.",
          "Deixar dependências sem responsável.",
          "Tratar horas extras como estratégia sustentável."
        ]
      },
      {
        "title": "Checklist de recuperação",
        "list": [
          "Escopo congelado e rebaselineado.",
          "Caminho crítico identificado.",
          "Dependências com responsáveis e datas.",
          "Limites de WIP estabelecidos.",
          "Trabalho grande dividido.",
          "Bloqueios visíveis.",
          "Dashboard ativo.",
          "Previsão refeita com dados observados.",
          "Stakeholders alinhados.",
          "Critérios de saída definidos."
        ]
      },
      {
        "title": "Conclusão",
        "paragraphs": [
          "Projetos atrasados são recuperados mudando o sistema de entrega, não repetindo o mesmo plano com mais pressão.",
          "Uma recuperação disciplinada aumenta transparência, reduz incerteza, protege o caminho crítico e restaura um sistema confiável."
        ]
      }
    ],
    "related": [
      [
        "Lead Time vs Cycle Time",
        "/articles/pt/lead-time-vs-cycle-time.html"
      ],
      [
        "Por Que a Velocity Sozinha Não Prevê Entregas",
        "/articles/pt/por-que-velocidade-sozinha-nao-preve-entregas.html"
      ],
      [
        "Como Construir Dashboards Executivos no Jira",
        "/articles/pt/como-construir-dashboards-executivos-no-jira.html"
      ],
      [
        "Erros Comuns em Workflows do Jira",
        "/articles/pt/erros-comuns-em-workflows-do-jira-que-escondem-riscos-de-entrega.html"
      ]
    ],
    "ctaTitle": "Precisa recuperar um projeto de software atrasado?",
    "ctaText": "A LS AgileWorks ajuda organizações a diagnosticar problemas, reconstruir previsões, controlar escopo, gerenciar dependências e restaurar previsibilidade.",
    "ctaButton": "Agendar avaliação de recuperação",
    "back": "Voltar para conteúdos",
    "copyright": "© 2026 LS AgileWorks. Todos os direitos reservados."
  },
  "es": {
    "htmlLang": "es",
    "title": "Cómo Recuperar un Proyecto de Software Retrasado: Guía Práctica para Líderes de Ingeniería",
    "description": "Guía práctica para recuperar proyectos de software retrasados mediante diagnóstico, control de alcance, WIP, dependencias, previsión y comunicación ejecutiva.",
    "category": "Recuperación de Proyectos",
    "heroTitle": "Cómo Recuperar un Proyecto de Software Retrasado",
    "heroHighlight": "Guía Práctica para Líderes de Ingeniería",
    "heroText": "La recuperación comienza sustituyendo suposiciones antiguas por evidencia, enfoque y ejecución disciplinada.",
    "readingTime": "14 minutos de lectura",
    "intro": [
      "Un proyecto retrasado no es solo un proyecto que perdió una fecha. Es un sistema de entrega cuyas suposiciones sobre alcance, capacidad, dependencias, complejidad o secuencia dejaron de ser válidas.",
      "La recuperación exige más que revisar el cronograma. El liderazgo debe comprender las causas, estabilizar el sistema, reducir incertidumbre, proteger la ruta crítica y reconstruir confianza."
    ],
    "frameworkTitle": "Marco LS AgileWorks de Recuperación",
    "framework": [
      "Evaluar",
      "Estabilizar",
      "Priorizar",
      "Ejecutar",
      "Medir",
      "Recuperar",
      "Prevenir"
    ],
    "sections": [
      {
        "title": "1. Reconoce las señales de alerta",
        "paragraphs": [
          "Objetivos incumplidos, Lead Time creciente, throughput inestable, WIP alto, trabajo envejecido, dependencias abiertas y alcance creciente indican necesidad de recuperación estructurada."
        ]
      },
      {
        "title": "2. No intentes recuperar solo con presión",
        "paragraphs": [
          "Horas extra, más reuniones y mayor presión rara vez corrigen el problema estructural.",
          "La presión sin diagnóstico aumenta defectos, retrabajo, agotamiento y optimismo artificial."
        ]
      },
      {
        "title": "3. Diagnostica las causas reales",
        "paragraphs": [
          "Separa síntomas de causas. El retraso puede venir de alcance, complejidad técnica, dependencias, proveedores, requisitos, infraestructura, calidad o secuenciación."
        ],
        "table": {
          "headers": [
            "Causa",
            "Síntoma",
            "Acción"
          ],
          "rows": [
            [
              "Alcance",
              "El backlog crece más rápido que la finalización",
              "Congelar adiciones no críticas"
            ],
            [
              "Dependencias",
              "Los elementos envejecen esperando terceros",
              "Definir responsables, fechas y escalamiento"
            ],
            [
              "Complejidad",
              "Los elementos grandes permanecen activos",
              "Dividir trabajo y reducir incertidumbre"
            ],
            [
              "Calidad",
              "Pruebas y retrabajo consumen capacidad",
              "Estabilizar defectos"
            ],
            [
              "Planificación",
              "Los compromisos superan la capacidad",
              "Rehacer previsión con datos observados"
            ],
            [
              "Gobernanza",
              "Las prioridades cambian continuamente",
              "Crear backlog controlado"
            ]
          ]
        }
      },
      {
        "title": "4. Congela y redefine el alcance",
        "paragraphs": [
          "Separa resultados obligatorios, alto valor, necesidades contractuales y trabajo opcional. Protege la ruta crítica."
        ]
      },
      {
        "title": "5. Identifica la ruta crítica",
        "paragraphs": [
          "Mapea arquitectura, APIs, entornos, aprobaciones, seguridad, pruebas, proveedores, despliegue y release."
        ]
      },
      {
        "title": "6. Mide la realidad",
        "paragraphs": [
          "Sigue Lead Time, Cycle Time, throughput, WIP, edad, tiempo bloqueado, cola, defectos, alcance y confianza."
        ]
      },
      {
        "title": "7. Reduce WIP",
        "paragraphs": [
          "Reducir WIP mejora enfoque, expone cuellos de botella y aumenta la probabilidad de terminar."
        ]
      },
      {
        "title": "8. Divide el trabajo",
        "paragraphs": [
          "Los elementos grandes esconden progreso. Divídelos en resultados pequeños y verificables."
        ]
      },
      {
        "title": "9. Revisa dependencias diariamente",
        "paragraphs": [
          "Enfócate en bloqueo, próxima acción, responsable, fecha, impacto y escalamiento."
        ]
      },
      {
        "title": "10. Reconstruye la previsión",
        "paragraphs": [
          "Sustituye fechas únicas por rangos y supuestos explícitos basados en throughput y percentiles."
        ]
      },
      {
        "title": "11. Comunica con evidencia",
        "paragraphs": [
          "Comunica alcance, resultados, trabajo restante, riesgos, rango de entrega, mitigación y decisiones necesarias."
        ]
      },
      {
        "title": "Dashboard de recuperación",
        "table": {
          "headers": [
            "Área",
            "Señal",
            "Pregunta"
          ],
          "rows": [
            [
              "Alcance",
              "Baseline, añadido, completado y restante",
              "¿Está controlado?"
            ],
            [
              "Flujo",
              "Throughput, WIP, edad y bloqueos",
              "¿El trabajo fluye?"
            ],
            [
              "Previsibilidad",
              "Percentiles y rango",
              "¿Cuál es la confianza?"
            ],
            [
              "Calidad",
              "Defectos y retrabajo",
              "¿Existe riesgo?"
            ],
            [
              "Dependencias",
              "Abiertas, vencidas y críticas",
              "¿Dónde intervenir?"
            ],
            [
              "Decisiones",
              "Aprobaciones y trade-offs",
              "¿Qué decidir ahora?"
            ]
          ]
        }
      },
      {
        "title": "Errores comunes",
        "list": [
          "Añadir desarrolladores antes de entender el cuello de botella.",
          "Aumentar WIP.",
          "Cambiar prioridades cada día.",
          "Mantener todo el alcance.",
          "Usar velocidad como previsión principal.",
          "Ocultar riesgos.",
          "Dejar dependencias sin responsable.",
          "Usar horas extra como estrategia."
        ]
      },
      {
        "title": "Checklist de recuperación",
        "list": [
          "Alcance congelado.",
          "Ruta crítica identificada.",
          "Dependencias con responsables.",
          "Límites de WIP.",
          "Trabajo dividido.",
          "Bloqueos visibles.",
          "Dashboard activo.",
          "Previsión reconstruida.",
          "Stakeholders alineados.",
          "Criterios de salida definidos."
        ]
      },
      {
        "title": "Conclusión",
        "paragraphs": [
          "Los proyectos retrasados se recuperan cambiando el sistema de entrega, no repitiendo el mismo plan con más presión.",
          "Una recuperación disciplinada restaura transparencia, previsibilidad y confianza."
        ]
      }
    ],
    "related": [
      [
        "Lead Time vs Cycle Time",
        "/articles/es/lead-time-vs-cycle-time.html"
      ],
      [
        "Por Qué la Velocidad por Sí Sola No Predice la Entrega",
        "/articles/es/por-que-la-velocidad-por-si-sola-no-predice-la-entrega.html"
      ],
      [
        "Cómo Construir Dashboards Ejecutivos en Jira",
        "/articles/es/como-construir-dashboards-ejecutivos-en-jira.html"
      ],
      [
        "Errores Comunes en los Workflows de Jira",
        "/articles/es/errores-comunes-en-workflows-de-jira-que-ocultan-riesgos-de-entrega.html"
      ]
    ],
    "ctaTitle": "¿Necesitas recuperar un proyecto retrasado?",
    "ctaText": "LS AgileWorks ayuda a diagnosticar problemas, reconstruir previsiones, controlar alcance, gestionar dependencias y restaurar previsibilidad.",
    "ctaButton": "Agendar evaluación de recuperación",
    "back": "Volver al contenido",
    "copyright": "© 2026 LS AgileWorks. Todos los derechos reservados."
  }
};
