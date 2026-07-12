"use strict";

window.VELOCITY_ARTICLE = {
  "en": {
    "htmlLang": "en",
    "title": "Why Velocity Alone Doesn't Predict Delivery: Metrics Engineering Leaders Should Use Instead",
    "description": "Understand why Scrum velocity alone cannot reliably predict software delivery and which flow, throughput, and predictability metrics engineering leaders should track instead.",
    "url": "/articles/en/why-velocity-alone-does-not-predict-delivery.html",
    "nav": {
      "services": "Services",
      "why": "Why Us",
      "products": "Products",
      "insights": "Insights",
      "contact": "Contact",
      "cta": "Contact us"
    },
    "breadcrumb": {
      "home": "Home",
      "insights": "Insights"
    },
    "category": "Delivery Predictability",
    "heroTitle": "Why Velocity Alone Doesn't Predict Delivery:",
    "heroHighlight": "Metrics Engineering Leaders Should Use Instead",
    "heroText": "Velocity can support sprint planning, but it does not measure customer waiting time, delivery speed, flow stability, or future delivery probability.",
    "readingTime": "9-minute read",
    "intro": [
      "Velocity is one of the most familiar metrics in Scrum. It is often used to discuss capacity, compare sprints, and estimate how much work a team may complete next.",
      "The problem begins when leaders treat velocity as a delivery forecast or a productivity indicator. A team can maintain stable velocity while customer requests wait longer, work in progress grows, dependencies increase, and release dates become less predictable."
    ],
    "sections": [
      {
        "title": "What velocity actually measures",
        "paragraphs": [
          "Velocity represents the amount of estimated work completed by a team during a sprint. It is normally expressed in story points and depends on that team's estimation scale, definition of done, sprint length, and planning practices.",
          "Used correctly, velocity can help a stable team understand its recent sprint capacity. It is primarily a local planning signal—not a universal measure of output, value, productivity, or delivery speed."
        ],
        "callout": {
          "label": "Simple example",
          "text": "If a team completes 32, 35, and 33 story points across three sprints, its recent average velocity is approximately 33 points per sprint. That does not mean the team will deliver a specific feature on a specific date."
        }
      },
      {
        "title": "Why velocity does not predict delivery",
        "paragraphs": [
          "Delivery depends on more than the quantity of estimated work completed inside a sprint. It is influenced by item size, queue time, blockers, dependencies, unplanned work, release policies, review delays, and workflow variation.",
          "Velocity does not show how long work waits before starting, how long it takes to move through the system, or how consistently the team completes individual items."
        ],
        "cards": [
          [
            "It is based on estimates",
            "Story points are relative estimates, not units of time or value. Two items with the same estimate may have very different delivery paths."
          ],
          [
            "It ignores waiting time",
            "Velocity does not reveal how long work remains in backlog, review, validation, blocked, or release-ready states."
          ],
          [
            "It hides work distribution",
            "A sprint with 30 points may contain many small items or a few large items. Those patterns create different delivery risks."
          ],
          [
            "It is team-specific",
            "Story-point scales differ across teams. Comparing velocity between teams is methodologically weak and often misleading."
          ],
          [
            "It can remain stable while flow worsens",
            "A team may complete the same number of points while Lead Time, WIP, and blocked time continue to increase."
          ]
        ]
      },
      {
        "title": "Common ways velocity is misused",
        "list": [
          "Using velocity to compare teams or rank performance.",
          "Converting story points directly into hours or days.",
          "Setting velocity growth as a management target.",
          "Assuming stable velocity guarantees a stable release date.",
          "Treating higher velocity as proof of higher productivity.",
          "Ignoring support, incidents, dependencies, and unplanned work."
        ]
      },
      {
        "title": "Velocity versus the metrics leaders actually need",
        "table": {
          "headers": [
            "Metric",
            "What it reveals",
            "Leadership question"
          ],
          "rows": [
            [
              "Velocity",
              "Estimated work completed per sprint",
              "How much estimated work has this team recently completed?"
            ],
            [
              "Throughput",
              "Number of work items completed",
              "How many items does the system finish over time?"
            ],
            [
              "Lead Time",
              "Time from demand creation to delivery",
              "How long does the customer wait?"
            ],
            [
              "Cycle Time",
              "Time from work start to completion",
              "How long does execution take?"
            ],
            [
              "WIP",
              "Amount of work currently in progress",
              "Is the team starting more than it can finish?"
            ],
            [
              "Blocked Time",
              "Time work cannot progress",
              "Where are dependencies or impediments delaying delivery?"
            ],
            [
              "Percentiles",
              "Delivery-time probability ranges",
              "What delivery window is realistic for most items?"
            ]
          ]
        }
      },
      {
        "title": "What engineering leaders should track instead",
        "cards": [
          [
            "1. Throughput trend",
            "Track completed items by week or sprint. Throughput uses countable outcomes and can support probabilistic forecasting when item types are reasonably consistent."
          ],
          [
            "2. Lead Time and Cycle Time",
            "Use these metrics to distinguish total customer waiting time from active execution time and identify where delays enter the system."
          ],
          [
            "3. Delivery percentiles",
            "Use the 50th, 75th, and 85th percentiles to discuss delivery probability rather than presenting a single average as a commitment."
          ],
          [
            "4. Work in Progress",
            "Growing WIP often increases context switching, aging, coordination cost, and delivery variability."
          ],
          [
            "5. Work-item age",
            "Monitor unfinished items that are already older than the team's normal delivery range before they become major delays."
          ],
          [
            "6. Blocked time and dependencies",
            "Track how often and how long work remains blocked, including external-team and vendor dependencies."
          ],
          [
            "7. Planned versus unplanned work",
            "Separate committed roadmap work from incidents, support, urgent requests, and scope added during execution."
          ]
        ]
      },
      {
        "title": "A practical forecasting example",
        "paragraphs": [
          "Suppose a team has delivered between 8 and 12 comparable items per sprint during the last eight sprints. Instead of converting a 70-point backlog into a date using average velocity, the leader can analyze historical throughput and delivery-time percentiles.",
          "If 85% of similar items finish within 14 days and the team usually completes 8 to 12 items per sprint, leadership can present a delivery range with an explicit probability and list the assumptions that may change it.",
          "This forecast is still not a guarantee, but it is grounded in observed system behavior rather than an estimated-point conversion."
        ]
      },
      {
        "title": "When velocity is still useful",
        "paragraphs": [
          "Velocity is not inherently bad. It remains useful for internal sprint planning when the team is stable, estimation practices are consistent, and the metric is not used as a target.",
          "The key is scope: velocity can support a team's short-term planning conversation, but it should not be the primary executive metric for delivery performance or predictability."
        ]
      },
      {
        "title": "Conclusion",
        "paragraphs": [
          "Velocity measures completed estimates. Delivery predictability requires evidence about flow, waiting time, throughput, WIP, aging, blockers, and variability.",
          "Engineering leaders should avoid asking whether velocity increased and instead ask whether work is flowing faster, more consistently, and with fewer surprises.",
          "The most reliable delivery view combines quantitative flow metrics with qualitative context about scope, dependencies, quality, and team capacity."
        ]
      }
    ],
    "previousArticleLabel": "Related article",
    "previousArticleText": "Lead Time vs Cycle Time: What Engineering Leaders Should Track",
    "previousArticleUrl": "/articles/en/lead-time-vs-cycle-time.html",
    "ctaTitle": "Need a more reliable delivery forecasting model?",
    "ctaText": "LS AgileWorks can help your organization structure Jira workflows, delivery metrics, executive dashboards, and forecasting practices based on actual flow data.",
    "ctaButton": "Book a conversation",
    "otherContent": "View other insights",
    "back": "Back to insights",
    "copyright": "© 2026 LS AgileWorks. All rights reserved."
  },
  "pt": {
    "htmlLang": "pt-BR",
    "title": "Por Que a Velocity Sozinha Não Prevê Entregas: Métricas Que Líderes de Engenharia Devem Usar",
    "description": "Entenda por que a velocity do Scrum, isoladamente, não prevê entregas de software e quais métricas de fluxo, throughput e previsibilidade líderes de engenharia devem acompanhar.",
    "url": "/articles/pt/por-que-velocidade-sozinha-nao-preve-entregas.html",
    "nav": {
      "services": "Serviços",
      "why": "Por Que Nós",
      "products": "Produtos",
      "insights": "Conteúdo",
      "contact": "Contato",
      "cta": "Fale conosco"
    },
    "breadcrumb": {
      "home": "Início",
      "insights": "Conteúdo"
    },
    "category": "Previsibilidade de Entrega",
    "heroTitle": "Por Que a Velocity Sozinha Não Prevê Entregas:",
    "heroHighlight": "Métricas Que Líderes de Engenharia Devem Usar",
    "heroText": "A velocity pode apoiar o planejamento da sprint, mas não mede espera do cliente, velocidade de entrega, estabilidade do fluxo ou probabilidade de cumprimento de prazos.",
    "readingTime": "9 minutos de leitura",
    "intro": [
      "Velocity é uma das métricas mais conhecidas no Scrum. Ela costuma ser usada para discutir capacidade, comparar sprints e estimar quanto trabalho um time poderá concluir em seguida.",
      "O problema começa quando a liderança trata velocity como previsão de entrega ou indicador de produtividade. Um time pode manter velocity estável enquanto o tempo de espera aumenta, o WIP cresce, as dependências se acumulam e as datas de entrega ficam menos previsíveis."
    ],
    "sections": [
      {
        "title": "O que a velocity realmente mede",
        "paragraphs": [
          "Velocity representa a quantidade de trabalho estimado concluída por um time durante uma sprint. Normalmente é expressa em story points e depende da escala de estimativa, definição de pronto, duração da sprint e práticas de planejamento daquele time.",
          "Quando usada corretamente, a velocity ajuda um time estável a compreender sua capacidade recente por sprint. Ela é principalmente um sinal local de planejamento, não uma medida universal de produção, valor, produtividade ou velocidade de entrega."
        ],
        "callout": {
          "label": "Exemplo simples",
          "text": "Se um time conclui 32, 35 e 33 story points em três sprints, sua velocity média recente é de aproximadamente 33 pontos por sprint. Isso não significa que o time entregará uma funcionalidade específica em uma data específica."
        }
      },
      {
        "title": "Por que a velocity não prevê entregas",
        "paragraphs": [
          "A entrega depende de muito mais do que a quantidade de trabalho estimado concluída dentro de uma sprint. Ela é influenciada por tamanho dos itens, tempo em fila, bloqueios, dependências, trabalho não planejado, políticas de release, atrasos de revisão e variação do workflow.",
          "A velocity não mostra quanto tempo o trabalho espera antes de começar, quanto tempo leva para atravessar o sistema nem com que consistência o time conclui itens individuais."
        ],
        "cards": [
          [
            "É baseada em estimativas",
            "Story points são estimativas relativas, não unidades de tempo ou valor. Dois itens com a mesma estimativa podem seguir caminhos de entrega muito diferentes."
          ],
          [
            "Ignora tempo de espera",
            "A velocity não revela quanto tempo o trabalho permanece no backlog, em revisão, validação, bloqueio ou aguardando release."
          ],
          [
            "Oculta a distribuição do trabalho",
            "Uma sprint com 30 pontos pode conter muitos itens pequenos ou poucos itens grandes. Esses padrões geram riscos de entrega diferentes."
          ],
          [
            "É específica de cada time",
            "As escalas de story points variam entre equipes. Comparar velocity entre times é metodologicamente frágil e frequentemente enganoso."
          ],
          [
            "Pode ficar estável enquanto o fluxo piora",
            "Um time pode concluir a mesma quantidade de pontos enquanto Lead Time, WIP e tempo bloqueado continuam aumentando."
          ]
        ]
      },
      {
        "title": "Usos incorretos comuns da velocity",
        "list": [
          "Usar velocity para comparar times ou classificar desempenho.",
          "Converter story points diretamente em horas ou dias.",
          "Definir crescimento da velocity como meta de gestão.",
          "Assumir que velocity estável garante uma data de release estável.",
          "Tratar velocity maior como prova de maior produtividade.",
          "Ignorar suporte, incidentes, dependências e trabalho não planejado."
        ]
      },
      {
        "title": "Velocity versus as métricas que a liderança realmente precisa",
        "table": {
          "headers": [
            "Métrica",
            "O que revela",
            "Pergunta de liderança"
          ],
          "rows": [
            [
              "Velocity",
              "Trabalho estimado concluído por sprint",
              "Quanto trabalho estimado este time concluiu recentemente?"
            ],
            [
              "Throughput",
              "Quantidade de itens concluídos",
              "Quantos itens o sistema conclui ao longo do tempo?"
            ],
            [
              "Lead Time",
              "Tempo da criação da demanda até a entrega",
              "Quanto tempo o cliente espera?"
            ],
            [
              "Cycle Time",
              "Tempo do início até a conclusão",
              "Quanto tempo a execução leva?"
            ],
            [
              "WIP",
              "Quantidade de trabalho em andamento",
              "O time está iniciando mais do que consegue terminar?"
            ],
            [
              "Tempo bloqueado",
              "Tempo em que o trabalho não progride",
              "Onde dependências ou impedimentos atrasam a entrega?"
            ],
            [
              "Percentis",
              "Faixas de probabilidade de entrega",
              "Qual janela de entrega é realista para a maioria dos itens?"
            ]
          ]
        }
      },
      {
        "title": "O que líderes de engenharia devem acompanhar",
        "cards": [
          [
            "1. Tendência de throughput",
            "Acompanhe itens concluídos por semana ou sprint. O throughput usa resultados contáveis e pode apoiar previsões probabilísticas quando os tipos de item são razoavelmente consistentes."
          ],
          [
            "2. Lead Time e Cycle Time",
            "Use essas métricas para separar a espera total do cliente do tempo ativo de execução e localizar onde os atrasos entram no sistema."
          ],
          [
            "3. Percentis de entrega",
            "Use os percentis 50, 75 e 85 para discutir probabilidade de entrega, em vez de apresentar uma única média como compromisso."
          ],
          [
            "4. Work in Progress",
            "WIP crescente costuma aumentar troca de contexto, envelhecimento dos itens, custo de coordenação e variabilidade da entrega."
          ],
          [
            "5. Idade dos itens em andamento",
            "Monitore itens não concluídos que já estão mais antigos do que a faixa normal de entrega do time antes que se tornem grandes atrasos."
          ],
          [
            "6. Tempo bloqueado e dependências",
            "Acompanhe com que frequência e por quanto tempo o trabalho permanece bloqueado, incluindo dependências de outros times e fornecedores."
          ],
          [
            "7. Trabalho planejado versus não planejado",
            "Separe trabalho de roadmap comprometido de incidentes, suporte, urgências e escopo adicionado durante a execução."
          ]
        ]
      },
      {
        "title": "Um exemplo prático de previsão",
        "paragraphs": [
          "Suponha que um time tenha entregado entre 8 e 12 itens comparáveis por sprint nas últimas oito sprints. Em vez de converter um backlog de 70 pontos em uma data usando velocity média, a liderança pode analisar throughput histórico e percentis de tempo de entrega.",
          "Se 85% dos itens semelhantes terminam em até 14 dias e o time normalmente conclui entre 8 e 12 itens por sprint, é possível apresentar uma faixa de entrega com probabilidade explícita e listar as premissas que podem alterá-la.",
          "Essa previsão ainda não é uma garantia, mas está fundamentada no comportamento observado do sistema, e não na conversão de pontos estimados."
        ]
      },
      {
        "title": "Quando a velocity ainda é útil",
        "paragraphs": [
          "Velocity não é uma métrica ruim por definição. Ela continua útil para planejamento interno de sprint quando o time é estável, as práticas de estimativa são consistentes e a métrica não é transformada em meta.",
          "A questão central é o escopo: velocity pode apoiar a conversa de planejamento de curto prazo do time, mas não deve ser a principal métrica executiva de desempenho ou previsibilidade de entrega."
        ]
      },
      {
        "title": "Conclusão",
        "paragraphs": [
          "Velocity mede estimativas concluídas. Previsibilidade de entrega exige evidências sobre fluxo, espera, throughput, WIP, envelhecimento, bloqueios e variabilidade.",
          "Líderes de engenharia devem deixar de perguntar apenas se a velocity aumentou e passar a avaliar se o trabalho flui com mais rapidez, consistência e menos surpresas.",
          "A visão mais confiável combina métricas quantitativas de fluxo com contexto qualitativo sobre escopo, dependências, qualidade e capacidade do time."
        ]
      }
    ],
    "previousArticleLabel": "Artigo relacionado",
    "previousArticleText": "Lead Time vs Cycle Time: O Que Líderes de Engenharia Devem Acompanhar",
    "previousArticleUrl": "/articles/pt/lead-time-vs-cycle-time.html",
    "ctaTitle": "Precisa de um modelo mais confiável de previsão de entrega?",
    "ctaText": "A LS AgileWorks pode ajudar sua organização a estruturar workflows no Jira, métricas de entrega, dashboards executivos e práticas de previsão baseadas em dados reais de fluxo.",
    "ctaButton": "Agendar uma conversa",
    "otherContent": "Ver outros conteúdos",
    "back": "Voltar para conteúdos",
    "copyright": "© 2026 LS AgileWorks. Todos os direitos reservados."
  },
  "es": {
    "htmlLang": "es",
    "title": "Por Qué la Velocidad por Sí Sola No Predice la Entrega: Métricas Que Deben Usar los Líderes de Ingeniería",
    "description": "Comprende por qué la velocidad de Scrum, por sí sola, no predice la entrega de software y qué métricas de flujo, throughput y previsibilidad deben seguir los líderes de ingeniería.",
    "url": "/articles/es/por-que-la-velocidad-por-si-sola-no-predice-la-entrega.html",
    "nav": {
      "services": "Servicios",
      "why": "Por Qué Nosotros",
      "products": "Productos",
      "insights": "Contenido",
      "contact": "Contacto",
      "cta": "Contáctanos"
    },
    "breadcrumb": {
      "home": "Inicio",
      "insights": "Contenido"
    },
    "category": "Previsibilidad de Entrega",
    "heroTitle": "Por Qué la Velocidad por Sí Sola No Predice la Entrega:",
    "heroHighlight": "Métricas Que Deben Usar los Líderes de Ingeniería",
    "heroText": "La velocidad puede apoyar la planificación del sprint, pero no mide la espera del cliente, la rapidez de entrega, la estabilidad del flujo ni la probabilidad de cumplir una fecha.",
    "readingTime": "9 minutos de lectura",
    "intro": [
      "La velocidad es una de las métricas más conocidas de Scrum. Suele utilizarse para hablar de capacidad, comparar sprints y estimar cuánto trabajo podrá completar un equipo a continuación.",
      "El problema comienza cuando el liderazgo trata la velocidad como una previsión de entrega o un indicador de productividad. Un equipo puede mantener una velocidad estable mientras aumenta la espera, crece el WIP, se acumulan dependencias y las fechas se vuelven menos predecibles."
    ],
    "sections": [
      {
        "title": "Qué mide realmente la velocidad",
        "paragraphs": [
          "La velocidad representa la cantidad de trabajo estimado completada por un equipo durante un sprint. Normalmente se expresa en story points y depende de la escala de estimación, la definición de terminado, la duración del sprint y las prácticas de planificación de ese equipo.",
          "Usada correctamente, ayuda a un equipo estable a comprender su capacidad reciente por sprint. Es principalmente una señal local de planificación, no una medida universal de producción, valor, productividad o rapidez de entrega."
        ],
        "callout": {
          "label": "Ejemplo simple",
          "text": "Si un equipo completa 32, 35 y 33 story points en tres sprints, su velocidad media reciente es de aproximadamente 33 puntos por sprint. Eso no significa que entregará una funcionalidad específica en una fecha específica."
        }
      },
      {
        "title": "Por qué la velocidad no predice la entrega",
        "paragraphs": [
          "La entrega depende de mucho más que la cantidad de trabajo estimado completada dentro de un sprint. Está influida por el tamaño de los elementos, el tiempo en cola, los bloqueos, las dependencias, el trabajo no planificado, las políticas de release, los retrasos de revisión y la variación del workflow.",
          "La velocidad no muestra cuánto espera el trabajo antes de comenzar, cuánto tarda en atravesar el sistema ni con qué consistencia el equipo completa elementos individuales."
        ],
        "cards": [
          [
            "Se basa en estimaciones",
            "Los story points son estimaciones relativas, no unidades de tiempo o valor. Dos elementos con la misma estimación pueden seguir recorridos de entrega muy distintos."
          ],
          [
            "Ignora el tiempo de espera",
            "La velocidad no revela cuánto tiempo permanece el trabajo en backlog, revisión, validación, bloqueo o esperando release."
          ],
          [
            "Oculta la distribución del trabajo",
            "Un sprint de 30 puntos puede contener muchos elementos pequeños o pocos elementos grandes. Esos patrones generan riesgos de entrega diferentes."
          ],
          [
            "Es específica de cada equipo",
            "Las escalas de story points varían entre equipos. Comparar velocidad entre equipos es metodológicamente débil y suele ser engañoso."
          ],
          [
            "Puede mantenerse estable mientras el flujo empeora",
            "Un equipo puede completar la misma cantidad de puntos mientras Lead Time, WIP y tiempo bloqueado siguen aumentando."
          ]
        ]
      },
      {
        "title": "Usos incorrectos comunes de la velocidad",
        "list": [
          "Usar la velocidad para comparar equipos o clasificar desempeño.",
          "Convertir story points directamente en horas o días.",
          "Definir el aumento de la velocidad como objetivo de gestión.",
          "Suponer que una velocidad estable garantiza una fecha de release estable.",
          "Tratar una velocidad mayor como prueba de mayor productividad.",
          "Ignorar soporte, incidentes, dependencias y trabajo no planificado."
        ]
      },
      {
        "title": "Velocidad frente a las métricas que realmente necesita el liderazgo",
        "table": {
          "headers": [
            "Métrica",
            "Qué revela",
            "Pregunta de liderazgo"
          ],
          "rows": [
            [
              "Velocidad",
              "Trabajo estimado completado por sprint",
              "¿Cuánto trabajo estimado completó recientemente este equipo?"
            ],
            [
              "Throughput",
              "Cantidad de elementos completados",
              "¿Cuántos elementos finaliza el sistema a lo largo del tiempo?"
            ],
            [
              "Lead Time",
              "Tiempo desde la creación hasta la entrega",
              "¿Cuánto tiempo espera el cliente?"
            ],
            [
              "Cycle Time",
              "Tiempo desde el inicio hasta la finalización",
              "¿Cuánto tarda la ejecución?"
            ],
            [
              "WIP",
              "Cantidad de trabajo en curso",
              "¿El equipo inicia más de lo que puede terminar?"
            ],
            [
              "Tiempo bloqueado",
              "Tiempo durante el cual el trabajo no progresa",
              "¿Dónde retrasan la entrega las dependencias o impedimentos?"
            ],
            [
              "Percentiles",
              "Rangos de probabilidad de entrega",
              "¿Qué ventana de entrega es realista para la mayoría de los elementos?"
            ]
          ]
        }
      },
      {
        "title": "Qué deben monitorear los líderes de ingeniería",
        "cards": [
          [
            "1. Tendencia de throughput",
            "Sigue los elementos completados por semana o sprint. El throughput utiliza resultados contables y puede apoyar previsiones probabilísticas cuando los tipos de elemento son razonablemente consistentes."
          ],
          [
            "2. Lead Time y Cycle Time",
            "Utiliza estas métricas para separar la espera total del cliente del tiempo activo de ejecución y localizar dónde entran los retrasos al sistema."
          ],
          [
            "3. Percentiles de entrega",
            "Usa los percentiles 50, 75 y 85 para hablar de probabilidad de entrega, en lugar de presentar un único promedio como compromiso."
          ],
          [
            "4. Work in Progress",
            "El WIP creciente suele aumentar el cambio de contexto, el envejecimiento, el coste de coordinación y la variabilidad de la entrega."
          ],
          [
            "5. Edad de los elementos en curso",
            "Monitorea elementos no terminados que ya superan el rango normal de entrega del equipo antes de que se conviertan en grandes retrasos."
          ],
          [
            "6. Tiempo bloqueado y dependencias",
            "Sigue con qué frecuencia y durante cuánto tiempo permanece bloqueado el trabajo, incluidas dependencias de otros equipos y proveedores."
          ],
          [
            "7. Trabajo planificado frente a no planificado",
            "Separa trabajo comprometido de roadmap de incidentes, soporte, urgencias y alcance añadido durante la ejecución."
          ]
        ]
      },
      {
        "title": "Un ejemplo práctico de previsión",
        "paragraphs": [
          "Supongamos que un equipo ha entregado entre 8 y 12 elementos comparables por sprint durante los últimos ocho sprints. En lugar de convertir un backlog de 70 puntos en una fecha usando la velocidad media, el liderazgo puede analizar el throughput histórico y los percentiles de tiempo de entrega.",
          "Si el 85% de los elementos similares termina en un máximo de 14 días y el equipo suele completar entre 8 y 12 elementos por sprint, puede presentarse un rango de entrega con probabilidad explícita y enumerar las suposiciones que podrían modificarlo.",
          "Esta previsión tampoco es una garantía, pero está basada en el comportamiento observado del sistema y no en una conversión de puntos estimados."
        ]
      },
      {
        "title": "Cuándo la velocidad sigue siendo útil",
        "paragraphs": [
          "La velocidad no es una métrica mala por definición. Sigue siendo útil para la planificación interna del sprint cuando el equipo es estable, las prácticas de estimación son consistentes y la métrica no se convierte en objetivo.",
          "La clave es el alcance: la velocidad puede apoyar la conversación de planificación de corto plazo, pero no debe ser la principal métrica ejecutiva de desempeño o previsibilidad de entrega."
        ]
      },
      {
        "title": "Conclusión",
        "paragraphs": [
          "La velocidad mide estimaciones completadas. La previsibilidad de entrega exige evidencia sobre flujo, espera, throughput, WIP, envejecimiento, bloqueos y variabilidad.",
          "Los líderes de ingeniería deben dejar de preguntar únicamente si aumentó la velocidad y empezar a evaluar si el trabajo fluye con mayor rapidez, consistencia y menos sorpresas.",
          "La visión más fiable combina métricas cuantitativas de flujo con contexto cualitativo sobre alcance, dependencias, calidad y capacidad del equipo."
        ]
      }
    ],
    "previousArticleLabel": "Artículo relacionado",
    "previousArticleText": "Lead Time vs Cycle Time: Qué Deben Monitorear los Líderes de Ingeniería",
    "previousArticleUrl": "/articles/es/lead-time-vs-cycle-time.html",
    "ctaTitle": "¿Necesitas un modelo más fiable de previsión de entrega?",
    "ctaText": "LS AgileWorks puede ayudar a tu organización a estructurar workflows en Jira, métricas de entrega, dashboards ejecutivos y prácticas de previsión basadas en datos reales de flujo.",
    "ctaButton": "Agendar una conversación",
    "otherContent": "Ver otros contenidos",
    "back": "Volver al contenido",
    "copyright": "© 2026 LS AgileWorks. Todos los derechos reservados."
  }
};
