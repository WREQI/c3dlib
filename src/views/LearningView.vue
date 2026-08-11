<template>
  <div class="learning-view">
    <div class="page-title">
      <h1>学习路径</h1>
      <p>从几何建模基础到 C3D Toolkit 高级特性，循序渐进的系统化学习指南</p>
    </div>

    <!-- Progress overview -->
    <div class="progress-overview card">
      <div class="progress-header">
        <h3>学习进度总览</h3>
        <span class="progress-text">{{ totalLessons }} 个学习单元 · {{ learningStages.length }} 个阶段</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
      </div>
      <div class="progress-stages">
        <div
          v-for="(stage, i) in learningStages"
          :key="stage.id"
          class="progress-dot"
          :class="{ done: i < completedStages, current: i === completedStages }"
          @click="scrollToStage(stage.id)"
          :title="stage.title"
        >
          <span>{{ i + 1 }}</span>
        </div>
      </div>
    </div>

    <!-- Learning stages -->
    <div class="stages-container">
      <div
        v-for="(stage, index) in learningStages"
        :key="stage.id"
        :id="stage.id"
        class="stage-card"
        :style="{ '--stage-color': stage.color }"
      >
        <div class="stage-left">
          <div class="stage-number" :style="{ background: stage.color }">{{ index + 1 }}</div>
          <div class="stage-connector" v-if="index < learningStages.length - 1"></div>
        </div>
        <div class="stage-content">
          <div class="stage-header">
            <div class="stage-title-group">
              <h2>{{ stage.title }}</h2>
              <span class="stage-duration">{{ stage.duration }}</span>
            </div>
            <span class="lesson-count">{{ stage.lessons.length }} 课</span>
          </div>
          <p class="stage-desc">{{ stage.description }}</p>

          <!-- Learning units -->
          <div class="lessons-section">
            <h4 class="lessons-label">学习单元</h4>
            <div class="lessons-list">
              <router-link
                v-for="(lesson, li) in stage.lessons"
                :key="lesson.id"
                :to="`/learning/${stage.id}/${lesson.id}`"
                class="lesson-item"
              >
                <div class="lesson-index">{{ String(li + 1).padStart(2, '0') }}</div>
                <div class="lesson-info">
                  <h5 class="lesson-title">{{ lesson.title }}</h5>
                  <div class="lesson-meta">
                    <span class="lesson-meta-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      {{ lesson.duration }}
                    </span>
                    <span class="lesson-meta-item" :class="'diff-' + getDifficultyClass(lesson.difficulty)">
                      {{ lesson.difficulty }}
                    </span>
                    <span class="lesson-meta-item objectives-count">
                      {{ lesson.objectives.length }} 个目标
                    </span>
                  </div>
                </div>
                <div class="lesson-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </router-link>
            </div>
          </div>

          <div class="stage-output">
            <span class="output-label">阶段产出</span>
            <span class="output-text">{{ stage.output }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Learning tips -->
    <div class="tips-section card">
      <h3>学习建议</h3>
      <div class="tips-grid">
        <div class="tip-item">
          <div class="tip-icon">💡</div>
          <h4>按顺序学习</h4>
          <p>学习单元按难度递进排列，建议从阶段1开始，依次完成每个单元的概念和练习。</p>
        </div>
        <div class="tip-item">
          <div class="tip-icon">📐</div>
          <h4>动手实践</h4>
          <p>每个单元都有小练习，先尝试自己解答，再查看答案。配合内核沙箱验证代码。</p>
        </div>
        <div class="tip-item">
          <div class="tip-icon">🔍</div>
          <h4>对照源码</h4>
          <p>学习概念后，查看 src/kernel/ 下对应的 TypeScript 实现，理解代码层面的设计。</p>
        </div>
        <div class="tip-item">
          <div class="tip-icon">📚</div>
          <h4>查阅文档</h4>
          <p>每个学习单元底部有相关资源链接，可深入查看 C3D 官方 API 文档和模块分析。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { learningStages } from '@/data/lessons.js'

const completedStages = ref(0)

const totalLessons = computed(() => {
  return learningStages.reduce((sum, s) => sum + s.lessons.length, 0)
})

const progressPercent = computed(() => (completedStages.value / learningStages.length) * 100)

const scrollToStage = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const getDifficultyClass = (diff) => {
  switch (diff) {
    case '入门': return 'easy'
    case '进阶': return 'medium'
    case '高级': return 'hard'
    default: return 'easy'
  }
}
</script>

<style scoped>
.page-title { margin-bottom: 28px; }
.page-title h1 { font-size: 1.75rem; margin-bottom: 8px; }
.page-title p { color: var(--text-tertiary); font-size: 14px; }

.progress-overview { margin-bottom: 32px; }
.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.progress-header h3 { font-size: 1rem; }
.progress-text {
  font-size: 13px;
  color: var(--text-tertiary);
  font-family: var(--font-mono);
}
.progress-bar {
  height: 6px;
  background: var(--bg-tertiary);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 16px;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-cyan));
  border-radius: 3px;
  transition: width 0.5s ease;
}
.progress-stages {
  display: flex;
  justify-content: space-between;
}
.progress-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-tertiary);
  cursor: pointer;
  transition: all 0.3s;
}
.progress-dot:hover { border-color: var(--accent-primary); }
.progress-dot.done {
  background: var(--accent-green);
  border-color: var(--accent-green);
  color: white;
}
.progress-dot.current {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.stages-container {
  position: relative;
  margin-bottom: 32px;
}
.stage-card {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.stage-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}
.stage-number {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
.stage-connector {
  width: 2px;
  flex: 1;
  background: var(--border-color);
  margin: 8px 0;
  min-height: 20px;
}
.stage-content {
  flex: 1;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
  border-left: 3px solid var(--stage-color);
}
.stage-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.stage-title-group { display: flex; align-items: center; gap: 12px; }
.stage-header h2 { font-size: 1.2rem; }
.stage-duration {
  font-size: 12px;
  padding: 4px 10px;
  background: var(--stage-color);
  color: white;
  border-radius: 12px;
  font-weight: 500;
}
.lesson-count {
  font-size: 12px;
  color: var(--text-tertiary);
  font-family: var(--font-mono);
  padding: 4px 10px;
  background: var(--bg-secondary);
  border-radius: 10px;
}
.stage-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}

.lessons-section { margin-bottom: 16px; }
.lessons-label {
  font-size: 12px;
  color: var(--text-tertiary);
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}
.lessons-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.lesson-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all 0.2s;
}
.lesson-item:hover {
  border-color: var(--stage-color);
  background: var(--bg-tertiary);
  transform: translateX(4px);
}
.lesson-index {
  font-size: 14px;
  font-weight: 700;
  font-family: var(--font-mono);
  color: var(--stage-color);
  width: 28px;
  flex-shrink: 0;
}
.lesson-info { flex: 1; min-width: 0; }
.lesson-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 4px;
}
.lesson-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.lesson-meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--text-tertiary);
}
.lesson-meta-item.diff-easy { color: #10b981; }
.lesson-meta-item.diff-medium { color: #f59e0b; }
.lesson-meta-item.diff-hard { color: #ef4444; }
.objectives-count {
  padding: 1px 6px;
  background: var(--bg-tertiary);
  border-radius: 6px;
}
.lesson-arrow {
  color: var(--text-tertiary);
  flex-shrink: 0;
  transition: color 0.2s;
}
.lesson-item:hover .lesson-arrow { color: var(--stage-color); }

.stage-output {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-md);
}
.output-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--accent-green);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.output-text {
  font-size: 13px;
  color: var(--text-secondary);
}

.tips-section h3 {
  font-size: 1.1rem;
  margin-bottom: 20px;
}
.tips-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.tip-item {
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
}
.tip-icon { font-size: 24px; margin-bottom: 8px; }
.tip-item h4 { font-size: 14px; margin-bottom: 6px; }
.tip-item p {
  font-size: 12px;
  color: var(--text-tertiary);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .tips-grid { grid-template-columns: 1fr; }
  .stage-header { flex-direction: column; align-items: flex-start; gap: 8px; }
}
</style>
