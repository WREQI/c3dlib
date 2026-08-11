<template>
  <div class="lesson-detail" v-if="lesson">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <router-link to="/learning" class="breadcrumb-link">学习路径</router-link>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ lesson.stage.title }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ lesson.title }}</span>
    </div>

    <!-- 头部 -->
    <div class="lesson-header" :style="{ '--stage-color': lesson.stage.color }">
      <div class="header-main">
        <h1>{{ lesson.title }}</h1>
        <div class="header-meta">
          <span class="meta-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            {{ lesson.duration }}
          </span>
          <span class="meta-tag" :class="'diff-' + difficultyClass">
            {{ lesson.difficulty }}
          </span>
          <span class="meta-tag stage-tag" :style="{ background: lesson.stage.color + '15', color: lesson.stage.color, borderColor: lesson.stage.color + '40' }">
            {{ lesson.stage.title }}
          </span>
        </div>
      </div>
      <div class="lesson-nav">
        <button v-if="prevLesson" class="nav-btn" @click="$router.push(`/learning/${lesson.stage.id}/${prevLesson.id}`)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          上一课
        </button>
        <button v-if="nextLesson" class="nav-btn primary" @click="$router.push(`/learning/${lesson.stage.id}/${nextLesson.id}`)">
          下一课
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="section-card">
      <h2 class="card-title">学习目标</h2>
      <ul class="objectives-list">
        <li v-for="(obj, i) in lesson.objectives" :key="i">
          <span class="obj-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="14" height="14"><path d="M5 13l4 4L19 7"/></svg>
          </span>
          {{ obj }}
        </li>
      </ul>
    </div>

    <!-- 核心概念 -->
    <div class="section-card" v-if="lesson.concepts && lesson.concepts.length">
      <h2 class="card-title">核心概念</h2>
      <div class="concepts-list">
        <div v-for="(concept, i) in lesson.concepts" :key="i" class="concept-item">
          <h3 class="concept-title">
            <span class="concept-num">{{ i + 1 }}</span>
            {{ concept.title }}
          </h3>
          <p class="concept-content">{{ concept.content }}</p>
        </div>
      </div>
    </div>

    <!-- 代码示例 -->
    <div class="section-card" v-if="lesson.codeExample">
      <h2 class="card-title">代码示例</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">{{ lesson.codeExample.language }}</span>
          <span class="code-title">{{ lesson.codeExample.title }}</span>
        </div>
        <pre><code>{{ lesson.codeExample.code }}</code></pre>
      </div>
    </div>

    <!-- 小练习 -->
    <div class="section-card exercise-card" v-if="lesson.exercise">
      <h2 class="card-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="color: #f59e0b;"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        小练习
      </h2>
      <div class="exercise-question">
        <p>{{ lesson.exercise.question }}</p>
      </div>
      <div class="exercise-hint" v-if="lesson.exercise.hint && !showAnswer">
        <button class="hint-btn" @click="showHint = !showHint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z"/></svg>
          {{ showHint ? '隐藏提示' : '查看提示' }}
        </button>
        <p v-if="showHint" class="hint-text">{{ lesson.exercise.hint }}</p>
      </div>
      <div class="exercise-answer">
        <button class="answer-btn" @click="showAnswer = !showAnswer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
          {{ showAnswer ? '隐藏答案' : '查看答案' }}
        </button>
        <div v-if="showAnswer" class="answer-content">
          <p>{{ lesson.exercise.answer }}</p>
        </div>
      </div>
    </div>

    <!-- 相关资源 -->
    <div class="section-card" v-if="lesson.resources && lesson.resources.length">
      <h2 class="card-title">相关资源</h2>
      <div class="resource-links">
        <router-link
          v-for="res in lesson.resources"
          :key="res.name"
          :to="res.url"
          class="resource-link"
        >
          <span class="resource-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
          </span>
          <span class="resource-name">{{ res.name }}</span>
          <span class="resource-type">{{ res.type }}</span>
        </router-link>
      </div>
    </div>

    <!-- 底部导航 -->
    <div class="bottom-nav">
      <router-link v-if="prevLesson" :to="`/learning/${lesson.stage.id}/${prevLesson.id}`" class="bottom-nav-btn prev">
        <span class="nav-label">上一课</span>
        <span class="nav-title">{{ prevLesson.title }}</span>
      </router-link>
      <router-link v-if="nextLesson" :to="`/learning/${lesson.stage.id}/${nextLesson.id}`" class="bottom-nav-btn next">
        <span class="nav-label">下一课</span>
        <span class="nav-title">{{ nextLesson.title }}</span>
      </router-link>
    </div>
  </div>

  <div v-else class="not-found">
    <h2>学习单元未找到</h2>
    <router-link to="/learning" class="btn btn-primary">返回学习路径</router-link>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { findLesson, learningStages } from '@/data/lessons.js'

const route = useRoute()
const showHint = ref(false)
const showAnswer = ref(false)

const lesson = computed(() => findLesson(route.params.stageId, route.params.lessonId))

const difficultyClass = computed(() => {
  switch (lesson.value?.difficulty) {
    case '入门': return 'easy'
    case '进阶': return 'medium'
    case '高级': return 'hard'
    default: return 'easy'
  }
})

