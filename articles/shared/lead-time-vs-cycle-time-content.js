"use strict";

window.LEAD_CYCLE_ARTICLE = {
  "en": {
    "htmlLang": "en",
    "title": "Lead Time vs Cycle Time: What Engineering Leaders Should Track",
    "description": "Understand the differences between Lead Time and Cycle Time, how to calculate these metrics, and how engineering leaders can use them to improve predictability, flow, and decision-making.",
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
    "category": "Delivery Metrics",
    "heroTitle": "Lead Time vs Cycle Time:",
    "heroHighlight": "What Engineering Leaders Should Track",
    "heroText": "Understand how these two metrics reveal different aspects of delivery flow and help leaders identify bottlenecks, improve predictability, and make data-informed decisions.",
    "readingTime": "8-minute read",
    "intro1": "Lead Time and Cycle Time are fundamental metrics for understanding the efficiency of a software delivery flow. Although they are often used interchangeably, each one measures a different interval and answers a different question.",
    "intro2": "For engineering leaders, tracking only velocity, story points, or sprint completion percentage can produce an incomplete view. Lead Time and Cycle Time help show how long customers wait and how long teams actually spend executing the work.",
    "leadTitle": "What is Lead Time?",
    "leadText": "Lead Time represents the total time between the emergence of a demand and its delivery. In Jira, it is commonly measured from issue creation to resolution or completion.",
    "example": "Example",
    "leadExample": "A story was created on July 1, started on July 8, and completed on July 12.",
    "leadValue": "Lead Time: 11 days",
    "leadConclusion": "This metric reflects the requester or customer experience: how long they waited from demand registration to delivery.",
    "cycleTitle": "What is Cycle Time?",
    "cycleText": "Cycle Time measures the period during which the item was actively being executed. It normally starts when work enters an active status, such as In Progress, and ends when it is completed.",
    "sameExample": "Same example",
    "cycleExample": "The story started on July 8 and was completed on July 12.",
    "cycleValue": "Cycle Time: 4 days",
    "cycleConclusion": "Lead Time shows the total waiting period, while Cycle Time shows the execution duration. The difference between them reveals how long the work remained in the queue before execution began.",
    "differenceTitle": "What is the main difference?",
    "table": {
      "metric": "Metric",
      "start": "Start",
      "end": "End",
      "question": "Question answered",
      "leadStart": "Demand creation",
      "cycleStart": "Execution start",
      "completion": "Completion",
      "leadQuestion": "How long did the customer wait?",
      "cycleQuestion": "How long did the team take to execute?"
    },
    "leadersTitle": "What should engineering leaders track?",
    "leadersIntro": "Both metrics should be analyzed together. Using only one of them can hide important problems in the delivery system.",
    "cards": [
      [
        "1. Trend over time",
        "An isolated average provides little context. Observe whether Lead Time and Cycle Time are increasing, decreasing, or remaining stable across recent weeks or sprints."
      ],
      [
        "2. Distribution and percentiles",
        "Averages can be distorted by a few very old items. In addition to the average, track the median, 75th percentile, and 85th percentile to better understand actual flow predictability."
      ],
      [
        "3. Waiting time before execution",
        "When Lead Time is much higher than Cycle Time, the main problem may be queueing, prioritization, capacity, or dependencies rather than development productivity."
      ],
      [
        "4. Time in status",
        "Analyze how long items remain in development, review, validation, blocked, and dependency-waiting statuses. This helps identify where delays are concentrated."
      ],
      [
        "5. Work types",
        "Bugs, stories, incidents, and technical tasks may behave differently. Segmenting metrics prevents comparisons between items with different complexity and workflows."
      ]
    ],
    "scenariosTitle": "How to interpret common scenarios",
    "scenarios": [
      [
        "High Lead Time and low Cycle Time",
        "The team executes quickly once it starts, but items wait too long in the queue. Investigate prioritization, excess demand, dependencies, and intake policies."
      ],
      [
        "High Lead Time and high Cycle Time",
        "There is waiting before work starts and slowness during execution. Possible causes include excessive WIP, blockers, handoffs, oversized stories, or unclear requirements."
      ],
      [
        "Unstable Cycle Time",
        "Large variation between items reduces predictability. Investigate work size, work types, external dependencies, and workflow inconsistencies."
      ]
    ],
    "mistakesTitle": "Common mistakes when using these metrics",
    "mistakes": [
      "Comparing different teams without considering workflow, context, complexity, and demand type.",
      "Using the metric to evaluate individual performance.",
      "Calculating only averages and ignoring distribution and outliers.",
      "Failing to define clearly which statuses represent the start and end of Cycle Time.",
      "Treating time reduction as an isolated objective without evaluating quality, delivered value, and sustainability."
    ],
    "conclusionTitle": "Conclusion",
    "conclusion": [
      "Lead Time shows the complete customer waiting experience. Cycle Time shows the efficiency of the execution period. Together, these metrics provide a more consistent view of the delivery system.",
      "For engineering leaders, the goal should not be simply to reduce numbers, but to understand where work waits, where it slows down, and which changes can make delivery more predictable.",
      "A sound analysis should combine Lead Time, Cycle Time, throughput, WIP, blocked items, time in status, and the team’s qualitative context."
    ],
    "ctaTitle": "Need to structure delivery metrics in Jira?",
    "ctaText": "LS AgileWorks can help your organization configure workflows, calculate Lead Time and Cycle Time, build dashboards, and turn Jira data into useful delivery insights.",
    "ctaButton": "Book a conversation",
    "otherContent": "View other insights",
    "back": "Back to insights",
    "copyright": "© 2026 LS AgileWorks. All rights reserved."
  },
  "pt": {
    "htmlLang": "pt-BR",
    "title": "Lead Time vs Cycle Time: O Que Líderes de Engenharia Devem Acompanhar",
    "description": "Entenda as diferenças entre Lead Time e Cycle Time, como calcular essas métricas e como líderes de engenharia podem utilizá-las para melhorar previsibilidade, fluxo e tomada de decisão.",
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
    "category": "Métricas de Entrega",
    "heroTitle": "Lead Time vs Cycle Time:",
    "heroHighlight": "O Que Líderes de Engenharia Devem Acompanhar",
    "heroText": "Entenda como essas duas métricas revelam diferentes aspectos do fluxo de entrega e ajudam a liderança a identificar gargalos, melhorar a previsibilidade e tomar decisões com base em dados.",
    "readingTime": "8 minutos de leitura",
    "intro1": "Lead Time e Cycle Time são métricas fundamentais para entender a eficiência de um fluxo de entrega de software. Embora sejam frequentemente utilizadas como sinônimos, cada uma mede um intervalo diferente e responde a uma pergunta distinta.",
    "intro2": "Para líderes de engenharia, acompanhar apenas velocidade, quantidade de story points ou percentual de conclusão da sprint pode produzir uma visão incompleta. Lead Time e Cycle Time ajudam a observar quanto tempo o cliente espera e quanto tempo o time efetivamente leva para executar o trabalho.",
    "leadTitle": "O que é Lead Time?",
    "leadText": "Lead Time representa o tempo total entre o surgimento de uma demanda e sua entrega. Em um contexto de Jira, normalmente pode ser medido desde a criação do item até sua resolução ou conclusão.",
    "example": "Exemplo",
    "leadExample": "Uma história foi criada em 1º de julho, começou a ser desenvolvida em 8 de julho e foi concluída em 12 de julho.",
    "leadValue": "Lead Time: 11 dias",
    "leadConclusion": "Essa métrica representa a experiência do solicitante ou cliente: quanto tempo ele precisou esperar desde o registro da demanda até a entrega do resultado.",
    "cycleTitle": "O que é Cycle Time?",
    "cycleText": "Cycle Time mede o período em que o item esteve efetivamente em execução. Em geral, o cálculo começa quando o item entra em um status de trabalho ativo, como In Progress, e termina quando ele é concluído.",
    "sameExample": "Mesmo exemplo",
    "cycleExample": "A história começou a ser desenvolvida em 8 de julho e foi concluída em 12 de julho.",
    "cycleValue": "Cycle Time: 4 dias",
    "cycleConclusion": "Enquanto o Lead Time apresenta a espera total, o Cycle Time mostra a duração da execução. A diferença entre as duas métricas revela quanto tempo a demanda permaneceu aguardando antes de ser iniciada.",
    "differenceTitle": "Qual é a principal diferença?",
    "table": {
      "metric": "Métrica",
      "start": "Início",
      "end": "Fim",
      "question": "Pergunta respondida",
      "leadStart": "Criação da demanda",
      "cycleStart": "Início da execução",
      "completion": "Conclusão",
      "leadQuestion": "Quanto tempo o cliente esperou?",
      "cycleQuestion": "Quanto tempo o time levou para executar?"
    },
    "leadersTitle": "O que líderes de engenharia devem acompanhar?",
    "leadersIntro": "As duas métricas devem ser analisadas em conjunto. Utilizar apenas uma delas pode ocultar problemas importantes no sistema de entrega.",
    "cards": [
      [
        "1. Tendência ao longo do tempo",
        "Uma média isolada oferece pouco contexto. Observe se Lead Time e Cycle Time estão aumentando, diminuindo ou permanecendo estáveis ao longo das últimas semanas ou sprints."
      ],
      [
        "2. Distribuição e percentis",
        "A média pode ser distorcida por poucos itens muito antigos. Além da média, acompanhe mediana, percentil 75 e percentil 85 para compreender melhor a previsibilidade real do fluxo."
      ],
      [
        "3. Tempo de espera antes da execução",
        "Quando o Lead Time é muito maior que o Cycle Time, o principal problema pode estar na fila, priorização, capacidade ou dependências, e não necessariamente na produtividade do desenvolvimento."
      ],
      [
        "4. Tempo por status",
        "Analise quanto tempo os itens permanecem em desenvolvimento, revisão, validação, bloqueio e espera por dependências. Isso permite identificar em qual parte do workflow os atrasos estão concentrados."
      ],
      [
        "5. Tipos de trabalho",
        "Bugs, histórias, incidentes e tarefas técnicas podem apresentar comportamentos diferentes. Segmentar as métricas evita comparar itens com complexidades e fluxos distintos."
      ]
    ],
    "scenariosTitle": "Como interpretar alguns cenários comuns",
    "scenarios": [
      [
        "Lead Time alto e Cycle Time baixo",
        "O time executa rapidamente quando começa, mas os itens esperam muito tempo na fila. Investigue priorização, excesso de demanda, dependências e políticas de entrada no fluxo."
      ],
      [
        "Lead Time e Cycle Time altos",
        "Existe espera antes do início e lentidão durante a execução. Pode haver excesso de WIP, bloqueios, handoffs, histórias grandes ou baixa clareza de requisitos."
      ],
      [
        "Cycle Time instável",
        "Grandes variações entre os itens reduzem a previsibilidade. Investigue diferenças de tamanho, tipos de trabalho, dependências externas e inconsistências no workflow."
      ]
    ],
    "mistakesTitle": "Erros comuns ao usar essas métricas",
    "mistakes": [
      "Comparar equipes diferentes sem considerar workflow, contexto, complexidade e tipo de demanda.",
      "Usar a métrica individualmente para avaliar desempenho de pessoas.",
      "Calcular apenas médias e ignorar a distribuição e os itens extremos.",
      "Não definir claramente quais status representam início e fim do Cycle Time.",
      "Considerar redução de tempo como objetivo isolado, sem avaliar qualidade, valor entregue e sustentabilidade."
    ],
    "conclusionTitle": "Conclusão",
    "conclusion": [
      "Lead Time mostra a experiência completa de espera do cliente. Cycle Time mostra a eficiência do período de execução. Juntas, essas métricas oferecem uma visão mais consistente do sistema de entrega.",
      "Para líderes de engenharia, o objetivo não deve ser simplesmente reduzir números, mas compreender onde o trabalho espera, onde ele desacelera e quais mudanças podem tornar a entrega mais previsível.",
      "Uma análise adequada deve combinar Lead Time, Cycle Time, throughput, WIP, itens bloqueados, tempo por status e contexto qualitativo do time."
    ],
    "ctaTitle": "Precisa estruturar métricas de entrega no Jira?",
    "ctaText": "A LS AgileWorks pode ajudar sua organização a configurar workflows, calcular Lead Time e Cycle Time, construir dashboards e transformar dados do Jira em informações úteis para decisões de entrega.",
    "ctaButton": "Agendar uma conversa",
    "otherContent": "Ver outros conteúdos",
    "back": "Voltar para conteúdos",
    "copyright": "© 2026 LS AgileWorks. Todos os direitos reservados."
  },
  "es": {
    "htmlLang": "es",
    "title": "Lead Time vs Cycle Time: Qué Deben Monitorear los Líderes de Ingeniería",
    "description": "Comprende las diferencias entre Lead Time y Cycle Time, cómo calcular estas métricas y cómo los líderes de ingeniería pueden utilizarlas para mejorar la previsibilidad, el flujo y la toma de decisiones.",
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
    "category": "Métricas de Entrega",
    "heroTitle": "Lead Time vs Cycle Time:",
    "heroHighlight": "Qué Deben Monitorear los Líderes de Ingeniería",
    "heroText": "Comprende cómo estas dos métricas revelan diferentes aspectos del flujo de entrega y ayudan al liderazgo a identificar cuellos de botella, mejorar la previsibilidad y tomar decisiones basadas en datos.",
    "readingTime": "8 minutos de lectura",
    "intro1": "Lead Time y Cycle Time son métricas fundamentales para comprender la eficiencia de un flujo de entrega de software. Aunque suelen utilizarse como sinónimos, cada una mide un intervalo diferente y responde a una pregunta distinta.",
    "intro2": "Para los líderes de ingeniería, seguir solo la velocidad, los story points o el porcentaje de finalización del sprint puede producir una visión incompleta. Lead Time y Cycle Time muestran cuánto espera el cliente y cuánto tarda realmente el equipo en ejecutar el trabajo.",
    "leadTitle": "¿Qué es Lead Time?",
    "leadText": "Lead Time representa el tiempo total entre la aparición de una demanda y su entrega. En Jira, normalmente se mide desde la creación del elemento hasta su resolución o finalización.",
    "example": "Ejemplo",
    "leadExample": "Una historia fue creada el 1 de julio, comenzó el 8 de julio y finalizó el 12 de julio.",
    "leadValue": "Lead Time: 11 días",
    "leadConclusion": "Esta métrica representa la experiencia del solicitante o cliente: cuánto tiempo esperó desde el registro de la demanda hasta la entrega.",
    "cycleTitle": "¿Qué es Cycle Time?",
    "cycleText": "Cycle Time mide el período durante el cual el elemento estuvo realmente en ejecución. Normalmente comienza cuando entra en un estado activo, como In Progress, y termina cuando se completa.",
    "sameExample": "Mismo ejemplo",
    "cycleExample": "La historia comenzó el 8 de julio y finalizó el 12 de julio.",
    "cycleValue": "Cycle Time: 4 días",
    "cycleConclusion": "Lead Time muestra la espera total, mientras que Cycle Time muestra la duración de la ejecución. La diferencia revela cuánto tiempo permaneció el trabajo en cola antes de comenzar.",
    "differenceTitle": "¿Cuál es la principal diferencia?",
    "table": {
      "metric": "Métrica",
      "start": "Inicio",
      "end": "Fin",
      "question": "Pregunta respondida",
      "leadStart": "Creación de la demanda",
      "cycleStart": "Inicio de la ejecución",
      "completion": "Finalización",
      "leadQuestion": "¿Cuánto tiempo esperó el cliente?",
      "cycleQuestion": "¿Cuánto tardó el equipo en ejecutar?"
    },
    "leadersTitle": "¿Qué deben monitorear los líderes de ingeniería?",
    "leadersIntro": "Ambas métricas deben analizarse en conjunto. Utilizar solo una puede ocultar problemas importantes del sistema de entrega.",
    "cards": [
      [
        "1. Tendencia a lo largo del tiempo",
        "Un promedio aislado ofrece poco contexto. Observa si Lead Time y Cycle Time aumentan, disminuyen o permanecen estables durante las últimas semanas o sprints."
      ],
      [
        "2. Distribución y percentiles",
        "El promedio puede verse distorsionado por pocos elementos muy antiguos. Además del promedio, sigue la mediana y los percentiles 75 y 85 para comprender mejor la previsibilidad real del flujo."
      ],
      [
        "3. Tiempo de espera antes de la ejecución",
        "Cuando Lead Time es mucho mayor que Cycle Time, el problema principal puede estar en la cola, la priorización, la capacidad o las dependencias, y no necesariamente en la productividad del desarrollo."
      ],
      [
        "4. Tiempo por estado",
        "Analiza cuánto tiempo permanecen los elementos en desarrollo, revisión, validación, bloqueo y espera por dependencias. Esto ayuda a localizar dónde se concentran los retrasos."
      ],
      [
        "5. Tipos de trabajo",
        "Bugs, historias, incidentes y tareas técnicas pueden comportarse de forma diferente. Segmentar las métricas evita comparar elementos con complejidades y flujos distintos."
      ]
    ],
    "scenariosTitle": "Cómo interpretar escenarios comunes",
    "scenarios": [
      [
        "Lead Time alto y Cycle Time bajo",
        "El equipo ejecuta rápidamente cuando comienza, pero los elementos esperan demasiado en la cola. Investiga priorización, exceso de demanda, dependencias y políticas de entrada."
      ],
      [
        "Lead Time y Cycle Time altos",
        "Existe espera antes del inicio y lentitud durante la ejecución. Puede haber exceso de WIP, bloqueos, handoffs, historias demasiado grandes o requisitos poco claros."
      ],
      [
        "Cycle Time inestable",
        "Las grandes variaciones reducen la previsibilidad. Investiga diferencias de tamaño, tipos de trabajo, dependencias externas e inconsistencias del workflow."
      ]
    ],
    "mistakesTitle": "Errores comunes al usar estas métricas",
    "mistakes": [
      "Comparar equipos diferentes sin considerar workflow, contexto, complejidad y tipo de demanda.",
      "Usar la métrica para evaluar el desempeño individual.",
      "Calcular solo promedios e ignorar la distribución y los valores extremos.",
      "No definir claramente qué estados representan el inicio y el fin del Cycle Time.",
      "Tratar la reducción del tiempo como un objetivo aislado sin evaluar calidad, valor entregado y sostenibilidad."
    ],
    "conclusionTitle": "Conclusión",
    "conclusion": [
      "Lead Time muestra la experiencia completa de espera del cliente. Cycle Time muestra la eficiencia del período de ejecución. Juntas, estas métricas ofrecen una visión más consistente del sistema de entrega.",
      "Para los líderes de ingeniería, el objetivo no debe ser simplemente reducir números, sino comprender dónde espera el trabajo, dónde se ralentiza y qué cambios pueden hacer la entrega más predecible.",
      "Un análisis adecuado debe combinar Lead Time, Cycle Time, throughput, WIP, elementos bloqueados, tiempo por estado y el contexto cualitativo del equipo."
    ],
    "ctaTitle": "¿Necesitas estructurar métricas de entrega en Jira?",
    "ctaText": "LS AgileWorks puede ayudar a tu organización a configurar workflows, calcular Lead Time y Cycle Time, construir dashboards y convertir los datos de Jira en información útil para decisiones de entrega.",
    "ctaButton": "Agendar una conversación",
    "otherContent": "Ver otros contenidos",
    "back": "Volver al contenido",
    "copyright": "© 2026 LS AgileWorks. Todos los derechos reservados."
  }
};
