// ===== AI工具数据 =====
const toolsData = [
    // ===== AI写作 =====
    {
        id: 1,
        name: 'ChatGPT',
        icon: '🤖',
        iconBg: 1,
        url: 'https://chat.openai.com',
        desc: 'OpenAI开发的对话式AI助手，支持写作、翻译、编程、问答等多种任务，是目前最强大的AI工具之一',
        category: 'writing',
        tags: ['free', 'hot'],
        categoryName: 'AI写作'
    },
    {
        id: 2,
        name: 'DeepSeek',
        icon: '🧠',
        iconBg: 4,
        url: 'https://chat.deepseek.com',
        desc: '国产免费AI助手，支持超长上下文（100万token），可处理整本书籍，推理能力强悍',
        category: 'writing',
        tags: ['free', 'hot', 'new'],
        categoryName: 'AI写作'
    },
    {
        id: 3,
        name: 'Kimi',
        icon: '📝',
        iconBg: 6,
        url: 'https://kimi.moonshot.cn',
        desc: '月之暗面开发的AI助手，擅长长文本处理，支持上传PDF、Word等文件进行分析总结',
        category: 'writing',
        tags: ['free', 'hot'],
        categoryName: 'AI写作'
    },
    {
        id: 4,
        name: '文心一言',
        icon: '📖',
        iconBg: 4,
        url: 'https://yiyan.baidu.com',
        desc: '百度开发的AI对话助手，支持文本生成、图片生成、文档分析等功能，中文理解能力强',
        category: 'writing',
        tags: ['free'],
        categoryName: 'AI写作'
    },
    {
        id: 5,
        name: '通义千问',
        icon: '✨',
        iconBg: 2,
        url: 'https://tongyi.aliyun.com',
        desc: '阿里云开发的AI助手，支持对话、写作、编程、翻译等多种功能，免费使用',
        category: 'writing',
        tags: ['free'],
        categoryName: 'AI写作'
    },
    {
        id: 6,
        name: '豆包',
        icon: '🫘',
        iconBg: 3,
        url: 'https://www.doubao.com',
        desc: '字节跳动开发的AI对话助手，支持文本生成、图片理解、语音对话等功能',
        category: 'writing',
        tags: ['free'],
        categoryName: 'AI写作'
    },
    {
        id: 7,
        name: 'Claude',
        icon: '🌿',
        iconBg: 6,
        url: 'https://claude.ai',
        desc: 'Anthropic开发的AI助手，以安全性和长文本处理能力著称，适合深度分析和写作',
        category: 'writing',
        tags: ['free'],
        categoryName: 'AI写作'
    },
    {
        id: 8,
        name: 'Gemini',
        icon: '⭐',
        iconBg: 5,
        url: 'https://gemini.google.com',
        desc: 'Google开发的AI助手，支持文本、图片、视频、音频等多模态理解',
        category: 'writing',
        tags: ['free'],
        categoryName: 'AI写作'
    },
    {
        id: 9,
        name: '讯飞星火',
        icon: '🔥',
        iconBg: 7,
        url: 'https://xinghuo.xfyun.cn',
        desc: '科大讯飞开发的AI助手，语音识别能力强，支持多轮对话和文档处理',
        category: 'writing',
        tags: ['free'],
        categoryName: 'AI写作'
    },
    {
        id: 10,
        name: '腾讯混元',
        icon: '🌀',
        iconBg: 4,
        url: 'https://hunyuan.tencent.com',
        desc: '腾讯开发的AI助手，支持文本生成、图片理解、文档分析等功能',
        category: 'writing',
        tags: ['free'],
        categoryName: 'AI写作'
    },

    // ===== AI绘画 =====
    {
        id: 11,
        name: 'Midjourney',
        icon: '🎨',
        iconBg: 3,
        url: 'https://www.midjourney.com',
        desc: '最受欢迎的AI绘画工具，通过Discord使用，生成的图片质量极高，艺术感强',
        category: 'image',
        tags: ['hot'],
        categoryName: 'AI绘画'
    },
    {
        id: 12,
        name: 'Stable Diffusion',
        icon: '🖼️',
        iconBg: 4,
        url: 'https://stability.ai',
        desc: '开源AI绘画模型，可本地部署免费使用，支持文生图和图生图，可玩性极高',
        category: 'image',
        tags: ['free'],
        categoryName: 'AI绘画'
    },
    {
        id: 13,
        name: 'DALL-E 3',
        icon: '🎭',
        iconBg: 1,
        url: 'https://openai.com/dall-e-3',
        desc: 'OpenAI开发的AI绘画工具，集成在ChatGPT中，文字理解能力强，生成准确',
        category: 'image',
        tags: [],
        categoryName: 'AI绘画'
    },
    {
        id: 14,
        name: '文心一格',
        icon: '🖌️',
        iconBg: 4,
        url: 'https://yige.baidu.com',
        desc: '百度开发的AI绘画工具，支持中文提示词，生成中国风图片效果出色',
        category: 'image',
        tags: ['free'],
        categoryName: 'AI绘画'
    },
    {
        id: 15,
        name: '通义万相',
        icon: '🌈',
        iconBg: 2,
        url: 'https://tongyi.aliyun.com/wanxiang',
        desc: '阿里开发的AI绘画工具，支持文生图和图生图，免费使用',
        category: 'image',
        tags: ['free'],
        categoryName: 'AI绘画'
    },
    {
        id: 16,
        name: 'Leonardo.ai',
        icon: '🎯',
        iconBg: 5,
        url: 'https://leonardo.ai',
        desc: '免费的AI绘画平台，提供多种模型和风格，每天免费生成大量图片',
        category: 'image',
        tags: ['free'],
        categoryName: 'AI绘画'
    },
    {
        id: 17,
        name: 'LiblibAI',
        icon: '📚',
        iconBg: 6,
        url: 'https://www.liblibai.com',
        desc: '国内AI绘画社区，提供Stable Diffusion在线使用，有大量模型和教程',
        category: 'image',
        tags: ['free'],
        categoryName: 'AI绘画'
    },
    {
        id: 18,
        name: 'SeaArt',
        icon: '🌊',
        iconBg: 4,
        url: 'https://www.seaart.ai',
        desc: '免费的AI绘画工具，支持多种风格，操作简单，适合新手',
        category: 'image',
        tags: ['free'],
        categoryName: 'AI绘画'
    },

    // ===== AI编程 =====
    {
        id: 19,
        name: 'GitHub Copilot',
        icon: '💻',
        iconBg: 1,
        url: 'https://github.com/features/copilot',
        desc: 'GitHub推出的AI编程助手，集成在VS Code等IDE中，可自动补全代码、生成函数',
        category: 'code',
        tags: ['hot'],
        categoryName: 'AI编程'
    },
    {
        id: 20,
        name: 'Cursor',
        icon: '📟',
        iconBg: 2,
        url: 'https://cursor.sh',
        desc: 'AI优先的代码编辑器，内置ChatGPT，可直接对话生成和修改代码，免费使用',
        category: 'code',
        tags: ['free', 'hot', 'new'],
        categoryName: 'AI编程'
    },
    {
        id: 21,
        name: 'Windsurf',
        icon: '🏄',
        iconBg: 4,
        url: 'https://codeium.com/windsurf',
        desc: '新一代AI代码编辑器，支持智能代码补全、AI对话、自动重构等功能',
        category: 'code',
        tags: ['free', 'new'],
        categoryName: 'AI编程'
    },
    {
        id: 22,
        name: '通义灵码',
        icon: '🔧',
        iconBg: 6,
        url: 'https://tongyi.aliyun.com/lingma',
        desc: '阿里开发的AI编程助手，支持多种IDE，提供代码补全和智能问答',
        category: 'code',
        tags: ['free'],
        categoryName: 'AI编程'
    },
    {
        id: 23,
        name: 'Codeium',
        icon: '⚡',
        iconBg: 5,
        url: 'https://codeium.com',
        desc: '免费的AI编程助手，支持40+语言和40+编辑器，提供代码补全和搜索',
        category: 'code',
        tags: ['free'],
        categoryName: 'AI编程'
    },
    {
        id: 24,
        name: 'Tabnine',
        icon: '🔮',
        iconBg: 3,
        url: 'https://www.tabnine.com',
        desc: 'AI代码补全工具，支持多种编程语言和IDE，提供个性化代码建议',
        category: 'code',
        tags: ['free'],
        categoryName: 'AI编程'
    },
    {
        id: 25,
        name: 'Amazon CodeWhisperer',
        icon: '☁️',
        iconBg: 5,
        url: 'https://aws.amazon.com/codewhisperer',
        desc: 'AWS推出的AI编程助手，免费使用，支持多种语言和IDE',
        category: 'code',
        tags: ['free'],
        categoryName: 'AI编程'
    },
    {
        id: 26,
        name: 'Replit AI',
        icon: '🔄',
        iconBg: 7,
        url: 'https://replit.com',
        desc: '在线编程平台，内置AI助手，可直接对话生成完整项目，适合学习编程',
        category: 'code',
        tags: ['free'],
        categoryName: 'AI编程'
    },

    {
        id: 51,
        name: 'agent-qa',
        icon: '🧪',
        iconBg: 4,
        url: 'https://vostride.com',
        desc: '网页与移动端 AI 测试，具备 memidex 持久记忆、经验证的自我改进、MCP 接入与可回看的运行证据；模型费用另计',
        category: 'code',
        tags: [],
        categoryName: 'AI编程'
    },

    // ===== AI视频 =====
    {
        id: 27,
        name: 'Sora',
        icon: '🎬',
        iconBg: 1,
        url: 'https://openai.com/sora',
        desc: 'OpenAI开发的AI视频生成工具，可根据文字描述生成高质量视频，效果震撼',
        category: 'video',
        tags: ['hot', 'new'],
        categoryName: 'AI视频'
    },
    {
        id: 28,
        name: 'Runway Gen-3',
        icon: '🎥',
        iconBg: 3,
        url: 'https://runwayml.com',
        desc: '专业的AI视频生成和编辑平台，支持文生视频、图生视频、视频编辑等功能',
        category: 'video',
        tags: [],
        categoryName: 'AI视频'
    },
    {
        id: 29,
        name: '可灵AI',
        icon: '🎞️',
        iconBg: 4,
        url: 'https://kling.kuaishou.com',
        desc: '快手开发的AI视频生成工具，支持文生视频和图生视频，效果出色',
        category: 'video',
        tags: ['free', 'hot'],
        categoryName: 'AI视频'
    },
    {
        id: 30,
        name: 'Pika',
        icon: '🦊',
        iconBg: 5,
        url: 'https://pika.art',
        desc: 'AI视频生成平台，操作简单，支持多种视频风格和特效',
        category: 'video',
        tags: ['free'],
        categoryName: 'AI视频'
    },
    {
        id: 31,
        name: '剪映',
        icon: '✂️',
        iconBg: 7,
        url: 'https://jv.ulikecam.com',
        desc: '字节跳动开发的视频剪辑软件，内置大量AI功能，如AI配音、AI字幕、AI抠图等',
        category: 'video',
        tags: ['free', 'hot'],
        categoryName: 'AI视频'
    },
    {
        id: 32,
        name: 'HeyGen',
        icon: '👤',
        iconBg: 2,
        url: 'https://www.heygen.com',
        desc: 'AI数字人视频生成工具，上传照片即可生成会说话的数字人视频',
        category: 'video',
        tags: [],
        categoryName: 'AI视频'
    },
    {
        id: 33,
        name: 'D-ID',
        icon: '🪄',
        iconBg: 6,
        url: 'https://www.d-id.com',
        desc: 'AI数字人平台，可将照片或头像转化为会说话的视频，支持多种语言',
        category: 'video',
        tags: [],
        categoryName: 'AI视频'
    },
    {
        id: 34,
        name: 'CapCut',
        icon: '🎪',
        iconBg: 3,
        url: 'https://www.capcut.com',
        desc: '剪映国际版，提供AI视频编辑功能，包括自动字幕、AI调色、AI特效等',
        category: 'video',
        tags: ['free'],
        categoryName: 'AI视频'
    },

    // ===== AI办公 =====
    {
        id: 35,
        name: 'Gamma',
        icon: '📊',
        iconBg: 1,
        url: 'https://gamma.app',
        desc: 'AI PPT生成工具，输入主题即可自动生成精美的演示文稿，支持多种模板',
        category: 'office',
        tags: ['free', 'hot'],
        categoryName: 'AI办公'
    },
    {
        id: 36,
        name: 'Notion AI',
        icon: '📓',
        iconBg: 2,
        url: 'https://www.notion.so',
        desc: 'AI增强的笔记和协作工具，可自动生成文章、总结、翻译等，提高工作效率',
        category: 'office',
        tags: [],
        categoryName: 'AI办公'
    },
    {
        id: 37,
        name: '讯飞听见',
        icon: '🎙️',
        iconBg: 4,
        url: 'https://www.iflyrec.com',
        desc: 'AI语音转文字工具，支持多语种识别，准确率高，适合会议记录和采访整理',
        category: 'office',
        tags: ['free'],
        categoryName: 'AI办公'
    },
    {
        id: 38,
        name: '百度网盘AI',
        icon: '☁️',
        iconBg: 4,
        url: 'https://pan.baidu.com',
        desc: '百度网盘内置AI功能，支持AI图片搜索、文档摘要、视频字幕等',
        category: 'office',
        tags: ['free'],
        categoryName: 'AI办公'
    },
    {
        id: 39,
        name: 'WPS AI',
        icon: '📄',
        iconBg: 4,
        url: 'https://www.wps.cn',
        desc: 'WPS Office内置AI助手，支持AI写作、AI排版、AI生成PPT等功能',
        category: 'office',
        tags: ['free'],
        categoryName: 'AI办公'
    },
    {
        id: 40,
        name: 'Beautiful.ai',
        icon: '🎯',
        iconBg: 3,
        url: 'https://www.beautiful.ai',
        desc: 'AI PPT设计工具，自动排版和美化幻灯片，让演示文稿更专业',
        category: 'office',
        tags: [],
        categoryName: 'AI办公'
    },
    {
        id: 41,
        name: 'Otter.ai',
        icon: '🦦',
        iconBg: 5,
        url: 'https://otter.ai',
        desc: 'AI会议记录工具，实时转录会议内容，自动生成会议摘要和待办事项',
        category: 'office',
        tags: ['free'],
        categoryName: 'AI办公'
    },
    {
        id: 42,
        name: 'Grammarly',
        icon: '✍️',
        iconBg: 6,
        url: 'https://www.grammarly.com',
        desc: 'AI写作助手，可检查语法错误、优化表达风格，支持英文写作',
        category: 'office',
        tags: ['free'],
        categoryName: 'AI办公'
    },

    // ===== AI学习 =====
    {
        id: 43,
        name: '可汗学院AI',
        icon: '🎓',
        iconBg: 6,
        url: 'https://www.khanacademy.org',
        desc: '免费在线学习平台，内置AI助手Khanmigo，可提供个性化学习辅导',
        category: 'study',
        tags: ['free'],
        categoryName: 'AI学习'
    },
    {
        id: 44,
        name: 'Quizlet',
        icon: '📇',
        iconBg: 4,
        url: 'https://quizlet.com',
        desc: 'AI学习卡片工具，可自动生成学习卡片和测验，支持多种学习模式',
        category: 'study',
        tags: ['free'],
        categoryName: 'AI学习'
    },
    {
        id: 45,
        name: '有道翻译',
        icon: '🌐',
        iconBg: 7,
        url: 'https://fanyi.youdao.com',
        desc: '网易开发的AI翻译工具，支持多语种翻译，还有AI写作和语法分析功能',
        category: 'study',
        tags: ['free'],
        categoryName: 'AI学习'
    },
    {
        id: 46,
        name: 'DeepL',
        icon: '🌍',
        iconBg: 2,
        url: 'https://www.deepl.com',
        desc: '最准确的AI翻译工具之一，支持多语种翻译，翻译质量高，适合学术翻译',
        category: 'study',
        tags: ['free'],
        categoryName: 'AI学习'
    },
    {
        id: 47,
        name: '知云文献翻译',
        icon: '📚',
        iconBg: 4,
        url: 'https://www.zhiyunwenxian.com',
        desc: 'AI学术文献翻译工具，支持PDF翻译，保留原文格式，适合阅读英文论文',
        category: 'study',
        tags: ['free'],
        categoryName: 'AI学习'
    },
    {
        id: 48,
        name: 'Perplexity',
        icon: '🔍',
        iconBg: 1,
        url: 'https://www.perplexity.ai',
        desc: 'AI搜索引擎，可回答问题并附上来源链接，适合学术研究和信息查询',
        category: 'study',
        tags: ['free', 'hot'],
        categoryName: 'AI学习'
    },
    {
        id: 49,
        name: 'Consensus',
        icon: '📋',
        iconBg: 6,
        url: 'https://consensus.app',
        desc: 'AI学术搜索引擎，专门搜索学术论文，可快速找到研究结论和证据',
        category: 'study',
        tags: [],
        categoryName: 'AI学习'
    },
    {
        id: 50,
        name: 'Elicit',
        icon: '🔬',
        iconBg: 5,
        url: 'https://elicit.com',
        desc: 'AI研究助手，可自动搜索和分析学术论文，提取关键信息和结论',
        category: 'study',
        tags: [],
        categoryName: 'AI学习'
    }
];

// ===== 分类数据 =====
const categories = [
    { id: 'writing', name: 'AI写作', icon: '✍️', desc: 'AI对话、文案生成、文章写作' },
    { id: 'image', name: 'AI绘画', icon: '🎨', desc: 'AI图片生成、设计创作' },
    { id: 'code', name: 'AI编程', icon: '💻', desc: 'AI代码生成、编程辅助' },
    { id: 'video', name: 'AI视频', icon: '🎬', desc: 'AI视频生成、视频编辑' },
    { id: 'office', name: 'AI办公', icon: '📊', desc: 'AI PPT、文档处理、会议记录' },
    { id: 'study', name: 'AI学习', icon: '🎓', desc: 'AI翻译、学习辅导、学术搜索' }
];
