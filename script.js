// ===== DOM 元素引用 =====
const categoryGrid = document.getElementById('categoryGrid');
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const toolCount = document.getElementById('toolCount');
const toolCount2 = document.getElementById('toolCount2');
const backToTop = document.getElementById('backToTop');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const header = document.querySelector('.header');

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderTools(toolsData);
    updateToolCount();
    initSearch();
    initFilters();
    initSubmitForm();
    initBackToTop();
    initMenuToggle();
    initScrollEffect();
    initCategoryClick();
});

// ===== 渲染分类 =====
function renderCategories() {
    categoryGrid.innerHTML = categories.map(cat => {
        const count = toolsData.filter(t => t.category === cat.id).length;
        return `
            <a href="#all-tools" class="category-card" data-category="${cat.id}">
                <span class="category-icon">${cat.icon}</span>
                <div class="category-name">${cat.name}</div>
                <div class="category-count">${count} 款工具</div>
            </a>
        `;
    }).join('');
}

// ===== 渲染工具卡片 =====
function renderTools(tools) {
    if (tools.length === 0) {
        toolsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
                <h3 style="color: var(--text); margin-bottom: 8px;">没有找到相关工具</h3>
                <p style="color: var(--text-muted);">试试其他关键词或分类</p>
            </div>
        `;
        return;
    }

    toolsGrid.innerHTML = tools.map(tool => {
        const tagsHtml = tool.tags.map(tag => {
            const tagMap = {
                'free': '<span class="tool-tag tag-free">免费</span>',
                'hot': '<span class="tool-tag tag-hot">热门</span>',
                'new': '<span class="tool-tag tag-new">新工具</span>'
            };
            return tagMap[tag] || '';
        }).join('');

        return `
            <div class="tool-card">
                <div class="tool-card-header">
                    <div class="tool-icon tool-icon-bg-${tool.iconBg}">${tool.icon}</div>
                    <div class="tool-info">
                        <div class="tool-name">
                            ${tool.name}
                            ${tagsHtml}
                        </div>
                    </div>
                </div>
                <div class="tool-desc">${tool.desc}</div>
                <div class="tool-footer">
                    <span class="tool-category-tag">${tool.categoryName}</span>
                    <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-link">去使用 →</a>
                </div>
            </div>
        `;
    }).join('');
}

// ===== 更新工具数量 =====
function updateToolCount() {
    const count = toolsData.length;
    toolCount.textContent = count;
    toolCount2.textContent = count;
}

// ===== 搜索功能 =====
function initSearch() {
    function performSearch() {
        const keyword = searchInput.value.trim().toLowerCase();
        if (!keyword) {
            renderTools(toolsData);
            return;
        }

        const filtered = toolsData.filter(tool => {
            return tool.name.toLowerCase().includes(keyword) ||
                   tool.desc.toLowerCase().includes(keyword) ||
                   tool.categoryName.includes(keyword);
        });
        renderTools(filtered);
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

// ===== 分类筛选 =====
function initFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;
            if (category === 'all') {
                renderTools(toolsData);
            } else {
                const filtered = toolsData.filter(t => t.category === category);
                renderTools(filtered);
            }
        });
    });
}

// ===== 分类卡片点击 =====
function initCategoryClick() {
    categoryGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.category-card');
        if (!card) return;

        const category = card.dataset.category;
        // 点击对应的筛选按钮
        filterBtns.forEach(btn => {
            if (btn.dataset.category === category) {
                btn.click();
            }
        });
    });
}

// ===== 提交表单 =====
function initSubmitForm() {
    const submitBtn = document.getElementById('submitBtn');
    const toolName = document.getElementById('toolName');
    const toolUrl = document.getElementById('toolUrl');
    const toolDesc = document.getElementById('toolDesc');
    const toolCategory = document.getElementById('toolCategory');

    submitBtn.addEventListener('click', () => {
        // 简单验证
        if (!toolName.value.trim() || !toolUrl.value.trim() || !toolDesc.value.trim() || !toolCategory.value) {
            showToast('请填写所有必填字段！', 'error');
            return;
        }

        // URL 格式验证
        try {
            new URL(toolUrl.value);
        } catch {
            showToast('请输入有效的网址（以 https:// 开头）', 'error');
            return;
        }

        // 模拟提交成功
        showToast(`🎉 感谢推荐 "${toolName.value}"！我会尽快审核添加`, 'success');
        
        // 清空表单
        toolName.value = '';
        toolUrl.value = '';
        toolDesc.value = '';
        toolCategory.value = '';
    });
}

// ===== Toast 通知 =====
function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    // 触发动画
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // 3秒后消失
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== 回到顶部 =====
function initBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== 移动端菜单 =====
function initMenuToggle() {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('show');
    });

    // 点击导航链接后关闭菜单
    mainNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('show');
        });
    });
}

// ===== 滚动效果 =====
function initScrollEffect() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===== 控制台彩蛋 =====
console.log('%c🤖 AI工具导航', 'font-size: 24px; font-weight: bold; color: #6C5CE7;');
console.log('%c发现最好用的免费AI工具', 'font-size: 14px; color: #B0B0C8;');
console.log('%c📢 想提交工具？在页面下方填写表单即可！', 'font-size: 12px; color: #6C6C8A;');
