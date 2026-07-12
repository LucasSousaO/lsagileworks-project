"use strict";

window.JIRA_WORKFLOW_MISTAKES_ARTICLE = {
  "en": {
    "htmlLang": "en",
    "title": "Common Jira Workflow Mistakes That Hide Delivery Risks",
    "description": "Learn which Jira workflow mistakes distort delivery metrics and hide risks in Lead Time, Cycle Time, WIP, blocked work, and executive reporting.",
    "category": "Jira Workflow Design",
    "heroTitle": "Common Jira Workflow Mistakes",
    "heroHighlight": "That Hide Delivery Risks",
    "heroText": "Poor workflow design can distort delivery metrics, conceal queues and blockers, and create false confidence in reporting.",
    "readingTime": "12-minute read",
    "intro": [
      "A Jira workflow is more than a sequence of statuses. It is the operational model used to represent how work enters, moves through, waits inside, and exits the delivery system.",
      "When the workflow does not reflect reality, the metrics derived from it become unreliable. Lead Time may look shorter than the customer experience, Cycle Time may absorb hidden queues, and blocked work may disappear inside active statuses."
    ],
    "sections": [
      [
        "Why workflow design matters",
        [
          "Every status transition creates data used in Lead Time, Cycle Time, WIP, aging, throughput, blocked-time, and executive reporting.",
          "If statuses are ambiguous or waiting happens outside the modeled flow, the metrics describe Jira rather than the real delivery process."
        ]
      ],
      [
        "Mistake 1: Too many statuses",
        [
          "Statuses such as Development, Coding, Implementation, In Dev, and Working may represent the same activity.",
          "Use the smallest number of statuses needed to represent meaningful changes in ownership, queue, control, or completion."
        ]
      ],
      [
        "Mistake 2: Marking work Done too early",
        [
          "Some teams close issues after development even though QA, UAT, deployment, or production validation are still pending.",
          "Define Done according to the business outcome used in reporting."
        ]
      ],
      [
        "Mistake 3: No explicit blocked condition",
        [
          "Blocked items often remain in In Progress, making them look active.",
          "Use a Blocked status or Jira flag and capture start, end, cause, owner, and dependency."
        ]
      ],
      [
        "Mistake 4: Mixing different work types",
        [
          "Stories, incidents, defects, support, technical debt, and discovery may follow materially different paths.",
          "Segment metrics by work type before drawing conclusions about predictability."
        ]
      ],
      [
        "Mistake 5: Multiple statuses that all mean In Progress",
        [
          "When several statuses represent active development, WIP becomes difficult to control and bottlenecks become harder to locate.",
          "Keep one development status unless a transition represents a meaningful handoff, queue, policy, or control point."
        ]
      ],
      [
        "Mistake 6: Skipping review and validation",
        [
          "Moving directly from In Progress to Done can hide code review, QA, security, product validation, and release readiness.",
          "Model only the stages that materially affect ownership, waiting, quality, or reporting."
        ]
      ],
      [
        "Mistake 7: Treating waiting states as active work",
        [
          "Ready for QA, Ready for UAT, and Ready for Release may contain long queues.",
          "Separate queue states from active states so Cycle Time does not absorb hidden waiting."
        ]
      ],
      [
        "Mistake 8: Relying on manual status updates",
        [
          "When transitions depend on memory, Lead Time, Cycle Time, WIP, aging, and throughput become unreliable.",
          "Use reliable automation signals such as pull requests, approvals, and deployment events."
        ]
      ],
      [
        "Mistake 9: Workflow does not reflect reality",
        [
          "A simple Development → Testing → Done flow may hide product review, security checks, release approval, deployment, and production validation.",
          "Missing stages do not disappear; their time is absorbed into the wrong status."
        ]
      ],
      [
        "Mistake 10: Using flow metrics to evaluate individuals",
        [
          "Lead Time, Cycle Time, WIP, throughput, and blocked time are system metrics.",
          "Use them to improve the system, not to rank people."
        ]
      ],
      [
        "How workflow mistakes distort metrics",
        [
          "Premature Done states shorten Lead Time and inflate throughput.",
          "Waiting states mapped as active inflate Cycle Time.",
          "Missing blocked conditions hide dependency risk.",
          "Ambiguous statuses create false confidence in executive dashboards."
        ]
      ],
      [
        "Recommended design principles",
        [
          "Every status should have one clear meaning.",
          "Queue states and active states should be distinguishable.",
          "Blocked work must be measurable.",
          "Done must represent the outcome used in reporting.",
          "Workflow changes must be governed and documented."
        ]
      ],
      [
        "Conclusion",
        [
          "A good Jira workflow improves visibility. A poor one creates the appearance of control while hiding the conditions that threaten delivery.",
          "Before adding another dashboard or automation, verify that the workflow itself represents reality."
        ]
      ]
    ],
    "checklistTitle": "Workflow audit checklist",
    "checklist": [
      "Can every status be explained in one sentence?",
      "Are waiting states visible?",
      "Can blocked time be calculated?",
      "Does Done match the expected outcome?",
      "Can Lead Time and Cycle Time be calculated consistently?",
      "Is WIP visible across active states?",
      "Are aging items easy to identify?",
      "Are workflow changes documented?"
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
      ]
    ],
    "ctaTitle": "Need to audit or redesign your Jira workflows?",
    "ctaText": "LS AgileWorks can help assess workflow structure, automation, governance, reporting reliability, and delivery metrics.",
    "ctaButton": "Book a conversation",
    "back": "Back to insights",
    "copyright": "© 2026 LS AgileWorks. All rights reserved."
  },
  "pt": {
    "htmlLang": "pt-BR",
    "title": "Erros Comuns em Workflows do Jira que Escondem Riscos de Entrega",
    "description": "Conheça os erros de workflow no Jira que distorcem métricas e escondem riscos em Lead Time, Cycle Time, WIP, bloqueios e relatórios executivos.",
    "category": "Design de Workflows no Jira",
    "heroTitle": "Erros Comuns em Workflows do Jira",
    "heroHighlight": "que Escondem Riscos de Entrega",
    "heroText": "Um workflow mal desenhado pode distorcer métricas, ocultar filas e bloqueios e criar falsa confiança nos relatórios.",
    "readingTime": "12 minutos de leitura",
    "intro": [
      "Um workflow do Jira é mais do que uma sequência de status. Ele representa como o trabalho entra, avança, espera e sai do sistema de entrega.",
      "Quando o workflow não representa a realidade, as métricas deixam de ser confiáveis. O Lead Time pode parecer menor, o Cycle Time pode absorver filas escondidas e o trabalho bloqueado pode desaparecer dentro de status ativos."
    ],
    "sections": [
      [
        "Por que o desenho do workflow importa",
        [
          "Cada transição gera dados usados em Lead Time, Cycle Time, WIP, idade dos itens, throughput, tempo bloqueado e relatórios executivos.",
          "Se os status forem ambíguos ou a espera ocorrer fora do fluxo modelado, as métricas descrevem o Jira, não a entrega real."
        ]
      ],
      [
        "Erro 1: Status demais",
        [
          "Development, Coding, Implementation, In Dev e Working podem representar a mesma atividade.",
          "Use o menor número de status necessário para representar mudanças reais de responsabilidade, fila, controle ou conclusão."
        ]
      ],
      [
        "Erro 2: Marcar Done cedo demais",
        [
          "Alguns times encerram a issue após o desenvolvimento, mesmo com QA, UAT, implantação ou validação ainda pendentes.",
          "Defina Done de acordo com o resultado de negócio usado no relatório."
        ]
      ],
      [
        "Erro 3: Não identificar bloqueios explicitamente",
        [
          "Itens bloqueados costumam permanecer em In Progress e parecem ativos.",
          "Use status Blocked ou flag do Jira e registre início, fim, causa, responsável e dependência."
        ]
      ],
      [
        "Erro 4: Misturar tipos de trabalho",
        [
          "Histórias, incidentes, defeitos, suporte, dívida técnica e discovery podem seguir caminhos diferentes.",
          "Segmente métricas por tipo antes de concluir sobre previsibilidade."
        ]
      ],
      [
        "Erro 5: Vários status que significam In Progress",
        [
          "Quando vários status representam desenvolvimento ativo, o WIP fica difícil de controlar e os gargalos ficam menos visíveis.",
          "Mantenha um único status de desenvolvimento, salvo quando houver handoff, fila, política ou controle relevante."
        ]
      ],
      [
        "Erro 6: Ignorar revisão e validação",
        [
          "Mover diretamente de In Progress para Done pode esconder code review, QA, segurança, validação de produto e prontidão de release.",
          "Modele apenas etapas que impactem responsabilidade, espera, qualidade ou relatório."
        ]
      ],
      [
        "Erro 7: Tratar espera como trabalho ativo",
        [
          "Ready for QA, Ready for UAT e Ready for Release podem conter filas longas.",
          "Separe estados de fila de estados ativos para que o Cycle Time não absorva espera escondida."
        ]
      ],
      [
        "Erro 8: Depender de atualização manual",
        [
          "Quando as transições dependem de memória, Lead Time, Cycle Time, WIP, idade e throughput ficam pouco confiáveis.",
          "Use sinais confiáveis de automação, como pull requests, aprovações e deployments."
        ]
      ],
      [
        "Erro 9: O workflow não representa a realidade",
        [
          "Um fluxo Development → Testing → Done pode esconder revisão de produto, segurança, aprovação, implantação e validação.",
          "As etapas ausentes continuam existindo; o tempo delas apenas fica no status errado."
        ]
      ],
      [
        "Erro 10: Usar métricas de fluxo para avaliar pessoas",
        [
          "Lead Time, Cycle Time, WIP, throughput e tempo bloqueado são métricas do sistema.",
          "Use essas métricas para melhorar o sistema, não para ranquear pessoas."
        ]
      ],
      [
        "Como esses erros distorcem métricas",
        [
          "Done prematuro reduz Lead Time e aumenta throughput artificialmente.",
          "Espera tratada como execução aumenta Cycle Time.",
          "Ausência de bloqueio esconde riscos de dependência.",
          "Status ambíguos criam falsa confiança nos dashboards."
        ]
      ],
      [
        "Princípios recomendados",
        [
          "Cada status deve ter um significado claro.",
          "Estados de fila e ativos devem ser distinguíveis.",
          "Trabalho bloqueado deve ser mensurável.",
          "Done deve representar o resultado usado no relatório.",
          "Mudanças no workflow devem ser governadas e documentadas."
        ]
      ],
      [
        "Conclusão",
        [
          "Um bom workflow melhora a visibilidade. Um workflow ruim cria aparência de controle enquanto esconde as condições que ameaçam a entrega.",
          "Antes de adicionar outro dashboard ou automação, valide se o workflow representa a realidade."
        ]
      ]
    ],
    "checklistTitle": "Checklist de auditoria do workflow",
    "checklist": [
      "Cada status pode ser explicado em uma frase?",
      "Os estados de espera estão visíveis?",
      "O tempo bloqueado pode ser calculado?",
      "Done corresponde ao resultado esperado?",
      "Lead Time e Cycle Time são consistentes?",
      "O WIP está visível nos estados ativos?",
      "Itens envelhecidos são fáceis de identificar?",
      "As mudanças estão documentadas?"
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
      ]
    ],
    "ctaTitle": "Precisa auditar ou redesenhar seus workflows no Jira?",
    "ctaText": "A LS AgileWorks pode ajudar a avaliar estrutura, automação, governança, confiabilidade dos relatórios e métricas de entrega.",
    "ctaButton": "Agendar uma conversa",
    "back": "Voltar para conteúdos",
    "copyright": "© 2026 LS AgileWorks. Todos os direitos reservados."
  },
  "es": {
    "htmlLang": "es",
    "title": "Errores Comunes en los Workflows de Jira que Ocultan Riesgos de Entrega",
    "description": "Conoce los errores de workflow en Jira que distorsionan métricas y ocultan riesgos en Lead Time, Cycle Time, WIP, bloqueos y reportes.",
    "category": "Diseño de Workflows en Jira",
    "heroTitle": "Errores Comunes en los Workflows de Jira",
    "heroHighlight": "que Ocultan Riesgos de Entrega",
    "heroText": "Un workflow mal diseñado puede distorsionar métricas, ocultar colas y bloqueos y crear una falsa confianza en los reportes.",
    "readingTime": "12 minutos de lectura",
    "intro": [
      "Un workflow de Jira es más que una secuencia de estados. Representa cómo el trabajo entra, avanza, espera y sale del sistema de entrega.",
      "Cuando no refleja la realidad, las métricas dejan de ser fiables. Lead Time puede parecer menor, Cycle Time puede absorber colas ocultas y el trabajo bloqueado puede desaparecer dentro de estados activos."
    ],
    "sections": [
      [
        "Por qué importa el diseño del workflow",
        [
          "Cada transición genera datos utilizados en Lead Time, Cycle Time, WIP, edad, throughput, tiempo bloqueado y reportes.",
          "Si los estados son ambiguos o la espera ocurre fuera del flujo, las métricas describen Jira y no la entrega real."
        ]
      ],
      [
        "Error 1: Demasiados estados",
        [
          "Development, Coding, Implementation, In Dev y Working pueden representar la misma actividad.",
          "Usa el menor número de estados necesario para representar cambios reales."
        ]
      ],
      [
        "Error 2: Marcar Done demasiado pronto",
        [
          "Algunos equipos cierran la issue aunque QA, UAT, despliegue o validación sigan pendientes.",
          "Define Done según el resultado utilizado en el reporte."
        ]
      ],
      [
        "Error 3: No identificar bloqueos",
        [
          "Los elementos bloqueados suelen permanecer en In Progress y parecen activos.",
          "Usa un estado Blocked o flag y registra inicio, fin, causa, responsable y dependencia."
        ]
      ],
      [
        "Error 4: Mezclar tipos de trabajo",
        [
          "Historias, incidentes, defectos, soporte, deuda técnica y discovery pueden seguir caminos diferentes.",
          "Segmenta métricas por tipo de trabajo."
        ]
      ],
      [
        "Error 5: Varios estados que significan In Progress",
        [
          "Cuando varios estados representan desarrollo activo, el WIP y los cuellos de botella pierden claridad.",
          "Mantén un solo estado salvo que exista un handoff o control real."
        ]
      ],
      [
        "Error 6: Omitir revisión y validación",
        [
          "Pasar de In Progress a Done puede ocultar code review, QA, seguridad y preparación de release.",
          "Modela solo etapas relevantes para espera, calidad o responsabilidad."
        ]
      ],
      [
        "Error 7: Tratar la espera como trabajo activo",
        [
          "Ready for QA, Ready for UAT y Ready for Release pueden contener colas largas.",
          "Separa estados de cola y estados activos."
        ]
      ],
      [
        "Error 8: Depender de actualizaciones manuales",
        [
          "Cuando las transiciones dependen de la memoria, las métricas se vuelven poco fiables.",
          "Usa señales confiables como pull requests, aprobaciones y deployments."
        ]
      ],
      [
        "Error 9: El workflow no refleja la realidad",
        [
          "Un flujo simple puede ocultar revisión de producto, seguridad, aprobación, despliegue y validación.",
          "El tiempo de las etapas ausentes queda en el estado equivocado."
        ]
      ],
      [
        "Error 10: Usar métricas para evaluar personas",
        [
          "Lead Time, Cycle Time, WIP, throughput y tiempo bloqueado son métricas del sistema.",
          "Úsalas para mejorar el sistema, no para clasificar personas."
        ]
      ],
      [
        "Cómo se distorsionan las métricas",
        [
          "Done prematuro reduce Lead Time y aumenta throughput artificialmente.",
          "La espera tratada como ejecución aumenta Cycle Time.",
          "La ausencia de bloqueo oculta riesgos de dependencia.",
          "Los estados ambiguos crean falsa confianza."
        ]
      ],
      [
        "Principios recomendados",
        [
          "Cada estado debe tener un significado claro.",
          "Las colas y estados activos deben distinguirse.",
          "El trabajo bloqueado debe ser medible.",
          "Done debe representar el resultado reportado.",
          "Los cambios deben documentarse."
        ]
      ],
      [
        "Conclusión",
        [
          "Un buen workflow mejora la visibilidad. Uno malo crea apariencia de control mientras oculta riesgos.",
          "Antes de añadir otro dashboard o automatización, verifica que el workflow represente la realidad."
        ]
      ]
    ],
    "checklistTitle": "Checklist de auditoría",
    "checklist": [
      "¿Cada estado puede explicarse en una frase?",
      "¿Los estados de espera son visibles?",
      "¿Puede calcularse el tiempo bloqueado?",
      "¿Done corresponde al resultado esperado?",
      "¿Lead Time y Cycle Time son consistentes?",
      "¿El WIP es visible?",
      "¿Los elementos envejecidos son identificables?",
      "¿Los cambios están documentados?"
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
      ]
    ],
    "ctaTitle": "¿Necesitas auditar o rediseñar tus workflows en Jira?",
    "ctaText": "LS AgileWorks puede ayudarte a evaluar estructura, automatización, gobernanza, fiabilidad de reportes y métricas.",
    "ctaButton": "Agendar una conversación",
    "back": "Volver al contenido",
    "copyright": "© 2026 LS AgileWorks. Todos los derechos reservados."
  }
};
