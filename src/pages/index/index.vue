<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'

import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

import { useGuessList } from '@/composables'

// 首页轮播图获取
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 首页推荐分类获取
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 热门推荐
const HotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  HotList.value = res.result
}

const isLoading = ref(false)
// 页面加载获取
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})

// 猜你喜欢
// 猜你喜欢组合式函数
const { guessRef, onScrolltolower } = useGuessList() 

// 刷新加载标识
const isTriggered = ref(false)
// 下拉刷新
const onRefresherrefresh = async () => {
  // 刷新加载开始
  isTriggered.value = true
  // 重置猜你喜欢数据
  guessRef.value?.resetData()
  // 发送请求获取首页各版块数据
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  // 结束加载
  isTriggered.value = false
}
</script>

<template>
  <!-- 导航栏 -->
  <CustomNavbar />
  <!-- 滚动容器 -->
  <scroll-view
    scroll-y
    refresher-enabled
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading"/>
    <template v-else>
      <!-- 轮播图 -->
      <XjyxSwiper :list="bannerList" />
      <!-- 分类推荐 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="HotList" />
      <!-- 猜你喜欢 -->
      <XjyxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;

  .scroll-view {
    flex: 1;
  }
}
</style>
