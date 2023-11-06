/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import XjyxSwiper from '@/components/XjyxSwiper.vue'
import XjyxGuess from '@/components/XjyxGuess.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XjyxSwiper: typeof XjyxSwiper
    XjyxGuess: typeof XjyxGuess
  }
}

// 组件实例类型
export type XjyxGuessInstance = InstanceType<typeof XjyxGuess>
export type XjyxSwiperInstance = InstanceType<typeof XjyxSwiper>