// 上一课/下一课
const allLessonsInStage = computed(() => {
  if (!lesson.value) return []
  const stage = learningStages.find(s => s.id === lesson.value.stage.id)
  return stage?.lessons || []
})

const currentIndex = computed(() => {
  if (!lesson.value) return -1
  return allLessonsInStage.value.findIndex(l => l.id === lesson.value.id)
})

const prevLesson = computed(() => {
  if (currentIndex.value <= 0) return null
  return allLessonsInStage.value[currentIndex.value - 1]
})

const nextLesson = computed(() => {
  if (currentIndex.value < 0 || currentIndex.value >= allLessonsInStage.value.length - 1) return null
  return allLessonsInStage.value[currentIndex.value + 1]
})
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 13px;
}
.breadcrumb-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}
.breadcrumb-link:hover {
  color: var(--accent-primary-light);
}
.breadcrumb-sep { color: var(--text-tertiary); }
.breadcrumb-current { color: var(--text-primary); font-weight: 500; }

.lesson-header {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 28px 32px;
  margin-bottom: 24px;
  border-left: 4px solid var(--stage-color);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}
.lesson-header h1 { font-size: 1.5rem; margin-bottom: 12px; }
.header-meta { display: flex; gap: 8px; flex-wrap: wrap; }
.meta-tag {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}
.meta-tag.diff-easy { background: rgba(16,185,129,0.1); color: #10b981; border-color: rgba(16,185,129,0.3); }
.meta-tag.diff-medium { background: rgba(245,158,11,0.1); color: #f59e0b; border-color: rgba(245,158,11,0.3); }
.meta-tag.diff-hard { background: rgba(239,68,68,0.1); color: #ef4444; border-color: rgba(239,68,68,0.3); }

.lesson-nav { display: flex; gap: 8px; flex-shrink: 0; }
.nav-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}
.nav-btn:hover { border-color: var(--stage-color); color: var(--text-primary); }
.nav-btn.primary { background: var(--stage-color); border-color: var(--stage-color); color: white; }
.nav-btn.primary:hover { opacity: 0.9; }

.section-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
  margin-bottom: 20px;
}
.card-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.card-title::before {
  content: '';
  width: 3px;
  height: 18px;
  background: var(--stage-color, var(--accent-primary));
  border-radius: 2px;
}

.objectives-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.objectives-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}
.obj-check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(16,185,129,0.1);
  color: var(--accent-green);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

.concepts-list { display: flex; flex-direction: column; gap: 20px; }
.concept-item {
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
}
.concept-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-primary);
}
.concept-num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--stage-color, var(--accent-primary));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
}
.concept-content {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
}

.code-block {
  background: #0d1117;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-color);
}
.code-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid var(--border-color);
}
.code-lang {
  font-size: 11px;
  padding: 2px 8px;
  background: rgba(59,130,246,0.2);
  color: #60a5fa;
  border-radius: 4px;
  font-family: var(--font-mono);
}
.code-title { font-size: 12px; color: var(--text-tertiary); }
.code-block pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
}
.code-block code {
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.7;
  color: #e6edf3;
}

.exercise-card { border-color: rgba(245,158,11,0.3); background: rgba(245,158,11,0.03); }
.exercise-question {
  padding: 14px 16px;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  margin-bottom: 14px;
}
.exercise-question p { font-size: 14px; color: var(--text-primary); line-height: 1.7; margin: 0; }
.hint-btn, .answer-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 10px;
}
.hint-btn:hover { border-color: #f59e0b; color: #f59e0b; }
.answer-btn { background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.3); color: var(--accent-green); }
.answer-btn:hover { background: rgba(16,185,129,0.2); }
.hint-text {
  font-size: 13px;
  color: var(--text-tertiary);
  padding: 10px 14px;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  margin: 0 0 14px;
  line-height: 1.6;
}
.answer-content {
  padding: 14px 16px;
  background: rgba(16,185,129,0.08);
  border: 1px solid rgba(16,185,129,0.2);
  border-radius: var(--radius-md);
}
.answer-content p { font-size: 13px; color: var(--text-secondary); line-height: 1.7; margin: 0; }

.resource-links { display: flex; flex-wrap: wrap; gap: 8px; }
.resource-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 13px;
  transition: all 0.2s;
}
.resource-link:hover { border-color: var(--stage-color, var(--accent-primary)); color: var(--text-primary); }
.resource-icon { color: var(--stage-color, var(--accent-primary)); display: flex; }
.resource-type {
  font-size: 11px;
  padding: 2px 6px;
  background: var(--bg-tertiary);
  border-radius: 8px;
  color: var(--text-tertiary);
}

.bottom-nav {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}
.bottom-nav-btn {
  flex: 1;
  padding: 16px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.bottom-nav-btn:hover { border-color: var(--accent-primary); }
.bottom-nav-btn.prev { text-align: left; }
.bottom-nav-btn.next { text-align: right; align-items: flex-end; }
.nav-label { font-size: 11px; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; }
.nav-title { font-size: 14px; font-weight: 500; color: var(--text-primary); }

.not-found { text-align: center; padding: 80px 20px; }
.not-found h2 { margin-bottom: 20px; color: var(--text-tertiary); }

@media (max-width: 768px) {
  .lesson-header { flex-direction: column; }
  .lesson-nav { width: 100%; }
  .bottom-nav { flex-direction: column; }
}
</style>
