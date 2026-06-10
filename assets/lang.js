(() => {
  const phrases = [
    // ── influence.html ──
    { ru: "инфлюенсеров в базе", en: "influencers in our network" },
    { ru: "запущенных кампаний", en: "campaigns launched" },
    { ru: "бриф → предложение", en: "brief → proposal" },
    { ru: "Сотрудничество с блогерами и лидерами мнений для нативного и эффективного взаимодействия с целевой аудиторией. Мы знаем, кто работает — и почему.", en: "Working with bloggers and opinion leaders for native, effective engagement with your target audience. We know who works — and why." },
    { ru: "[ 01 / ЧТО ВХОДИТ ]", en: "[ 01 / WHAT'S INCLUDED ]" },
    { ru: "Под ключ", en: "Full service" },
    { ru: "Стратегия кампании", en: "Campaign strategy" },
    { ru: "Цели, KPI, воронка, выбор форматов и каналов. Не шаблон — под конкретный бренд и задачу.", en: "Goals, KPI, funnel, format and channel selection. Custom-built for each brand." },
    { ru: "Подбор инфлюенсеров", en: "Influencer selection" },
    { ru: "Проверка статистики, пересечения аудитории, репутации. Без накрученных цифр и ботов.", en: "Audience stats, overlap and reputation check. No inflated numbers or bots." },
    { ru: "Переговоры и контракты", en: "Negotiations and contracts" },
    { ru: "Берём на себя весь коммерческий трек — от первого касания до подписанных документов.", en: "We handle the entire commercial track — from first contact to signed documents." },
    { ru: "Бриф и креатив", en: "Brief and creative" },
    { ru: "Готовим ТЗ, концепции, сценарии и reference-материалы для каждого креатора.", en: "We prepare briefs, concepts, scripts and reference materials for every creator." },
    { ru: "Продакшн и контроль", en: "Production and control" },
    { ru: "Сопровождаем съёмки, проверяем черновики, согласуем с брендом, контролируем выпуск.", en: "We supervise shoots, review drafts, align with the brand and control publication." },
    { ru: "Аналитика и отчёт", en: "Analytics and reporting" },
    { ru: "Охваты, ER, переходы, CPM, CPC, ROAS. Отчёт с выводами — а не просто скрин статистики.", en: "Reach, ER, clicks, CPM, CPC, ROAS. A report with insights — not just a stats screenshot." },
    { ru: "[ 02 / ПРОЦЕСС ]", en: "[ 02 / PROCESS ]" },
    { ru: "Как мы работаем", en: "How we work" },
    { ru: "Понимаем задачу, аудиторию, tone of voice, KPI и бюджет. Задаём правильные вопросы.", en: "We understand the task, audience, tone of voice, KPI and budget. We ask the right questions." },
    { ru: "Стратегия", en: "Strategy" },
    { ru: "Предлагаем список блогеров, механику, сценарии и прогноз по KPI.", en: "We propose a creator list, mechanics, scripts and KPI forecast." },
    { ru: "Запуск", en: "Launch" },
    { ru: "Контракты, продакшн, согласование контента, публикации в правильное время.", en: "Contracts, production, content approval, publications timed right." },
    { ru: "Отчёт", en: "Report" },
    { ru: "Цифры, выводы, что сработало, что улучшить — и план на следующую волну.", en: "Numbers, takeaways, what worked, what to improve — and a plan for the next wave." },
    { ru: "[ 03 / НАША БАЗА ]", en: "[ 03 / OUR NETWORK ]" },
    { ru: "Эксклюзивные инфлюенсеры", en: "Exclusive influencers" },
    { ru: "Проверенные блогеры, с которыми мы работаем напрямую. Нажмите на карточку, чтобы открыть Instagram.", en: "Verified creators we work with directly. Click a card to open Instagram." },
    { ru: "подп.", en: "followers" },
    // ── about / general ──
    { ru: "О нас", en: "About" },
    { ru: "медиакомпания полного цикла", en: "full-cycle media company" },
    { ru: "Начать проект →", en: "Start project →" },
    { ru: "Поработаем вместе?", en: "Shall we work together?" },
    { ru: "Что интересует?", en: "What are you interested in?" },
    { ru: "О нас", en: "About", kk: "Біз туралы", ko: "회사 소개", zh: "关于我们" },
    { ru: "Кейсы", en: "Cases", kk: "Кейстер", ko: "케이스", zh: "案例" },
    { ru: "Контакты", en: "Contacts", kk: "Байланыс", ko: "연락처", zh: "联系方式" },
    { ru: "Бриф", en: "Brief", kk: "Бриф", ko: "브리프", zh: "需求表" },
    { ru: "Главная", en: "Home", kk: "Басты бет", ko: "홈", zh: "首页" },
    { ru: "Наверх ↑", en: "Back to top ↑", kk: "Жоғары ↑", ko: "위로 ↑", zh: "返回顶部 ↑" },
    { ru: "Заполнить бриф →", en: "Fill brief →", kk: "Бриф толтыру →", ko: "브리프 작성 →", zh: "填写需求表 →" },
    { ru: "Все кейсы →", en: "All cases →", kk: "Барлық кейстер →", ko: "모든 케이스 →", zh: "全部案例 →" },
    { ru: "Все", en: "All", kk: "Барлығы", ko: "전체", zh: "全部" },
    { ru: "Смотреть", en: "View", kk: "Қарау", ko: "보기", zh: "查看" },
    { ru: "Назад", en: "Back", kk: "Артқа", ko: "뒤로", zh: "返回" },
    { ru: "Навигация", en: "Navigation", kk: "Навигация", ko: "내비게이션", zh: "导航" },
    { ru: "Услуги", en: "Services", kk: "Қызметтер", ko: "서비스", zh: "服务" },
    { ru: "Связь", en: "Contact", kk: "Байланыс", ko: "연락", zh: "联系" },
    { ru: "Реквизиты", en: "Legal details", kk: "Реквизиттер", ko: "회사 정보", zh: "公司信息" },
    { ru: "БИН по запросу", en: "BIN on request", kk: "БСН сұраныс бойынша", ko: "BIN 요청 시 제공", zh: "BIN 可按需提供" },
    { ru: "ТОО «SHERIM MEDIA»", en: "TOO SHERIM MEDIA", kk: "ТОО SHERIM MEDIA", ko: "TOO SHERIM MEDIA", zh: "TOO SHERIM MEDIA" },
    { ru: "Афциано, 35Б (Алматы)", en: "Afciano, 35B (Almaty)", kk: "Афциано, 35Б (Алматы)", ko: "Afciano 35B, Almaty", zh: "Afciano 35B, Almaty" },
    { ru: "Открыть в 2ГИС →", en: "Open in 2GIS →", kk: "2ГИС-та ашу →", ko: "2GIS에서 열기 →", zh: "在 2GIS 打开 →" },
    { ru: "медиакомпания полного цикла", en: "full-cycle media company", kk: "толық циклді медиакомпания", ko: "풀사이클 미디어 회사", zh: "全周期媒体公司" },
    { ru: "Начать проект →", en: "Start project →", kk: "Жобаны бастау →", ko: "프로젝트 시작 →", zh: "开始项目 →" },
    { ru: "Поработаем вместе?", en: "Shall we work together?", kk: "Бірге жұмыс істейміз бе?", ko: "함께 일해볼까요?", zh: "一起合作吗？" },
    { ru: "Что интересует?", en: "What are you interested in?", kk: "Сізді не қызықтырады?", ko: "무엇이 필요하신가요?", zh: "您感兴趣的是？" },
    { ru: "Как с вами связаться?", en: "How can we contact you?", kk: "Сізбен қалай байланысамыз?", ko: "연락 방법을 알려주세요.", zh: "如何联系您？" },
    { ru: "Скоро напишем.", en: "We will contact you soon.", kk: "Жақында хабарласамыз.", ko: "곧 연락드리겠습니다.", zh: "我们会尽快联系您。" },
    { ru: "Наши работы", en: "Our work", kk: "Біздің жұмыстар", ko: "작업 사례", zh: "我们的作品" },
    { ru: "Наши работы.", en: "Our work.", kk: "Біздің жұмыстар.", ko: "작업 사례.", zh: "我们的作品。" },
    { ru: "1000+ проектов.", en: "1000+ projects.", kk: "1000+ жоба.", ko: "1000+ 프로젝트.", zh: "1000+ 个项目。" },
    { ru: "проекты.", en: "projects.", kk: "жоба.", ko: "프로젝트.", zh: "项目。" },
    { ru: "проектов всего", en: "projects total", kk: "жоба барлығы", ko: "전체 프로젝트", zh: "项目总数" },
    { ru: "брендов-клиентов", en: "brand clients", kk: "бренд-клиент", ko: "브랜드 고객", zh: "品牌客户" },
    { ru: "суммарный охват", en: "total reach", kk: "жалпы қамту", ko: "총 도달", zh: "总触达" },
    { ru: "направлений услуг", en: "service directions", kk: "қызмет бағыты", ko: "서비스 분야", zh: "服务方向" },
    { ru: "A selection of realized campaigns: creator launches, UGC, media support, production and creative work for brands.", en: "A selection of realized campaigns: creator launches, UGC, media support, production and creative work for brands.", kk: "Брендтерге арналған іске асқан кампаниялар: креаторлар, UGC, медиа қолдау, продакшн және креатив.", ko: "브랜드를 위한 실제 캠페인: 크리에이터 론칭, UGC, 미디어 지원, 프로덕션과 크리에이티브.", zh: "已完成项目合集：达人传播、UGC、媒体支持、制作和品牌创意。" },
    { ru: "Реализовано", en: "Realized", kk: "Іске асты", ko: "완료", zh: "已完成" },
    { ru: "[ реализованный кейс ]", en: "[ realized case ]", kk: "[ іске асқан кейс ]", ko: "[ 완료된 케이스 ]", zh: "[ 已完成案例 ]" },
    { ru: "Клиент", en: "Client", kk: "Клиент", ko: "고객", zh: "客户" },
    { ru: "Направление", en: "Direction", kk: "Бағыт", ko: "분야", zh: "方向" },
    { ru: "Формат", en: "Format", kk: "Формат", ko: "형식", zh: "形式" },
    { ru: "Статус", en: "Status", kk: "Статус", ko: "상태", zh: "状态" },
    { ru: "Задача", en: "Task", kk: "Міндет", ko: "과제", zh: "任务" },
    { ru: "Что сделали", en: "What we did", kk: "Не істедік", ko: "진행 내용", zh: "执行内容" },
    { ru: "Результат", en: "Result", kk: "Нәтиже", ko: "결과", zh: "结果" },
    { ru: "← Все кейсы", en: "← All cases", kk: "← Барлық кейстер", ko: "← 모든 케이스", zh: "← 全部案例" },
    { ru: "Стратегия + контент", en: "Strategy + content", kk: "Стратегия + контент", ko: "전략 + 콘텐츠", zh: "策略 + 内容" },
    { ru: "Фото / видео", en: "Photo / video", kk: "Фото / видео", ko: "사진 / 영상", zh: "照片 / 视频" },
    { ru: "Медиа / PR", en: "Media / PR", kk: "Медиа / PR", ko: "미디어 / PR", zh: "媒体 / PR" },
    { ru: "Creative", en: "Creative", kk: "Креатив", ko: "크리에이티브", zh: "创意" },
    { ru: "Production", en: "Production", kk: "Продакшн", ko: "프로덕션", zh: "制作" },
    { ru: "Influence", en: "Influence", kk: "Influence", ko: "인플루언스", zh: "达人营销" },
    { ru: "UGC", en: "UGC", kk: "UGC", ko: "UGC", zh: "UGC" },
    { ru: "PR", en: "PR", kk: "PR", ko: "PR", zh: "公关" },
    { ru: "Имя", en: "Name", kk: "Аты", ko: "이름", zh: "姓名" },
    { ru: "Телефон", en: "Phone", kk: "Телефон", ko: "전화번호", zh: "电话" },
    { ru: "Сообщение", en: "Message", kk: "Хабарлама", ko: "메시지", zh: "留言" },
    { ru: "Отправить", en: "Send", kk: "Жіберу", ko: "보내기", zh: "发送" },
    // ── common short ──
    { ru: "Бриф", en: "Brief" },
    { ru: "Стратегия", en: "Strategy" },
    { ru: "Форматы", en: "Formats" },
    { ru: "Команда", en: "Team" },
    { ru: "Подход", en: "Approach" },
    { ru: "Локации", en: "Locations" },
    { ru: "Каналы", en: "Channels" },
    { ru: "Скорость", en: "Speed" },
    { ru: "География", en: "Geography" },
    { ru: "Блогеры", en: "Creators" },
    { ru: "Звонок", en: "Call" },
    { ru: "Адрес", en: "Address" },
    { ru: "Философия", en: "Philosophy" },
    { ru: "Старт", en: "Start" },
    { ru: "Масштаб", en: "Scale" },
    { ru: "компания", en: "company" },
    { ru: "принципы", en: "principles" },
    { ru: "из Алматы.", en: "from Almaty." },
    { ru: "Медиа—", en: "Media—" },
    { ru: "Задачи", en: "Goals" },
    { ru: "Фокус", en: "Focus" },
    // ── about.html ──
    { ru: "С 2020 года помогаем брендам расти, выстраивать узнаваемость и находить свою аудиторию. Больше 1000 реализованных проектов — и ещё столько же впереди.", en: "Since 2020, we've been helping brands grow, build recognition and find their audience. Over 1000 projects delivered — and many more ahead." },
    { ru: "проектов за 5 лет", en: "projects in 5 years" },
    { ru: "возвращаются повторно", en: "return clients" },
    { ru: "[ 01 / КТО МЫ ]", en: "[ 01 / WHO WE ARE ]" },
    { ru: "[ 02 / ЧТО ВАЖНО ]", en: "[ 02 / WHAT MATTERS ]" },
    { ru: "[ 03 / КОМАНДА ]", en: "[ 03 / TEAM ]" },
    { ru: "Кто делает", en: "Who we are" },
    { ru: "[ 04 / ПУТЬ ]", en: "[ 04 / JOURNEY ]" },
    { ru: "[ Познакомимся ближе ]", en: "[ Let's get acquainted ]" },
    { ru: "Расскажите о задаче — вернёмся с идеями и пониманием, как мы можем быть полезны.", en: "Tell us about your project — we'll come back with ideas and a clear understanding of how we can help." },
    { ru: "Результат важнее процесса", en: "Results over process" },
    { ru: "Красивый отчёт без движения метрик — провал. Мы считаем деньги клиента как свои и говорим, что сработало, а что нет.", en: "A pretty report without metric movement is a failure. We treat the client's budget as our own and say what worked and what didn't." },
    { ru: "Нативность без фальши", en: "Authenticity without fakery" },
    { ru: "Контент должен выглядеть честно. Если видно, что это реклама «за деньги», — мы плохо сделали свою работу.", en: "Content must look honest. If it's obvious it's a paid ad — we've done our job poorly." },
    { ru: "Скорость без потери качества", en: "Speed without sacrificing quality" },
    { ru: "Тренды живут дни. Мы успеваем — благодаря тому, что процессы отлажены, а команда — на связи.", en: "Trends live for days. We keep up — because our processes are refined and the team is always reachable." },
    { ru: "Прозрачность в цифрах", en: "Transparency in numbers" },
    { ru: "Ни одного «мы не можем показать метрики по NDA». Если работаем — делимся данными и логикой решений.", en: "Not a single 'we can't share metrics due to NDA'. If we work together — we share data and the logic behind decisions." },
    { ru: "Долгосрочные отношения", en: "Long-term relationships" },
    { ru: "98% клиентов возвращаются не потому, что мы «недорогие», а потому что работаем как внутренняя команда.", en: "98% of clients return not because we're cheap, but because we work like an internal team." },
    { ru: "Без шаблонов", en: "No templates" },
    { ru: "Каждый бренд — отдельный проект. Мы не переиспользуем стратегии и не вставляем вчерашние идеи в новый бриф.", en: "Every brand is a separate project. We don't reuse strategies or push yesterday's ideas into a new brief." },
    { ru: "Стратеги и аккаунт-менеджеры", en: "Strategists and account managers" },
    { ru: "Креативная команда", en: "Creative team" },
    { ru: "Инфлюенс-менеджеры", en: "Influence managers" },
    { ru: "Продакшн-команда", en: "Production team" },
    { ru: "СМИ и копирайтеры", en: "Media and copywriters" },
    { ru: "Аналитика и отчётность", en: "Analytics and reporting" },
    { ru: "Мы небольшая, но плотная команда. Каждый — профи в своём направлении. Никаких «менеджеров проектов на трёх клиентов».", en: "We're a small but tight team. Everyone is a pro in their area. No 'project managers stretched across three clients'." },
    { ru: "Основана как небольшая инфлюенс-студия в Алматы.", en: "Founded as a small influence studio in Almaty." },
    { ru: "Первые 100 проектов. Расширение команды до 10+ человек.", en: "First 100 projects. Team expanded to 10+ people." },
    { ru: "Запуск собственного продакшн-направления и базы креаторов.", en: "Launched our own production division and creator network." },
    { ru: "Пришли бренды из топ-50 Казахстана. Стали агентством полного цикла.", en: "Top-50 Kazakhstan brands joined. Became a full-cycle agency." },
    { ru: "1000+ проектов, 120+ брендов, 6 направлений услуг, планы на СНГ.", en: "1000+ projects, 120+ brands, 6 service directions, CIS expansion plans." },
    // ── production.html ──
    { ru: "Разработка и реализация фото- и видеоконтента, который усиливает бренд и притягивает внимание. От идеи до финального экспорта — всё у нас.", en: "Development and production of photo and video content that strengthens your brand and captures attention. From idea to final export — all in-house." },
    { ru: "съёмочных дней в год", en: "shooting days per year" },
    { ru: "финальных креативов", en: "final creatives" },
    { ru: "локаций в портфеле", en: "locations in portfolio" },
    { ru: "стандарт качества", en: "quality standard" },
    { ru: "Реклама, lookbook, клипы, репортаж, продуктовая съёмка, корпоративное видео.", en: "Advertising, lookbook, clips, reportage, product shoots, corporate video." },
    { ru: "Режиссёры, операторы, стилисты, свет, звук, монтаж, цветокор.", en: "Directors, operators, stylists, lighting, sound, editing, color grading." },
    { ru: "Павильоны Алматы, выездные съёмки по Казахстану, международный продакшн.", en: "Almaty studios, on-location shoots across Kazakhstan, international production." },
    { ru: "Идея и сценарий", en: "Idea and script" },
    { ru: "Концепция, сториборд, шот-лист. Проверяем идею до того, как едем снимать.", en: "Concept, storyboard, shot list. We validate the idea before going on set." },
    { ru: "Препродакшн", en: "Pre-production" },
    { ru: "Кастинг, локации, реквизит, график съёмок, логистика и все согласования.", en: "Casting, locations, props, shoot schedule, logistics and all approvals." },
    { ru: "Съёмка", en: "Shoot" },
    { ru: "Кино- и рекламный свет, RED/ARRI/Sony, дроны, стедикам — техника под задачу.", en: "Cinematic and advertising lighting, RED/ARRI/Sony, drones, steadicam — equipment matched to the task." },
    { ru: "Фотосъёмка", en: "Photography" },
    { ru: "Imagery для рекламы, соцсетей, наружки. Lookbook, продукт, still life.", en: "Imagery for advertising, social media, OOH. Lookbook, product, still life." },
    { ru: "Постпродакшн", en: "Post-production" },
    { ru: "Монтаж, цветокор, VFX, графика, озвучка, саунд-дизайн и адаптации под платформы.", en: "Editing, color grading, VFX, graphics, voiceover, sound design and platform adaptations." },
    { ru: "Адаптации", en: "Adaptations" },
    { ru: "Один материал — десятки форматов под TikTok, Instagram, YouTube, TV и наружку.", en: "One piece of content — dozens of formats for TikTok, Instagram, YouTube, TV and OOH." },
    { ru: "Нужен продакшн?", en: "Need production?" },
    { ru: "Пришлите бриф — подберём команду, рассчитаем смету и покажем похожие работы из портфеля.", en: "Send a brief — we'll assemble a team, calculate a quote and show similar portfolio work." },
    // ── ugc.html ──
    { ru: "Контент, который выглядит как настоящий отзыв от реального человека — и поэтому работает лучше рекламы. Креаторы, сценарии, съёмка и бесконечные адаптации.", en: "Content that looks like a real review from a real person — and that's why it outperforms ads. Creators, scripts, shooting and endless adaptations." },
    { ru: "UGC-креаторов в базе", en: "UGC creators in our network" },
    { ru: "единиц UGC", en: "UGC assets created" },
    { ru: "тайминг на выпуск", en: "time to delivery" },
    { ru: "выше CTR vs ads", en: "higher CTR vs ads" },
    { ru: "Performance-реклама, маркетплейсы, соцсети, email, landing pages.", en: "Performance ads, marketplaces, social media, email, landing pages." },
    { ru: "От брифа до финального видео — от 3 дней. Партиями или потоком.", en: "From brief to final video — from 3 days. In batches or as a continuous flow." },
    { ru: "Подбор креаторов", en: "Creator selection" },
    { ru: "Под портрет аудитории: возраст, стиль, локация, речь, внешность, энергетика.", en: "Matched to your audience profile: age, style, location, speech, appearance, energy." },
    { ru: "Сценарии и брифы", en: "Scripts and briefs" },
    { ru: "Hook + insight + CTA. Разные варианты под тестирование и A/B.", en: "Hook + insight + CTA. Multiple variants for testing and A/B." },
    { ru: "Съёмка на телефон", en: "Mobile phone shooting" },
    { ru: "Домашний свет, естественный звук, вертикальный формат — «как у реальных людей».", en: "Home lighting, natural sound, vertical format — just like real people." },
    { ru: "Монтаж и субтитры", en: "Editing and subtitles" },
    { ru: "Динамичный монтаж, вшитые subs, trending sounds, hooks в первые 2 секунды.", en: "Dynamic editing, burned-in subs, trending sounds, hooks in the first 2 seconds." },
    { ru: "A/B варианты", en: "A/B variants" },
    { ru: "Несколько версий на один продукт — для теста в рекламных кабинетах.", en: "Multiple versions for one product — for testing in ad platforms." },
    { ru: "Права и лицензии", en: "Rights and licenses" },
    { ru: "Полные права на использование — в рекламе, на сайтах, в соцсетях, навсегда.", en: "Full usage rights — in ads, on websites, in social media, forever." },
    { ru: "[ 03 / UGC КРЕАТОРЫ ]", en: "[ 03 / UGC CREATORS ]" },
    { ru: "Проверенная база UGC-авторов — отбираем по стилю, аудитории и вовлечённости. Нажмите, чтобы открыть Instagram.", en: "Our verified UGC creator pool — selected by style, audience and engagement. Click to open Instagram." },
    { ru: "Нужен UGC?", en: "Need UGC?" },
    { ru: "Расскажите про продукт и задачу — предложим креаторов, форматы и смету. Можем начать уже на этой неделе.", en: "Tell us about your product and goal — we'll suggest creators, formats and a quote. We can start this week." },
    // ── creative.html ──
    { ru: "Идея, с которой начинается любая заметная кампания. Разработка комплексных рекламных концепций — от инсайта до финального ключевого визуала.", en: "The idea behind every notable campaign. Developing complex advertising concepts — from insight to the final key visual." },
    { ru: "концепций в год", en: "concepts per year" },
    { ru: "интегрированных кампаний", en: "integrated campaigns" },
    { ru: "от брифа до концепта", en: "from brief to concept" },
    { ru: "лет опыта команды", en: "years of team experience" },
    { ru: "Big idea, KV, лонч-кампании, ребрендинг, позиционирование, спецпроекты.", en: "Big idea, KV, launch campaigns, rebranding, positioning, special projects." },
    { ru: "Креативный директор, копирайтеры, арт-директоры, стратеги.", en: "Creative director, copywriters, art directors, strategists." },
    { ru: "Insight first. Идея без инсайта — это просто картинка.", en: "Insight first. An idea without insight is just a picture." },
    { ru: "Стратегия коммуникации", en: "Communication strategy" },
    { ru: "Кому, что и зачем говорим. Позиционирование, ToV, архитектура сообщений.", en: "Who we talk to, what and why. Positioning, ToV, message architecture." },
    { ru: "Центральная идея кампании, которая живёт в разных форматах и каналах.", en: "The central campaign idea that lives across different formats and channels." },
    { ru: "Ключевой визуал", en: "Key visual" },
    { ru: "KV для всех точек контакта: диджитал, OOH, POS, соцсети, упаковка.", en: "KV for all touchpoints: digital, OOH, POS, social media, packaging." },
    { ru: "Сценарии и копирайтинг", en: "Scripts and copywriting" },
    { ru: "Тексты для видео, соцсетей, рекламы — без штампов и «пиши проще».", en: "Texts for video, social media, advertising — no clichés or 'keep it simple' compromises." },
    { ru: "Спецпроекты", en: "Special projects" },
    { ru: "Нестандартные механики, коллаборации, интерактив, ивенты внутри кампании.", en: "Non-standard mechanics, collaborations, interactive content, in-campaign events." },
    { ru: "Ребрендинг", en: "Rebranding" },
    { ru: "Пересборка позиционирования и визуала бренда — под новую аудиторию и задачи.", en: "Rebuilding brand positioning and visuals — for a new audience and goals." },
    { ru: "Нужна идея?", en: "Need an idea?" },
    { ru: "Расскажите, что хотите запустить — предложим концепцию и объясним, почему она сработает.", en: "Tell us what you want to launch — we'll propose a concept and explain why it will work." },
    // ── pr.html ──
    { ru: "Работа с медиа, репутацией и публичным образом бренда. Публикации в СМИ, интервью, event-присутствие, кризисные коммуникации и личный PR.", en: "Working with media, reputation and the public image of your brand. Press publications, interviews, event presence, crisis communications and personal PR." },
    { ru: "СМИ в базе", en: "media outlets in network" },
    { ru: "публикаций в год", en: "publications per year" },
    { ru: "PR-мероприятий", en: "PR events" },
    { ru: " скандалов", en: " scandals" },
    { ru: "с нашими клиентами", en: "with our clients" },
    { ru: "Бизнес-СМИ, lifestyle, отраслевые издания, Telegram-каналы, подкасты.", en: "Business media, lifestyle, industry publications, Telegram channels, podcasts." },
    { ru: "Запуск, экспертный PR, личный PR, антикризис, IPO-PR, репутационный менеджмент.", en: "Launch, expert PR, personal PR, crisis management, IPO-PR, reputation management." },
    { ru: "Системные месячные отчёты с реальными публикациями — не «упоминания в списке».", en: "Systematic monthly reports with real publications — not 'mentions in a list'." },
    { ru: "PR-стратегия", en: "PR strategy" },
    { ru: "Цели, ключевые сообщения, месседжинг, карта спикеров и календарь инфоповодов.", en: "Goals, key messages, messaging map, speaker roster and news calendar." },
    { ru: "Работа с журналистами, питчи, пресс-релизы, организация интервью.", en: "Working with journalists, pitches, press releases, organising interviews." },
    { ru: "Публикации в СМИ", en: "Press publications" },
    { ru: "Экспертные колонки, новости, кейсы, обзоры в ключевых медиа Казахстана и СНГ.", en: "Expert columns, news, cases, reviews in key Kazakhstan and CIS media." },
    { ru: "Личный PR", en: "Personal PR" },
    { ru: "Продвижение первых лиц и экспертов компании — от tone of voice до медиа-присутствия.", en: "Promoting company leaders and experts — from tone of voice to media presence." },
    { ru: "PR-мероприятия", en: "PR events" },
    { ru: "Пресс-завтраки, пресс-туры, закрытые презентации, участие в отраслевых ивентах.", en: "Press breakfasts, press tours, closed presentations, participation in industry events." },
    { ru: "Антикризис", en: "Crisis management" },
    { ru: "Работа с негативом, кризисные коммуникации, мониторинг и быстрая реакция.", en: "Handling negativity, crisis communications, monitoring and rapid response." },
    { ru: "Нужен PR?", en: "Need PR?" },
    { ru: "Расскажите о бренде и текущей репутации — предложим стратегию и медиа-план.", en: "Tell us about your brand and current reputation — we'll propose a strategy and media plan." },
    // ── contact.html ──
    { ru: "Давайте", en: "Let's" },
    { ru: "сделаем", en: "make" },
    { ru: "что-то вместе.", en: "something together." },
    { ru: "Самый быстрый способ — бриф. Если хочется обсудить голосом или просто задать вопрос — все каналы ниже. Отвечаем в течение дня.", en: "The fastest way is a brief. If you'd like to discuss by voice or just ask a question — all channels are below. We respond within the day." },
    { ru: "/ Офис", en: "/ Office" },
    { ru: "/ Часы работы", en: "/ Working hours" },
    { ru: "/ Реквизиты", en: "/ Legal details" },
    { ru: "Казахстан · Almaty City", en: "Kazakhstan · Almaty City" },
    { ru: "Пн—Пт", en: "Mon—Fri" },
    { ru: "Сб", en: "Sat" },
    { ru: "Вс", en: "Sun" },
    { ru: "По договорённости", en: "By appointment" },
    { ru: "Выходной", en: "Day off" },
    { ru: "[ НА КАРТЕ ]", en: "[ ON THE MAP ]" },
    { ru: "Афциано, 35Б · Алматы", en: "Afciano, 35B · Almaty" },
    { ru: "[ Не откладывайте ]", en: "[ Don't delay ]" },
    { ru: "Бриф занимает 5-7 минут. Со своей стороны вернёмся с предложением в течение дня.", en: "The brief takes 5–7 minutes. We'll come back with a proposal within the day." },
    // ── influence.html meta ──
    { ru: "TikTok, Reels, Stories, YouTube, подкасты, спецпроекты, амбассадорство.", en: "TikTok, Reels, Stories, YouTube, podcasts, special projects, brand ambassadorship." },
    { ru: "Казахстан и СНГ. Работаем с блогерами разных языков и регионов.", en: "Kazakhstan and CIS. We work with creators across different languages and regions." },
    { ru: "Nano, Micro, Macro, Mega и знаменитости. Подбираем под бюджет и задачу.", en: "Nano, Micro, Macro, Mega and celebrities. Matched to your budget and goal." },
    // ── shared CTA ──
    { ru: "[ Запустим кампанию ]", en: "[ Let's launch a campaign ]" },
    { ru: "Расскажите о бренде и задаче — вернёмся с предложением по инфлюенсерам и форматам в течение 24 часов.", en: "Tell us about your brand and goal — we'll come back with an influencer and format proposal within 24 hours." }
  ];

  const casesList = [
    { key: "veloesim", tag: "Veloesim", cat: "influence", img: "../assets/cases/veloesim.png", category: { ru: "INFLUENCE", en: "INFLUENCE", kk: "INFLUENCE", ko: "인플루언스", zh: "达人营销" }, title: { ru: "Veloesim<br><em>influence запуск</em>", en: "Veloesim<br><em>influence launch</em>", kk: "Veloesim<br><em>influence іске қосу</em>", ko: "Veloesim<br><em>인플루언스 론칭</em>", zh: "Veloesim<br><em>达人传播启动</em>" }, desc: { ru: "Запуск eSIM-сервиса через блогеров: подбор креаторов, сценарии и коммуникация с фокусом на продукт.", en: "eSIM service launch through creators: shortlist, scripts and product-focused communication.", kk: "Блогерлер арқылы eSIM-сервисті іске қосу: креаторлар, сценарийлер және өнімге бағытталған коммуникация.", ko: "크리에이터를 통한 eSIM 서비스 론칭: 선정, 시나리오, 제품 중심 커뮤니케이션.", zh: "通过达人启动 eSIM 服务：达人名单、脚本和以产品为核心的传播。" } },
    { key: "kulikov", tag: "Kulikov", cat: "influence", img: "../assets/cases/kulikov.png", category: { ru: "INFLUENCE", en: "INFLUENCE", kk: "INFLUENCE", ko: "인플루언스", zh: "达人营销" }, title: { ru: "Kulikov<br><em>influence запуск</em>", en: "Kulikov<br><em>influence launch</em>", kk: "Kulikov<br><em>influence іске қосу</em>", ko: "Kulikov<br><em>인플루언스 론칭</em>", zh: "Kulikov<br><em>达人传播启动</em>" }, desc: { ru: "Подбор креаторов, сценарии интеграций и коммуникация для бренда Kulikov с фокусом на охват.", en: "Creator shortlist, integration scripts and reach-focused communication for the Kulikov brand.", kk: "Kulikov бренді үшін креаторлар, интеграция сценарийлері және қамтуға бағытталған коммуникация.", ko: "Kulikov 브랜드를 위한 크리에이터 선정, 통합 시나리오와 도달 중심 커뮤니케이션.", zh: "为 Kulikov 制定达人名单、植入脚本和以触达为核心的传播。" } },
    { key: "dalba", tag: "d'Alba", cat: "ugc", img: "../assets/cases/dalba.png", category: { ru: "UGC", en: "UGC", kk: "UGC", ko: "UGC", zh: "UGC" }, title: { ru: "d'Alba<br><em>UGC контент</em>", en: "d'Alba<br><em>UGC content</em>", kk: "d'Alba<br><em>UGC контент</em>", ko: "d'Alba<br><em>UGC 콘텐츠</em>", zh: "d'Alba<br><em>UGC 内容</em>" }, desc: { ru: "Нативный beauty-контент: демонстрации продукта, ролики креаторов и короткие материалы для соцсетей.", en: "Native beauty content: product demos, creator videos and short assets for social channels.", kk: "Натив beauty-контент: өнім көрсетілімі, креатор роликтері және соцжеліге қысқа материалдар.", ko: "제품 데모, 크리에이터 영상, 소셜용 숏폼으로 구성된 네이티브 뷰티 콘텐츠.", zh: "原生美妆内容：产品演示、达人视频和社媒短素材。" } },
    { key: "delonghi", tag: "De'Longhi", cat: "pr", img: "../assets/cases/delonghi.png", category: { ru: "PR", en: "PR", kk: "PR", ko: "PR", zh: "公关" }, title: { ru: "De'Longhi<br><em>PR поддержка</em>", en: "De'Longhi<br><em>PR support</em>", kk: "De'Longhi<br><em>PR қолдау</em>", ko: "De'Longhi<br><em>PR 지원</em>", zh: "De'Longhi<br><em>公关支持</em>" }, desc: { ru: "Коммуникационная поддержка бренда через инфоповоды, медиа и аккуратную подачу.", en: "Communication support through news angles, media and careful brand delivery.", kk: "Инфоповод, медиа және ұқыпты подача арқылы коммуникациялық қолдау.", ko: "뉴스 앵글, 미디어, 정교한 브랜드 전달을 통한 커뮤니케이션 지원.", zh: "通过新闻角度、媒体和精细表达提供品牌传播支持。" } },
    { key: "vf", tag: "VT Cosmetics", cat: "influence", img: "../assets/cases/vtcosmetics.png", category: { ru: "INFLUENCE", en: "INFLUENCE", kk: "INFLUENCE", ko: "인플루언스", zh: "达人营销" }, title: { ru: "VT Cosmetics<br><em>creator mix</em>", en: "VT Cosmetics<br><em>creator mix</em>", kk: "VT Cosmetics<br><em>creator mix</em>", ko: "VT Cosmetics<br><em>크리에이터 믹스</em>", zh: "VT Cosmetics<br><em>达人组合</em>" }, desc: { ru: "Beauty-интеграции с релевантными лицами, понятными сообщениями и контролем публикаций.", en: "Beauty creator integrations with relevant faces, clear product messages and publication control.", kk: "Релевант тұлғалармен beauty-интеграциялар, анық хабарламалар және жарияланым бақылауы.", ko: "관련성 높은 크리에이터, 명확한 제품 메시지, 게시 관리가 결합된 뷰티 통합.", zh: "与匹配达人合作的美妆植入，产品信息清晰并控制发布节奏。" } },
    { key: "geely", tag: "Geely", cat: "production", img: "../assets/cases/geely.jpeg", category: { ru: "PRODUCTION", en: "PRODUCTION", kk: "ПРОДАКШН", ko: "프로덕션", zh: "制作" }, title: { ru: "Geely<br><em>motion контент</em>", en: "Geely<br><em>motion content</em>", kk: "Geely<br><em>motion контент</em>", ko: "Geely<br><em>모션 콘텐츠</em>", zh: "Geely<br><em>动态内容</em>" }, desc: { ru: "Видео и визуальные материалы для автомобильной коммуникации: движение, детали и тон бренда.", en: "Video and visual materials for automotive communication: motion, details and brand tone.", kk: "Авто-коммуникацияға арналған видео және визуал: қозғалыс, деталь және бренд тоны.", ko: "자동차 커뮤니케이션을 위한 영상과 비주얼: 모션, 디테일, 브랜드 톤.", zh: "汽车传播视频与视觉素材：动感、细节与品牌调性。" } },
    { key: "kerasys", tag: "Kerasys", cat: "ugc", img: "../assets/cases/kerasys.png", category: { ru: "UGC", en: "UGC", kk: "UGC", ko: "UGC", zh: "UGC" }, title: { ru: "Kerasys<br><em>UGC контент</em>", en: "Kerasys<br><em>UGC content</em>", kk: "Kerasys<br><em>UGC контент</em>", ko: "Kerasys<br><em>UGC 콘텐츠</em>", zh: "Kerasys<br><em>UGC 内容</em>" }, desc: { ru: "UGC-ролики и нативные обзоры для hair-care бренда с фокусом на результат продукта.", en: "UGC videos and native reviews for a hair-care brand focused on product results.", kk: "Hair-care брендіне UGC роликтер мен натив шолулар, өнім нәтижесіне фокус.", ko: "제품 효과에 집중한 헤어케어 브랜드용 UGC 영상과 네이티브 리뷰.", zh: "为洗护品牌制作 UGC 视频和原生测评，聚焦产品效果。" } },
    { key: "celimax", tag: "celimax", cat: "ugc", img: "../assets/cases/celimax.png", category: { ru: "UGC", en: "UGC", kk: "UGC", ko: "UGC", zh: "UGC" }, title: { ru: "celimax<br><em>UGC reviews</em>", en: "celimax<br><em>UGC reviews</em>", kk: "celimax<br><em>UGC reviews</em>", ko: "celimax<br><em>UGC 리뷰</em>", zh: "celimax<br><em>UGC 测评</em>" }, desc: { ru: "Нативные обзоры и короткие beauty-ролики для продукта с понятными преимуществами.", en: "Native reviews and short beauty videos built around clear product benefits.", kk: "Өнім артықшылықтарына құрылған натив шолулар және қысқа beauty-видеолар.", ko: "명확한 제품 효익을 중심으로 만든 네이티브 리뷰와 숏폼 뷰티 영상.", zh: "围绕清晰产品卖点制作原生测评和短视频。" } },
    { key: "anua", tag: "Anua", cat: "influence", img: "../assets/cases/anua.png", category: { ru: "INFLUENCE", en: "INFLUENCE", kk: "INFLUENCE", ko: "인플루언스", zh: "达人营销" }, title: { ru: "Anua<br><em>beauty integrations</em>", en: "Anua<br><em>beauty integrations</em>", kk: "Anua<br><em>beauty integrations</em>", ko: "Anua<br><em>뷰티 통합</em>", zh: "Anua<br><em>美妆植入</em>" }, desc: { ru: "Интеграции K-beauty бренда у релевантных блогеров: честная подача и фокус на состав.", en: "K-beauty brand integrations with relevant creators: honest delivery and ingredient focus.", kk: "Релевант блогерлерде K-beauty интеграциялары: адал подача және құрамға фокус.", ko: "관련 크리에이터와 함께한 K-beauty 통합: 정직한 전달과 성분 중심.", zh: "与匹配达人合作的 K-beauty 植入：真实表达，聚焦成分。" } },
    { key: "axis", tag: "AXIS-Y", cat: "influence", img: "../assets/cases/axis-y.png", category: { ru: "INFLUENCE", en: "INFLUENCE", kk: "INFLUENCE", ko: "인플루언스", zh: "达人营销" }, title: { ru: "AXIS-Y<br><em>beauty launch</em>", en: "AXIS-Y<br><em>beauty launch</em>", kk: "AXIS-Y<br><em>beauty launch</em>", ko: "AXIS-Y<br><em>뷰티 론칭</em>", zh: "AXIS-Y<br><em>美妆启动</em>" }, desc: { ru: "Influence-поддержка K-beauty бренда через подбор блогеров и понятную продуктовую подачу.", en: "Influence support for a K-beauty brand through creator selection and clear product storytelling.", kk: "K-beauty брендіне блогерлер таңдауы мен өнім storytelling арқылы influence қолдау.", ko: "크리에이터 선정과 명확한 제품 스토리텔링을 통한 K-beauty 브랜드 인플루언스 지원.", zh: "通过达人筛选和清晰产品叙事支持 K-beauty 品牌。" } },
    { key: "garnier", tag: "Garnier", cat: "ugc", img: "../assets/cases/garnier.png", category: { ru: "UGC", en: "UGC", kk: "UGC", ko: "UGC", zh: "UGC" }, title: { ru: "Garnier<br><em>нативные обзоры</em>", en: "Garnier<br><em>native reviews</em>", kk: "Garnier<br><em>натив шолулар</em>", ko: "Garnier<br><em>네이티브 리뷰</em>", zh: "Garnier<br><em>原生测评</em>" }, desc: { ru: "Обзоры и UGC-материалы для beauty-продуктов с фокусом на доверие и пользу продукта.", en: "Native reviews and UGC assets for beauty products with a focus on trust and product benefits.", kk: "Сенім мен өнім пайдасына бағытталған beauty UGC шолулар.", ko: "신뢰와 제품 효익에 집중한 뷰티 제품용 네이티브 리뷰와 UGC.", zh: "以信任和产品功效为核心的美妆原生测评和 UGC 素材。" } },
    { key: "bayan", tag: "Баян Сұлу", cat: "production", img: "../assets/cases/bayan-sulu.png", category: { ru: "PRODUCTION", en: "PRODUCTION", kk: "ПРОДАКШН", ko: "프로덕션", zh: "制作" }, title: { ru: "Баян Сұлу<br><em>visual content</em>", en: "Bayan Sulu<br><em>visual content</em>", kk: "Баян Сұлу<br><em>visual content</em>", ko: "Bayan Sulu<br><em>비주얼 콘텐츠</em>", zh: "Bayan Sulu<br><em>视觉内容</em>" }, desc: { ru: "Визуальный контент для FMCG-бренда: продукт, настроение и материалы для digital.", en: "Visual content for an FMCG brand: product, mood and digital-ready assets.", kk: "FMCG брендіне визуал контент: өнім, mood және digital-ready материалдар.", ko: "FMCG 브랜드를 위한 비주얼 콘텐츠: 제품, 무드, 디지털 에셋.", zh: "FMCG 品牌视觉内容：产品、情绪和数字素材。" } }
  ];

  const casesPageCopy = {
    ru: {
      title: '<span class="italic">Наши</span><br><span class="block-font">работы.</span>',
      sub: "Подборка реализованных кампаний: Influence-маркетинг, UGC, production и creative для брендов.",
      stats: ["проектов", "брендов-клиентов из разных ниш", "суммарный охват", "направлений услуг"]
    },
    en: {
      title: '<span class="italic">Our</span><br><span class="block-font">work.</span>',
      sub: "A selection of realized campaigns: Influence marketing, UGC, production and creative work for brands.",
      stats: ["projects", "brand clients from various niches", "total reach", "service directions"]
    },
    kk: {
      title: '<span class="italic">Біздің</span><br><span class="block-font">жұмыстар.</span>',
      sub: "Брендтерге арналған іске асқан кампаниялар: Influence-маркетинг, UGC, продакшн және креатив.",
      stats: ["жоба", "әртүрлі саладағы бренд-клиент", "жалпы қамту", "қызмет бағыты"]
    },
    ko: {
      title: '<span class="italic">Our</span><br><span class="block-font">work.</span>',
      sub: "브랜드를 위한 실제 캠페인: 인플루언스 마케팅, UGC, 프로덕션과 크리에이티브.",
      stats: ["프로젝트", "다양한 분야의 브랜드 고객", "총 도달", "서비스 분야"]
    },
    zh: {
      title: '<span class="italic">我们的</span><br><span class="block-font">作品。</span>',
      sub: "已完成项目合集：达人营销、UGC、制作和品牌创意。",
      stats: ["项目", "来自不同领域的品牌客户", "总触达", "服务方向"]
    }
  };

  const original = new WeakMap();
  const skipTags = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "SELECT", "OPTION", "INPUT", "TEXTAREA"]);
  // Only RU and EN are supported
  const ALLOWED_LANGS = ["ru", "en"];
  let savedLang = localStorage.getItem("siteLang") || "ru";
  if (!ALLOWED_LANGS.includes(savedLang)) savedLang = "ru";
  let activeLang = savedLang;
  let applying = false;

  function clean(text) {
    return text.trim().replace(/\u00a0/g, " ").replace(/\s+/g, " ");
  }

  function normalize(text) {
    return clean(text).toLocaleLowerCase();
  }

  function textNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || skipTags.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (!clean(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }

  function findPhrase(text) {
    const key = normalize(text);
    return phrases.find((phrase) => Object.values(phrase).some((value) => normalize(value) === key));
  }

  function targetText(source) {
    const phrase = findPhrase(source);
    return phrase ? phrase[activeLang] || phrase.ru : null;
  }

  function pick(value) {
    return typeof value === "string" ? value : value[activeLang] || value.ru || value.en;
  }

  function renderCasesPage() {
    const grid = document.querySelector(".cases-grid-big");
    if (!grid) return;
    const copy = casesPageCopy[activeLang] || casesPageCopy.ru;
    const title = document.querySelector(".page-title");
    const sub = document.querySelector(".page-sub");
    if (title) title.innerHTML = copy.title;
    if (sub) sub.textContent = copy.sub;
    document.querySelectorAll(".stat-label").forEach((item, index) => {
      if (copy.stats[index]) item.textContent = copy.stats[index];
    });
    grid.innerHTML = casesList.map((item, index) => `
      <a href="case.html?case=${item.key}" class="case-big" data-cat="${item.cat}">
        <div class="case-head"><div class="case-tag">/ ${item.tag}</div><div class="case-idx">No. ${String(index + 1).padStart(3, "0")}</div></div>
        <div class="case-status">${activeLang === "en" ? "Realized" : activeLang === "zh" ? "已完成" : activeLang === "ko" ? "완료" : activeLang === "kk" ? "Іске асты" : "Реализовано"}</div>
        <h3 class="case-big-title">${pick(item.title)}</h3>
        <p class="case-big-desc">${pick(item.desc)}</p>
        <div class="case-foot"><div class="case-cat">${pick(item.category)}</div><div class="case-arrow">&rarr;</div></div>
      </a>
    `).join("");
  }

  function translateNode(node) {
    if (!original.has(node)) original.set(node, node.nodeValue);
    const base = original.get(node);
    const translated = targetText(base);
    if (!translated) return;
    const next = base.replace(base.trim(), translated);
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function applyDataAttrs(lang) {
    document.querySelectorAll("[data-ru],[data-en]").forEach(el => {
      const val = el.getAttribute("data-" + lang);
      if (val === null) return;
      if (val.includes("<")) el.innerHTML = val;
      else el.textContent = val;
    });
  }

  function apply(lang) {
    activeLang = lang || "ru";
    applying = true;
    textNodes(document.body).forEach(translateNode);
    applyDataAttrs(activeLang);
    renderCasesPage();
    document.documentElement.lang = activeLang;
    // Sync button active states
    document.querySelectorAll(".lang-btn[data-lang]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === activeLang);
    });
    localStorage.setItem("siteLang", activeLang);
    window.dispatchEvent(new CustomEvent("sherim:langchange", { detail: { lang: activeLang } }));
    applying = false;
  }

  // Replace all .lang-switch selects with RU / EN button pairs
  function replaceLangSelects() {
    document.querySelectorAll(".lang-switch").forEach((wrap) => {
      // Skip if already converted
      if (wrap.dataset.converted) return;
      wrap.dataset.converted = "1";
      // Build buttons
      const frag = document.createDocumentFragment();
      ["ru", "en"].forEach((code) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lang-btn" + (activeLang === code ? " active" : "");
        btn.setAttribute("data-lang", code);
        btn.textContent = code.toUpperCase();
        btn.addEventListener("click", () => apply(code));
        frag.appendChild(btn);
      });
      wrap.innerHTML = "";
      wrap.appendChild(frag);
    });
  }

  function init() {
    replaceLangSelects();

    const observer = new MutationObserver((mutations) => {
      if (applying) return;
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") translateNode(mutation.target);
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) translateNode(node);
          if (node.nodeType === Node.ELEMENT_NODE) textNodes(node).forEach(translateNode);
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    apply(activeLang);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.sherimApplyLanguage = apply;
  window.sherimGetLanguage = () => activeLang;
})();
